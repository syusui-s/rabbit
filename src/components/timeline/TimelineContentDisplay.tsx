import { Switch, Match, type Component } from 'solid-js';

import uniq from 'lodash/uniq';
import { type Filter } from 'nostr-tools/filter';
import { type Event as NostrEvent } from 'nostr-tools/pure';

import Timeline from '@/components/timeline/Timeline';
import { type TimelineContent } from '@/components/timeline/TimelineContext';
import useConfig from '@/core/useConfig';
import { textNote } from '@/nostr/event';
import useSubscription from '@/nostr/useSubscription';

import type TextNote from '@/nostr/event/TextNote';

const relatedEvents = (event: TextNote) => {
  const ids = [event.id];

  const rootId = event.rootEvent()?.id;
  if (rootId != null) ids.push(rootId);

  const replyId = event.replyingToEvent()?.id;
  if (replyId != null) ids.push(replyId);

  return uniq(ids);
};

const RepliesDisplay: Component<{ event: NostrEvent }> = (props) => {
  const { config } = useConfig();

  const event = () => textNote(props.event);

  const { events } = useSubscription(() => ({
    relayUrls: config().relayUrls,
    filters: [
      { kinds: [1], ids: relatedEvents(event()), limit: 25 },
      { kinds: [1], '#e': [props.event.id], limit: 25 } as Filter,
    ],
    limit: 200,
  }));

  return <Timeline events={[...events()].reverse()} />;
};

const TimelineContentDisplay: Component<{ timelineContent: TimelineContent }> = (props) => (
  <Switch>
    <Match when={props.timelineContent.type === 'Replies' && props.timelineContent} keyed>
      {(replies) => <RepliesDisplay event={replies.event} />}
    </Match>
  </Switch>
);

export default TimelineContentDisplay;
