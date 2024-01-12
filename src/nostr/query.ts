import { QueryClient, QueryKey } from '@tanstack/solid-query';
import uniqBy from 'lodash/uniqBy';
import { Event as NostrEvent } from 'nostr-tools/pure';

import { compareEvents, pickLatestEvent, sortEvents } from '@/nostr/event/comparator';
import { BatchedEventsTask, registerTask } from '@/nostr/useBatchedEvents';
import timeout from '@/utils/timeout';

const chooseLatestEvent = (
  prev: NostrEvent | undefined,
  latest: NostrEvent | undefined,
): NostrEvent | undefined => {
  if (latest != null && (prev == null || compareEvents(latest, prev) >= 0)) {
    return latest;
  }
  return prev;
};

export const latestEventQuery =
  <K extends QueryKey>({
    taskProvider,
    queryClient,
  }: {
    taskProvider: (arg: K) => BatchedEventsTask | undefined | null;
    queryClient: QueryClient;
  }) =>
  ({ queryKey, signal }: { queryKey: K; signal?: AbortSignal }): Promise<NostrEvent | null> => {
    const task = taskProvider(queryKey);
    if (task == null) return Promise.resolve(null);
    const promise = task
      .firstEventPromise()
      .then((latest) => {
        const prev = queryClient.getQueryData(queryKey) as NostrEvent;
        return chooseLatestEvent(prev, latest) ?? null;
      })
      .catch(() => {
        throw new Error(`event not found: ${JSON.stringify(queryKey)}`);
      });

    task.onUpdate((events) => {
      const latest = pickLatestEvent(events);
      queryClient.setQueriesData<NostrEvent>({ queryKey }, (prev) =>
        chooseLatestEvent(prev, latest),
      );
    });
    registerTask({ task, signal });
    return timeout(15000, `${JSON.stringify(queryKey)}`)(promise);
  };

const mergeEvents = (prev: NostrEvent[] | undefined, events: NostrEvent[]) => {
  if (prev == null) return events;
  const deduped = uniqBy([...prev, ...events], (e) => e.id);
  return sortEvents(deduped);
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
    const task = taskProvider(queryKey);
    if (task == null) return Promise.resolve([]);
    const promise = task
      .toUpdatePromise()
      .then((events) => {
        const prev: NostrEvent[] = queryClient.getQueryData(queryKey) ?? [];
        return mergeEvents(prev, events);
      })
      .catch(() => []);
    task.onUpdate((events) => {
      // TODO consider kind:5 deletion
      queryClient.setQueriesData<NostrEvent[]>({ queryKey }, (prev) => mergeEvents(prev, events));
    });
    registerTask({ task, signal });
    return timeout(15000, `${JSON.stringify(queryKey)}`)(promise);
  };
