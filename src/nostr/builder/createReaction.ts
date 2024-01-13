import * as Kind from 'nostr-tools/kinds';
import { type UnsignedEvent } from 'nostr-tools/pure';

import { ReactionTypes } from '@/nostr/event/Reaction';
import epoch from '@/utils/epoch';

export type CreateReactionParams = {
  pubkey: string;
  eventId: string;
  kind: number;
  reactionTypes: ReactionTypes;
  notifyPubkey: string;
};

// NIP-25
const createReaction = ({
  pubkey,
  eventId,
  kind,
  reactionTypes,
  notifyPubkey,
}: CreateReactionParams): UnsignedEvent => {
  const tags = [
    ['e', eventId, ''],
    ['p', notifyPubkey],
    ['k', kind.toString()],
  ];

  if (reactionTypes.type === 'CustomEmoji') {
    tags.push(['emoji', reactionTypes.shortcode, reactionTypes.url]);
  }

  return {
    kind: Kind.Reaction,
    pubkey,
    created_at: epoch(),
    tags,
    content: reactionTypes.content,
  };
};

export default createReaction;
