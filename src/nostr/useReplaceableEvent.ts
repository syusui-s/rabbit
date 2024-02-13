import { createMemo } from 'solid-js';

import { createQuery, useQueryClient, type CreateQueryResult } from '@tanstack/solid-query';
import { type Event as NostrEvent } from 'nostr-tools/pure';

import { pickLatestEvent } from '@/nostr/event/comparator';
import { registerTask, BatchedEventsTask, ReplaceableEventTask } from '@/nostr/useBatchedEvents';
import timeout from '@/utils/timeout';

export type UseReplacableEventProps = {
  kind: number;
  author: string;
};

export type UseReplaceableEvent = {
  event: () => NostrEvent | null;
  query: CreateQueryResult<NostrEvent | null>;
};

const useReplaceableEvent = (
  propsProvider: () => UseReplacableEventProps | null,
): UseReplaceableEvent => {
  const queryClient = useQueryClient();
  const props = createMemo(propsProvider);

  const query = createQuery(() => ({
    queryKey: ['useReplaceableEvent', props()] as const,
    queryFn: ({ queryKey, signal }) => {
      const [, currentProps] = queryKey;
      if (currentProps == null) return null;
      const { kind, author } = currentProps;
      const task = new BatchedEventsTask<ReplaceableEventTask>({
        type: 'ReplaceableEvent',
        kind,
        author,
      });
      const promise = task.firstEventPromise().catch(() => {
        throw new Error(`event not found: ${kind}:${author}`);
      });
      task.onUpdate((events) => {
        const latest = pickLatestEvent(events);
        queryClient.setQueryData(queryKey, latest);
      });
      registerTask({ task, signal });
      return timeout(15000, `useReplaceableEvent: ${kind}:${author}`)(promise);
    },
    staleTime: 5 * 60 * 1000, // 5 min
    gcTime: 4 * 60 * 60 * 1000, // 4 hour
  }));

  const event = () => query.data ?? null;

  return { event, query };
};

export default useReplaceableEvent;
