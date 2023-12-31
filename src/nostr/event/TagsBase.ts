import uniq from 'lodash/uniq';
import { z } from 'zod';

import isValidId from '@/nostr/event/isValidId';
import ensureSchema from '@/utils/ensureSchema';

export const TagsSchema = z.array(z.array(z.string()));

export const EmojiTagSchema = z.tuple([
  z.literal('emoji'),
  z.string().regex(/^\w+$/, {
    message: 'shortcode can includes only alpahnumeric characters and underscore',
  }),
  z.string().url(), // .refine(isImageUrl)
]);

export type EmojiTag = z.infer<typeof EmojiTagSchema>;

export default abstract class TagsBase {
  abstract get tags(): string[][];

  findTagsByName(name: string): string[][] {
    return this.tags.filter(([tagName]) => tagName === name);
  }

  findFirstTagByName(name: string): string[] | undefined {
    return this.tags.find(([tagName]) => tagName === name);
  }

  findLastTagByName(name: string): string[] | undefined {
    return this.tags.findLast(([tagName]) => tagName === name);
  }

  pTags(): string[][] {
    return this.tags.filter(([tagName, pubkey]) => tagName === 'p' && isValidId(pubkey));
  }

  eTags(): string[][] {
    return this.tags.filter(([tagName, eventId]) => tagName === 'e' && isValidId(eventId));
  }

  emojiTags(): EmojiTag[] {
    return this.tags.filter(ensureSchema(EmojiTagSchema));
  }

  taggedPubkeys(): string[] {
    return uniq(this.pTags().map(([, pubkey]) => pubkey));
  }

  taggedEventIds(): string[] {
    return this.eTags().map(([, eventId]) => eventId);
  }

  lastTaggedEventId(): string | undefined {
    // for compatibility. some clients include additional event ids for reaction (kind:7).
    const ids = this.taggedEventIds();
    if (ids.length === 0) return undefined;
    return ids[ids.length - 1];
  }

  // TODO move to some abstract class
  getEmojiUrl(shortcode: string): string | undefined {
    const emojiTag = this.emojiTags().find(([, code]) => code === shortcode);
    if (emojiTag == null) return undefined;
    const [, , url] = emojiTag;
    return url;
  }
}
