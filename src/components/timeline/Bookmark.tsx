import { For, type Component, createMemo } from 'solid-js';

import * as Kind from 'nostr-tools/kinds';
import { type Event as NostrEvent } from 'nostr-tools/pure';

import ColumnItem from '@/components/ColumnItem';
import EventDisplayById from '@/components/event/EventDisplayById';
import { genericEvent } from '@/nostr/event';
import { parseTags } from '@/nostr/event/Tags';
import useDecrypt from '@/nostr/useDecrypt';

export type BookmarkProps = {
  event: NostrEvent;
};

const Bookmark: Component<BookmarkProps> = (props) => {
  const bookmark = createMemo(() => genericEvent(props.event));

  const decrypted = useDecrypt(() => {
    const { content } = bookmark();
    if (content == null || content.length === 0) return null;
    return { id: bookmark().id, encrypted: content };
  });

  const bookmarkedEventIdsPrivate = () => {
    const json = decrypted();
    if (json == null) return [];
    console.log(json);

    try {
      return parseTags(json).taggedEventIds();
    } catch (err) {
      console.warn(err);
      return [];
    }
  };

  const bookmarkedEventIds = () => bookmark().taggedEventIds();

  return (
    <For each={[...bookmarkedEventIds(), ...bookmarkedEventIdsPrivate()]}>
      {(eventId) => (
        <ColumnItem>
          <EventDisplayById eventId={eventId} ensureKinds={[Kind.ShortTextNote]} />
        </ColumnItem>
      )}
    </For>
  );
};

export default Bookmark;
