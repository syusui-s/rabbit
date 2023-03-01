import { createMemo, type Accessor } from 'solid-js';
import { type Event as NostrEvent } from 'nostr-tools/event';
import { createQuery, type CreateQueryResult } from '@tanstack/solid-query';

import useBatchedEvent from '@/clients/useBatchedEvent';

export type UseEventProps = {
  // TODO リレーURLを考慮したい
  relayUrls: string[];
  eventId: string;
};

export type UseEvent = {
  event: Accessor<NostrEvent | undefined>;
  query: CreateQueryResult<NostrEvent>;
};

const { exec } = useBatchedEvent<UseEventProps>(() => ({
  generateKey: ({ eventId }: UseEventProps) => eventId,
  mergeFilters: (args: UseEventProps[]) => {
    const eventIds = args.map((arg) => arg.eventId);
    return [{ kinds: [1], ids: eventIds }];
  },
  extractKey: (event: NostrEvent) => event.id,
}));

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
