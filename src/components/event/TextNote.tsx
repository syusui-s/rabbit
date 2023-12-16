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
import EmojiDisplay from '@/components/EmojiDisplay';
import EmojiPicker, { EmojiData } from '@/components/EmojiPicker';
// eslint-disable-next-line import/no-cycle
import EventDisplayById from '@/components/event/EventDisplayById';
import ContentWarningDisplay from '@/components/event/textNote/ContentWarningDisplay';
import EmojiReactions from '@/components/event/textNote/EmojiReactions';
import GeneralUserMentionDisplay from '@/components/event/textNote/GeneralUserMentionDisplay';
import TextNoteContentDisplay from '@/components/event/textNote/TextNoteContentDisplay';
import EventDebugModal from '@/components/modal/EventDebugModal';
import UserList from '@/components/modal/UserList';
import NotePostForm from '@/components/NotePostForm';
import Post from '@/components/Post';
import { useTimelineContext } from '@/components/timeline/TimelineContext';
import LazyLoad from '@/components/utils/LazyLoad';
import useConfig from '@/core/useConfig';
import useModalState from '@/hooks/useModalState';
import { useTranslation } from '@/i18n/useTranslation';
import { textNote, reaction } from '@/nostr/event';
import { ReactionTypes } from '@/nostr/event/Reaction';
import useCommands from '@/nostr/useCommands';
import usePubkey from '@/nostr/usePubkey';
import useReactions from '@/nostr/useReactions';
import useReposts from '@/nostr/useReposts';
import ensureNonNull from '@/utils/ensureNonNull';
import timeout from '@/utils/timeout';

export type ActionProps = {
  event: NostrEvent;
  onClickReply: () => void;
};

export type TextNoteProps = {
  event: NostrEvent;
  embedding?: boolean;
  actions?: boolean;
};

const { noteEncode } = nip19;

const emojiDataToReactionTypes = (emoji: EmojiData): ReactionTypes => {
  if (emoji.native != null) {
    return { type: 'Emoji', content: emoji.native };
  }
  if (emoji.src != null) {
    return {
      type: 'CustomEmoji',
      content: `:${emoji.id}:`,
      shortcode: emoji.id,
      url: emoji.src,
    };
  }
  throw new Error('unknown emoji');
};

const Actions: Component<ActionProps> = (props) => {
  const i18n = useTranslation();
  const { config } = useConfig();
  const pubkey = usePubkey();
  const commands = useCommands();

  const [modal, setModal] = createSignal<'EventDebugModal' | 'Reactions' | 'Reposts' | null>(null);
  const [reacted, setReacted] = createSignal(false);
  const [reposted, setReposted] = createSignal(false);

  const event = createMemo(() => textNote(props.event));

  const closeModal = () => setModal(null);

  const {
    reactions,
    reactionsGrouped,
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

  const publishReactionMutation = createMutation({
    mutationKey: ['publishReaction', event().id],
    mutationFn: (...params: Parameters<typeof commands.publishReaction>) =>
      commands
        .publishReaction(...params)
        .then((promeses) => Promise.allSettled(promeses.map(timeout(5000)))),
    onSuccess: (results) => {
      const succeeded = results.filter((res) => res.status === 'fulfilled').length;
      const failed = results.length - succeeded;
      if (succeeded === results.length) {
        console.log('Succeeded to publish a reaction');
      } else if (succeeded > 0) {
        console.warn(`failed to publish a reaction on ${failed} relays`);
      } else {
        console.error('failed to publish reaction on all relays');
      }
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
    mutationFn: (...params: Parameters<typeof commands.publishRepost>) =>
      commands
        .publishRepost(...params)
        .then((promeses) => Promise.allSettled(promeses.map(timeout(10000)))),
    onSuccess: (results) => {
      const succeeded = results.filter((res) => res.status === 'fulfilled').length;
      const failed = results.length - succeeded;
      if (succeeded === results.length) {
        console.log('Succeeded to publish a repost');
      } else if (succeeded > 0) {
        console.warn(`Failed to publish a repost on ${failed} relays`);
      } else {
        console.error('Failed to publish a repost on all relays');
      }
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
        window.alert(i18n()('post.deletedSuccessfully'));
      } else if (succeeded > 0) {
        window.alert(i18n()('post.failedToDeletePartially', { count: failed }));
      } else {
        window.alert(i18n()('post.failedToDelete'));
      }
    },
    onError: (err) => {
      console.error('failed to delete', err);
    },
  });

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

  const doReaction = (reactionTypes?: ReactionTypes) => {
    if (isReactedByMe()) {
      // TODO remove reaction
      return;
    }

    ensureNonNull([pubkey(), props.event.id] as const)(([pubkeyNonNull, eventIdNonNull]) => {
      publishReactionMutation.mutate({
        relayUrls: config().relayUrls,
        pubkey: pubkeyNonNull,
        reactionTypes: reactionTypes ?? { type: 'LikeDislike', content: '+' },
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

  const handleEmojiSelect = (emoji: EmojiData) => {
    doReaction(emojiDataToReactionTypes(emoji));
  };

  const menu: MenuItem[] = [
    {
      content: () => i18n()('post.copyEventId'),
      onSelect: () => {
        navigator.clipboard.writeText(noteEncode(props.event.id)).catch((err) => window.alert(err));
      },
    },
    {
      content: () => i18n()('post.showJSON'),
      onSelect: () => {
        setModal('EventDebugModal');
      },
    },
    {
      content: () => i18n()('post.showReposts'),
      onSelect: () => {
        setModal('Reposts');
      },
    },
    {
      content: () => i18n()('post.showReactions'),
      onSelect: () => {
        setModal('Reactions');
      },
    },
    {
      when: () => event().pubkey === pubkey(),
      content: () => <span class="text-red-500">{i18n()('post.deletePost')}</span>,
      onSelect: () => {
        const p = pubkey();
        if (p == null) return;

        if (!window.confirm(i18n()('post.confirmDelete'))) return;
        deleteMutation.mutate({
          relayUrls: config().relayUrls,
          pubkey: p,
          eventId: event().id,
        });
      },
    },
  ];

  return (
    <>
      <Show when={config().showEmojiReaction && reactions().length > 0}>
        <EmojiReactions reactionsGrouped={reactionsGrouped()} onReaction={doReaction} />
      </Show>
      <div class="actions flex w-52 items-center justify-between gap-8 pt-1">
        <button
          class="h-4 w-4 shrink-0 text-zinc-400 hover:text-zinc-500"
          onClick={(ev) => {
            ev.stopPropagation();
            props.onClickReply();
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
          <button class="h-4 w-4" onClick={handleRepost} disabled={publishRepostMutation.isLoading}>
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
              (isReactedByMe() && !isReactedByMeWithEmoji()) || publishReactionMutation.isLoading,
          }}
        >
          <button
            class="h-4 w-4"
            onClick={handleReaction}
            disabled={publishReactionMutation.isLoading}
          >
            <Show when={isReactedByMe() && !isReactedByMeWithEmoji()} fallback={<HeartOutlined />}>
              <HeartSolid />
            </Show>
          </button>
          <Show when={!config().hideCount && !config().showEmojiReaction && reactions().length > 0}>
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
                (isReactedByMe() && isReactedByMeWithEmoji()) || publishReactionMutation.isLoading,
            }}
          >
            <EmojiPicker onEmojiSelect={handleEmojiSelect}>
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
      <Switch>
        <Match when={modal() === 'EventDebugModal'}>
          <EventDebugModal event={props.event} onClose={closeModal} />
        </Match>
        <Match when={modal() === 'Reactions'}>
          <UserList
            data={reactions()}
            pubkeyExtractor={(ev) => ev.pubkey}
            renderInfo={(ev) => (
              <div class="w-6">
                <EmojiDisplay reactionTypes={reaction(ev).toReactionTypes()} />
              </div>
            )}
            onClose={closeModal}
          />
        </Match>
        <Match when={modal() === 'Reposts'}>
          <UserList data={reposts()} pubkeyExtractor={(ev) => ev.pubkey} onClose={closeModal} />
        </Match>
      </Switch>
    </>
  );
};

const TextNote: Component<TextNoteProps> = (props) => {
  const i18n = useTranslation();
  const { showProfile } = useModalState();
  const timelineContext = useTimelineContext();

  const [showReplyForm, setShowReplyForm] = createSignal(false);
  const closeReplyForm = () => setShowReplyForm(false);
  const toggleReplyForm = () => setShowReplyForm((current) => !current);

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
                <div class="mt-1 rounded border p-1">
                  <LazyLoad fallback={<div class="h-12" />}>
                    {() => <EventDisplayById eventId={id} actions={false} embedding={false} />}
                  </LazyLoad>
                </div>
              )}
            </Show>
            <Show when={event().taggedPubkeys().length > 0}>
              <div class="text-xs">
                {i18n()('post.replyToPre')}
                <For each={event().taggedPubkeys()}>
                  {(replyToPubkey: string) => (
                    <button
                      class="select-text pr-1 text-blue-500 hover:underline"
                      onClick={(ev) => {
                        ev.stopPropagation();
                        showProfile(replyToPubkey);
                      }}
                    >
                      <GeneralUserMentionDisplay pubkey={replyToPubkey} />
                    </button>
                  )}
                </For>
                {i18n()('post.replyToPost')}
              </div>
            </Show>
            <ContentWarningDisplay contentWarning={event().contentWarning()}>
              <div class="content whitespace-pre-wrap break-all">
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
