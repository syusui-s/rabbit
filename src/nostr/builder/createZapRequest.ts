import * as Kind from 'nostr-tools/kinds';
import { type UnsignedEvent } from 'nostr-tools/pure';

import lnurlPayUrlToLud06 from '@/nostr/zap/lnurlPayUrlToLud06';
import epoch from '@/utils/epoch';

const createZapRequest = ({
  pubkey,
  content,
  relays,
  recipientPubkey,
  eventId,
  amountMilliSats,
  lnurlPayUrl,
}: {
  pubkey: string;
  content: string;
  relays: string[];
  recipientPubkey: string;
  eventId?: string;
  amountMilliSats: string;
  lnurlPayUrl: string;
}): UnsignedEvent => {
  if (parseInt(amountMilliSats, 10) === 0) throw new Error('amount is zero');
  if (relays.length === 0) throw new Error('relays is empty');

  const tags: string[][] = [
    ['relays', ...relays],
    ['amount', amountMilliSats],
    ['lnurl', lnurlPayUrlToLud06(lnurlPayUrl)],
    ['p', recipientPubkey],
  ];
  if (eventId != null) tags.push(['e', eventId]);

  const event: UnsignedEvent = {
    kind: Kind.ZapRequest,
    pubkey,
    created_at: epoch(),
    tags,
    content,
  };
  return event;
};

export default createZapRequest;
