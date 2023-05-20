import uniq from 'lodash/uniq';
import { Kind, Event as NostrEvent } from 'nostr-tools';
import { z } from 'zod';

import { isImageUrl } from '@/utils/imageUrl';

export type EventMarker = 'reply' | 'root' | 'mention';

// NIP-10
export type MarkedEventTag = {
  id: string;
  relayUrl?: string;
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

const IdRegex = /^[0-9a-f]{64}$/;
export const isValidId = (s: string): boolean => {
  const result = typeof s === 'string' && s.length === 64 && IdRegex.test(s);
  if (!result) console.warn('invalid id is ignored: ', s);
  return result;
};

/*
// TODO event validation and normalization
const eventSchema = z.object({
  id: z.string().length(64).regex(IdRegex),
  pubkey: z.string().length(64).regex(IdRegex),
  created_at: z.number().int(),
  kind: z.number(),
  tags: z.array(z.array(z.string())),
  content: z.string(),
});
*/

const EmojiTagSchema = z.tuple([
  z.literal('emoji'),
  z.string().regex(/^\w+$/, {
    message: 'shortcode can includes only alpahnumeric characters and underscore',
  }),
  z.string().url(), // .refine(isImageUrl)
]);

export type EmojiTag = z.infer<typeof EmojiTagSchema>;

const ensureSchema =
  <T>(schema: z.Schema<T>) =>
  (value: any): value is T =>
    schema.safeParse(value).success;

const eventWrapper = (event: NostrEvent) => {
  let memoizedMarkedEventTags: MarkedEventTag[] | undefined;

  return {
    get rawEvent(): NostrEvent {
      return event;
    },
    get id(): string {
      return event.id;
    },
    get pubkey(): string {
      return event.pubkey;
    },
    get createdAt(): number {
      return event.created_at;
    },
    get content(): string {
      return event.content;
    },
    get tags(): string[][] {
      return event.tags;
    },
    createdAtAsDate(): Date {
      return new Date(event.created_at * 1000);
    },
    pTags(): string[][] {
      return event.tags.filter(([tagName, pubkey]) => tagName === 'p' && isValidId(pubkey));
    },
    eTags(): string[][] {
      return event.tags.filter(([tagName, eventId]) => tagName === 'e' && isValidId(eventId));
    },
    emojiTags(): EmojiTag[] {
      return event.tags.filter(ensureSchema(EmojiTagSchema));
    },
    taggedEventIds(): string[] {
      return this.eTags().map(([, eventId]) => eventId);
    },
    lastTaggedEventId(): string | undefined {
      // for compatibility. some clients include additional event ids for reaction (kind:7).
      const ids = this.taggedEventIds();
      if (ids.length === 0) return undefined;
      return ids[ids.length - 1];
    },
    markedEventTags(): MarkedEventTag[] {
      if (event.kind !== Kind.Text) throw new Error('kind should be 1');

      if (memoizedMarkedEventTags != null) return memoizedMarkedEventTags;

      // 'eTags' cannot be used here because it does not preserve originalIndex.
      const events = event.tags
        .map((tag, originalIndex) => [tag, originalIndex] as const)
        .filter(([[tagName, eventId]]) => tagName === 'e' && isValidId(eventId));

      // NIP-10: Positional "e" tags (DEPRECATED)
      const positionToMarker = (marker: string, index: number): EventMarker | undefined => {
        // NIP-10 is applied to only kind:1 text note.
        if (event.kind !== 1) return undefined;
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

      memoizedMarkedEventTags = events.map(
        ([[, eventId, relayUrl, marker], originalIndex], eTagIndex) => ({
          id: eventId,
          relayUrl,
          marker: positionToMarker(marker, eTagIndex),
          index: originalIndex,
        }),
      );

      return memoizedMarkedEventTags;
    },
    replyingToEvent(): MarkedEventTag | undefined {
      return this.markedEventTags().find(({ marker }) => marker === 'reply');
    },
    rootEvent(): MarkedEventTag | undefined {
      return this.markedEventTags().find(({ marker }) => marker === 'root');
    },
    mentionedEvents(): MarkedEventTag[] {
      return this.markedEventTags().filter(({ marker }) => marker === 'mention');
    },
    mentionedPubkeys(): string[] {
      return uniq(this.pTags().map(([, pubkey]) => pubkey));
    },
    contentWarning(): ContentWarning {
      const tag = event.tags.find(([tagName]) => tagName === 'content-warning');
      if (tag == null) return { contentWarning: false };

      const reason = (tag[1]?.length ?? 0) > 0 ? tag[1] : undefined;
      return { contentWarning: true, reason };
    },
    containsEventMention(eventId: string): boolean {
      const tagIndex = event.tags.findIndex(([tagName, id]) => tagName === 'e' && id === eventId);
      if (tagIndex < 0) return false;
      return this.containsEventMentionIndex(tagIndex);
    },
    containsEventMentionIndex(index: number): boolean {
      if (index < 0 || index >= event.tags.length) return false;
      return event.content.includes(`#[${index}]`);
    },
    getEmojiUrl(shortcode: string): string | null {
      const emojiTag = this.emojiTags().find(([, code]) => code === shortcode);
      if (emojiTag == null) return null;
      const [, , url] = emojiTag;
      return url;
    },
  };
};

export default eventWrapper;
