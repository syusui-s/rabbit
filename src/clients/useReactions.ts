import { createMemo, type Accessor } from 'solid-js';
import { type Event as NostrEvent } from 'nostr-tools/event';
import { createQuery, useQueryClient, type CreateQueryResult } from '@tanstack/solid-query';

import useBatchedEvents, { type BatchedEvents } from '@/clients/useBatchedEvents';
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
  query: CreateQueryResult<Accessor<BatchedEvents>>;
};

const { exec } = useBatchedEvents<UseReactionsProps>(() => ({
  generateKey: ({ eventId }) => eventId,
  mergeFilters: (args) => {
    const eventIds = args.map((arg) => arg.eventId);
    return [{ kinds: [7], '#e': eventIds }];
  },
  extractKey: (event: NostrEvent) => {
    return event.tags.find((e) => e[0] === 'e')?.[1];
  },
}));

const useReactions = (propsProvider: () => UseReactionsProps): UseReactions => {
  const queryClient = useQueryClient();
  const props = createMemo(propsProvider);
  const queryKey = createMemo(() => ['useReactions', props()] as const);

  const query = createQuery(
    () => queryKey(),
    ({ queryKey: currentQueryKey, signal }) => {
      const [, currentProps] = currentQueryKey;
      return timeout(15000, `useReactions: ${currentProps.eventId}`)(exec(currentProps, signal));
    },
    {
      // 1 minutes
      staleTime: 1 * 60 * 1000,
      cacheTime: 1 * 60 * 1000,
    },
  );

  const reactions = () => query.data?.()?.events ?? [];

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

  const invalidateReactions = (): Promise<void> => queryClient.invalidateQueries(queryKey());

  return { reactions, reactionsGroupedByContent, isReactedBy, invalidateReactions, query };
};

export default useReactions;
