import * as Kind from 'nostr-tools/kinds';
import { type Event as NostrEvent } from 'nostr-tools/pure';

import TextNoteLike from '@/nostr/event/TextNoteLike';

export default class TextNote extends TextNoteLike {
  constructor(rawEvent: NostrEvent) {
    if (rawEvent.kind !== Kind.ShortTextNote) {
      throw new TypeError(`kind should be 1 but it was ${rawEvent.kind}`);
    }
    super(rawEvent);
  }
}
