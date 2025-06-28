import { type Component, Match, Switch } from 'solid-js';

export type EmojiTypes =
  | { type: 'Emoji'; content: string }
  | { type: 'CustomEmoji'; shortcode: string; url: string };

export type EmojiDisplayProps = {
  emoji: EmojiTypes;
};

const EmojiDisplay: Component<EmojiDisplayProps> = (props) => (
  <Switch>
    <Match when={props.emoji.type === 'Emoji' && props.emoji.content} keyed>
      {(content) => <span class="truncate">{content}</span>}
    </Match>
    <Match when={props.emoji.type === 'CustomEmoji' && props.emoji} keyed>
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
