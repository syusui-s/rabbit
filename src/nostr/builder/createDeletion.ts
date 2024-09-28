import * as Kind from 'nostr-tools/kinds';
import { type UnsignedEvent } from 'nostr-tools/pure';

import epoch from '@/utils/epoch';

const createDeletion = ({
  pubkey,
  eventId,
  kind,
}: {
  pubkey: string;
  eventId: string;
  kind: number;
}): UnsignedEvent => ({
  kind: Kind.EventDeletion,
  pubkey,
  created_at: epoch(),
  tags: [
    ['e', eventId, ''],
    ['k', kind.toString()],
  ],
  content: '',
});

export default createDeletion;
