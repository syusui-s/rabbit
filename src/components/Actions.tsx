import {
  type JSX,
  type Component,
  Switch,
  Match,
  Show,
  lazy,
  batch,
  createSignal,
  createMemo,
  For,
} from 'solid-js';

import ArrowPathRoundedSquare from 'heroicons/24/outline/arrow-path-rounded-square.svg';
import Bolt from 'heroicons/24/outline/bolt.svg';
import ChatBubbleLeft from 'heroicons/24/outline/chat-bubble-left.svg';
import EllipsisHorizontal from 'heroicons/24/outline/ellipsis-horizontal.svg';
import HeartOutlined from 'heroicons/24/outline/heart.svg';
import Plus from 'heroicons/24/outline/plus.svg';
import HeartSolid from 'heroicons/24/solid/heart.svg';
import * as Kind from 'nostr-tools/kinds';
import { neventEncode } from 'nostr-tools/nip19';
import { type Event as NostrEvent } from 'nostr-tools/pure';

import ReactionEmojiDisplay, { reactionTypesToEmojiTypes } from '@/components/ReactionEmojiDisplay';
import useEmojiPicker, { type EmojiData } from '@/components/useEmojiPicker';
import useEmojiPopup from '@/components/useEmojiPopup';
import useContextMenu from '@/components/utils/useContextMenu';
import useConfig from '@/core/useConfig';
import { useTranslation } from '@/i18n/useTranslation';
import { reaction } from '@/nostr/event';
import { type ReactionTypes } from '@/nostr/event/Reaction';
import TextNote from '@/nostr/event/TextNote';
import useDeleteMutation from '@/nostr/mutation/useDeleteMutation';
import useReactionMutation from '@/nostr/mutation/useReactionMutation';
import useRepostMutation from '@/nostr/mutation/useRepostMutation';
import usePubkey from '@/nostr/usePubkey';
import useReactions from '@/nostr/useReactions';
import useReposts from '@/nostr/useReposts';
import ensureNonNull from '@/utils/ensureNonNull';
import { getErrorMessage } from '@/utils/error';
import { formatSiPrefix } from '@/utils/siPrefix';

const EventDebugModal = lazy(() => import('@/components/modal/EventDebugModal'));
const UserList = lazy(() => import('@/components/modal/UserList'));

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

  const { mutation: reactionMutation, publishReaction } = useReactionMutation(() => ({
    eventId: props.event.id,
  }));

  const doReaction = (reactionTypes?: ReactionTypes) => {
    if (isReactedByMe()) {
      // TODO remove reaction
      return;
    }
    if (reactionMutation.isPending) {
      return;
    }

    ensureNonNull([pubkey(), props.event.id] as const)(([pubkeyNonNull, eventIdNonNull]) => {
      publishReaction({
        pubkey: pubkeyNonNull,
        reactionTypes: reactionTypes ?? { type: 'LikeDislike', content: '+' },
        eventId: eventIdNonNull,
        kind: props.event.kind,
        notifyPubkey: props.event.pubkey,
      })
        .then(() => {
          setReacted(true);
        })
        .catch((err) => {
          window.alert(getErrorMessage(err));
        });
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
            (isReactedByMe() && !isReactedByMeWithEmoji()) || reactionMutation.isPending,
        }}
      >
        <button class="size-4" onClick={handleReaction} disabled={reactionMutation.isPending}>
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
              (isReactedByMe() && isReactedByMeWithEmoji()) || reactionMutation.isPending,
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

  const { mutation: repostMutation, publishRepost } = useRepostMutation(() => ({
    eventId: props.event.id,
  }));

  const handleRepost: JSX.EventHandler<HTMLButtonElement, MouseEvent> = (ev) => {
    ev.stopPropagation();

    if (isRepostedByMe()) {
      // TODO remove reaction
      return;
    }
    if (repostMutation.isPending) {
      return;
    }

    const p = pubkey();
    const { id } = props.event;
    if (p != null && id != null) {
      publishRepost({
        pubkey: p,
        eventId: id,
        kind: props.event.kind,
        notifyPubkey: props.event.pubkey,
      })
        .then(() => {
          setReposted(true);
        })
        .catch((err) => {
          window.alert(getErrorMessage(err));
        });
    }
  };

  return (
    <div
      class="flex shrink-0 items-center gap-1"
      classList={{
        'text-fg-tertiary': !isRepostedByMe(),
        'hover:text-r-repost': !isRepostedByMe(),
        'text-r-repost': isRepostedByMe() || repostMutation.isPending,
      }}
    >
      <button onClick={handleRepost} disabled={repostMutation.isPending}>
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
          <ReactionEmojiDisplay reactionTypes={reaction(ev).toReactionTypes()} />
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

  const { mutation: reactionMutation, publishReaction } = useReactionMutation(() => ({
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
    if (reactionMutation.isPending) {
      return;
    }

    ensureNonNull([pubkey(), props.event.id] as const)(([pubkeyNonNull, eventIdNonNull]) => {
      publishReaction({
        pubkey: pubkeyNonNull,
        reactionTypes: reactionTypes ?? { type: 'LikeDislike', content: '+' },
        eventId: eventIdNonNull,
        kind: props.event.kind,
        notifyPubkey: props.event.pubkey,
      })
        .then(() => {
          setReacted(true);
        })
        .catch((err) => {
          window.alert(getErrorMessage(err));
        });
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
            const emojiTypes = reactionTypesToEmojiTypes(reactionTypes);

            const emojiPopup = useEmojiPopup(() =>
              ensureNonNull([emojiTypes] as const)(([emoji]) => ({
                emoji,
                onClick: () => {
                  if (isReactedByMe()) return;
                  if (reactionMutation.isPending) return;
                  doReaction(reactionTypes);
                },
              })),
            );

            return (
              <button
                ref={(el) => emojiPopup.emojiRef(el)}
                class="webkit-touch-callout-none flex h-6 touch-pan-x select-none items-center rounded border border-border px-1"
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
                  <ReactionEmojiDisplay reactionTypes={reactionTypes} />
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
  const { addMutedThread } = useConfig();
  const pubkey = usePubkey();

  const [modal, setModal] = createSignal<
    'EventDebugModal' | 'Reactions' | 'Reposts' | 'ZapRequest' | null
  >(null);

  const closeModal = () => setModal(null);

  const { mutation: deleteMutation, deleteEvent } = useDeleteMutation(() => ({
    id: props.event.id,
  }));

  const muteThread = () => {
    batch(() => {
      addMutedThread(props.event.id);

      if (props.event.kind === Kind.ShortTextNote) {
        const rootEventId = new TextNote(props.event).rootEvent()?.id;
        if (rootEventId != null) {
          addMutedThread(rootEventId);
        }
      }
    });
  };

  const otherActionsPopup = useContextMenu(() => ({
    menu: [
      {
        content: i18n.t('post.copyEventId'),
        onSelect: () => {
          navigator.clipboard
            .writeText(neventEncode({ id: props.event.id }))
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
        content: i18n.t('post.muteThread'),
        onSelect: () => muteThread(),
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
          if (deleteMutation.isPending) return;

          if (!window.confirm(i18n.t('post.confirmDelete'))) return;

          deleteEvent({
            pubkey: p,
            identifier: props.event.id,
            kind: props.event.kind,
          })
            .then((results) => {
              if (results.failed.length === 0) {
                window.alert(i18n.t('post.deletedSuccessfully'));
              } else if (results.succeeded.length > 0) {
                window.alert(
                  i18n.t('post.failedToDeletePartially', { count: results.failed.length }),
                );
              } else {
                window.alert(i18n.t('post.failedToDelete'));
              }
            })
            .catch((err) => {
              window.alert(getErrorMessage(err));
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
