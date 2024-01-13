import * as Kind from 'nostr-tools/kinds';
import { type UnsignedEvent } from 'nostr-tools/pure';

import epoch from '@/utils/epoch';

const createDeletion = ({
  pubkey,
  eventId,
}: {
  pubkey: string;
  eventId: string;
}): UnsignedEvent => ({
  kind: Kind.EventDeletion,
  pubkey,
  created_at: epoch(),
  tags: [['e', eventId, '']],
  content: '',
});

export default createDeletion;
