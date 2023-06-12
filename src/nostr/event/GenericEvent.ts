import { Kind, Event as NostrEvent } from 'nostr-tools';

import TagsBase from '@/nostr/event/TagsBase';

export default class GenericEvent extends TagsBase {
  constructor(readonly rawEvent: NostrEvent) {
    super();
  }

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
}
