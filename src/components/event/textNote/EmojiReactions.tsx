import { Component, For, Show } from 'solid-js';

import { Event as NostrEvent } from 'nostr-tools';

import EmojiDisplay from '@/components/EmojiDisplay';
import useConfig from '@/core/useConfig';
import { reaction } from '@/nostr/event';
import { ReactionTypes } from '@/nostr/event/Reaction';
import usePubkey from '@/nostr/usePubkey';

type EmojiReactionsProps = {
  reactionsGrouped: Map<string, NostrEvent[]>;
  onReaction: (reaction: ReactionTypes) => void;
};

const EmojiReactions: Component<EmojiReactionsProps> = (props) => {
  const { config } = useConfig();
  const pubkey = usePubkey();

  return (
    <div class="flex gap-2 overflow-x-auto py-1">
      <For each={[...props.reactionsGrouped.entries()]}>
        {([, events]) => {
          const isReactedByMeWithThisContent =
            events.findIndex((ev) => ev.pubkey === pubkey()) >= 0;
          const reactionTypes = reaction(events[0]).toReactionTypes();

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
              onClick={() => props.onReaction(reactionTypes)}
            >
              <EmojiDisplay reactionTypes={reactionTypes} />
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

export default EmojiReactions;
