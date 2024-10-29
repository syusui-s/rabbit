import {
  verifyEvent,
  getEventHash,
  type Event as NostrEvent,
  type UnsignedEvent,
} from 'nostr-tools/pure';

import createContacts from '@/nostr/builder/createContacts';
import createDeletion from '@/nostr/builder/createDeletion';
import createProfile from '@/nostr/builder/createProfile';
import createReaction from '@/nostr/builder/createReaction';
import createRepost from '@/nostr/builder/createRepost';
import createTextNote from '@/nostr/builder/createTextNote';
import usePool from '@/nostr/usePool';

type WithRelayUrls<T> = T & { relayUrls: string[] };

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

const useCommands = () => {
  const pool = usePool();

  const publishEvent = (relayUrls: string[], event: NostrEvent): Promise<void>[] =>
    relayUrls.map(async (relayUrl) => {
      const relay = await pool().ensureRelay(relayUrl);
      try {
        await relay.publish(event);
        console.log(`${relayUrl} has accepted our event`);
      } catch (err) {
        const reason = err instanceof Error ? err.message : JSON.stringify(err);
        console.warn(`failed to publish to ${relayUrl}: ${reason}`);
      }
    });

  const asPublish =
    <P>(f: (p: P) => UnsignedEvent) =>
    async (params: WithRelayUrls<P>): Promise<Promise<void>[]> => {
      const unsignedEvent = f(params);
      const signedEvent = await signEvent(unsignedEvent);
      return publishEvent(params.relayUrls, signedEvent);
    };

  return {
    publishTextNote: asPublish(createTextNote),
    publishReaction: asPublish(createReaction),
    publishRepost: asPublish(createRepost),
    updateProfile: asPublish(createProfile),
    updateContacts: asPublish(createContacts),
    deleteEvent: asPublish(createDeletion),
  };
};

export default useCommands;
