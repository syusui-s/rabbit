import { Show, For, createMemo, type JSX, type Component } from 'solid-js';
import type { Event as NostrEvent } from 'nostr-tools/event';

import HeartOutlined from 'heroicons/24/outline/heart.svg';
import HeartSolid from 'heroicons/24/solid/heart.svg';
import ArrowPathRoundedSquare from 'heroicons/24/outline/arrow-path-rounded-square.svg';
import ChatBubbleLeft from 'heroicons/24/outline/chat-bubble-left.svg';
import EllipsisHorizontal from 'heroicons/24/outline/ellipsis-horizontal.svg';

import useProfile from '@/clients/useProfile';
import useConfig from '@/clients/useConfig';
import usePubkey from '@/clients/usePubkey';
import useCommands from '@/clients/useCommands';
import useReactions from '@/clients/useReactions';
import useDatePulser from '@/hooks/useDatePulser';
import { formatRelative } from '@/utils/formatDate';
import ColumnItem from '@/components/ColumnItem';
import GeneralUserMentionDisplay from '@/components/textNote/GeneralUserMentionDisplay';
import TextNoteContentDisplay from '@/components/textNote/TextNoteContentDisplay';

export type TextNoteProps = {
  event: NostrEvent;
};

const TextNote: Component<TextNoteProps> = (props) => {
  const currentDate = useDatePulser();
  const [config] = useConfig();
  const commands = useCommands();
  const pubkey = usePubkey();

  const { profile: author } = useProfile(() => ({
    relayUrls: config().relayUrls,
    pubkey: props.event.pubkey,
  }));

  const {
    reactions,
    isReactedBy,
    query: reactionsQuery,
  } = useReactions(() => ({
    relayUrls: config().relayUrls,
    eventId: props.event.id,
  }));

  const isReactedByMe = createMemo(() => isReactedBy(pubkey()));

  const replyingToPubKeys = createMemo(() =>
    props.event.tags.filter((tag) => tag[0] === 'p').map((e) => e[1]),
  );
  // TODO 日付をいい感じにフォーマットする関数を作る
  const createdAt = () => formatRelative(new Date(props.event.created_at * 1000), currentDate());

  const handleRepost: JSX.EventHandler<HTMLButtonElement, MouseEvent> = (ev) => {
    ev.preventDefault();
    commands.publishDeprecatedRepost({
      relayUrls: config().relayUrls,
      pubkey: pubkey(),
      eventId: props.event.id,
      notifyPubkey: props.event.pubkey,
    });
  };

  const handleReaction: JSX.EventHandler<HTMLButtonElement, MouseEvent> = (ev) => {
    if (isReactedByMe()) {
      // TODO remove reaction
      return;
    }
    ev.preventDefault();
    commands
      .publishReaction({
        relayUrls: config().relayUrls,
        pubkey: pubkey(),
        content: '+',
        eventId: props.event.id,
        notifyPubkey: props.event.pubkey,
      })
      .then(() => {
        reactionsQuery.refetch();
      });
  };

  return (
    <div class="textnote">
      <ColumnItem>
        <div class="author-icon h-10 w-10 shrink-0">
          <Show when={author()?.picture}>
            <img
              src={author()?.picture}
              alt="icon"
              // TODO autofit
              class="h-10 w-10 rounded"
            />
          </Show>
        </div>
        <div class="min-w-0 flex-auto">
          <div class="flex justify-between gap-1 text-xs">
            <div class="author flex min-w-0 truncate">
              {/* TODO link to author */}
              <Show when={(author()?.display_name?.length ?? 0) > 0}>
                <div class="author-name truncate pr-1 font-bold">{author()?.display_name}</div>
              </Show>
              <div class="author-username truncate text-zinc-600">
                <Show when={author()?.name} fallback={props.event.pubkey}>
                  @{author()?.name}
                </Show>
              </div>
            </div>
            <div class="created-at shrink-0">{createdAt()}</div>
          </div>
          <Show when={replyingToPubKeys().length > 0}>
            <div class="text-xs">
              {'Replying to '}
              <For each={replyingToPubKeys()}>
                {(replyToPubkey: string) => (
                  <span class="pr-1 text-blue-500 underline">
                    <GeneralUserMentionDisplay pubkey={replyToPubkey} />
                  </span>
                )}
              </For>
            </div>
          </Show>
          <div class="content whitespace-pre-wrap break-all">
            <TextNoteContentDisplay event={props.event} embedding={true} />
          </div>
          <div class="flex w-48 items-center justify-between gap-8 pt-1">
            <button class="h-4 w-4 text-zinc-400">
              <ChatBubbleLeft />
            </button>
            <button class="h-4 w-4 text-zinc-400" onClick={handleRepost}>
              <ArrowPathRoundedSquare />
            </button>
            <div
              class="flex items-center gap-1"
              classList={{
                'text-zinc-400': !isReactedByMe(),
                'text-rose-400': isReactedByMe(),
              }}
            >
              <button class="h-4 w-4" onClick={handleReaction}>
                <Show when={isReactedByMe()} fallback={<HeartOutlined />}>
                  <HeartSolid />
                </Show>
              </button>
              <div class="text-sm text-zinc-400">{reactions().length}</div>
            </div>
            <button class="h-4 w-4 text-zinc-400">
              <EllipsisHorizontal />
            </button>
          </div>
        </div>
      </ColumnItem>
    </div>
  );
};

export default TextNote;
