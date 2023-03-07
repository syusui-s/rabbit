import { For } from 'solid-js';
import parseTextNote, { type ParsedTextNoteNode } from '@/core/parseTextNote';
import type { Event as NostrEvent } from 'nostr-tools';
import PlainTextDisplay from '@/components/textNote/PlainTextDisplay';
import MentionedUserDisplay from '@/components/textNote/MentionedUserDisplay';
import MentionedEventDisplay from '@/components/textNote/MentionedEventDisplay';
import ImageDisplay from '@/components/textNote/ImageDisplay';

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
          return <span class="text-blue-500 underline">{item.content}</span>;
        }
        if (item.type === 'URL') {
          if (item.content.match(/\.(jpeg|jpg|png|gif|webp)$/i)) {
            return <ImageDisplay url={item.content} />;
          }
          return (
            <a
              class="text-blue-500 underline"
              href={item.content}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.content}
            </a>
          );
        }
        return null;
      }}
    </For>
  );
};

export default TextNoteContentDisplay;
