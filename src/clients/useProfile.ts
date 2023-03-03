import { createMemo, type Accessor } from 'solid-js';
import { type Event as NostrEvent } from 'nostr-tools/event';
import { type Filter } from 'nostr-tools/filter';
import { createQuery, type CreateQueryResult } from '@tanstack/solid-query';

import useBatchedEvent from '@/clients/useBatchedEvent';
import timeout from '@/utils/timeout';

// TODO zodにする
// deleted等の特殊なもの
export type StandardProfile = {
  name?: string;
  about?: string;
  picture?: string;
  nip05?: string; // NIP-05
  lud06?: string; // NIP-57
  lud16?: string; // NIP-57
};

export type NonStandardProfile = {
  display_name?: string;
  website?: string;
};

export type Profile = StandardProfile & NonStandardProfile;

export type UseProfileProps = {
  relayUrls: string[];
  pubkey: string;
};

type UseProfile = {
  profile: Accessor<Profile | undefined>;
  query: CreateQueryResult<NostrEvent>;
};

const { exec } = useBatchedEvent<UseProfileProps>(() => ({
  generateKey: ({ pubkey }: UseProfileProps): string => pubkey,
  mergeFilters: (args: UseProfileProps[]): Filter[] => {
    const pubkeys = args.map((arg) => arg.pubkey);
    return [{ kinds: [0], authors: pubkeys }];
  },
  extractKey: (event: NostrEvent): string => event.pubkey,
}));

const useProfile = (propsProvider: () => UseProfileProps): UseProfile => {
  const props = createMemo(propsProvider);
  const query = createQuery(
    () => ['useProfile', props()] as const,
    ({ queryKey, signal }) => {
      const [, currentProps] = queryKey;
      // TODO timeoutと同時にsignalでキャンセルするようにしたい
      return timeout(15000, `useProfile: ${currentProps.pubkey}`)(exec(currentProps, signal));
    },
    {
      // 5 minutes
      staleTime: 5 * 60 * 1000,
      cacheTime: 15 * 60 * 1000,
    },
  );

  const profile = () => {
    if (query.data == null) return undefined;
    // TODO 大きすぎたりしないかどうか、JSONかどうかのチェック
    try {
      return JSON.parse(query.data.content) as Profile;
    } catch (e) {
      console.error(e);
      return undefined;
    }
  };

  return { profile, query };
};

export default useProfile;
