import { createMemo } from 'solid-js';

import * as Kind from 'nostr-tools/kinds';
import { Event as NostrEvent } from 'nostr-tools/pure';

import useConfig from '@/core/useConfig';
import Tags from '@/nostr/event/Tags';
import useSubscription from '@/nostr/useSubscription';
import ensureNonNull from '@/utils/ensureNonNull';

type UseFollowSetsProps = {
  author: string;
};

export type UseFollowSets = {
  events: () => NostrEvent[];
  followSets: () => NostrEvent[];
};

const isLikelyFollowSet = (event: NostrEvent) => {
  const tags = new Tags(event.tags);
  const identifier = tags.findFirstTagByName('d')?.[1];
  if (identifier == null) return false;

  return !(
    identifier === 'mute' ||
    /^chats\//.test(identifier) ||
    /^settings\//.test(identifier) ||
    /^notifications\//.test(identifier)
  );
};

const useFollowSets = (propsProvider: () => UseFollowSetsProps | null): UseFollowSets => {
  const props = createMemo(propsProvider);

  const { config } = useConfig();

  const { events } = useSubscription(() =>
    ensureNonNull([props()] as const)(([propsNonNull]) => ({
      filters: [
        {
          kinds: [Kind.Followsets],
          authors: [propsNonNull.author],
        },
      ],
      relayUrls: config().relayUrls,
    })),
  );

  const followSets = () => events().filter(isLikelyFollowSet);

  return {
    events,
    followSets,
  };
};

export default useFollowSets;
