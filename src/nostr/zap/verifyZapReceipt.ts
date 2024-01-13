import { type Event as NostrEvent } from 'nostr-tools/pure';

import GenericEvent, { EventSchema } from '@/nostr/event/GenericEvent';
import { parseBolt11 } from '@/nostr/zap/bolt11';
import lnurlPayUrlToLud06 from '@/nostr/zap/lnurlPayUrlToLud06';

export type ZapReceiptVerificationResult = { success: true } | { success: false; reason: string };

const verifyZapReceipt = ({
  zapReceipt: rawZapReceipt,
  lnurlPayUrl,
  lnurlProviderPubkey,
}: {
  zapReceipt: NostrEvent;
  lnurlPayUrl: string;
  lnurlProviderPubkey: string;
}): ZapReceiptVerificationResult => {
  const zapReceipt = new GenericEvent(rawZapReceipt);

  // The event's pubkey MUST be the same as the recipient's lnurl provider's pubkey.
  if (zapReceipt.pubkey !== lnurlProviderPubkey) {
    return { success: false, reason: 'mismatch pubkey of lnurl provider' };
  }

  const rawBolt11 = zapReceipt.findFirstTagByName('bolt11')?.[1];
  if (rawBolt11 == null) {
    return { success: false, reason: 'bolt11 tag is not found' };
  }

  let bolt11;
  try {
    bolt11 = parseBolt11(rawBolt11);
  } catch (e) {
    const message = e instanceof Error ? e.message : '';
    return { success: false, reason: `failed to parse bolt11: ${message}` };
  }

  const rawZapRequest = zapReceipt.findFirstTagByName('description')?.[1];
  if (rawZapRequest == null) {
    return { success: false, reason: 'zap request is not found' };
  }

  let zapRequest;
  try {
    // TODO 直接EventSchema呼ぶのやめたい
    zapRequest = new GenericEvent(EventSchema.parse(JSON.parse(rawZapRequest)));
  } catch (e) {
    const message = e instanceof Error ? e.message : '';
    return { success: false, reason: `failed to parse description: ${message}` };
  }

  // zapRequest's amount must be equal to amount of zapReceipt's bolt11
  const amount = zapRequest.findFirstTagByName('amount')?.[1];
  if (amount != null && bolt11.millisatoshis !== amount) {
    return {
      success: false,
      reason: `amount mismatch: bolt11=${bolt11.millisatoshis}, amountTag=${amount}`,
    };
  }

  // lnurl should match
  const lnurl = zapRequest.findFirstTagByName('lnurl')?.[1];
  if (
    lnurl != null &&
    !(
      lnurl.toLowerCase() === lnurlPayUrlToLud06(lnurlPayUrl).toLowerCase() ||
      // for compatibility: Wallet of Satoshi
      lnurl === lnurlPayUrl
    )
  ) {
    return {
      success: false,
      reason: `lnurl mismatch: fromProfile=${lnurlPayUrl}, request=${lnurl}`,
    };
  }

  return { success: true };
};

export default verifyZapReceipt;
