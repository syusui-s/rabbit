import {
  Show,
  For,
  createSignal,
  createMemo,
  type JSX,
  type Component,
  Switch,
  Match,
} from 'solid-js';

import { createMutation } from '@tanstack/solid-query';
import ArrowPathRoundedSquare from 'heroicons/24/outline/arrow-path-rounded-square.svg';
import ChatBubbleLeft from 'heroicons/24/outline/chat-bubble-left.svg';
import EllipsisHorizontal from 'heroicons/24/outline/ellipsis-horizontal.svg';
import HeartOutlined from 'heroicons/24/outline/heart.svg';
import Plus from 'heroicons/24/outline/plus.svg';
import HeartSolid from 'heroicons/24/solid/heart.svg';
import { nip19, type Event as NostrEvent } from 'nostr-tools';

import ContextMenu, { MenuItem } from '@/components/ContextMenu';
import EmojiPicker from '@/components/EmojiPicker';
// eslint-disable-next-line import/no-cycle
import EventDisplayById from '@/components/event/EventDisplayById';
import ContentWarningDisplay from '@/components/event/textNote/ContentWarningDisplay';
import GeneralUserMentionDisplay from '@/components/event/textNote/GeneralUserMentionDisplay';
import TextNoteContentDisplay from '@/components/event/textNote/TextNoteContentDisplay';
import EventDebugModal from '@/components/modal/EventDebugModal';
import UserList from '@/components/modal/UserList';
import NotePostForm from '@/components/NotePostForm';
import Post from '@/components/Post';
import { useTimelineContext } from '@/components/timeline/TimelineContext';
import useConfig from '@/core/useConfig';
import useModalState from '@/hooks/useModalState';
import { textNote } from '@/nostr/event';
import useCommands from '@/nostr/useCommands';
import usePubkey from '@/nostr/usePubkey';
import useReactions from '@/nostr/useReactions';
import useReposts from '@/nostr/useReposts';
import ensureNonNull from '@/utils/ensureNonNull';
import timeout from '@/utils/timeout';

export type TextNoteDisplayProps = {
  event: NostrEvent;
  embedding?: boolean;
  actions?: boolean;
};

type EmojiReactionsProps = {
  reactionsGroupedByContent: Map<string, NostrEvent[]>;
  onReaction: (emoji: string) => void;
};

const { noteEncode } = nip19;

const EmojiReactions: Component<EmojiReactionsProps> = (props) => {
  const { config } = useConfig();
  const pubkey = usePubkey();

  return (
    <div class="flex gap-2 overflow-x-auto py-1">
      <For each={[...props.reactionsGroupedByContent.entries()]}>
        {([content, events]) => {
          const isReactedByMeWithThisContent =
            events.findIndex((ev) => ev.pubkey === pubkey()) >= 0;

          return (
            <button
              class="flex h-6 max-w-[128px] items-center rounded border px-1"
              classList={{
                'text-zinc-400': !isReactedByMeWithThisContent,
                'hover:bg-zinc-50': !isReactedByMeWithThisContent,
                'bg-rose-50': isReactedByMeWithThisContent,
                'border-rose-200': isReactedByMeWithThisContent,
                'text-rose-400': isReactedByMeWithThisContent,
              }}
              type="button"
              onClick={() => props.onReaction(content)}
            >
              <Show
                when={content === '+'}
                fallback={<span class="truncate text-base">{content}</span>}
              >
                <span class="inline-block h-3 w-3 pt-[1px] text-rose-400">
                  <HeartSolid />
                </span>
              </Show>
              <Show when={!config().hideCount}>
                <span class="ml-1 text-sm">{events.length}</span>
              </Show>
            </button>
          );
        }}
      </For>
    </div>
  );
};

const TextNoteDisplay: Component<TextNoteDisplayProps> = (props) => {
  const { config } = useConfig();
  const pubkey = usePubkey();
  const { showProfile } = useModalState();
  const timelineContext = useTimelineContext();

  const [reacted, setReacted] = createSignal(false);
  const [reposted, setReposted] = createSignal(false);
  const [showReplyForm, setShowReplyForm] = createSignal(false);
  const [modal, setModal] = createSignal<'EventDebugModal' | 'Reactions' | 'Reposts' | null>(null);

  const closeReplyForm = () => setShowReplyForm(false);
  const closeModal = () => setModal(null);

  const event = createMemo(() => textNote(props.event));

  const embedding = () => props.embedding ?? true;
  const actions = () => props.actions ?? true;

  const {
    reactions,
    reactionsGroupedByContent,
    isReactedBy,
    isReactedByWithEmoji,
    invalidateReactions,
    query: reactionsQuery,
  } = useReactions(() => ({
    eventId: props.event.id,
  }));

  const {
    reposts,
    isRepostedBy,
    invalidateReposts,
    query: repostsQuery,
  } = useReposts(() => ({
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
      invalidateReactions()
        .then(() => reactionsQuery.refetch())
        .catch((err) => console.error('failed to refetch reactions', err));
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
      invalidateReposts()
        .then(() => repostsQuery.refetch())
        .catch((err) => console.error('failed to refetch reposts', err));
    },
  });

  const deleteMutation = createMutation({
    mutationKey: ['deleteEvent', event().id],
    mutationFn: (...params: Parameters<typeof commands.deleteEvent>) =>
      commands
        .deleteEvent(...params)
        .then((promeses) => Promise.allSettled(promeses.map(timeout(10000)))),
    onSuccess: (results) => {
      // TODO タイムラインから削除する
      const succeeded = results.filter((res) => res.status === 'fulfilled').length;
      const failed = results.length - succeeded;
      if (succeeded === results.length) {
        window.alert('削除しました（画面の反映にはリロード）');
      } else if (succeeded > 0) {
        window.alert(`${failed}個のリレーで削除に失敗しました`);
      } else {
        window.alert('すべてのリレーで削除に失敗しました');
      }
    },
    onError: (err) => {
      console.error('failed to delete', err);
    },
  });

  const menu: MenuItem[] = [
    {
      content: () => 'IDをコピー',
      onSelect: () => {
        navigator.clipboard.writeText(noteEncode(props.event.id)).catch((err) => window.alert(err));
      },
    },
    {
      content: () => 'JSONを確認',
      onSelect: () => {
        setModal('EventDebugModal');
      },
    },
    {
      content: () => 'リポスト一覧',
      onSelect: () => {
        setModal('Reposts');
      },
    },
    {
      content: () => 'リアクション一覧',
      onSelect: () => {
        setModal('Reactions');
      },
    },
    {
      when: () => event().pubkey === pubkey(),
      content: () => <span class="text-red-500">削除</span>,
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

  const isReactedByMe = createMemo(() => {
    const p = pubkey();
    return (p != null && isReactedBy(p)) || reacted();
  });
  const isReactedByMeWithEmoji = createMemo(() => {
    const p = pubkey();
    return p != null && isReactedByWithEmoji(p);
  });
  const isRepostedByMe = createMemo(() => {
    const p = pubkey();
    return (p != null && isRepostedBy(p)) || reposted();
  });

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
      setReposted(true);
    });
  };

  const doReaction = (emoji?: string) => {
    if (isReactedByMe()) {
      // TODO remove reaction
      return;
    }

    ensureNonNull([pubkey(), props.event.id] as const)(([pubkeyNonNull, eventIdNonNull]) => {
      publishReactionMutation.mutate({
        relayUrls: config().relayUrls,
        pubkey: pubkeyNonNull,
        content: emoji ?? '+',
        eventId: eventIdNonNull,
        notifyPubkey: props.event.pubkey,
      });
      setReacted(true);
    });
  };

  const handleReaction: JSX.EventHandler<HTMLButtonElement, MouseEvent> = (ev) => {
    ev.stopPropagation();
    doReaction();
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
                <div class="mt-1 rounded border p-1">
                  <EventDisplayById eventId={id} actions={false} embedding={false} />
                </div>
              )}
            </Show>
            <Show when={event().taggedPubkeys().length > 0}>
              <div class="text-xs">
                <For each={event().taggedPubkeys()}>
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
        }
        actions={
          <Show when={actions()}>
            <Show when={config().showEmojiReaction && reactions().length > 0}>
              <EmojiReactions
                reactionsGroupedByContent={reactionsGroupedByContent()}
                onReaction={doReaction}
              />
            </Show>
            <div class="actions flex w-52 items-center justify-between gap-8 pt-1">
              <button
                class="h-4 w-4 shrink-0 text-zinc-400 hover:text-zinc-500"
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
                  'hover:text-green-400': !isRepostedByMe(),
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
                  'text-zinc-400': !isReactedByMe() || isReactedByMeWithEmoji(),
                  'hover:text-rose-400': !isReactedByMe() || isReactedByMeWithEmoji(),
                  'text-rose-400':
                    (isReactedByMe() && !isReactedByMeWithEmoji()) ||
                    publishReactionMutation.isLoading,
                }}
              >
                <button
                  class="h-4 w-4"
                  onClick={handleReaction}
                  disabled={publishReactionMutation.isLoading}
                >
                  <Show
                    when={isReactedByMe() && !isReactedByMeWithEmoji()}
                    fallback={<HeartOutlined />}
                  >
                    <HeartSolid />
                  </Show>
                </button>
                <Show
                  when={
                    !config().hideCount && !config().showEmojiReaction && reactions().length > 0
                  }
                >
                  <div class="text-sm text-zinc-400">{reactions().length}</div>
                </Show>
              </div>
              <Show when={config().useEmojiReaction}>
                <div
                  class="flex shrink-0 items-center gap-1"
                  classList={{
                    'text-zinc-400': !isReactedByMe() || !isReactedByMeWithEmoji(),
                    'hover:text-rose-400': !isReactedByMe() || !isReactedByMeWithEmoji(),
                    'text-rose-400':
                      (isReactedByMe() && isReactedByMeWithEmoji()) ||
                      publishReactionMutation.isLoading,
                  }}
                >
                  <EmojiPicker onEmojiSelect={(emoji) => doReaction(emoji)}>
                    <span class="inline-block h-4 w-4">
                      <Plus />
                    </span>
                  </EmojiPicker>
                </div>
              </Show>
              <div>
                <ContextMenu menu={menu}>
                  <span class="inline-block h-4 w-4 text-zinc-400 hover:text-zinc-500">
                    <EllipsisHorizontal />
                  </span>
                </ContextMenu>
              </div>
            </div>
          </Show>
        }
        footer={
          <Show when={showReplyForm()}>
            <NotePostForm
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
      <Switch>
        <Match when={modal() === 'EventDebugModal'}>
          <EventDebugModal event={props.event} onClose={closeModal} />
        </Match>
        <Match when={modal() === 'Reactions'}>
          <UserList
            data={reactions()}
            pubkeyExtractor={(ev) => ev.pubkey}
            renderInfo={({ content }) => (
              <div class="w-6">
                <Show
                  when={content === '+'}
                  fallback={<span class="truncate text-base">{content}</span>}
                >
                  <span class="inline-block h-3 w-3 pt-[1px] text-rose-400">
                    <HeartSolid />
                  </span>
                </Show>
              </div>
            )}
            onClose={closeModal}
          />
        </Match>
        <Match when={modal() === 'Reposts'}>
          <UserList data={reposts()} pubkeyExtractor={(ev) => ev.pubkey} onClose={closeModal} />
        </Match>
      </Switch>
    </div>
  );
};

export default TextNoteDisplay;
