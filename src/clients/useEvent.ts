import { createMemo, type Accessor } from 'solid-js';
import { type Event as NostrEvent } from 'nostr-tools/event';
import { createQuery, type CreateQueryResult } from '@tanstack/solid-query';

import useConfig from '@/clients/useConfig';
import useBatch, { type Task } from '@/clients/useBatch';
import useSubscription from '@/clients/useSubscription';

export type UseEventProps = {
  relayUrls: string[];
  eventId: string;
};

export type UseEvent = {
  event: Accessor<NostrEvent | undefined>;
  query: CreateQueryResult<NostrEvent>;
};

const { exec } = useBatch<UseEventProps, NostrEvent>(() => {
  return {
    executor: (tasks) => {
      // TODO relayUrlsを考慮する
      const [config] = useConfig();
      const eventIdTaskMap = new Map<string, Task<UseEventProps, NostrEvent>>(
        tasks.map((task) => [task.args.eventId, task]),
      );
      const eventIds = Array.from(eventIdTaskMap.keys());

      useSubscription(() => ({
        relayUrls: config().relayUrls,
        filters: [
          {
            ids: eventIds,
            kinds: [1],
          },
        ],
        continuous: false,
        onEvent: (event: NostrEvent) => {
          if (event.id == null) return;
          const task = eventIdTaskMap.get(event.id);
          // possibly, the new event received
          if (task == null) return;
          task.resolve(event);
        },
      }));
    },
  };
});

const useEvent = (propsProvider: () => UseEventProps): UseEvent => {
  const props = createMemo(propsProvider);

  const query = createQuery(
    () => ['useEvent', props()] as const,
    ({ queryKey, signal }) => {
      const [, currentProps] = queryKey;
      return exec(currentProps, signal);
    },
    {
      // 5 minutes
      staleTime: 5 * 60 * 1000,
      cacheTime: 15 * 60 * 1000,
    },
  );

  const event = () => query.data;

  return { event, query };
};

export default useEvent;
