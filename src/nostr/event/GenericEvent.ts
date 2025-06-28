import { type Event as NostrEvent } from 'nostr-tools/pure';
import { z } from 'zod';

import isValidId from '@/nostr/event/isValidId';
import TagsBase, { TagsSchema } from '@/nostr/event/TagsBase';

const SigRegex = /^[0-9a-f]{128}$/;

const isValidSig = (s: string): boolean => {
  const result = typeof s === 'string' && s.length === 128 && SigRegex.test(s);
  return result;
};

export const EventSchema = z.object({
  id: z.string().refine(isValidId),
  pubkey: z.string().refine(isValidId),
  created_at: z.number().int(),
  kind: z.number().int(),
  tags: TagsSchema,
  content: z.string(),
  sig: z.string().refine(isValidSig),
});

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

  get kind(): number {
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
