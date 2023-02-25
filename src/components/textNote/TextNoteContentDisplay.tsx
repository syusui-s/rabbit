import { For } from 'solid-js';
import parseTextNote, { type ParsedTextNoteNode } from '@/core/parseTextNote';
import type { Event as NostrEvent } from 'nostr-tools/event';
import PlainTextDisplay from '@/components/textNote/PlainTextDisplay';
import MentionedUserDisplay from '@/components/textNote/MentionedUserDisplay';
import MentionedEventDisplay from '@/components/textNote/MentionedEventDisplay';

export type TextNoteContentDisplayProps = {
  event: NostrEvent;
  embedding: boolean;
};

const TextNoteContentDisplay = (props: TextNoteContentDisplayProps) => {
  return (
    <For each={parseTextNote(props.event)}>
      {(item: ParsedTextNoteNode) => {
        if (item.type === 'PlainText') {
          return <PlainTextDisplay plainText={item} />;
        }
        if (item.type === 'MentionedUser') {
          return <MentionedUserDisplay mentionedUser={item} />;
        }
        if (item.type === 'MentionedEvent' && props.embedding) {
          return <MentionedEventDisplay mentionedEvent={item} />;
        }
        if (item.type === 'HashTag') {
          return <span class="text-blue-500 underline ">{item.content}</span>;
        }
        return null;
      }}
    </For>
  );
};

export default TextNoteContentDisplay;
