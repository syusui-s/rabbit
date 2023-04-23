import { Show } from 'solid-js';

// eslint-disable-next-line import/no-cycle
import TextNoteDisplayById from '@/components/textNote/TextNoteDisplayById';
import { type MentionedEvent } from '@/core/parseTextNote';

import EventLink from '../EventLink';

export type MentionedEventDisplayProps = {
  mentionedEvent: MentionedEvent;
};

const MentionedEventDisplay = (props: MentionedEventDisplayProps) => {
  return (
    <Show
      when={props.mentionedEvent.marker != null && props.mentionedEvent.marker.length > 0}
      fallback={() => <EventLink eventId={props.mentionedEvent.eventId} />}
    >
      <div class="my-1 rounded border p-1">
        <TextNoteDisplayById
          eventId={props.mentionedEvent.eventId}
          embedding={false}
          actions={false}
        />
      </div>
    </Show>
  );
};

export default MentionedEventDisplay;
