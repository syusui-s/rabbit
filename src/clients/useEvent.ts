import { type Accessor } from 'solid-js';
import { type Event as NostrEvent } from 'nostr-tools/event';
import { type CreateQueryResult } from '@tanstack/solid-query';

import useCachedEvents from '@/clients/useCachedEvents';

export type UseEventProps = {
  relayUrls: string[];
  eventId: string;
};

export type UseEvent = {
  event: Accessor<NostrEvent | undefined>;
  query: CreateQueryResult<NostrEvent[]>;
};

const useEvent = (propsProvider: () => UseEventProps): UseEvent => {
  const query = useCachedEvents(() => {
    const { relayUrls, eventId } = propsProvider();
    return {
      relayUrls,
      filters: [
        {
          ids: [eventId],
          kinds: [1],
          limit: 1,
        },
      ],
    };
  });

  const event = () => query.data?.[0];

  return { event, query };
};

export default useEvent;
