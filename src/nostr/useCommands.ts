import {
  getEventHash,
  type UnsignedEvent,
  type Event as NostrEvent,
  type Pub,
  type Kind,
} from 'nostr-tools';

import '@/types/nostr.d';
import usePool from '@/nostr/usePool';

import epoch from '@/utils/epoch';

export type PublishTextNoteParams = {
  relayUrls: string[];
  pubkey: string;
  content: string;
  tags?: string[][];
  notifyPubkeys?: string[];
  rootEventId?: string;
  mentionEventIds?: string[];
  replyEventId?: string;
  contentWarning?: string;
};

// NIP-20: Command Result
const waitCommandResult = (pub: Pub, relayUrl: string): Promise<void> => {
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

export const buildTags = ({
  notifyPubkeys,
  rootEventId,
  mentionEventIds,
  replyEventId,
  contentWarning,
  tags,
}: PublishTextNoteParams): string[][] => {
  // NIP-10
  const eTags = [];
  const pTags = notifyPubkeys?.map((p) => ['p', p]) ?? [];
  const otherTags = [];

  // the order of e tags should be [rootId, ...mentionIds, replyIds] for old clients
  if (rootEventId != null) {
    eTags.push(['e', rootEventId, '', 'root']);
  }
  if (mentionEventIds != null) {
    mentionEventIds.forEach((id) => eTags.push(['e', id, '', 'mention']));
  }
  if (replyEventId != null) {
    eTags.push(['e', replyEventId, '', 'reply']);
  }

  if (contentWarning != null) {
    otherTags.push(['content-warning', contentWarning]);
  }

  if (tags != null && tags.length > 0) {
    otherTags.push(...tags);
  }

  return [...eTags, ...pTags, ...otherTags];
};

const useCommands = () => {
  const pool = usePool();

  const publishEvent = async (
    relayUrls: string[],
    event: UnsignedEvent,
  ): Promise<Promise<void>[]> => {
    const preSignedEvent: UnsignedEvent & { id?: string } = { ...event };
    preSignedEvent.id = getEventHash(preSignedEvent);

    if (window.nostr == null) {
      throw new Error('NIP-07 implementation not found');
    }
    const signedEvent = await window.nostr.signEvent(preSignedEvent);

    return relayUrls.map(async (relayUrl) => {
      const relay = await pool().ensureRelay(relayUrl);
      const pub = relay.publish(signedEvent);
      return waitCommandResult(pub, relayUrl);
    });
  };

  // NIP-01
  const publishTextNote = (params: PublishTextNoteParams): Promise<Promise<void>[]> => {
    const { relayUrls, pubkey, content } = params;
    const tags = buildTags(params);

    const preSignedEvent: UnsignedEvent = {
      kind: 1,
      pubkey,
      created_at: epoch(),
      tags,
      content,
    };
    return publishEvent(relayUrls, preSignedEvent);
  };

  return {
    publishTextNote,
    // NIP-25
    publishReaction({
      relayUrls,
      pubkey,
      eventId,
      content,
      notifyPubkey,
    }: {
      relayUrls: string[];
      pubkey: string;
      eventId: string;
      content: string;
      notifyPubkey: string;
    }): Promise<Promise<void>[]> {
      // TODO ensure that content is + or - or emoji.
      const preSignedEvent: UnsignedEvent = {
        kind: 7,
        pubkey,
        created_at: epoch(),
        tags: [
          ['e', eventId, ''],
          ['p', notifyPubkey],
        ],
        content,
      };
      return publishEvent(relayUrls, preSignedEvent);
    },
    // NIP-18
    publishDeprecatedRepost({
      relayUrls,
      pubkey,
      eventId,
      notifyPubkey,
    }: {
      relayUrls: string[];
      pubkey: string;
      eventId: string;
      notifyPubkey: string;
    }): Promise<Promise<void>[]> {
      const preSignedEvent: UnsignedEvent = {
        kind: 6 as Kind,
        pubkey,
        created_at: epoch(),
        tags: [
          ['e', eventId, ''],
          ['p', notifyPubkey],
        ],
        content: '',
      };
      return publishEvent(relayUrls, preSignedEvent);
    },
  };
};

export default useCommands;
