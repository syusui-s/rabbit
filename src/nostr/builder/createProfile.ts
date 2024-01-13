import * as Kind from 'nostr-tools/kinds';
import { type UnsignedEvent } from 'nostr-tools/pure';

import { ProfileWithOtherProperties, Profile } from '@/nostr/event/Profile';
import epoch from '@/utils/epoch';

const createProfile = ({
  pubkey,
  profile,
  otherProperties,
}: {
  pubkey: string;
  profile: Profile;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  otherProperties: Record<string, any>;
}): UnsignedEvent => {
  const contentObj: ProfileWithOtherProperties = {
    ...profile,
    ...otherProperties,
  };
  const content = JSON.stringify(contentObj);
  return {
    kind: Kind.Metadata,
    pubkey,
    created_at: epoch(),
    tags: [],
    content,
  };
};

export default createProfile;
