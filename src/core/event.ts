import type { Event as NostrEvent } from 'nostr-tools/event';

export type EventMarker = 'reply' | 'root' | 'mention';
export type TaggedEvent = {
  id: string;
  relayUrl?: string;
  marker: EventMarker;
};

const eventWrapper = (event: NostrEvent) => {
  return {
    event(): NostrEvent {
      return event;
    },
    taggedUsers(): string[] {
      const pubkeys = new Set<string>();
      event.tags.forEach(([tagName, pubkey]) => {
        if (tagName === 'p') {
          pubkeys.add(pubkey);
        }
      });
      return Array.from(pubkeys);
    },
    taggedEvents(): TaggedEvent[] {
      const events = event.tags.filter(([tagName]) => tagName === 'e');

      // NIP-10: Positional "e" tags (DEPRECATED)
      const positionToMarker = (index: number): EventMarker => {
        // One "e" tag
        if (events.length === 1) return 'reply';
        // Two "e" tags  or many "e" tags : first tag is root
        if (index === 0) return 'root';
        // Two "e" tags
        if (events.length === 2) return 'reply';
        // Many "e" tags
        // The last one is reply.
        if (index === events.length - 1) return 'reply';
        // The rest are mentions.
        return 'mention';
      };

      return events.map(([, eventId, relayUrl, marker], index) => ({
        id: eventId,
        relayUrl,
        marker: (marker as EventMarker) ?? positionToMarker(index),
      }));
    },
    replyingToEvent(): TaggedEvent | undefined {
      return this.taggedEvents().find(({ marker }) => marker === 'reply');
    },
    rootEvent(): TaggedEvent | undefined {
      return this.taggedEvents().find(({ marker }) => marker === 'root');
    },
    mentionedEvents(): TaggedEvent[] {
      return this.taggedEvents().filter(({ marker }) => marker === 'mention');
    },
  };
};

export default eventWrapper;
