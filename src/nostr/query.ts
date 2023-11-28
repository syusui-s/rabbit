import { QueryClient, QueryKey } from '@tanstack/solid-query';
import { uniqBy } from 'lodash';
import { Event as NostrEvent } from 'nostr-tools';

import { compareEvents, pickLatestEvent, sortEvents } from '@/nostr/event/comparator';
import { BatchedEventsTask, registerTask } from '@/nostr/useBatchedEvents';
import timeout from '@/utils/timeout';

export const latestEventQuery =
  <K extends QueryKey>({
    taskProvider,
    queryClient,
  }: {
    taskProvider: (arg: K) => BatchedEventsTask | undefined | null;
    queryClient: QueryClient;
  }) =>
  ({ queryKey, signal }: { queryKey: K; signal?: AbortSignal }): Promise<NostrEvent | null> => {
    const prev = queryClient.getQueryData(queryKey, { stale: true }) as NostrEvent;
    const task = taskProvider(queryKey);
    if (task == null) return Promise.resolve(null);
    const promise = task.firstEventPromise().catch(() => {
      throw new Error(`event not found: ${JSON.stringify(queryKey)}`);
    });
    task.onUpdate((events) => {
      const latest = pickLatestEvent(events);
      if (prev == null || (latest != null && compareEvents(latest, prev) >= 0)) {
        queryClient.setQueryData(queryKey, latest);
      } else {
        console.log('old event', prev, latest);
      }
    });
    registerTask({ task, signal });
    return timeout(15000, `${JSON.stringify(queryKey)}`)(promise);
  };

export const eventsQuery =
  <K extends QueryKey>({
    taskProvider,
    queryClient,
  }: {
    taskProvider: (arg: K) => BatchedEventsTask | undefined | null;
    queryClient: QueryClient;
  }) =>
  ({ queryKey, signal }: { queryKey: K; signal?: AbortSignal }): Promise<NostrEvent[]> => {
    const prev = queryClient.getQueryData(queryKey, { stale: true }) as NostrEvent[];
    const task = taskProvider(queryKey);
    if (task == null) return Promise.resolve([]);
    const promise = task.toUpdatePromise().catch(() => []);
    task.onUpdate((events) => {
      // TODO consider kind:5 deletion
      queryClient.setQueryData(queryKey, () => {
        if (prev == null) return events;
        const deduped = uniqBy([...prev, ...events], (e) => e.id);
        return sortEvents(deduped);
      });
    });
    registerTask({ task, signal });
    return timeout(15000, `${JSON.stringify(queryKey)}`)(promise);
  };
