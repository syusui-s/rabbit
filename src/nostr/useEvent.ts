import { createMemo } from 'solid-js';

import { createQuery, type CreateQueryResult } from '@tanstack/solid-query';
import { type Event as NostrEvent } from 'nostr-tools/pure';

import { registerTask, BatchedEventsTask, type EventTask } from '@/nostr/useBatchedEvents';
import timeout from '@/utils/timeout';

export type UseEventProps = {
  eventId: string;
};

export type UseEvent = {
  event: () => NostrEvent | null;
  query: CreateQueryResult<NostrEvent | null>;
};

const useEvent = (propsProvider: () => UseEventProps | null): UseEvent => {
  const props = createMemo(propsProvider);

  const query = createQuery(() => ({
    queryKey: ['useEvent', props()] as const,
    queryFn: ({ queryKey, signal }) => {
      const [, currentProps] = queryKey;
      if (currentProps == null) return null;
      const { eventId } = currentProps;
      const task = new BatchedEventsTask<EventTask>({ type: 'Event', eventId });
      const promise = task.firstEventPromise().catch(() => {
        throw new Error(`event not found: ${eventId}`);
      });
      console.log('useEvent', props());
      registerTask({ task, signal });
      return timeout(15000, `useEvent: ${eventId}`)(promise);
    },
    // Text notes never change, so they can be stored for a long time.
    // However, events tend to be unreferenced as time passes.
    staleTime: 4 * 60 * 60 * 1000, // 4 hour
    gcTime: 4 * 60 * 60 * 1000, // 4 hour
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  }));

  const event = () => query.data ?? null;

  return { event, query };
};

export default useEvent;
