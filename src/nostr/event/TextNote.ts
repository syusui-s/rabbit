import { type Event as NostrEvent, Kind } from 'nostr-tools';

import TextNoteLike from '@/nostr/event/TextNoteLike';

export default class TextNote extends TextNoteLike {
  constructor(rawEvent: NostrEvent) {
    if (rawEvent.kind !== (Kind.Text as number)) {
      throw new TypeError('kind should be 1');
    }
    super(rawEvent);
  }
}
