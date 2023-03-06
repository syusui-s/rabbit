import { createMemo } from 'solid-js';
import { type Event as NostrEvent, type Filter } from 'nostr-tools';

import useConfig from '@/clients/useConfig';
import useBatch, { type Task } from '@/clients/useBatch';
import useSubscription from '@/clients/useSubscription';

export type UseBatchedEventProps<TaskArgs> = {
  interval?: number;
  generateKey: (args: TaskArgs) => string | number;
  mergeFilters: (args: TaskArgs[]) => Filter[];
  extractKey: (event: NostrEvent) => string | number | undefined;
};

const useBatchedEvent = <TaskArgs>(propsProvider: () => UseBatchedEventProps<TaskArgs>) => {
  const props = createMemo(propsProvider);

  return useBatch<TaskArgs, NostrEvent>(() => ({
    interval: props().interval,
    executor: (tasks) => {
      const { generateKey, mergeFilters, extractKey } = props();
      // TODO relayUrlsを考慮する
      const [config] = useConfig();

      const keyTaskMap = new Map<string | number, Task<TaskArgs, NostrEvent>>(
        tasks.map((task) => [generateKey(task.args), task]),
      );
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
          task.resolve(event);
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
