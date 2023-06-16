import { createMemo, observable } from 'solid-js';

import { createQuery, useQueryClient, type CreateQueryResult } from '@tanstack/solid-query';
import { Event as NostrEvent } from 'nostr-tools';

import { genericEvent } from '@/nostr/event';
import { exec, pickLatestEvent } from '@/nostr/useBatchedEvents';
import timeout from '@/utils/timeout';

type Following = {
  pubkey: string;
  mainRelayUrl?: string;
  petname?: string;
};

type UseFollowingsProps = {
  pubkey: string;
};

export type UseFollowings = {
  followings: () => Following[];
  followingPubkeys: () => string[];
  invalidateFollowings: () => Promise<void>;
  query: CreateQueryResult<NostrEvent | null>;
};

const useFollowings = (propsProvider: () => UseFollowingsProps | null): UseFollowings => {
  const queryClient = useQueryClient();
  const props = createMemo(propsProvider);
  const genQueryKey = () => ['useFollowings', props()] as const;

  const query = createQuery(
    genQueryKey,
    ({ queryKey, signal }) => {
      console.debug('useFollowings');
      const [, currentProps] = queryKey;
      if (currentProps == null) return Promise.resolve(null);
      const { pubkey } = currentProps;
      const promise = exec({ type: 'Followings', pubkey }, signal).then((batchedEvents) => {
        const latestEvent = () => {
          const latest = pickLatestEvent(batchedEvents().events);
          if (latest == null) throw new Error(`followings not found: ${pubkey}`);
          return latest;
        };
        observable(batchedEvents).subscribe(() => {
          try {
            queryClient.setQueryData(queryKey, latestEvent());
          } catch (err) {
            console.error('error occurred while updating followings cache: ', err);
          }
        });
        return latestEvent();
      });
      return timeout(15000, `useFollowings: ${pubkey}`)(promise);
    },
    {
      staleTime: 5 * 60 * 1000, // 5 min
      cacheTime: 24 * 60 * 60 * 1000, // 24 hour
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchInterval: 0,
    },
  );

  const followings = () => {
    if (query.data == null) return [];

    const result: Following[] = [];

    // TODO zodにする
    const event = genericEvent(query.data);
    event.pTags().forEach((tag) => {
      const [, followingPubkey, mainRelayUrl, petname] = tag;

      const following: Following = { pubkey: followingPubkey, petname };
      if (mainRelayUrl != null && mainRelayUrl.length > 0) {
        following.mainRelayUrl = mainRelayUrl;
      }

      result.push(following);
    });

    return result;
  };

  const followingPubkeys = (): string[] => followings().map((follow) => follow.pubkey);

  const invalidateFollowings = (): Promise<void> => queryClient.invalidateQueries(genQueryKey());

  return { followings, followingPubkeys, invalidateFollowings, query };
};

export default useFollowings;
