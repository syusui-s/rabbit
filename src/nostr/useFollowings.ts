import { createMemo } from 'solid-js';

import { createQuery, useQueryClient, type CreateQueryResult } from '@tanstack/solid-query';
import { Event as NostrEvent } from 'nostr-tools';

import { genericEvent } from '@/nostr/event';
import { latestEventQuery } from '@/nostr/query';
import { BatchedEventsTask, registerTask } from '@/nostr/useBatchedEvents';

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

const buildMethods = (dataProvider: () => NostrEvent | undefined | null) => {
  const followings = () => {
    const data = dataProvider();
    if (data == null) return [];

    const result: Following[] = [];

    // TODO zodにする
    const event = genericEvent(data);
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

  return { followings, followingPubkeys, data: dataProvider };
};

export const fetchLatestFollowings = async (
  { pubkey }: UseFollowingsProps,
  signal?: AbortSignal,
) => {
  const task = new BatchedEventsTask({ type: 'Followings', pubkey });
  registerTask({ task, signal });

  const latestFollowings = await task.latestEventPromise();
  return buildMethods(() => latestFollowings);
};

const useFollowings = (propsProvider: () => UseFollowingsProps | null): UseFollowings => {
  const queryClient = useQueryClient();
  const props = createMemo(propsProvider);
  const genQueryKey = () => ['useFollowings', props()] as const;

  const query = createQuery(
    genQueryKey,
    latestEventQuery({
      taskProvider: ([, currentProps]) => {
        if (currentProps == null) return null;
        const { pubkey } = currentProps;
        return new BatchedEventsTask({ type: 'Followings', pubkey });
      },
      queryClient,
    }),
    {
      staleTime: 5 * 60 * 1000, // 5 min
      cacheTime: 24 * 60 * 60 * 1000, // 24 hour
      refetchOnMount: true,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchInterval: 0,
    },
  );

  const invalidateFollowings = (): Promise<void> => queryClient.invalidateQueries(genQueryKey());

  return { ...buildMethods(() => query.data), invalidateFollowings, query };
};

export default useFollowings;
