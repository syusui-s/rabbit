import { createMemo } from 'solid-js';

import * as Kind from 'nostr-tools/kinds';

import NostrSet, { NostrSetTags } from '@/nostr/event/sets/NostrSet';
import { parseTags } from '@/nostr/event/Tags';
import useDecrypt from '@/nostr/useDecrypt';
import useParameterizedReplaceableEvent, {
  queryKeyUseParameterizedReplaceableEvent,
} from '@/nostr/useParameterizedReplaceableEvent';
import ensureNonNull from '@/utils/ensureNonNull';

type UseFollowSetProps = {
  author: string;
  identifier: string;
};

export const queryKeyUseFollowSet = (props: UseFollowSetProps) =>
  queryKeyUseParameterizedReplaceableEvent({ kind: Kind.Followsets, ...props });

const useFollowSet = (propsProvider: () => UseFollowSetProps) => {
  const props = createMemo(propsProvider);

  const { query } = useParameterizedReplaceableEvent(() => ({
    kind: Kind.Followsets,
    author: props().author,
    identifier: props().identifier,
  }));

  const event = () => query.data;

  const decryptedContent = useDecrypt(() =>
    ensureNonNull([event()?.content] as const)(([content]) => ({
      encrypted: content,
    })),
  );

  const decryptedTags = createMemo(() => {
    const decryptedJson = decryptedContent();
    if (decryptedJson == null) return null;

    const tags = parseTags(decryptedJson);
    return new NostrSetTags(tags.tags);
  });

  const followSet = createMemo(() => {
    if (query.data == null) return null;
    return new NostrSet(query.data);
  });

  const pubkeys = () => [
    ...(followSet()?.taggedPubkeys() ?? []),
    ...(decryptedTags()?.taggedPubkeys() ?? []),
  ];

  const title = () => followSet()?.title() || decryptedTags()?.title();

  const description = () => followSet()?.description() || decryptedTags()?.description();

  const image = () => followSet()?.image() || decryptedTags()?.image();

  return {
    event,
    followSet,
    pubkeys,
    title,
    description,
    image,
    query,
  };
};

export default useFollowSet;
