import * as Kind from 'nostr-tools/kinds';
import { type UnsignedEvent } from 'nostr-tools/pure';

import { ReplaceableEventIdentifier, replaceableEventIdentifier } from '@/nostr/identifier';
import epoch from '@/utils/epoch';

const createDeletion = ({
  pubkey,
  identifier,
  reason,
  kind,
}: {
  pubkey: string;
  identifier: string | ReplaceableEventIdentifier;
  reason?: string;
  kind: number;
}): UnsignedEvent => {
  const tags: string[][] = [];

  if (typeof identifier === 'string') {
    tags.push(['e', identifier]);
  } else {
    tags.push(['a', replaceableEventIdentifier(identifier)]);
  }

  tags.push(['k', kind.toString()]);

  return {
    kind: Kind.EventDeletion,
    pubkey,
    created_at: epoch(),
    tags,
    content: reason ?? '',
  };
};

export default createDeletion;
