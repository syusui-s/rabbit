import { createSignal, createMemo, type Signal, type Accessor } from 'solid-js';
import { type Event as NostrEvent, type Filter } from 'nostr-tools';

import useConfig from '@/nostr/useConfig';
import useBatch, { type Task } from '@/nostr/useBatch';
import useSubscription from '@/nostr/useSubscription';

export type UseBatchedEventProps<TaskArgs> = {
  interval?: number;
  generateKey: (args: TaskArgs) => string | number;
  mergeFilters: (args: TaskArgs[]) => Filter[];
  extractKey: (event: NostrEvent) => string | number | undefined;
};

const useBatchedEvent = <TaskArgs>(propsProvider: () => UseBatchedEventProps<TaskArgs>) => {
  const props = createMemo(propsProvider);

  return useBatch<TaskArgs, Accessor<NostrEvent>>(() => ({
    interval: props().interval,
    executor: (tasks) => {
      const { generateKey, mergeFilters, extractKey } = props();
      // TODO relayUrlsを考慮する
      const { config } = useConfig();

      const keyTaskMap = new Map<string | number, Task<TaskArgs, Accessor<NostrEvent>>>(
        tasks.map((task) => [generateKey(task.args), task]),
      );
      const keyEventSignalMap = new Map<string | number, Signal<NostrEvent>>();
      const filters = mergeFilters(tasks.map((task) => task.args));

      useSubscription(() => ({
        relayUrls: config().relayUrls,
        filters,
        continuous: false,
        onEvent: (event: NostrEvent) => {
          const key = extractKey(event);
          if (key == null) return;

          const task = keyTaskMap.get(key);
          if (task == null) return;

          let signal = keyEventSignalMap.get(key);
          if (signal == null) {
            signal = createSignal(event);
            keyEventSignalMap.set(key, signal);
          }

          if (event.created_at > signal[0]().created_at) {
            signal[1](event);
          }

          task.resolve(signal[0]);
        },
        onEOSE: () => {
          tasks.forEach((task) => {
            task.reject(new Error(`NotFound: ${JSON.stringify(filters)}`));
          });
        },
      }));
    },
  }));
};

export default useBatchedEvent;
