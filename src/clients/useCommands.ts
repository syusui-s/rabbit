import { getEventHash } from 'nostr-tools/event';
import type { Event as NostrEvent } from 'nostr-tools/event';
import type { Pub } from 'nostr-tools/relay';

import usePool from '@/clients/usePool';

// NIP-20: Command Result
const waitCommandResult = (pub: Pub): Promise<void> => {
  return new Promise((resolve, reject) => {
    pub.on('ok', () => {
      console.log(`${relayUrl} has accepted our event`);
      resolve();
    });
    pub.on('failed', (reason: string) => {
      console.log(`failed to publish to ${relayUrl}: ${reason}`);
      reject(reason);
    });
  });
};

const useCommands = () => {
  const pool = usePool();

  const publishEvent = async (relayUrls: string[], event: NostrEvent): Promise<Promise<void>[]> => {
    const preSignedEvent: NostrEvent = { ...event };
    preSignedEvent.id = getEventHash(preSignedEvent);
    // TODO define window.nostr
    const signedEvent = (await window.nostr.signEvent(preSignedEvent)) as NostrEvent;

    return relayUrls.map(async (relayUrl) => {
      const relay = await pool().ensureRelay(relayUrl);
      const pub = relay.publish(signedEvent);
      return waitCommandResult(pub);
    });
  };

  return {
    // NIP-01
    publishTextNote({
      relayUrls,
      pubkey,
      content,
    }: {
      relayUrls: string[];
      pubkey: string;
      content: string;
    }): Promise<Promise<void>[]> {
      const preSignedEvent: NostrEvent = {
        kind: 1,
        pubkey,
        created_at: Math.floor(Date.now() / 1000),
        tags: [],
        content,
      };
      // TODO define window.nostr
      return publishEvent(relayUrls, preSignedEvent);
    },
    // NIP-25
    publishReaction({
      relayUrls,
      pubkey,
      content,
      eventId,
      notifyPubkey,
    }: {
      relayUrls: string[];
      pubkey: string;
      content: string;
      eventId: string;
      notifyPubkey: string;
    }): Promise<Promise<void>[]> {
      // TODO ensure that content is + or - or emoji.
      const preSignedEvent: NostrEvent = {
        kind: 7,
        pubkey,
        created_at: Math.floor(Date.now() / 1000),
        tags: [
          ['e', eventId],
          ['p', notifyPubkey],
        ],
        content,
      };
      // TODO define window.nostr
      return publishEvent(relayUrls, preSignedEvent);
    },
  };
};

export default useCommands;
