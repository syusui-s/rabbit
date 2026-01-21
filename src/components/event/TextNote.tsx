import { Show, For, createSignal, createMemo, type Component } from 'solid-js';

import { type Event as NostrEvent } from 'nostr-tools/pure';

import Actions from '@/components/Actions';
import EventDisplayById from '@/components/event/EventDisplayById';
import ContentWarningDisplay from '@/components/event/textNote/ContentWarningDisplay';
import GeneralUserMentionDisplay from '@/components/event/textNote/GeneralUserMentionDisplay';
import TextNoteContentDisplay from '@/components/event/textNote/TextNoteContentDisplay';
import NotePostForm from '@/components/NotePostForm';
import Post from '@/components/Post';
import { useTimelineContext } from '@/components/timeline/TimelineContext';
import LazyLoad from '@/components/utils/LazyLoad';
import useModalState from '@/hooks/useModalState';
import { useTranslation } from '@/i18n/useTranslation';
import { textNote } from '@/nostr/event';

export type TextNoteProps = {
  event: NostrEvent;
  embedding?: boolean;
  actions?: boolean;
};

const TextNote: Component<TextNoteProps> = (props) => {
  let textAreaRef: HTMLTextAreaElement | undefined;

  const i18n = useTranslation();
  const { showProfile } = useModalState();
  const timelineContext = useTimelineContext();

  const [showReplyForm, setShowReplyForm] = createSignal(false);
  const closeReplyForm = () => setShowReplyForm(false);
  const toggleReplyForm = () => {
    setShowReplyForm((current) => !current);
    if (showReplyForm() && textAreaRef != null) {
      textAreaRef.focus();
    }
  };

  const event = createMemo(() => textNote(props.event));

  const embedding = () => props.embedding ?? true;
  const actions = () => props.actions ?? true;

  const showReplyEvent = (): string | undefined => {
    if (embedding()) {
      const replyingToEvent = event().replyingToEvent();

      if (replyingToEvent != null && !event().containsEventMention(replyingToEvent.id)) {
        return replyingToEvent.id;
      }

      const rootEvent = event().rootEvent();

      if (
        replyingToEvent == null &&
        rootEvent != null &&
        !event().containsEventMention(rootEvent.id)
      ) {
        return rootEvent.id;
      }
    }
    return undefined;
  };

  return (
    <div class="nostr-textnote">
      <Post
        authorPubkey={event().pubkey}
        createdAt={event().createdAtAsDate()}
        content={
          <div class="textnote-content">
            <Show when={showReplyEvent()} keyed>
              {(id) => (
                <div class="mt-1 rounded-sm border border-border p-1">
                  <LazyLoad fallback={<div class="h-12" />}>
                    {() => <EventDisplayById eventId={id} actions={false} embedding={false} />}
                  </LazyLoad>
                </div>
              )}
            </Show>
            <Show when={event().taggedPubkeys().length > 0}>
              <div class="text-xs">
                {i18n.t('post.replyToPre')}
                <For each={event().taggedPubkeys()}>
                  {(replyToPubkey: string) => (
                    <button
                      class="pr-1 text-link select-text hover:underline"
                      onClick={(ev) => {
                        ev.stopPropagation();
                        showProfile(replyToPubkey);
                      }}
                    >
                      <GeneralUserMentionDisplay pubkey={replyToPubkey} />
                    </button>
                  )}
                </For>
                {i18n.t('post.replyToPost')}
              </div>
            </Show>
            <ContentWarningDisplay contentWarning={event().contentWarning()}>
              <div class="content wrap-break-word whitespace-pre-wrap">
                <TextNoteContentDisplay
                  parsed={event().parsed()}
                  embedding={embedding()}
                  initialHidden={event().contentWarning().contentWarning}
                />
              </div>
            </ContentWarningDisplay>
          </div>
        }
        actions={
          <Show when={actions()}>
            <LazyLoad fallback={<div class="h-5" />}>
              {() => <Actions event={props.event} onClickReply={toggleReplyForm} />}
            </LazyLoad>
          </Show>
        }
        footer={
          <Show when={showReplyForm()}>
            <NotePostForm
              textAreaRef={(el) => {
                textAreaRef = el;
              }}
              mode="reply"
              replyTo={props.event}
              onClose={closeReplyForm}
              onPost={closeReplyForm}
            />
          </Show>
        }
        onShowProfile={() => {
          showProfile(event().pubkey);
        }}
        onShowEvent={() => {
          timelineContext?.setTimeline({ type: 'Replies', event: props.event });
        }}
      />
    </div>
  );
};

export default TextNote;
