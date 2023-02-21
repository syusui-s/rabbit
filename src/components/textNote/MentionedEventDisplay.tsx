import type { MentionedEvent } from '@/core/parseTextNote';

export type MentionedEventDisplayProps = {
  mentionedEvent: MentionedEvent;
};

const MentionedEventDisplay = (props: MentionedEventDisplayProps) => {
  return <span class="text-blue-500 underline">@{props.mentionedEvent.eventId}</span>;
};

export default MentionedEventDisplay;
