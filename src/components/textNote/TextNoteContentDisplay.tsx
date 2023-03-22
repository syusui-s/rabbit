import { For } from 'solid-js';
import parseTextNote, { type ParsedTextNoteNode } from '@/core/parseTextNote';
import type { Event as NostrEvent } from 'nostr-tools';
import PlainTextDisplay from '@/components/textNote/PlainTextDisplay';
import MentionedUserDisplay from '@/components/textNote/MentionedUserDisplay';
import MentionedEventDisplay from '@/components/textNote/MentionedEventDisplay';
import ImageDisplay from '@/components/textNote/ImageDisplay';
import SafeLink from '@/components/utils/SafeLink';
import eventWrapper from '@/core/event';
import { isImageUrl } from '@/utils/imageUrl';
import useConfig from '@/nostr/useConfig';
import EventLink from '../EventLink';
import TextNoteDisplayById from './TextNoteDisplayById';

export type TextNoteContentDisplayProps = {
  event: NostrEvent;
  embedding: boolean;
};

const TextNoteContentDisplay = (props: TextNoteContentDisplayProps) => {
  const { config } = useConfig();
  const event = () => eventWrapper(props.event);
  return (
    <For each={parseTextNote(props.event)}>
      {(item: ParsedTextNoteNode) => {
        if (item.type === 'PlainText') {
          return <PlainTextDisplay plainText={item} />;
        }
        if (item.type === 'MentionedUser') {
          return <MentionedUserDisplay mentionedUser={item} />;
        }
        if (item.type === 'MentionedEvent') {
          if (props.embedding) {
            return <MentionedEventDisplay mentionedEvent={item} />;
          }
          return <EventLink eventId={item.eventId} />;
        }
        if (item.type === 'Bech32Entity') {
          if (item.data.type === 'note' && props.embedding) {
            return (
              <div class="my-1 rounded border p-1">
                <TextNoteDisplayById eventId={item.data.data} actions={false} />
              </div>
            );
          }
          return <span class="text-blue-500 underline">{item.content}</span>;
        }
        if (item.type === 'HashTag') {
          return <span class="text-blue-500 underline">{item.content}</span>;
        }
        if (item.type === 'URL') {
          if (isImageUrl(new URL(item.content))) {
            return (
              <ImageDisplay
                url={item.content}
                initialHidden={
                  !config().showImage || event().contentWarning().contentWarning || !props.embedding
                }
              />
            );
          }
          return <SafeLink class="text-blue-500 underline" href={item.content} />;
        }
        return null;
      }}
    </For>
  );
};

export default TextNoteContentDisplay;
