import { Show, For, createSignal, createMemo, onMount, type JSX, type Component } from 'solid-js';
import type { Event as NostrEvent } from 'nostr-tools';
import { createMutation } from '@tanstack/solid-query';

import HeartOutlined from 'heroicons/24/outline/heart.svg';
import HeartSolid from 'heroicons/24/solid/heart.svg';
import ArrowPathRoundedSquare from 'heroicons/24/outline/arrow-path-rounded-square.svg';
import ChatBubbleLeft from 'heroicons/24/outline/chat-bubble-left.svg';
import EllipsisHorizontal from 'heroicons/24/outline/ellipsis-horizontal.svg';

import eventWrapper from '@/core/event';

import useProfile from '@/nostr/useProfile';
import useConfig from '@/nostr/useConfig';
import usePubkey from '@/nostr/usePubkey';
import useCommands from '@/nostr/useCommands';
import useReactions from '@/nostr/useReactions';
import useDeprecatedReposts from '@/nostr/useDeprecatedReposts';

import useFormatDate from '@/hooks/useFormatDate';
import useModalState from '@/hooks/useModalState';

import UserNameDisplay from '@/components/UserDisplayName';
import TextNoteDisplayById from '@/components/textNote/TextNoteDisplayById';
import { useColumnContext } from '@/components/ColumnContext';
import GeneralUserMentionDisplay from '@/components/textNote/GeneralUserMentionDisplay';
import ContentWarningDisplay from '@/components/textNote/ContentWarningDisplay';
import TextNoteContentDisplay from '@/components/textNote/TextNoteContentDisplay';
import NotePostForm from '@/components/NotePostForm';

import ensureNonNull from '@/utils/ensureNonNull';
import npubEncodeFallback from '@/utils/npubEncodeFallback';
import useSubscription from '@/nostr/useSubscription';

export type TextNoteDisplayProps = {
  event: NostrEvent;
  embedding?: boolean;
  actions?: boolean;
};

const TextNoteDisplay: Component<TextNoteDisplayProps> = (props) => {
  let contentRef: HTMLDivElement | undefined;

  const { config } = useConfig();
  const formatDate = useFormatDate();
  const pubkey = usePubkey();
  const { showProfile } = useModalState();
  const columnContext = useColumnContext();

  const [showReplyForm, setShowReplyForm] = createSignal(false);
  const closeReplyForm = () => setShowReplyForm(false);
  const [showOverflow, setShowOverflow] = createSignal(false);
  const [overflow, setOverflow] = createSignal(false);
  const [showMenu, setShowMenu] = createSignal(false);

  const event = createMemo(() => eventWrapper(props.event));

  const embedding = () => props.embedding ?? true;
  const actions = () => props.actions ?? true;

  const { profile: author } = useProfile(() => ({
    pubkey: props.event.pubkey,
  }));

  const { reactions, isReactedBy, invalidateReactions } = useReactions(() => ({
    eventId: props.event.id,
  }));

  const { reposts, isRepostedBy, invalidateDeprecatedReposts } = useDeprecatedReposts(() => ({
    eventId: props.event.id,
  }));

  const commands = useCommands();

  const publishReactionMutation = createMutation({
    mutationKey: ['publishReaction', event().id],
    mutationFn: commands.publishReaction.bind(commands),
    onSuccess: () => {
      console.log('succeeded to publish reaction');
      invalidateReactions().catch((err) => console.error('failed to refetch reactions', err));
    },
    onError: (err) => {
      console.error('failed to publish reaction: ', err);
    },
  });

  const publishDeprecatedRepostMutation = createMutation({
    mutationKey: ['publishDeprecatedRepost', event().id],
    mutationFn: commands.publishDeprecatedRepost.bind(commands),
    onSuccess: () => {
      console.log('succeeded to publish deprecated reposts');
      invalidateDeprecatedReposts().catch((err) =>
        console.error('failed to refetch deprecated reposts', err),
      );
    },
    onError: (err) => {
      console.error('failed to publish deprecated repost: ', err);
    },
  });

  const isReactedByMe = createMemo(() => {
    const p = pubkey();
    return p != null && isReactedBy(p);
  });
  const isRepostedByMe = createMemo(() => {
    const p = pubkey();
    return p != null && isRepostedBy(p);
  });

  const showReplyEvent = (): string | undefined => {
    const replyingToEvent = event().replyingToEvent();
    if (
      embedding() &&
      replyingToEvent != null &&
      !event().containsEventMentionIndex(replyingToEvent.index)
    ) {
      return replyingToEvent.id;
    }
    return undefined;
  };

  const createdAt = () => formatDate(event().createdAtAsDate());

  const handleRepost: JSX.EventHandler<HTMLButtonElement, MouseEvent> = (ev) => {
    ev.stopPropagation();

    if (isRepostedByMe()) {
      // TODO remove reaction
      return;
    }

    ensureNonNull([pubkey(), props.event.id] as const)(([pubkeyNonNull, eventIdNonNull]) => {
      publishDeprecatedRepostMutation.mutate({
        relayUrls: config().relayUrls,
        pubkey: pubkeyNonNull,
        eventId: eventIdNonNull,
        notifyPubkey: props.event.pubkey,
      });
    });
  };

  const handleReaction: JSX.EventHandler<HTMLButtonElement, MouseEvent> = (ev) => {
    ev.stopPropagation();

    if (isReactedByMe()) {
      // TODO remove reaction
      return;
    }

    ensureNonNull([pubkey(), props.event.id] as const)(([pubkeyNonNull, eventIdNonNull]) => {
      publishReactionMutation.mutate({
        relayUrls: config().relayUrls,
        pubkey: pubkeyNonNull,
        content: '+',
        eventId: eventIdNonNull,
        notifyPubkey: props.event.pubkey,
      });
    });
  };

  onMount(() => {
    if (contentRef != null) {
      setOverflow(contentRef.scrollHeight > contentRef.clientHeight);
    }
  });

  return (
    <div
      class="nostr-textnote flex flex-col"
      onClick={() => {
        columnContext?.setColumnContent({
          type: 'Replies',
          eventId: event().rootEvent()?.id ?? props.event.id,
        });
      }}
    >
      <div class="flex w-full gap-1">
        <button
          class="author-icon h-10 w-10 shrink-0 overflow-hidden"
          onClick={(ev) => {
            ev.stopPropagation();
            showProfile(event().pubkey);
          }}
        >
          <Show when={author()?.picture}>
            {/* TODO 画像は脆弱性回避のためにimgじゃない方法で読み込みたい */}
            <img src={author()?.picture} alt="icon" class="h-full w-full rounded object-cover" />
          </Show>
        </button>
        <div class="min-w-0 flex-auto">
          <div class="flex justify-between gap-1 text-xs">
            <button
              class="author flex min-w-0 truncate hover:text-blue-500"
              onClick={() => {
                ev.stopPropagation();
                showProfile(event().pubkey);
              }}
            >
              {/* TODO link to author */}
              <Show when={(author()?.display_name?.length ?? 0) > 0}>
                <div class="author-name truncate pr-1 font-bold hover:underline">
                  {author()?.display_name}
                </div>
              </Show>
              <div class="author-username truncate text-zinc-600">
                <Show
                  when={author()?.name != null}
                  fallback={`@${npubEncodeFallback(event().pubkey)}`}
                >
                  @{author()?.name}
                </Show>
                {/* TODO <Match when={author()?.nip05 != null}>@{author()?.nip05}</Match> */}
              </div>
            </button>
            <div class="created-at shrink-0">{createdAt()}</div>
          </div>
          <div
            ref={contentRef}
            class="overflow-hidden"
            classList={{ 'max-h-screen': !showOverflow() }}
          >
            <Show when={showReplyEvent()} keyed>
              {(id) => (
                <div class="mt-1 rounded border p-1">
                  <TextNoteDisplayById eventId={id} actions={false} embedding={false} />
                </div>
              )}
            </Show>
            <Show when={event().mentionedPubkeys().length > 0}>
              <div class="text-xs">
                <For each={event().mentionedPubkeys()}>
                  {(replyToPubkey: string) => (
                    <button
                      class="pr-1 text-blue-500 hover:underline"
                      onClick={(ev) => {
                        ev.stopPropagation();
                        showProfile(replyToPubkey);
                      }}
                    >
                      <GeneralUserMentionDisplay pubkey={replyToPubkey} />
                    </button>
                  )}
                </For>
                {'への返信'}
              </div>
            </Show>
            <ContentWarningDisplay contentWarning={event().contentWarning()}>
              <div class="content whitespace-pre-wrap break-all">
                <TextNoteContentDisplay event={props.event} embedding={embedding()} />
              </div>
            </ContentWarningDisplay>
          </div>
          <Show when={overflow()}>
            <button
              class="text-xs text-stone-600 hover:text-stone-800"
              onClick={(ev) => {
                ev.stopPropagation();
                setShowOverflow((current) => !current);
              }}
            >
              <Show when={!showOverflow()} fallback="隠す">
                続きを読む
              </Show>
            </button>
          </Show>
          <Show when={actions()}>
            <div class="actions flex w-48 items-center justify-between gap-8 pt-1">
              <button
                class="h-4 w-4 shrink-0 text-zinc-400"
                onClick={() => {
                  stopPropagation();
                  setShowReplyForm((current) => !current);
                }}
              >
                <ChatBubbleLeft />
              </button>
              <div
                class="flex shrink-0 items-center gap-1"
                classList={{
                  'text-zinc-400': !isRepostedByMe(),
                  'text-green-400': isRepostedByMe() || publishDeprecatedRepostMutation.isLoading,
                }}
              >
                <button
                  class="h-4 w-4"
                  onClick={handleRepost}
                  disabled={publishDeprecatedRepostMutation.isLoading}
                >
                  <ArrowPathRoundedSquare />
                </button>
                <Show when={reposts().length > 0}>
                  <div class="text-sm text-zinc-400">{reposts().length}</div>
                </Show>
              </div>
              <div
                class="flex shrink-0 items-center gap-1"
                classList={{
                  'text-zinc-400': !isReactedByMe(),
                  'text-rose-400': isReactedByMe() || publishReactionMutation.isLoading,
                }}
              >
                <button
                  class="h-4 w-4"
                  onClick={handleReaction}
                  disabled={publishReactionMutation.isLoading}
                >
                  <Show when={isReactedByMe()} fallback={<HeartOutlined />}>
                    <HeartSolid />
                  </Show>
                </button>
                <Show when={reactions().length > 0}>
                  <div class="text-sm text-zinc-400">{reactions().length}</div>
                </Show>
              </div>
              <div>
                <button
                  class="h-4 w-4 text-zinc-400"
                  onClick={(ev) => {
                    ev.stopPropagation();
                    setShowMenu((current) => !current);
                  }}
                >
                  <EllipsisHorizontal />
                </button>
              </div>
            </div>
          </Show>
        </div>
      </div>
      <Show when={showReplyForm()}>
        <NotePostForm
          mode="reply"
          replyTo={props.event}
          onClose={closeReplyForm}
          onPost={closeReplyForm}
        />
      </Show>
    </div>
  );
};

export default TextNoteDisplay;
