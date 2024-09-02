import { Component, Match, Switch } from 'solid-js';

import HeartSolid from 'heroicons/24/solid/heart.svg';

import { ReactionTypes } from '@/nostr/event/Reaction';

export type EmojiDisplayProps = {
  reactionTypes: ReactionTypes;
};

const isPlus = (r: ReactionTypes) =>
  r.type === 'LikeDislike' && (r.content === '+' || r.content.length === 0);

const EmojiDisplay: Component<EmojiDisplayProps> = (props) => (
  <Switch fallback={<span class="truncate">{props.reactionTypes.content}</span>}>
    <Match when={isPlus(props.reactionTypes)}>
      <span class="inline-block size-full pt-px text-r-reaction">
        <HeartSolid />
      </span>
    </Match>
    <Match when={props.reactionTypes.type === 'Emoji' && props.reactionTypes} keyed>
      {({ content }) => <span class="truncate">{content}</span>}
    </Match>
    <Match when={props.reactionTypes.type === 'CustomEmoji' && props.reactionTypes} keyed>
      {({ shortcode, url }) => (
        <img
          class="pointer-events-none h-full w-auto object-contain"
          src={url}
          alt={`:${shortcode}:`}
        />
      )}
    </Match>
  </Switch>
);

export default EmojiDisplay;
