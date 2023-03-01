import { type Event as NostrEvent } from 'nostr-tools/event';
import { type Filter } from 'nostr-tools/filter';

import useConfig from '@/clients/useConfig';
import useBatch, { type Task } from '@/clients/useBatch';
import useSubscription from '@/clients/useSubscription';

export type UseBatchedEventProps<TaskArgs> = {
  generateKey: (args: TaskArgs) => string | number;
  mergeFilters: (args: TaskArgs[]) => Filter[];
  extractKey: (event: NostrEvent) => string | number | undefined;
};

const useBatchedEvent = <TaskArgs>(propsProvider: () => UseBatchedEventProps<TaskArgs>) => {
  return useBatch<TaskArgs, NostrEvent>(() => {
    return {
      executor: (tasks) => {
        const { generateKey, mergeFilters, extractKey } = propsProvider();
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
            // possibly, the new event received
            if (task == null) return;
            task.resolve(event);
          },
        }));
      },
    };
  });
};

export default useBatchedEvent;
