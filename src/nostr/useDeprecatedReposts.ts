import { createMemo, type Accessor } from 'solid-js';
import { type Event as NostrEvent } from 'nostr-tools';
import { createQuery, useQueryClient, type CreateQueryResult } from '@tanstack/solid-query';

import useBatchedEvents, { type BatchedEvents } from '@/nostr/useBatchedEvents';
import timeout from '@/utils/timeout';

export type UseDeprecatedRepostsProps = {
  relayUrls: string[];
  eventId: string;
};

export type UseDeprecatedReposts = {
  reposts: Accessor<NostrEvent[]>;
  isRepostedBy: (pubkey: string) => boolean;
  invalidateDeprecatedReposts: () => Promise<void>;
  query: CreateQueryResult<Accessor<BatchedEvents>>;
};

const { exec } = useBatchedEvents<UseDeprecatedRepostsProps>(() => ({
  interval: 3400,
  generateKey: ({ eventId }) => eventId,
  mergeFilters: (args) => {
    const eventIds = args.map((arg) => arg.eventId);
    return [{ kinds: [6], '#e': eventIds }];
  },
  extractKey: (event: NostrEvent) => {
    return event.tags.find((e) => e[0] === 'e')?.[1];
  },
}));

const useDeprecatedReposts = (
  propsProvider: () => UseDeprecatedRepostsProps,
): UseDeprecatedReposts => {
  const queryClient = useQueryClient();
  const props = createMemo(propsProvider);
  const queryKey = createMemo(() => ['useDeprecatedReposts', props()] as const);

  const query = createQuery(
    () => queryKey(),
    ({ queryKey: currentQueryKey, signal }) => {
      const [, currentProps] = currentQueryKey;
      if (currentProps == null) return () => ({ events: [], completed: false });
      return timeout(
        15000,
        `useDeprecatedReposts: ${currentProps.eventId}`,
      )(exec(currentProps, signal));
    },
    {
      // 1 minutes
      staleTime: 1 * 60 * 1000,
      cacheTime: 1 * 60 * 1000,
    },
  );

  const reposts = () => query.data?.()?.events ?? [];

  const isRepostedBy = (pubkey: string): boolean =>
    reposts().findIndex((event) => event.pubkey === pubkey) !== -1;

  const invalidateDeprecatedReposts = (): Promise<void> =>
    queryClient.invalidateQueries(queryKey());

  return { reposts, isRepostedBy, invalidateDeprecatedReposts, query };
};

export default useDeprecatedReposts;
