import { createMemo } from 'solid-js';

import { createQuery, useQueryClient, type CreateQueryResult } from '@tanstack/solid-query';
import { Event as NostrEvent } from 'nostr-tools';

import useConfig from '@/core/useConfig';
import { eventsQuery } from '@/nostr/query';
import { BatchedEventsTask } from '@/nostr/useBatchedEvents';

export type UseRepostsProps = {
  eventId: string;
};

export type UseReposts = {
  reposts: () => NostrEvent[];
  isRepostedBy: (pubkey: string) => boolean;
  invalidateReposts: () => Promise<void>;
  query: CreateQueryResult<NostrEvent[]>;
};

const useReposts = (propsProvider: () => UseRepostsProps): UseReposts => {
  const { shouldMuteEvent } = useConfig();
  const queryClient = useQueryClient();
  const props = createMemo(propsProvider);
  const genQueryKey = createMemo(() => ['useReposts', props()] as const);

  const query = createQuery(
    genQueryKey,
    eventsQuery({
      taskProvider: ([, currentProps]) => {
        if (currentProps == null) return null;
        const { eventId: mentionedEventId } = currentProps;
        return new BatchedEventsTask({ type: 'Reposts', mentionedEventId });
      },
      queryClient,
    }),
    {
      staleTime: 1 * 60 * 1000, // 1 min
      cacheTime: 4 * 60 * 60 * 1000, // 4 hour
      refetchInterval: 1 * 60 * 1000, // 1 min
    },
  );

  const reposts = () => {
    const data = query.data ?? [];
    return data.filter((ev) => !shouldMuteEvent(ev));
  };

  const isRepostedBy = (pubkey: string): boolean =>
    reposts().findIndex((event) => event.pubkey === pubkey) !== -1;

  const invalidateReposts = (): Promise<void> => queryClient.invalidateQueries(genQueryKey());

  return { reposts, isRepostedBy, invalidateReposts, query };
};

export default useReposts;
