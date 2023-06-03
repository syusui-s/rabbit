import { createMemo, observable } from 'solid-js';

import { createQuery, useQueryClient, type CreateQueryResult } from '@tanstack/solid-query';
import { Event as NostrEvent } from 'nostr-tools';

import { exec } from '@/nostr/useBatchedEvents';
import timeout from '@/utils/timeout';

export type UseRepostsProps = {
  eventId: string;
};

export type UseReposts = {
  reposts: () => NostrEvent[];
  isRepostedBy: (pubkey: string) => boolean;
  invalidateReposts: () => Promise<void>;
  query: CreateQueryResult<NostrEvent[]>;
};

export const useReposts = (propsProvider: () => UseRepostsProps): UseReposts => {
  const queryClient = useQueryClient();
  const props = createMemo(propsProvider);
  const genQueryKey = createMemo(() => ['useReposts', props()] as const);

  const query = createQuery(
    genQueryKey,
    ({ queryKey, signal }) => {
      const [, currentProps] = queryKey;
      if (currentProps == null) return [];
      const { eventId: mentionedEventId } = currentProps;
      const promise = exec({ type: 'Reposts', mentionedEventId }, signal).then((batchedEvents) => {
        const events = () => batchedEvents().events;
        observable(batchedEvents).subscribe(() => {
          queryClient.setQueryData(queryKey, events());
        });
        return events();
      });
      return timeout(15000, `useReposts: ${mentionedEventId}`)(promise);
    },
    {
      staleTime: 1 * 60 * 1000, // 1 min
      cacheTime: 4 * 60 * 60 * 1000, // 4 hour
      refetchInterval: 1 * 60 * 1000, // 1 min
    },
  );

  const reposts = () => query.data ?? [];

  const isRepostedBy = (pubkey: string): boolean =>
    reposts().findIndex((event) => event.pubkey === pubkey) !== -1;

  const invalidateReposts = (): Promise<void> => queryClient.invalidateQueries(genQueryKey());

  return { reposts, isRepostedBy, invalidateReposts, query };
};

export default useReposts;
