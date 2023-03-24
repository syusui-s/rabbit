import { createMemo, createSignal } from 'solid-js';
import { Kind } from 'nostr-tools';
import uniq from 'lodash/uniq';

import useConfig from '@/nostr/useConfig';
import useSubscription from '@/nostr/useSubscription';

export type UseFollowersProps = {
  pubkey: string;
};

export default function useFollowers(propsProvider: () => UseFollowersProps) {
  const { config } = useConfig();
  const props = createMemo(propsProvider);

  const { events } = useSubscription(() => ({
    relayUrls: config().relayUrls,
    filters: [{ kinds: [Kind.Contacts], '#p': [props().pubkey] }],
    limit: Infinity,
    continuous: true,
  }));

  const followersPubkeys = () => uniq(events()?.map((ev) => ev.pubkey));

  return { followersPubkeys };
}
