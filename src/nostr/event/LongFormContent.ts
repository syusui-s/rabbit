import { Event as NostrEvent, Kind } from 'nostr-tools';

import GenericEvent from '@/nostr/event/GenericEvent';

class LongFormContent extends GenericEvent {
  constructor(rawEvent: NostrEvent) {
    if (rawEvent.kind !== Kind.Article) {
      throw new TypeError('kind should be 30023');
    }
    super(rawEvent);
  }

  #getMeta(tagName: string): string | null {
    const tags = this.findTagsByName(tagName);
    if (tags.length === 0) return null;
    const [, value] = tags[0];
    return value;
  }

  title(): string | null {
    return this.#getMeta('title');
  }

  image(): string | null {
    return this.#getMeta('image');
  }

  summary(): string | null {
    return this.#getMeta('image');
  }

  publishedAt(): string | null {
    return this.#getMeta('publishedAt');
  }

  publishedAtAsDate(): Date | null {
    const publishedAt = this.publishedAt();
    if (publishedAt == null) return null;

    return new Date(parseInt(publishedAt, 10) * 1000);
  }
}

export default LongFormContent;
