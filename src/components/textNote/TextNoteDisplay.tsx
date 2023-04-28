import { Show, For, createSignal, createMemo, onMount, type JSX, type Component } from 'solid-js';

import { createMutation } from '@tanstack/solid-query';
import ArrowPathRoundedSquare from 'heroicons/24/outline/arrow-path-rounded-square.svg';
import ChatBubbleLeft from 'heroicons/24/outline/chat-bubble-left.svg';
import EllipsisHorizontal from 'heroicons/24/outline/ellipsis-horizontal.svg';
import HeartOutlined from 'heroicons/24/outline/heart.svg';
import HeartSolid from 'heroicons/24/solid/heart.svg';
import { nip19, type Event as NostrEvent } from 'nostr-tools';

import NotePostForm from '@/components/NotePostForm';
import ContentWarningDisplay from '@/components/textNote/ContentWarningDisplay';
import GeneralUserMentionDisplay from '@/components/textNote/GeneralUserMentionDisplay';
// eslint-disable-next-line import/no-cycle
import TextNoteContentDisplay from '@/components/textNote/TextNoteContentDisplay';
import TextNoteDisplayById from '@/components/textNote/TextNoteDisplayById';
import { useTimelineContext } from '@/components/TimelineContext';
import useConfig from '@/core/useConfig';
import useFormatDate from '@/hooks/useFormatDate';
import useModalState from '@/hooks/useModalState';
import eventWrapper from '@/nostr/event';
import useCommands from '@/nostr/useCommands';
import useProfile from '@/nostr/useProfile';
import usePubkey from '@/nostr/usePubkey';
import useReactions from '@/nostr/useReactions';
import useReposts from '@/nostr/useReposts';
import useSubscription from '@/nostr/useSubscription';
import ensureNonNull from '@/utils/ensureNonNull';
import npubEncodeFallback from '@/utils/npubEncodeFallback';
import timeout from '@/utils/timeout';

import ContextMenu, { MenuItem } from '../ContextMenu';

export type TextNoteDisplayProps = {
  event: NostrEvent;
  embedding?: boolean;
  actions?: boolean;
};

const { noteEncode } = nip19;

const TextNoteDisplay: Component<TextNoteDisplayProps> = (props) => {
  let contentRef: HTMLDivElement | undefined;

  const { config } = useConfig();
  const formatDate = useFormatDate();
  const pubkey = usePubkey();
  const { showProfile } = useModalState();
  const timelineContext = useTimelineContext();

  const [showReplyForm, setShowReplyForm] = createSignal(false);
  const closeReplyForm = () => setShowReplyForm(false);
  const [showOverflow, setShowOverflow] = createSignal(false);
  const [overflow, setOverflow] = createSignal(false);

  const event = createMemo(() => eventWrapper(props.event));

  const embedding = () => props.embedding ?? true;
  const actions = () => props.actions ?? true;

  const { profile: author } = useProfile(() => ({
    pubkey: props.event.pubkey,
  }));

  const { reactions, isReactedBy, invalidateReactions } = useReactions(() => ({
    eventId: props.event.id,
  }));

  const { reposts, isRepostedBy, invalidateReposts } = useReposts(() => ({
    eventId: props.event.id,
  }));

  const commands = useCommands();

  const publishReactionMutation = createMutation({
    mutationKey: ['publishReaction', event().id],
    mutationFn: commands.publishReaction.bind(commands),
    onSuccess: () => {
      console.log('succeeded to publish reaction');
    },
    onError: (err) => {
      console.error('failed to publish reaction: ', err);
    },
    onSettled: () => {
      invalidateReactions().catch((err) => console.error('failed to refetch reactions', err));
    },
  });

  const publishRepostMutation = createMutation({
    mutationKey: ['publishRepost', event().id],
    mutationFn: commands.publishRepost.bind(commands),
    onSuccess: () => {
      console.log('succeeded to publish reposts');
    },
    onError: (err) => {
      console.error('failed to publish repost: ', err);
    },
    onSettled: () => {
      invalidateReposts().catch((err) => console.error('failed to refetch reposts', err));
    },
  });

  const deleteMutation = createMutation({
    mutationKey: ['delete', event().id],
    mutationFn: (...params: Parameters<typeof commands.delete>) =>
      commands
        .delete(...params)
        .then((promeses) => Promise.allSettled(promeses.map(timeout(10000)))),
    onSuccess: (results) => {
      // TODO タイムラインから削除する
      const succeeded = results.filter((res) => res.status === 'fulfilled').length;
      const failed = results.length - succeeded;
      if (succeeded === results.length) {
        window.alert('削除しました（画面の反映にはリロード）');
      } else if (succeeded > 0) {
        window.alert('一部のリレーで削除に失敗しました');
      } else {
        window.alert('すべてのリレーで削除に失敗しました');
      }
    },
    onError: (err) => {
      console.error('failed to delete', err);
    },
  });

  const myPostMenu = (): MenuItem[] => {
    if (event().pubkey !== pubkey()) return [];

    return [
      {
        content: () => '削除',
        onSelect: () => {
          const p = pubkey();
          if (p == null) return;

          if (!window.confirm('本当に削除しますか？')) return;
          deleteMutation.mutate({
            relayUrls: config().relayUrls,
            pubkey: p,
            eventId: event().id,
          });
        },
      },
    ];
  };

  const menu: MenuItem[] = [
    ...myPostMenu(),
    {
      content: () => 'IDをコピー',
      onSelect: () => {
        navigator.clipboard.writeText(noteEncode(props.event.id)).catch((err) => window.alert(err));
      },
    },
    {
      content: () => 'JSONとしてコピー',
      onSelect: () => {
        navigator.clipboard
          .writeText(JSON.stringify(props.event))
          .catch((err) => window.alert(err));
      },
    },
  ];

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
      publishRepostMutation.mutate({
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
    <div class="nostr-textnote flex flex-col">
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
              onClick={(ev) => {
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
            <div class="created-at shrink-0">
              <a
                href={`nostr:${noteEncode(event().id)}`}
                type="button"
                class="hover:underline"
                onClick={(ev) => {
                  ev.preventDefault();
                  timelineContext?.setTimeline({
                    type: 'Replies',
                    event: props.event,
                  });
                }}
              >
                {createdAt()}
              </a>
            </div>
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
              class="mt-2 w-full rounded border p-2 text-center text-xs text-stone-600 shadow-sm hover:shadow"
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
                onClick={(ev) => {
                  ev.stopPropagation();
                  setShowReplyForm((current) => !current);
                }}
              >
                <ChatBubbleLeft />
              </button>
              <div
                class="flex shrink-0 items-center gap-1"
                classList={{
                  'text-zinc-400': !isRepostedByMe(),
                  'text-green-400': isRepostedByMe() || publishRepostMutation.isLoading,
                }}
              >
                <button
                  class="h-4 w-4"
                  onClick={handleRepost}
                  disabled={publishRepostMutation.isLoading}
                >
                  <ArrowPathRoundedSquare />
                </button>
                <Show when={!config().hideCount && reposts().length > 0}>
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
                <Show when={!config().hideCount && reactions().length > 0}>
                  <div class="text-sm text-zinc-400">{reactions().length}</div>
                </Show>
              </div>
              <div>
                <ContextMenu menu={menu}>
                  <span class="inline-block h-4 w-4 text-zinc-400">
                    <EllipsisHorizontal />
                  </span>
                </ContextMenu>
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
