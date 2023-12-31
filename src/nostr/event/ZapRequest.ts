import GenericEvent from '@/nostr/event/GenericEvent';

export default class ZapRequest extends GenericEvent {
  relays(): string[] | undefined {
    return this.findFirstTagByName('relays')?.slice(1);
  }

  lnurl(): string | undefined {
    return this.findFirstTagByName('lnurl')?.[1];
  }

  amountMilliSats(): number | null {
    const value = this.findFirstTagByName('amount')?.[1];
    if (value == null) return null;
    return parseInt(value, 10);
  }

  recipientPubkey(): string | null {
    return this.pTags()[0]?.[1];
  }

  amountSats(): number | null {
    const milliSats = this.amountMilliSats();
    if (milliSats == null) return null;
    return milliSats / 1000;
  }
}
