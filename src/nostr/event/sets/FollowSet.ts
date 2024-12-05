import * as Kind from 'nostr-tools/kinds';
import { type NostrEvent } from 'nostr-tools/pure';

import NostrSet from '@/nostr/event/sets/NostrSet';

export default class FollowSet extends NostrSet {
  constructor(event: NostrEvent) {
    if (event.kind !== Kind.Followsets) {
      throw new TypeError('kind should be followsets');
    }
    super(event);
  }
}
