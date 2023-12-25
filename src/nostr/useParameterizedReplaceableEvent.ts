import { createMemo } from 'solid-js';

import { createQuery, useQueryClient, type CreateQueryResult } from '@tanstack/solid-query';
import { Event as NostrEvent } from 'nostr-tools/pure';

import { pickLatestEvent } from '@/nostr/event/comparator';
import {
  registerTask,
  BatchedEventsTask,
  ParameterizedReplaceableEventTask,
} from '@/nostr/useBatchedEvents';
import timeout from '@/utils/timeout';

// Parameterized Replaceable Event
export type UseParameterizedReplaceableEventProps = {
  kind: number;
  author: string;
  identifier: string;
};

export type UseParameterizedReplaceableEvent = {
  event: () => NostrEvent | null;
  query: CreateQueryResult<NostrEvent | null>;
};

const useParameterizedReplaceableEvent = (
  propsProvider: () => UseParameterizedReplaceableEventProps | null,
): UseParameterizedReplaceableEvent => {
  const queryClient = useQueryClient();
  const props = createMemo(propsProvider);
  const genQueryKey = () => ['useFollowings', props()] as const;

  const query = createQuery(() => ({
    queryKey: genQueryKey(),
    queryFn: ({ queryKey, signal }) => {
      console.debug('useFollowings');
      const [, currentProps] = queryKey;
      if (currentProps == null) return Promise.resolve(null);

      const { kind, author, identifier } = currentProps;
      const task = new BatchedEventsTask<ParameterizedReplaceableEventTask>({
        type: 'ParameterizedReplaceableEvent',
        kind,
        author,
        identifier,
      });
      const promise = task.firstEventPromise().catch(() => {
        throw new Error(
          `parameterized replaceable event not found: ${kind}:${author}:${identifier}`,
        );
      });
      task.onUpdate((events) => {
        const latest = pickLatestEvent(events);
        queryClient.setQueryData(queryKey, latest);
      });
      registerTask({ task, signal });
      return timeout(
        15000,
        `useParameterizedReplaceableEvent: ${kind}:${author}:${identifier}`,
      )(promise);
    },
    staleTime: 5 * 60 * 1000, // 5 min
    gcTime: 4 * 60 * 60 * 1000, // 4 hour
  }));

  const event = () => query.data ?? null;

  return { event, query };
};

export default useParameterizedReplaceableEvent;
