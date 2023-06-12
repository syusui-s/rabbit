import uniq from 'lodash/uniq';

import isValidId from '@/nostr/event/isValidId';

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
}
