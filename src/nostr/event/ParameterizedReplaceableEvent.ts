import { isParameterizedReplaceableKind } from 'nostr-tools/kinds';
import { Event as NostrEvent } from 'nostr-tools/pure';

import GenericEvent from '@/nostr/event/GenericEvent';

export default class ParameterizedReplaceableEvent extends GenericEvent {
  constructor(readonly rawEvent: NostrEvent) {
    if (!isParameterizedReplaceableKind(rawEvent.kind)) {
      throw new TypeError('kind should be parameterized replaceable event');
    }
    super(rawEvent);
  }

  identifier(): string {
    const dTag = this.findFirstTagByName('d');
    const id = dTag?.[1];
    if (id == null) {
      throw new TypeError('failed to find d tag');
    }
    return id;
  }
}
