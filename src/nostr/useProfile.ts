import { createMemo, type Accessor } from 'solid-js';
import { type Event as NostrEvent, type Filter } from 'nostr-tools';
import { createQuery, type CreateQueryResult } from '@tanstack/solid-query';

import useBatchedEvent from '@/nostr/useBatchedEvent';
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
  query: CreateQueryResult<Accessor<NostrEvent> | undefined>;
};

const { exec } = useBatchedEvent<UseProfileProps>(() => ({
  generateKey: ({ pubkey }: UseProfileProps): string => pubkey,
  mergeFilters: (args: UseProfileProps[]): Filter[] => {
    const pubkeys = args.map((arg) => arg.pubkey);
    return [{ kinds: [0], authors: pubkeys }];
  },
  extractKey: (event: NostrEvent): string => event.pubkey,
}));

const useProfile = (propsProvider: () => UseProfileProps | null): UseProfile => {
  const props = createMemo(propsProvider);

  const query = createQuery(
    () => ['useProfile', props()] as const,
    ({ queryKey, signal }) => {
      const [, currentProps] = queryKey;
      if (currentProps == null) return null;
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
    const content = query.data?.()?.content;
    if (content == null) return undefined;
    // TODO 大きすぎたりしないかどうか、JSONかどうかのチェック
    try {
      return JSON.parse(content) as Profile;
    } catch (e) {
      console.error(e, content);
      return undefined;
    }
  };

  return { profile, query };
};

export default useProfile;
