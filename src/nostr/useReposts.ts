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
  query: CreateQueryResult<NostrEvent[]>;
};

export const queryKeyUseReposts = (props: UseRepostsProps) => ['useReposts', props] as const;

const useReposts = (propsProvider: () => UseRepostsProps): UseReposts => {
  const { shouldMuteEvent } = useConfig();
  const queryClient = useQueryClient();
  const props = createMemo(propsProvider);
  const genQueryKey = createMemo(() => queryKeyUseReposts(props()));

  const query = createQuery(() => ({
    queryKey: genQueryKey(),
    queryFn: eventsQuery<ReturnType<typeof genQueryKey>>({
      taskProvider: ([, currentProps]) => {
        if (currentProps == null) return null;
        const { eventId: mentionedEventId } = currentProps;
        return new BatchedEventsTask({ type: 'Reposts', mentionedEventId });
      },
      queryClient,
    }),
    staleTime: 1 * 60 * 1000, // 1 min
    cacheTime: 4 * 60 * 60 * 1000, // 4 hour
    refetchInterval: 1 * 60 * 1000, // 1 min
  }));

  const reposts = () => {
    const data = query.data ?? [];
    return data.filter((ev) => !shouldMuteEvent(ev));
  };

  const isRepostedBy = (pubkey: string): boolean =>
    reposts().findIndex((event) => event.pubkey === pubkey) !== -1;

  return { reposts, isRepostedBy, query };
};

export default useReposts;
