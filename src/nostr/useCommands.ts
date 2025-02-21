import {
  verifyEvent,
  getEventHash,
  type Event as NostrEvent,
  type UnsignedEvent,
} from 'nostr-tools/pure';

import usePool from '@/nostr/usePool';

export const signEvent = async (unsignedEvent: UnsignedEvent): Promise<NostrEvent> => {
  const id = getEventHash(unsignedEvent);
  const preSignedEvent: UnsignedEvent & { id: string } = { ...unsignedEvent, id };

  if (window.nostr == null) {
    throw new Error('NIP-07 implementation not found');
  }
  const signedEvent = await window.nostr.signEvent(preSignedEvent);

  if (!verifyEvent({ ...signedEvent, id })) {
    throw new Error('nostr.signEvent returned invalid data');
  }

  return signedEvent;
};

export const encrypt = async (pubkey: string, content: string): Promise<string> => {
  if (window.nostr == null) {
    throw new Error('NIP-07 implementation not found');
  }
  if (window.nostr.nip04 == null) {
    throw new Error('NIP-04 implementation not found');
  }
  return window.nostr.nip04.encrypt(pubkey, content);
};

export const decrypt = async (pubkey: string, encryptedContent: string): Promise<string> => {
  if (window.nostr == null) {
    throw new Error('NIP-07 implementation not found');
  }
  if (window.nostr.nip04 == null) {
    throw new Error('NIP-04 implementation not found');
  }

  return window.nostr.nip04.decrypt(pubkey, encryptedContent);
};

const useCommands = () => {
  const pool = usePool();

  const publishEvent = (relayUrls: string[], event: NostrEvent): Promise<void>[] =>
    relayUrls.map(async (relayUrl) => {
      const relay = await pool().ensureRelay(relayUrl);
      try {
        await relay.publish(event);
      } catch (err) {
        const reason = err instanceof Error ? err.message : JSON.stringify(err);
        console.warn(`failed to publish to ${relayUrl}: ${reason}`);
      }
    });

  const signAndPublishEvent = async (
    relayUrls: string[],
    unsignedEvent: UnsignedEvent,
  ): Promise<Promise<void>[]> => {
    const signedEvent = await signEvent(unsignedEvent);
    return publishEvent(relayUrls, signedEvent);
  };

  return {
    publishEvent,
    signAndPublishEvent,
  };
};

export default useCommands;
