import * as Kind from 'nostr-tools/kinds';
import { type UnsignedEvent } from 'nostr-tools/pure';

import epoch from '@/utils/epoch';

export type CreateRepostParams = {
  pubkey: string;
  eventId: string;
  kind: number;
  notifyPubkey: string;
};

const createRepost = ({
  pubkey,
  eventId,
  kind,
  notifyPubkey,
}: CreateRepostParams): UnsignedEvent => {
  const tags = [
    ['e', eventId, ''],
    ['p', notifyPubkey],
  ];
  if (kind !== 1) {
    tags.push(['k', kind.toString()]);
  }

  return {
    kind: kind === 1 ? Kind.Repost : Kind.GenericRepost,
    pubkey,
    created_at: epoch(),
    tags,
    content: '',
  };
};

export default createRepost;
