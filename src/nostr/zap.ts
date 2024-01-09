import { bech32 } from 'bech32';
import { type Event as NostrEvent } from 'nostr-tools/pure';
import { z } from 'zod';

import GenericEvent, { EventSchema } from '@/nostr/event/GenericEvent';
import isValidId from '@/nostr/event/isValidId';
import ensureSchema from '@/utils/ensureSchema';

export type Bolt11 = {
  amount?: string;
  multiplier: string;
  millisatoshis: number;
  satoshis: number;
};

// 1e-8 BTC = 1 satoshi.
const multiplierSatoshi = (multiplier: string): number => {
  if (multiplier.length === 0) return 1e8;
  if (multiplier === 'm') return 1e5;
  if (multiplier === 'u') return 1e2;
  if (multiplier === 'n') return 1e-1;
  if (multiplier === 'p') return 1e-4;
  throw new Error(`unknown multiplier: ${multiplier}`);
};

const asSatoshi = (amount: string, multiplier: string): number => {
  const amountNumber = parseInt(amount, 10);
  return amountNumber * multiplierSatoshi(multiplier);
};

export const parseBolt11 = (bolt11: string): Bolt11 => {
  const { prefix } = bech32.decode(bolt11, 4000);

  const match = prefix.match(/^ln(bc|tb|tbs|bcrt)(?<amount>\d+)(?<multiplier>[munp]?)$/);
  if (match?.groups == null) throw new Error('invalid invoice format');

  const { amount, multiplier } = match.groups;

  if (multiplier === 'p' && amount[amount.length - 1] !== '0')
    throw new Error('last decimal of amount is not zero');

  const satoshis = asSatoshi(amount, multiplier);
  const millisatoshis = satoshis * 1000;

  return {
    amount: amount.length > 0 ? amount : undefined,
    multiplier,
    millisatoshis,
    satoshis,
  };
};

const LnurlEndpointErrorSchema = z.object({
  status: z.literal('ERROR'),
  reason: z.string(),
});

export type LnurlError = z.infer<typeof LnurlEndpointErrorSchema>;

const LnurlEndpointSchema = z.object({
  // lud06 fields
  callback: z.string().nonempty(),
  maxSendable: z.number().positive(),
  minSendable: z.number().positive(),
  metadata: z.string(),
  tag: z.literal('payRequest'),
  // nostr NIP-57 fields
  allowsNostr: z.optional(z.boolean()),
  nostrPubkey: z.optional(z.string().refine(isValidId)),
  // lud12 comment
  commentAllowed: z.optional(z.number()),
});

export type LnurlEndpoint = z.infer<typeof LnurlEndpointSchema>;

export const getLnurlPayUrlFromLud06 = (lud06: string): string | null => {
  if (lud06.length === 0) return null;

  const { prefix, words } = bech32.decode(lud06, 2000);
  if (prefix.toLowerCase() !== 'lnurl') return null;
  const data = bech32.fromWords(words);
  return new TextDecoder('utf-8').decode(new Uint8Array(data));
};

export const getLnurlPayUrlFromLud16 = (lud16: string): string | null => {
  if (lud16.length === 0) return null;

  const [name, domain] = lud16.split('@');
  if (domain == null) return null;

  const url = new URL(`https://${domain}/`);
  url.pathname = `.well-known/lnurlp/${name}`;
  return url.toString();
};

export const lnurlPayUrlToLud06 = (url: string): string => {
  const data = new TextEncoder().encode(url);
  const words = bech32.toWords(data);
  return bech32.encode('lnurl', words, 2000);
};

export const fetchLnurlEndpoint = async (lnurl: string): Promise<LnurlEndpoint | LnurlError> => {
  const res = await fetch(lnurl, { mode: 'cors' });

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const body = await res.json();
  if (ensureSchema(LnurlEndpointErrorSchema)(body)) return body;

  if (!ensureSchema(LnurlEndpointSchema)(body)) {
    throw new Error('invalid form of endpoint response');
  }

  return body;
};

type ZapReceiptVerificationResult = { success: true } | { success: false; reason: string };

export const verifyZapReceipt = ({
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
  if (amount != null && bolt11.millisatoshis.toString() !== amount) {
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
