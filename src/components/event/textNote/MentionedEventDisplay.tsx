import { Show } from 'solid-js';

import * as Kind from 'nostr-tools/kinds';

import EventDisplayById from '@/components/event/EventDisplayById';
import EventLink from '@/components/EventLink';
import LazyLoad from '@/components/utils/LazyLoad';
import { type MentionedEvent } from '@/nostr/parseTextNote';

export type MentionedEventDisplayProps = {
  mentionedEvent: MentionedEvent;
};

const MentionedEventDisplay = (props: MentionedEventDisplayProps) => (
  <Show
    when={props.mentionedEvent.marker != null && props.mentionedEvent.marker.length > 0}
    fallback={<EventLink eventId={props.mentionedEvent.eventId} />}
  >
    <div class="my-1 rounded-sm border p-1">
      <LazyLoad>
        {() => (
          <EventDisplayById
            eventId={props.mentionedEvent.eventId}
            embedding={false}
            actions={false}
            ensureKinds={[Kind.ShortTextNote]}
          />
        )}
      </LazyLoad>
    </div>
  </Show>
);

export default MentionedEventDisplay;
