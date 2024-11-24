import * as Kind from 'nostr-tools/kinds';
import { type UnsignedEvent } from 'nostr-tools/pure';

import Tags from '@/nostr/event/Tags';
import epoch from '@/utils/epoch';

export const emptyFollowings = (pubkey: string): UnsignedEvent => ({
  kind: Kind.Contacts,
  pubkey,
  created_at: epoch(),
  content: '',
  tags: [],
});

const createFollowings = ({
  pubkey,
  updatedTags,
  content,
}: {
  pubkey: string;
  updatedTags: string[][];
  content: string;
}): UnsignedEvent => ({
  kind: Kind.Contacts,
  pubkey,
  created_at: epoch(),
  tags: updatedTags,
  content,
});

export const updateTags = (baseEvent: UnsignedEvent, updater: (tags: string[][]) => string[][]) =>
  createFollowings({
    pubkey: baseEvent.pubkey,
    content: baseEvent.content,
    updatedTags: updater(baseEvent.tags),
  });

export const addPubkey = (baseEvent: UnsignedEvent, pubkey: string) => {
  if (new Tags(baseEvent.tags).taggedPubkeys().includes(pubkey)) {
    return baseEvent;
  }
  const add = (baseTags: string[][]) => [...baseTags, ['p', pubkey]];
  return updateTags(baseEvent, add);
};

export const removePubkey = (baseEvent: UnsignedEvent, pubkey: string) => {
  const remove = (baseTags: string[][]) =>
    baseTags.filter(([name, value]) => !(name === 'p' && value === pubkey));
  return updateTags(baseEvent, remove);
};

export default createFollowings;
