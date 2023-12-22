import { createMemo } from 'solid-js';

import useConfig from '@/core/useConfig';
import useSubscription from '@/nostr/useSubscription';

export type UseBookmarksProps = {
  pubkey: string;
};

export default function useBookmarks(propsProvider: () => UseBookmarksProps) {
  const { config } = useConfig();
  const props = createMemo(propsProvider);

  const { events } = useSubscription(() => ({
    relayUrls: config().relayUrls,
    filters: [{ kinds: [30001], authors: [props().pubkey] }],
    continuous: true,
  }));

  return { bookmarks: events };
}
