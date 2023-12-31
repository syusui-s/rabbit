import { bech32 } from 'bech32';
import * as Kind from 'nostr-tools/kinds';
import { type Event as NostrEvent, type UnsignedEvent } from 'nostr-tools/pure';
import { z } from 'zod';

import GenericEvent, { EventSchema } from '@/nostr/event/GenericEvent';
import isValidId from '@/nostr/event/isValidId';
import ensureSchema from '@/utils/ensureSchema';
import epoch from '@/utils/epoch';

export type Bolt11 = {
  amount: string;
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
  const match = bolt11.match(/^lnbc(?<amount>\d+)(?<multiplier>[munp]?)1.*$/);
  if (match?.groups == null) throw new Error('invalid invoice format');

  const { amount, multiplier } = match.groups;
  const satoshis = asSatoshi(amount, multiplier);
  const millisatoshis = satoshis * 1000;

  return { amount, multiplier, millisatoshis, satoshis };
};

export const createZapRequest = ({
  pubkey,
  content,
  relays,
  recipientPubkey,
  eventId,
  amountMilliSats,
  lnurl,
}: {
  pubkey: string;
  content: string;
  relays: string[];
  recipientPubkey: string;
  eventId?: string;
  amountMilliSats: string;
  lnurl?: string;
}): UnsignedEvent => {
  const tags: string[][] = [
    ['relays', ...relays],
    ['amount', amountMilliSats],
    ['p', recipientPubkey],
  ];
  if (eventId != null) tags.push(['e', eventId]);
  if (lnurl != null) tags.push(['lnurl', lnurl]);

  const event: UnsignedEvent = {
    kind: Kind.ZapRequest,
    pubkey,
    created_at: epoch(),
    tags,
    content,
  };
  return event;
};

const LnurlPayRequestMetadataSchema = z.object({
  callback: z.string().nonempty(),
  maxSendable: z.number().positive(),
  minSendable: z.number().positive(),
  metadata: z.string(),
  tag: z.literal('payRequest'),
  allowsNostr: z.optional(z.boolean()),
  nostrPubkey: z.optional(z.string().refine(isValidId)),
});

export type LnurlPayRequestMetadata = z.infer<typeof LnurlPayRequestMetadataSchema>;

export const getLnurlPayRequestUrl = ({
  lud06,
  lud16,
}: {
  lud06?: string;
  lud16?: string;
}): string | null => {
  if (lud06 != null && lud06.length > 0) {
    const { words } = bech32.decode(lud06, 2000);
    const data = bech32.fromWords(words);
    return new TextDecoder('utf-8').decode(new Uint8Array(data));
  }

  if (lud16 != null && lud16.length > 0) {
    const [name, domain] = lud16.split('@');
    if (domain == null) return null;
    return `https://${domain}/.well-known/lnurlp/${name}`;
  }

  return null;
};

export const fetchLnurlPayRequestMetadata = async (params: {
  lud06?: string;
  lud16?: string;
}): Promise<LnurlPayRequestMetadata | null> => {
  try {
    const lnurl = getLnurlPayRequestUrl(params);
    if (lnurl == null) return null;

    const res = await fetch(lnurl, { mode: 'cors' });
    if (res.status !== 200) return null;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const body = await res.json();
    if (!ensureSchema(LnurlPayRequestMetadataSchema)(body)) return null;

    return body;
  } catch (e) {
    console.error('failed to get lnurl metadata', params, e);
    return null;
  }
};

type ZapReceiptVerificationResult = { success: true } | { success: false; reason: string };

export const verifyZapReceipt = ({
  zapReceipt: rawZapReceipt,
  lnurlProviderPubkey,
  lnurlPayUrl,
}: {
  zapReceipt: NostrEvent;
  lnurlProviderPubkey: string;
  lnurlPayUrl: string;
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
  if (lnurl != null && lnurl !== lnurlPayUrl) {
    return {
      success: false,
      reason: `lnurl mismatch: fromProfile=${lnurlPayUrl}, request=${lnurl}`,
    };
  }

  return { success: true };
};
