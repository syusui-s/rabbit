import { QueryClient, QueryKey } from '@tanstack/solid-query';
import { Event as NostrEvent } from 'nostr-tools';

import { BatchedEventsTask, pickLatestEvent, registerTask } from '@/nostr/useBatchedEvents';
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
    const task = taskProvider(queryKey);
    if (task == null) return Promise.resolve(null);
    const promise = task.firstEventPromise().catch(() => {
      throw new Error(`event not found: ${JSON.stringify(queryKey)}`);
    });
    task.onUpdate((events) => {
      const latest = pickLatestEvent(events);
      queryClient.setQueryData(queryKey, latest);
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
    const task = taskProvider(queryKey);
    if (task == null) return Promise.resolve([]);
    const promise = task.toUpdatePromise().catch(() => []);
    task.onUpdate((events) => {
      queryClient.setQueryData(queryKey, events);
    });
    registerTask({ task, signal });
    return timeout(15000, `${JSON.stringify(queryKey)}`)(promise);
  };
