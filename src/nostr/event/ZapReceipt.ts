import { type Event as NostrEvent } from 'nostr-tools/pure';

import GenericEvent from '@/nostr/event/GenericEvent';
import ZapRequest from '@/nostr/event/ZapRequest';
import { parseBolt11, Bolt11 } from '@/nostr/zap';

export default class ZapReceipt extends GenericEvent {
  #bolt11?: Bolt11;

  #description?: ZapRequest;

  description(): ZapRequest {
    if (this.#description) return this.#description;

    const rawZapReceipt = this.findFirstTagByName('description')?.[1];
    if (rawZapReceipt == null) throw new Error('description should exist');
    const obj = JSON.parse(rawZapReceipt) as NostrEvent;
    this.#description = new ZapRequest(obj);
    return this.#description;
  }

  bolt11(): Bolt11 {
    if (this.#bolt11 != null) return this.#bolt11;

    const rawBolt11 = this.findFirstTagByName('bolt11')?.[1];
    if (rawBolt11 == null) throw new Error('bolt11 should exist');
    this.#bolt11 = parseBolt11(rawBolt11);
    return this.#bolt11;
  }

  amountSats(): number {
    return this.bolt11().satoshis;
  }

  senderPubkey() {
    return this.description().pubkey;
  }

  zappedEventId(): string | undefined {
    return this.findFirstTagByName('e')?.[1];
  }

  zappedPubkey(): string | undefined {
    return this.findFirstTagByName('p')?.[1];
  }
}
