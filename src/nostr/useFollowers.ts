import { createMemo } from 'solid-js';

import uniq from 'lodash/uniq';
import { Metadata } from 'nostr-tools/kinds';

import useConfig from '@/core/useConfig';
import useSubscription from '@/nostr/useSubscription';

export type UseFollowersProps = {
  pubkey: string;
};

export default function useFollowers(propsProvider: () => UseFollowersProps) {
  const { config } = useConfig();
  const props = createMemo(propsProvider);

  const { events } = useSubscription(() => ({
    relayUrls: config().relayUrls,
    filters: [{ kinds: [Metadata], '#p': [props().pubkey] }],
    limit: Number.MAX_SAFE_INTEGER,
    continuous: true,
  }));

  const followersPubkeys = () => uniq(events()?.map((ev) => ev.pubkey));

  const count = () => followersPubkeys().length;

  return { followersPubkeys, count };
}
