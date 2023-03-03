import { createSignal, createMemo, type Signal, type Accessor } from 'solid-js';
import { type Event as NostrEvent } from 'nostr-tools/event';
import { createQuery, useQueryClient, type CreateQueryResult } from '@tanstack/solid-query';

import useConfig from '@/clients/useConfig';
import useBatch, { type Task } from '@/clients/useBatch';
import useSubscription from '@/clients/useSubscription';
import timeout from '@/utils/timeout';

export type UseReactionsProps = {
  relayUrls: string[];
  eventId: string;
};

export type UseReactions = {
  reactions: Accessor<NostrEvent[]>;
  reactionsGroupedByContent: Accessor<Map<string, NostrEvent[]>>;
  isReactedBy: (pubkey: string) => boolean;
  invalidateReactions: () => Promise<void>;
  query: CreateQueryResult<Accessor<NostrEvent[]>>;
};

const { exec } = useBatch<UseReactionsProps, Accessor<NostrEvent[]>>(() => {
  return {
    interval: 2500,
    executor: (tasks) => {
      // TODO relayUrlsを考慮する
      const [config] = useConfig();

      const eventIdTaskMap = new Map<string, Task<UseReactionsProps, Accessor<NostrEvent[]>>>(
        tasks.map((task) => [task.args.eventId, task]),
      );
      const eventIds = Array.from(eventIdTaskMap.keys());
      const eventIdReactionsMap = new Map<string, Signal<NostrEvent[]>>();

      useSubscription(() => ({
        relayUrls: config().relayUrls,
        filters: [{ kinds: [7], '#e': eventIds }],
        continuous: false,
        onEvent(event: NostrEvent) {
          const reactTo = event.tags.find((e) => e[0] === 'e')?.[1];
          if (reactTo == null) return;
          const task = eventIdTaskMap.get(reactTo);
          // possibly, the new event received
          if (task == null) return;

          const reactionsSignal =
            eventIdReactionsMap.get(reactTo) ?? createSignal<NostrEvent[]>([]);
          eventIdReactionsMap.set(reactTo, reactionsSignal);

          const [reactions, setReactions] = reactionsSignal;

          setReactions((currentReactions) => [...currentReactions, event]);

          // 初回のresolveのみが有効
          task.resolve(reactions);
        },
        onEOSE() {
          tasks.forEach((task) => {
            task.resolve(() => []);
          });
        },
      }));
    },
  };
});

const useReactions = (propsProvider: () => UseReactionsProps): UseReactions => {
  const props = createMemo(propsProvider);
  const queryKey = createMemo(() => ['useReactions', props()] as const);

  const query = createQuery(
    () => queryKey(),
    ({ queryKey, signal }) => {
      const [, currentProps] = queryKey;
      return timeout(15000, `useReactions: ${currentProps.eventId}`)(exec(currentProps, signal));
    },
    {
      // 1 minutes
      staleTime: 1 * 60 * 1000,
      cacheTime: 1 * 60 * 1000,
    },
  );

  const reactions = () => query.data?.() ?? [];

  const reactionsGroupedByContent = () => {
    const result = new Map<string, NostrEvent[]>();
    reactions().forEach((event) => {
      const events = result.get(event.content) ?? [];
      events.push(event);
      result.set(event.content, events);
    });
    return result;
  };

  const isReactedBy = (pubkey: string): boolean =>
    reactions().findIndex((event) => event.pubkey === pubkey) !== -1;

  const invalidateReactions = (): Promise<void> => {
    const queryClient = useQueryClient();
    return queryClient.invalidateQueries(queryKey());
  };

  return { reactions, reactionsGroupedByContent, isReactedBy, invalidateReactions, query };
};

export default useReactions;
