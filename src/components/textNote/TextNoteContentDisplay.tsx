import { For } from 'solid-js';

import EventLink from '@/components/EventLink';
import ImageDisplay from '@/components/textNote/ImageDisplay';
// eslint-disable-next-line import/no-cycle
import MentionedEventDisplay from '@/components/textNote/MentionedEventDisplay';
import MentionedUserDisplay from '@/components/textNote/MentionedUserDisplay';
import PlainTextDisplay from '@/components/textNote/PlainTextDisplay';
import TextNoteDisplayById from '@/components/textNote/TextNoteDisplayById';
import SafeLink from '@/components/utils/SafeLink';
import { createSearchColumn } from '@/core/column';
import useConfig from '@/core/useConfig';
import { useRequestCommand } from '@/hooks/useCommandBus';
import eventWrapper from '@/nostr/event';
import parseTextNote, { resolveTagReference, type ParsedTextNoteNode } from '@/nostr/parseTextNote';
import { isImageUrl } from '@/utils/imageUrl';

import type { Event as NostrEvent } from 'nostr-tools';

export type TextNoteContentDisplayProps = {
  event: NostrEvent;
  embedding: boolean;
};

const TextNoteContentDisplay = (props: TextNoteContentDisplayProps) => {
  const { config, saveColumn } = useConfig();

  const request = useRequestCommand();

  const event = () => eventWrapper(props.event);

  const addHashTagColumn = (query: string) => {
    saveColumn(createSearchColumn({ query }));
    request({ command: 'moveToLastColumn' }).catch((err) => console.error(err));
  };

  return (
    <For each={parseTextNote(props.event.content)}>
      {(item: ParsedTextNoteNode) => {
        if (item.type === 'PlainText') {
          return <PlainTextDisplay plainText={item} />;
        }
        if (item.type === 'TagReference') {
          const resolved = resolveTagReference(item, props.event);
          if (resolved == null) return null;
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
                <TextNoteDisplayById eventId={item.data.data} actions={false} embedding={false} />
              </div>
            );
          }
          if (item.data.type === 'nevent' && props.embedding) {
            return (
              <div class="my-1 rounded border p-1">
                <TextNoteDisplayById
                  eventId={item.data.data.id}
                  actions={false}
                  embedding={false}
                />
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
            <button class="text-blue-500 underline" onClick={() => addHashTagColumn(item.content)}>
              {item.content}
            </button>
          );
        }
        if (item.type === 'URL') {
          if (isImageUrl(item.content)) {
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
        console.error('Not all ParsedTextNoteNodes are covered', item);
        return null;
      }}
    </For>
  );
};

export default TextNoteContentDisplay;
