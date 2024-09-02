import {
  type JSX,
  type Component,
  Switch,
  Match,
  Show,
  lazy,
  createSignal,
  createMemo,
  For,
} from 'solid-js';

import { createMutation } from '@tanstack/solid-query';
import ArrowPathRoundedSquare from 'heroicons/24/outline/arrow-path-rounded-square.svg';
import Bolt from 'heroicons/24/outline/bolt.svg';
import ChatBubbleLeft from 'heroicons/24/outline/chat-bubble-left.svg';
import EllipsisHorizontal from 'heroicons/24/outline/ellipsis-horizontal.svg';
import HeartOutlined from 'heroicons/24/outline/heart.svg';
import Plus from 'heroicons/24/outline/plus.svg';
import HeartSolid from 'heroicons/24/solid/heart.svg';
import { noteEncode } from 'nostr-tools/nip19';
import { type Event as NostrEvent } from 'nostr-tools/pure';

import EmojiDisplay from '@/components/EmojiDisplay';
import useEmojiPicker, { EmojiData } from '@/components/useEmojiPicker';
import useEmojiPopup from '@/components/useEmojiPopup';
import useContextMenu from '@/components/utils/useContextMenu';
import useConfig from '@/core/useConfig';
import { useTranslation } from '@/i18n/useTranslation';
import { reaction } from '@/nostr/event';
import { ReactionTypes } from '@/nostr/event/Reaction';
import useReactionMutation from '@/nostr/mutation/useReactionMutation';
import useRepostMutation from '@/nostr/mutation/useRepostMutation';
import useCommands from '@/nostr/useCommands';
import usePubkey from '@/nostr/usePubkey';
import useReactions from '@/nostr/useReactions';
import useReposts from '@/nostr/useReposts';
import ensureNonNull from '@/utils/ensureNonNull';
import { formatSiPrefix } from '@/utils/siPrefix';
import timeout from '@/utils/timeout';

const EventDebugModal = lazy(() => import('@/components/modal/EventDebugModal'));
const UserList = lazy(() => import('@/components/modal/UserList'));
// eslint-disable-next-line import/no-cycle
const ZapRequestModal = lazy(() => import('@/components/modal/ZapRequestModal'));

export type ActionProps = {
  event: NostrEvent;
  onClickReply: () => void;
};

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

const ReactionAction = (props: { event: NostrEvent }) => {
  const { config } = useConfig();
  const pubkey = usePubkey();

  const [reacted, setReacted] = createSignal(false);

  const { reactions, isReactedByWithEmoji, isReactedBy } = useReactions(() => ({
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

  const publishReactionMutation = useReactionMutation(() => ({
    eventId: props.event.id,
  }));

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
        kind: props.event.kind,
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

  const emojiPickerPopup = useEmojiPicker(() => ({
    onEmojiSelect: handleEmojiSelect,
  }));

  return (
    <>
      <div
        class="flex shrink-0 items-center gap-1"
        classList={{
          'text-fg-tertiary': !isReactedByMe() || isReactedByMeWithEmoji(),
          'hover:text-r-reaction': !isReactedByMe() || isReactedByMeWithEmoji(),
          'text-r-reaction':
            (isReactedByMe() && !isReactedByMeWithEmoji()) || publishReactionMutation.isPending,
        }}
      >
        <button
          class="size-4"
          onClick={handleReaction}
          disabled={publishReactionMutation.isPending}
        >
          <Show when={isReactedByMe() && !isReactedByMeWithEmoji()} fallback={<HeartOutlined />}>
            <HeartSolid />
          </Show>
        </button>
        <Show when={!config().hideCount && !config().showEmojiReaction && reactions().length > 0}>
          <div class="text-sm text-fg-tertiary">
            {formatSiPrefix(reactions().length, { minDigits: 4 })}
          </div>
        </Show>
      </div>
      <Show when={config().useEmojiReaction}>
        <div
          class="flex shrink-0 items-center gap-1"
          classList={{
            'text-fg-tertiary': !isReactedByMe() || !isReactedByMeWithEmoji(),
            'hover:text-r-reaction': !isReactedByMe() || !isReactedByMeWithEmoji(),
            'text-r-reaction':
              (isReactedByMe() && isReactedByMeWithEmoji()) || publishReactionMutation.isPending,
          }}
        >
          <button
            ref={emojiPickerPopup.targetRef}
            class="size-4"
            onClick={() => emojiPickerPopup.open()}
          >
            <Plus />
          </button>
          {emojiPickerPopup.popup()}
        </div>
      </Show>
    </>
  );
};

const RepostAction = (props: { event: NostrEvent }) => {
  const { config } = useConfig();
  const pubkey = usePubkey();

  const [reposted, setReposted] = createSignal(false);

  const { reposts, isRepostedBy } = useReposts(() => ({
    eventId: props.event.id,
  }));

  const isRepostedByMe = createMemo(() => {
    const p = pubkey();
    return (p != null && isRepostedBy(p)) || reposted();
  });

  const publishRepostMutation = useRepostMutation(() => ({
    eventId: props.event.id,
  }));

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
        kind: props.event.kind,
        notifyPubkey: props.event.pubkey,
      });
      setReposted(true);
    });
  };

  return (
    <div
      class="flex shrink-0 items-center gap-1"
      classList={{
        'text-fg-tertiary': !isRepostedByMe(),
        'hover:text-r-repost': !isRepostedByMe(),
        'text-r-repost': isRepostedByMe() || publishRepostMutation.isPending,
      }}
    >
      <button onClick={handleRepost} disabled={publishRepostMutation.isPending}>
        <span class="flex size-4">
          <ArrowPathRoundedSquare />
        </span>
      </button>
      <Show when={!config().hideCount && reposts().length > 0}>
        <div class="text-sm text-fg-tertiary">
          {formatSiPrefix(reposts().length, { minDigits: 4 })}
        </div>
      </Show>
    </div>
  );
};

const ReactionsModal: Component<{ event: NostrEvent; onClose: () => void }> = (props) => {
  const { reactions } = useReactions(() => ({
    eventId: props.event.id,
  }));

  return (
    <UserList
      data={reactions()}
      pubkeyExtractor={(ev) => ev.pubkey}
      renderInfo={(ev) => (
        <div class="h-4 min-w-4 max-w-8">
          <EmojiDisplay reactionTypes={reaction(ev).toReactionTypes()} />
        </div>
      )}
      onClose={props.onClose}
    />
  );
};

const RepostsModal: Component<{ event: NostrEvent; onClose: () => void }> = (props) => {
  const { reposts } = useReposts(() => ({
    eventId: props.event.id,
  }));

  return <UserList data={reposts()} pubkeyExtractor={(ev) => ev.pubkey} onClose={props.onClose} />;
};

const EmojiReactions: Component<{ event: NostrEvent }> = (props) => {
  const { config } = useConfig();
  const pubkey = usePubkey();

  const [reacted, setReacted] = createSignal(false);

  const { reactions, reactionsGrouped, isReactedBy } = useReactions(() => ({
    eventId: props.event.id,
  }));

  const mutation = useReactionMutation(() => ({
    eventId: props.event.id,
  }));

  const isReactedByMe = () => {
    const p = pubkey();
    if (p == null) return reacted();
    return reacted() || isReactedBy(p);
  };

  const doReaction = (reactionTypes?: ReactionTypes) => {
    if (isReactedByMe()) {
      // TODO remove reaction
      return;
    }

    ensureNonNull([pubkey(), props.event.id] as const)(([pubkeyNonNull, eventIdNonNull]) => {
      mutation.mutate({
        relayUrls: config().relayUrls,
        pubkey: pubkeyNonNull,
        reactionTypes: reactionTypes ?? { type: 'LikeDislike', content: '+' },
        eventId: eventIdNonNull,
        kind: props.event.kind,
        notifyPubkey: props.event.pubkey,
      });
      setReacted(true);
    });
  };

  return (
    <Show when={config().showEmojiReaction && reactions().length > 0}>
      <div class="scrollbar flex gap-2 overflow-x-auto py-1">
        <For each={[...reactionsGrouped().entries()]}>
          {([, events]) => {
            const isReactedByMeWithThisContent =
              events.findIndex((ev) => ev.pubkey === pubkey()) >= 0;
            const reactionTypes = reaction(events[0]).toReactionTypes();

            const emojiPopup = useEmojiPopup(() => ({
              reactionTypes,
              onClick: () => {
                if (isReactedByMe()) return;
                if (mutation.isPending) return;
                doReaction(reactionTypes);
              },
            }));

            return (
              <button
                ref={(el) => emojiPopup.emojiRef(el)}
                class="webkit-touch-callout-none flex h-6 touch-none select-none items-center rounded border border-border px-1"
                classList={{
                  'text-fg-tertiary': !isReactedByMeWithThisContent,
                  'hover:bg-r-reaction/10': !isReactedByMeWithThisContent,
                  'hover:border-r-reaction/40': !isReactedByMeWithThisContent,
                  'bg-r-reaction/10': isReactedByMeWithThisContent,
                  'border-r-reaction/40': isReactedByMeWithThisContent,
                  'text-r-reaction': isReactedByMeWithThisContent,
                }}
                type="button"
              >
                <span class="flex h-5 min-w-5 max-w-[128px] items-center justify-center">
                  <EmojiDisplay reactionTypes={reactionTypes} />
                </span>
                <Show when={!config().hideCount}>
                  <span class="ml-1 text-sm">{events.length}</span>
                </Show>
                {emojiPopup.popup()}
              </button>
            );
          }}
        </For>
      </div>
    </Show>
  );
};

const Actions: Component<ActionProps> = (props) => {
  const i18n = useTranslation();
  const { config } = useConfig();
  const pubkey = usePubkey();
  const commands = useCommands();

  const [modal, setModal] = createSignal<
    'EventDebugModal' | 'Reactions' | 'Reposts' | 'ZapRequest' | null
  >(null);

  const closeModal = () => setModal(null);

  const deleteMutation = createMutation(() => ({
    mutationKey: ['deleteEvent', props.event.id],
    mutationFn: (...params: Parameters<typeof commands.deleteEvent>) =>
      commands
        .deleteEvent(...params)
        .then((promeses) => Promise.allSettled(promeses.map(timeout(10000)))),
    onSuccess: (results) => {
      // TODO タイムラインから削除する
      const succeeded = results.filter((res) => res.status === 'fulfilled').length;
      const failed = results.length - succeeded;
      if (succeeded === results.length) {
        window.alert(i18n.t('post.deletedSuccessfully'));
      } else if (succeeded > 0) {
        window.alert(i18n.t('post.failedToDeletePartially', { count: failed }));
      } else {
        window.alert(i18n.t('post.failedToDelete'));
      }
    },
    onError: (err) => {
      console.error('failed to delete', err);
    },
  }));

  const otherActionsPopup = useContextMenu(() => ({
    menu: [
      {
        content: i18n.t('post.copyEventId'),
        onSelect: () => {
          navigator.clipboard
            .writeText(noteEncode(props.event.id))
            .catch((err) => window.alert(err));
        },
      },
      {
        content: i18n.t('post.showJSON'),
        onSelect: () => {
          setModal('EventDebugModal');
        },
      },
      {
        content: i18n.t('post.showReposts'),
        onSelect: () => {
          setModal('Reposts');
        },
      },
      {
        content: i18n.t('post.showReactions'),
        onSelect: () => {
          setModal('Reactions');
        },
      },
      {
        when: () => props.event.pubkey === pubkey(),
        content: <span class="text-red-500">{i18n.t('post.deletePost')}</span>,
        onSelect: () => {
          const p = pubkey();
          if (p == null) return;

          if (!window.confirm(i18n.t('post.confirmDelete'))) return;
          deleteMutation.mutate({
            relayUrls: config().relayUrls,
            pubkey: p,
            eventId: props.event.id,
          });
        },
      },
    ],
  }));

  return (
    <>
      <EmojiReactions event={props.event} />
      <div class="actions flex w-64 max-w-full items-center justify-between pt-1">
        <button
          class="shrink-0 text-fg-tertiary hover:text-fg-tertiary/70"
          onClick={(ev) => {
            ev.stopPropagation();
            props.onClickReply();
          }}
        >
          <span class="flex size-4">
            <ChatBubbleLeft />
          </span>
        </button>
        <RepostAction event={props.event} />
        <ReactionAction event={props.event} />
        <button type="button" onClick={() => setModal('ZapRequest')}>
          <span class="flex size-4 text-fg-tertiary hover:text-r-zap">
            <Bolt />
          </span>
        </button>
        <button
          ref={otherActionsPopup.targetRef}
          type="button"
          class="size-4 shrink-0 text-fg-tertiary hover:text-fg-tertiary/70"
          onClick={() => otherActionsPopup.open()}
        >
          <EllipsisHorizontal />
        </button>
        {otherActionsPopup.popup()}
      </div>
      <Switch>
        <Match when={modal() === 'EventDebugModal'}>
          <EventDebugModal event={props.event} onClose={closeModal} />
        </Match>
        <Match when={modal() === 'Reactions'}>
          <ReactionsModal event={props.event} onClose={closeModal} />
        </Match>
        <Match when={modal() === 'Reposts'}>
          <RepostsModal event={props.event} onClose={closeModal} />
        </Match>
        <Match when={modal() === 'ZapRequest'}>
          <ZapRequestModal zapTo={{ event: props.event }} onClose={closeModal} />
        </Match>
      </Switch>
    </>
  );
};

export default Actions;
