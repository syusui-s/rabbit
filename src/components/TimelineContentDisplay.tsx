import { Switch, Match, type Component } from 'solid-js';

import uniq from 'lodash/uniq';
import { Filter, Event as NostrEvent } from 'nostr-tools';

import Timeline from '@/components/Timeline';
import { type TimelineContent } from '@/components/TimelineContext';
import useConfig from '@/core/useConfig';
import eventWrapper from '@/nostr/event';
import useSubscription from '@/nostr/useSubscription';

const relatedEvents = (rawEvent: NostrEvent) => {
  const event = () => eventWrapper(rawEvent);
  const ids = [rawEvent.id];

  const rootId = event().rootEvent()?.id;
  if (rootId != null) ids.push(rootId);

  const replyId = event().replyingToEvent()?.id;
  if (replyId != null) ids.push(replyId);

  return uniq(ids);
};

const RepliesDisplay: Component<{ event: NostrEvent }> = (props) => {
  const { config } = useConfig();

  const { events } = useSubscription(() => ({
    relayUrls: config().relayUrls,
    filters: [
      { kinds: [1], ids: relatedEvents(props.event), limit: 25 },
      { kinds: [1], '#e': [props.event.id], limit: 25 } as Filter,
    ],
    limit: 200,
  }));

  return <Timeline events={[...events()].reverse()} />;
};

const TimelineContentDisplay: Component<{ timelineContent: TimelineContent }> = (props) => {
  return (
    <Switch>
      <Match when={props.timelineContent.type === 'Replies' && props.timelineContent} keyed>
        {(replies) => <RepliesDisplay event={replies.event} />}
      </Match>
    </Switch>
  );
};

export default TimelineContentDisplay;
