import * as Kind from 'nostr-tools/kinds';
import { type UnsignedEvent } from 'nostr-tools/pure';

import epoch from '@/utils/epoch';

const createRepost = ({
  pubkey,
  eventId,
  kind,
  notifyPubkey,
}: {
  pubkey: string;
  eventId: string;
  kind: number;
  notifyPubkey: string;
}): UnsignedEvent => ({
  kind: kind === 1 ? Kind.Repost : 16 /* generic repost */,
  pubkey,
  created_at: epoch(),
  tags: [
    ['e', eventId, ''],
    ['p', notifyPubkey],
    ['k', kind.toString()],
  ],
  content: '',
});

export default createRepost;
