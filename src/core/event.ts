import type { Event as NostrEvent } from 'nostr-tools';
import uniq from 'lodash/uniq';

export type EventMarker = 'reply' | 'root' | 'mention';

export type TaggedEvent = {
  id: string;
  relayUrl?: string;
  marker: EventMarker;
};

export type ContentWarning = {
  contentWarning: boolean;
  reason?: string;
};

const eventWrapper = (event: NostrEvent) => {
  return {
    get rawEvent(): NostrEvent {
      return event;
    },
    get id(): string | undefined {
      return event.id;
    },
    get pubkey(): string {
      return event.pubkey;
    },
    get createdAt(): number {
      return event.created_at;
    },
    get content(): Date {
      return new Date(event.created_at * 1000);
    },
    createdAtAsDate(): Date {
      return new Date(event.created_at * 1000);
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
        marker: (marker as EventMarker | undefined) ?? positionToMarker(index),
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
    mentionedPubkeys(): string[] {
      return uniq(event.tags.filter(([tagName]) => tagName === 'p').map((e) => e[1]));
    },
    contentWarning(): ContentWarning {
      const tag = event.tags.find(([tagName]) => tagName === 'content-warning');
      if (tag == null) return { contentWarning: false };

      const reason = (tag[1]?.length ?? 0) > 0 ? tag[1] : undefined;
      return { contentWarning: true, reason };
    },
  };
};

export default eventWrapper;
