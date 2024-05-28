import { Component, Match, Switch } from 'solid-js';

import HeartSolid from 'heroicons/24/solid/heart.svg';

import { ReactionTypes } from '@/nostr/event/Reaction';

export type EmojiDisplayProps = {
  reactionTypes: ReactionTypes;
};

const isPlus = (r: ReactionTypes) => r.type === 'LikeDislike' && r.content === '+';

const EmojiDisplay: Component<EmojiDisplayProps> = (props) => (
  <Switch fallback={<span class="truncate">{props.reactionTypes.content}</span>}>
    <Match when={isPlus(props.reactionTypes)}>
      <span class="inline-block size-4 pt-px text-r-reaction">
        <HeartSolid />
      </span>
    </Match>
    <Match when={props.reactionTypes.type === 'Emoji' && props.reactionTypes} keyed>
      {({ content }) => <span class="truncate">{content}</span>}
    </Match>
    <Match when={props.reactionTypes.type === 'CustomEmoji' && props.reactionTypes} keyed>
      {({ shortcode, url }) => <img class="h-4 max-w-24" src={url} alt={`:${shortcode}:`} />}
    </Match>
  </Switch>
);

export default EmojiDisplay;
