import uniq from 'lodash/uniq';
import { Kind, Event as NostrEvent } from 'nostr-tools';

import isValidId from '@/nostr/event/isValidId';

export default class GenericEvent {
  constructor(readonly rawEvent: NostrEvent) {}

  get id(): string {
    return this.rawEvent.id;
  }

  get sig(): string {
    return this.rawEvent.sig;
  }

  get kind(): Kind {
    return this.rawEvent.kind;
  }

  get pubkey(): string {
    return this.rawEvent.pubkey;
  }

  get createdAt(): number {
    return this.rawEvent.created_at;
  }

  get content(): string {
    return this.rawEvent.content;
  }

  get tags(): string[][] {
    return this.rawEvent.tags;
  }

  createdAtAsDate(): Date {
    return new Date(this.rawEvent.created_at * 1000);
  }

  findTagsByName(name: string): string[][] {
    return this.rawEvent.tags.filter(([tagName]) => tagName === name);
  }

  findFirstTagByName(name: string): string[] | undefined {
    return this.rawEvent.tags.find(([tagName]) => tagName === name);
  }

  findLastTagByName(name: string): string[] | undefined {
    return this.rawEvent.tags.findLast(([tagName]) => tagName === name);
  }

  pTags(): string[][] {
    return this.rawEvent.tags.filter(([tagName, pubkey]) => tagName === 'p' && isValidId(pubkey));
  }

  eTags(): string[][] {
    return this.rawEvent.tags.filter(([tagName, eventId]) => tagName === 'e' && isValidId(eventId));
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
