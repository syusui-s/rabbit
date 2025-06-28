import { type Component, Match, Switch } from 'solid-js';

import HeartSolid from 'heroicons/24/solid/heart.svg';

import EmojiDisplay, { type EmojiTypes } from '@/components/EmojiDisplay';
import { type ReactionTypes } from '@/nostr/event/Reaction';

export type ReactionEmojiDisplayProps = {
  reactionTypes: ReactionTypes;
};

export const isPlus = (r: ReactionTypes) =>
  r.type === 'LikeDislike' && (r.content === '+' || r.content.length === 0);

export const reactionTypesToEmojiTypes = (r: ReactionTypes): EmojiTypes | undefined => {
  if (r.type === 'Emoji') return r;
  if (r.type === 'CustomEmoji') return r;
  return undefined;
};

const ReactionEmojiDisplay: Component<ReactionEmojiDisplayProps> = (props) => (
  <Switch fallback={<span class="truncate">{props.reactionTypes.content}</span>}>
    <Match when={isPlus(props.reactionTypes)}>
      <span class="inline-block size-full pt-px text-r-reaction">
        <HeartSolid />
      </span>
    </Match>
    <Match when={reactionTypesToEmojiTypes(props.reactionTypes)} keyed>
      {(emoji) => <EmojiDisplay emoji={emoji} />}
    </Match>
  </Switch>
);

export default ReactionEmojiDisplay;
