import { For } from 'solid-js';

import { Kind, Event as NostrEvent } from 'nostr-tools';

// eslint-disable-next-line import/no-cycle
import EventDisplayById from '@/components/event/EventDisplayById';
// import ParameterizedReplaceableEventDisplayById from '@/components/event/ParameterizedReplaceableEventDisplayById';
import ImageDisplay from '@/components/event/textNote/ImageDisplay';
import MentionedEventDisplay from '@/components/event/textNote/MentionedEventDisplay';
import MentionedUserDisplay from '@/components/event/textNote/MentionedUserDisplay';
import VideoDisplay from '@/components/event/textNote/VideoDisplay';
import EventLink from '@/components/EventLink';
import SafeLink from '@/components/utils/SafeLink';
import PreviewedLink from '@/components/utils/PreviewedLink';
import { createSearchColumn } from '@/core/column';
import useConfig from '@/core/useConfig';
import { useRequestCommand } from '@/hooks/useCommandBus';
import { textNote } from '@/nostr/event';
import { type ParsedTextNoteNode } from '@/nostr/parseTextNote';
import { isImageUrl, isVideoUrl } from '@/utils/url';

export type TextNoteContentDisplayProps = {
  event: NostrEvent;
  embedding: boolean;
};

const TextNoteContentDisplay = (props: TextNoteContentDisplayProps) => {
  const { config, saveColumn } = useConfig();

  const request = useRequestCommand();

  const event = () => textNote(props.event);

  const addHashTagColumn = (query: string) => {
    saveColumn(createSearchColumn({ query }));
    request({ command: 'moveToLastColumn' }).catch((err) => console.error(err));
  };

  return (
    <For each={event().parsed()}>
      {(item: ParsedTextNoteNode) => {
        if (item.type === 'PlainText') {
          return <span>{item.content}</span>;
        }
        if (item.type === 'URL') {
          const initialHidden = () =>
            !config().showMedia || event().contentWarning().contentWarning || !props.embedding;

          if (isImageUrl(item.content)) {
            return <ImageDisplay url={item.content} initialHidden={initialHidden()} />;
          }
          if (isVideoUrl(item.content)) {
            return <VideoDisplay url={item.content} initialHidden={initialHidden()} />;
          }
          return <PreviewedLink class="text-blue-500 underline" href={item.content} />;
        }
        if (item.type === 'TagReference') {
          const resolved = event().resolveTagReference(item);
          if (resolved == null) {
            return <span>{item.content}</span>;
          }
          if (resolved.type === 'MentionedUser') {
            return <MentionedUserDisplay pubkey={resolved.pubkey} />;
          }
          if (resolved.type === 'MentionedEvent') {
            if (props.embedding) {
              return <MentionedEventDisplay mentionedEvent={resolved} />;
            }
            return <EventLink eventId={resolved.eventId} />;
          }
        }
        if (item.type === 'Bech32Entity') {
          if (item.data.type === 'note' && props.embedding) {
            return (
              <div class="my-1 rounded border p-1">
                <EventDisplayById
                  eventId={item.data.data}
                  actions={false}
                  embedding={false}
                  ensureKinds={[Kind.Text]}
                />
              </div>
            );
          }
          if (item.data.type === 'nevent' && props.embedding) {
            return (
              <div class="my-1 rounded border p-1">
                <EventDisplayById eventId={item.data.data.id} actions={false} embedding={false} />
              </div>
            );
          }
          if (item.data.type === 'npub') {
            return <MentionedUserDisplay pubkey={item.data.data} />;
          }
          if (item.data.type === 'nprofile') {
            return <MentionedUserDisplay pubkey={item.data.data.pubkey} />;
          }
          return <span class="text-blue-500 underline">{item.content}</span>;
        }
        if (item.type === 'HashTag') {
          return (
            <button
              class="select-text text-blue-500 underline"
              onClick={() => addHashTagColumn(item.content)}
            >
              {item.content}
            </button>
          );
        }
        if (item.type === 'CustomEmoji') {
          const emojiUrl = event().getEmojiUrl(item.shortcode);
          if (emojiUrl == null) return <span>{item.content}</span>;
          // const { imageRef, canvas } = useImageAnimation({ initialPlaying: false });
          return (
            <img
              class="inline-block h-8 max-w-[128px] align-middle"
              src={emojiUrl}
              alt={item.content}
              title={item.shortcode}
            />
          );
        }
        console.error('Not all ParsedTextNoteNodes are covered', item);
        return null;
      }}
    </For>
  );
};

export default TextNoteContentDisplay;
