import * as Kind from 'nostr-tools/kinds';
import { type UnsignedEvent } from 'nostr-tools/pure';

import epoch from '@/utils/epoch';

const createContacts = ({
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

export default createContacts;
