import { type Accessor } from 'solid-js';
import { type Event as NostrEvent } from 'nostr-tools/event';
import { type CreateQueryResult } from '@tanstack/solid-query';

import useCachedEvents from '@/clients/useCachedEvents';

export type UseEventProps = {
  relayUrls: string[];
  eventId: string;
};

export type UseEvent = {
  reactions: Accessor<NostrEvent[]>;
  reactionsGroupedByContent: Accessor<Map<string, NostrEvent[]>>;
  isReactedBy(pubkey: string): boolean;
  query: CreateQueryResult<NostrEvent[]>;
};

const useReactions = (propsProvider: () => UseEventProps): UseEvent => {
  const query = useCachedEvents(() => {
    const { relayUrls, eventId } = propsProvider();
    return {
      relayUrls,
      filters: [
        {
          '#e': [eventId],
          kinds: [7],
        },
      ],
    };
  });

  const reactions = () => query.data ?? [];

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

  return { reactions, reactionsGroupedByContent, isReactedBy, query };
};

export default useReactions;
