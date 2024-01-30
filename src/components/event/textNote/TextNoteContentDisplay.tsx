import { For } from 'solid-js';

import * as Kind from 'nostr-tools/kinds';

// eslint-disable-next-line import/no-cycle
import EventDisplayById from '@/components/event/EventDisplayById';
// import ParameterizedReplaceableEventDisplayById from '@/components/event/ParameterizedReplaceableEventDisplayById';
import ImageDisplay from '@/components/event/textNote/ImageDisplay';
import MentionedEventDisplay from '@/components/event/textNote/MentionedEventDisplay';
import MentionedUserDisplay from '@/components/event/textNote/MentionedUserDisplay';
import PreviewedLink from '@/components/event/textNote/PreviewedLink';
import VideoDisplay from '@/components/event/textNote/VideoDisplay';
import EventLink from '@/components/EventLink';
import { createRelaysColumn, createSearchColumn } from '@/core/column';
import useConfig from '@/core/useConfig';
import { useRequestCommand } from '@/hooks/useCommandBus';
import { ParsedTextNoteResolvedNode, type ParsedTextNoteResolved } from '@/nostr/parseTextNote';
import { isImageUrl, isVideoUrl, isWebSocketUrl } from '@/utils/url';

export type TextNoteContentDisplayProps = {
  parsed: ParsedTextNoteResolved;
  embedding: boolean;
  initialHidden?: boolean;
};

const TextNoteContentDisplay = (props: TextNoteContentDisplayProps) => {
  const { config, saveColumn } = useConfig();

  const request = useRequestCommand();

  const addHashTagColumn = (query: string) => {
    saveColumn(createSearchColumn({ query }));
    request({ command: 'moveToLastColumn' }).catch((err) => console.error(err));
  };

  const addRelayColumn = (url: string) => {
    saveColumn(createRelaysColumn({ name: url, relayUrls: [url] }));
    request({ command: 'moveToLastColumn' }).catch((err) => console.error(err));
  };

  return (
    <For each={props.parsed}>
      {(item: ParsedTextNoteResolvedNode) => {
        if (item.type === 'PlainText') {
          return <span>{item.content}</span>;
        }
        if (item.type === 'URL') {
          const initialHidden = () =>
            !config().showMedia || !props.embedding || (props.initialHidden ?? false);

          if (isImageUrl(item.content)) {
            return <ImageDisplay url={item.content} initialHidden={initialHidden()} />;
          }
          if (isVideoUrl(item.content)) {
            return <VideoDisplay url={item.content} initialHidden={initialHidden()} />;
          }
          if (isWebSocketUrl(item.content)) {
            return (
              <button
                class="select-text text-link underline"
                onClick={() => addRelayColumn(item.content)}
              >
                {item.content}
              </button>
            );
          }
          return <PreviewedLink url={item.content} initialHidden={initialHidden()} />;
        }
        if (item.type === 'TagReferenceResolved') {
          if (item.reference == null) {
            return <span>{item.content}</span>;
          }
          if (item.reference.type === 'MentionedUser') {
            return <MentionedUserDisplay pubkey={item.reference.pubkey} />;
          }
          if (item.reference.type === 'MentionedEvent') {
            if (props.embedding) {
              return <MentionedEventDisplay mentionedEvent={item.reference} />;
            }
            return <EventLink eventId={item.reference.eventId} />;
          }
        }
        if (item.type === 'Bech32Entity') {
          if (item.data.type === 'note' && props.embedding) {
            return (
              <div class="my-1 rounded border border-border p-1">
                <EventDisplayById
                  eventId={item.data.data}
                  actions={false}
                  embedding={false}
                  ensureKinds={[Kind.ShortTextNote]}
                />
              </div>
            );
          }
          if (item.data.type === 'nevent' && props.embedding) {
            return (
              <div class="my-1 rounded border border-border p-1">
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
          if (item.data.type === 'nrelay') {
            const url: string = item.data.data;
            return (
              <button class="select-text text-link underline" onClick={() => addRelayColumn(url)}>
                {url} ({item.content})
              </button>
            );
          }
          return <span class="text-link underline">{item.content}</span>;
        }
        if (item.type === 'HashTag') {
          return (
            <button
              class="select-text text-link underline"
              onClick={() => addHashTagColumn(item.content)}
            >
              {item.content}
            </button>
          );
        }
        if (item.type === 'CustomEmojiResolved') {
          if (item.url == null) return <span>{item.content}</span>;
          // const { imageRef, canvas } = useImageAnimation({ initialPlaying: false });
          return (
            <img
              class="inline-block h-8 max-w-[8rem]"
              src={item.url}
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
