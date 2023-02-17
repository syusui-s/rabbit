import { getEventHash } from 'nostr-tools/event';
import type { Event as NostrEvent } from 'nostr-tools/event';

import usePool from '@/clients/usePool';

type UseCommands = {
  publishTextNote: ({ content }: { content: string }) => Promise<void>;
};

const useCommands = (): UseCommands => {
  const pool = usePool();

  const publishTextNote = async ({
    relayUrls,
    pubkey,
    content,
  }: {
    relayUrls: string[];
    pubkey: string;
    content: string;
  }) => {
    const preSignedEvent: NostrEvent = {
      kind: 1,
      pubkey,
      created_at: Math.floor(Date.now() / 1000),
      tags: [],
      content,
    };
    preSignedEvent.id = getEventHash(preSignedEvent);
    const signedEvent = await window.nostr.signEvent(preSignedEvent);

    return relayUrls.map(async (relayUrl) => {
      const relay = await pool().ensureRelay(relayUrl);
      const pub = relay.publish(signedEvent);

      return new Promise((resolve, reject) => {
        pub.on('ok', () => {
          console.log(`${relayUrl} has accepted our event`);
          resolve(null);
        });
        pub.on('failed', (reason: any) => {
          console.log(`failed to publish to ${relayUrl}: ${reason}`);
          reject(reason);
        });
      });
    });
  };

  return { publishTextNote };
};

export default useCommands;
