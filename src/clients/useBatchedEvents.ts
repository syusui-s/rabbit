import { createSignal, createMemo, type Signal, type Accessor } from 'solid-js';
import { type Event as NostrEvent } from 'nostr-tools/event';
import { type Filter } from 'nostr-tools/filter';

import useConfig from '@/clients/useConfig';
import useBatch, { type Task } from '@/clients/useBatch';
import useSubscription from '@/clients/useSubscription';

export type UseBatchedEventsProps<TaskArgs> = {
  interval?: number;
  generateKey: (args: TaskArgs) => string | number;
  mergeFilters: (args: TaskArgs[]) => Filter[];
  extractKey: (event: NostrEvent) => string | number | undefined;
};

export type BatchedEvents = {
  events: NostrEvent[];
  completed: boolean;
};

const emptyBatchedEvents = () => ({ completed: true, events: [] });

const completeBatchedEvents = (current: BatchedEvents): BatchedEvents => ({
  ...current,
  completed: true,
});

const addEvent =
  (event: NostrEvent) =>
  (current: BatchedEvents): BatchedEvents => ({
    ...current,
    events: [...current.events, event],
  });

const useBatchedEvents = <TaskArgs>(propsProvider: () => UseBatchedEventsProps<TaskArgs>) => {
  const props = createMemo(propsProvider);

  return useBatch<TaskArgs, Accessor<BatchedEvents>>(() => ({
    interval: props().interval,
    executor: (tasks) => {
      const { generateKey, mergeFilters, extractKey } = props();
      // TODO relayUrlsを考慮する
      const [config] = useConfig();

      const keyTaskMap = new Map<string | number, Task<TaskArgs, Accessor<BatchedEvents>>>(
        tasks.map((task) => [generateKey(task.args), task]),
      );
      const filters = mergeFilters(tasks.map((task) => task.args));
      const keyEventSignalsMap = new Map<string | number, Signal<BatchedEvents>>();

      const getSignalForKey = (key: string | number): Signal<BatchedEvents> => {
        const eventsSignal =
          keyEventSignalsMap.get(key) ??
          createSignal<BatchedEvents>({
            events: [],
            completed: false,
          });
        keyEventSignalsMap.set(key, eventsSignal);
        return eventsSignal;
      };
      const didReceivedEventsForKey = (key: string | number): boolean =>
        keyEventSignalsMap.has(key);

      useSubscription(() => ({
        relayUrls: config().relayUrls,
        filters,
        continuous: false,
        onEvent: (event: NostrEvent) => {
          const key = extractKey(event);
          if (key == null) return;
          const task = keyTaskMap.get(key);
          if (task == null) return;

          const [events, setEvents] = getSignalForKey(key);

          setEvents(addEvent(event));

          task.resolve(events);
        },
        onEOSE: () => {
          tasks.forEach((task) => {
            const key = generateKey(task.args);
            if (didReceivedEventsForKey(key)) {
              const [, setEvents] = getSignalForKey(key);
              setEvents(completeBatchedEvents);
            } else {
              task.resolve(emptyBatchedEvents);
            }
          });
        },
      }));
    },
  }));
};

export default useBatchedEvents;
