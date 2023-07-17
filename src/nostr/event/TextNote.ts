import { Event as NostrEvent, Kind } from 'nostr-tools';
import { z } from 'zod';

import GenericEvent from '@/nostr/event/GenericEvent';
import isValidId from '@/nostr/event/isValidId';
import parseTextNote, {
  MentionedEvent,
  MentionedUser,
  ParsedTextNote,
  TagReference,
} from '@/nostr/parseTextNote';
import ensureSchema from '@/utils/ensureSchema';

export type EventMarker = 'reply' | 'root' | 'mention';

// NIP-10
export type MarkedEventTag = {
  id: string;
  relayUrl?: string | null;
  index: number;
  marker?: EventMarker;
};

export type ContactPubkeyTag = {
  pubkey: string;
  relayUrl?: string;
  petname?: string;
};

export type ContentWarning = {
  contentWarning: boolean;
  reason?: string;
};

export const markedEventTags = (tags: string[][]): MarkedEventTag[] => {
  // 'eTags' cannot be used here because it does not preserve originalIndex.
  const events = tags
    .map((tag, originalIndex) => [tag, originalIndex] as const)
    .filter(([[tagName, eventId]]) => tagName === 'e' && isValidId(eventId));

  // NIP-10: Positional "e" tags (DEPRECATED)
  const positionToMarker = (marker: string, index: number): EventMarker | undefined => {
    // NIP-10 styled marker
    if (marker === 'root' || marker === 'reply' || marker === 'mention') return marker;
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

  return events.map(([[, eventId, relayUrl, marker], originalIndex], eTagIndex) => ({
    id: eventId,
    relayUrl: (relayUrl?.length ?? 0) > 0 ? relayUrl : null,
    marker: positionToMarker(marker, eTagIndex),
    index: originalIndex,
  }));
};

export default class TextNote extends GenericEvent {
  #memoizedMarkedEventTags: MarkedEventTag[] | undefined;

  #memoizedParsed: ParsedTextNote | undefined;

  constructor(rawEvent: NostrEvent) {
    if (rawEvent.kind !== Kind.Text) {
      throw new TypeError('kind should be 1');
    }
    super(rawEvent);
  }

  parsed(): ParsedTextNote {
    if (this.#memoizedParsed != null) {
      return this.#memoizedParsed;
    }
    this.#memoizedParsed = parseTextNote(this.content);
    return this.#memoizedParsed;
  }

  // TODO パーサー側の関心事な気がするのでどこかで移したい
  resolveTagReference({
    tagIndex,
    content,
  }: TagReference): MentionedUser | MentionedEvent | undefined {
    const tag = this.rawEvent.tags[tagIndex];
    if (tag == null) return undefined;

    const tagName = tag[0];

    if (tagName === 'p' && isValidId(tag[1])) {
      return {
        type: 'MentionedUser',
        tagIndex,
        content,
        pubkey: tag[1],
      } satisfies MentionedUser;
    }

    if (tagName === 'e' && isValidId(tag[1])) {
      const mention = this.markedEventTags().find((ev) => ev.index === tagIndex);

      return {
        type: 'MentionedEvent',
        tagIndex,
        content,
        eventId: tag[1],
        marker: mention?.marker,
      } satisfies MentionedEvent;
    }

    return undefined;
  }

  markedEventTags(): MarkedEventTag[] {
    if (this.#memoizedMarkedEventTags != null) {
      return this.#memoizedMarkedEventTags;
    }
    this.#memoizedMarkedEventTags = markedEventTags(this.tags);
    return this.#memoizedMarkedEventTags;
  }

  replyingToEvent(): MarkedEventTag | undefined {
    return this.markedEventTags().find(({ marker }) => marker === 'reply');
  }

  rootEvent(): MarkedEventTag | undefined {
    return this.markedEventTags().find(({ marker }) => marker === 'root');
  }

  mentionedEvents(): MarkedEventTag[] {
    return this.markedEventTags().filter(({ marker }) => marker === 'mention');
  }

  contentWarning(): ContentWarning {
    const tag = this.findLastTagByName('content-warning');
    if (tag == null) return { contentWarning: false };

    const reason = (tag[1]?.length ?? 0) > 0 ? tag[1] : undefined;
    return { contentWarning: true, reason };
  }

  /**
   * containsEventMention returns true if the content includes event
   */
  containsEventMention(eventId: string): boolean {
    const tagIndex = this.rawEvent.tags.findIndex(
      ([tagName, id]) => tagName === 'e' && id === eventId,
    );
    return this.containsEventNote(eventId) || this.containsEventMentionIndex(tagIndex);
  }

  /**
   * containsEventMentionIndex returns true if the content includes NIP-08 style mention.
   */
  containsEventMentionIndex(index: number): boolean {
    if (index < 0 || index >= this.rawEvent.tags.length) return false;
    return this.parsed().some((node) => node.type === 'TagReference' && node.tagIndex === index);
  }

  /**
   * containsEventNote returns true if the content includes NIP-19 event mention.
   */
  containsEventNote(eventId: string): boolean {
    return this.parsed().some(
      (node) =>
        node.type === 'Bech32Entity' &&
        ((node.data.type === 'nevent' && node.data.data.id === eventId) ||
          (node.data.type === 'note' && node.data.data === eventId)),
    );
  }
}
