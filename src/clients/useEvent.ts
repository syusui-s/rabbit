import { type Event as NostrEvent } from 'nostr-tools/event';
import { type Accessor } from 'solid-js';

import useCachedEvents from '@/clients/useCachedEvents';

export type UseEventProps = {
  relayUrls: string[];
  eventId: string;
};

export type UseEvent = {
  event: Accessor<NostrEvent>;
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

  const event = () => query.data?.[0] as NostrEvent;

  return { event };
};

export default useEvent;
