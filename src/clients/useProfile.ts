import { createMemo, type Accessor } from 'solid-js';
import { type Event as NostrEvent } from 'nostr-tools/event';
import { createQuery, type CreateQueryResult } from '@tanstack/solid-query';

import useConfig from '@/clients/useConfig';
import useBatch, { type Task } from '@/clients/useBatch';
import useSubscription from '@/clients/useSubscription';

// TODO zodにする
// deleted等の特殊なもの
type StandardProfile = {
  name?: string;
  about?: string;
  picture?: string;
  nip05?: string; // NIP-05
  lud06?: string; // NIP-57
  lud16?: string; // NIP-57
};

type NonStandardProfile = {
  display_name?: string;
  website?: string;
};

type Profile = StandardProfile & NonStandardProfile;

type UseProfileProps = {
  relayUrls: string[];
  pubkey: string;
};

type UseProfile = {
  profile: Accessor<Profile | undefined>;
  query: CreateQueryResult<NostrEvent>;
};

const { exec } = useBatch<UseProfileProps, NostrEvent>(() => {
  return {
    executor: (tasks) => {
      // TODO relayUrlsを考慮する
      const [config] = useConfig();
      const pubkeyTaskMap = new Map<string, Task<UseProfileProps, NostrEvent>>(
        tasks.map((task) => [task.args.pubkey, task]),
      );
      const pubkeys = Array.from(pubkeyTaskMap.keys());

      useSubscription(() => ({
        relayUrls: config().relayUrls,
        filters: [
          {
            kinds: [0],
            authors: pubkeys,
          },
        ],
        continuous: false,
        onEvent: (event: NostrEvent) => {
          if (event.id == null) return;
          const task = pubkeyTaskMap.get(event.pubkey);
          // possibly, the new event received
          if (task == null) return;
          task.resolve(event);
        },
      }));
    },
  };
});

const useProfile = (propsProvider: () => UseProfileProps): UseProfile => {
  const props = createMemo(propsProvider);

  const query = createQuery(
    () => ['useProfile', props()] as const,
    ({ queryKey, signal }) => {
      const [, currentProps] = queryKey;
      return exec(currentProps, signal);
    },
    {
      // 5 minutes
      staleTime: 5 * 60 * 1000,
      cacheTime: 15 * 60 * 1000,
    },
  );

  const profile = () => {
    const maybeProfile = query.data;
    if (maybeProfile == null) return undefined;

    // TODO 大きすぎたりしないかどうか、JSONかどうかのチェック
    return JSON.parse(maybeProfile.content) as Profile;
  };

  return { profile, query };
};

export default useProfile;
