import { Show } from 'solid-js';

import { Kind } from 'nostr-tools';

// eslint-disable-next-line import/no-cycle
import EventDisplayById from '@/components/event/EventDisplayById';
import EventLink from '@/components/EventLink';
import { type MentionedEvent } from '@/nostr/parseTextNote';

export type MentionedEventDisplayProps = {
  mentionedEvent: MentionedEvent;
};

const MentionedEventDisplay = (props: MentionedEventDisplayProps) => {
  return (
    <Show
      when={props.mentionedEvent.marker != null && props.mentionedEvent.marker.length > 0}
      fallback={<EventLink eventId={props.mentionedEvent.eventId} />}
    >
      <div class="my-1 rounded border p-1">
        <EventDisplayById
          eventId={props.mentionedEvent.eventId}
          embedding={false}
          actions={false}
          ensureKinds={[Kind.Text]}
        />
      </div>
    </Show>
  );
};

export default MentionedEventDisplay;
