import { Show } from 'solid-js';
import TextNoteDisplayById from '@/components/textNote/TextNoteDisplayById';
import { type MentionedEvent } from '@/core/parseTextNote';

export type MentionedEventDisplayProps = {
  mentionedEvent: MentionedEvent;
};

const MentionedEventDisplay = (props: MentionedEventDisplayProps) => {
  return (
    <Show
      when={props.mentionedEvent.marker == null || props.mentionedEvent.marker === 'mention'}
      fallback={<span class="text-blue-500 underline">{props.mentionedEvent.eventId}</span>}
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
