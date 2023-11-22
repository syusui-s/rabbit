import { Event as NostrEvent, Kind } from 'nostr-tools';

import GenericEvent from '@/nostr/event/GenericEvent';

const emojiRegex = /^\p{Emoji}[\p{Emoji_Component}\p{Emoji_Modifier}\p{Emoji_Presentation}]*$/u;
const customEmojiRegex = /^:(\w+):$/;

export type ReactionTypes =
  | { type: 'Emoji'; content: string }
  | { type: 'CustomEmoji'; content: string; shortcode: string; url: string }
  | { type: 'LikeDislike'; content: string }
  | { type: 'Unknown'; content: string };

const reactionToReactionTypes = (event: Reaction): ReactionTypes => {
  if (event.isLikeOrDislike()) {
    return { type: 'LikeDislike', content: event.content };
  }
  if (event.isEmoji()) {
    return { type: 'Emoji', content: event.content };
  }
  if (event.isCustomEmoji()) {
    const shortcode = event.getShortcode();
    const url = event.getUrl();
    if (shortcode != null && url != null) {
      return { type: 'CustomEmoji', content: event.content, shortcode, url };
    }
  }
  return { type: 'Unknown', content: event.content };
};

export default class Reaction extends GenericEvent {
  constructor(rawEvent: NostrEvent) {
    if (rawEvent.kind !== (Kind.Reaction as number)) {
      throw new TypeError('kind should be 7');
    }
    super(rawEvent);
  }

  isLike(): boolean {
    return this.content === '+';
  }

  isDislike(): boolean {
    return this.content === '-';
  }

  isLikeOrDislike(): boolean {
    return this.isLike() || this.isDislike();
  }

  isEmoji(): boolean {
    return emojiRegex.test(this.content);
  }

  isCustomEmoji(): boolean {
    return customEmojiRegex.test(this.content);
  }

  getShortcode(): string | undefined {
    const match = this.content.match(customEmojiRegex);
    const shortcode = match?.[1];
    return shortcode;
  }

  getUrl(): string | undefined {
    const shortcode = this.getShortcode();
    if (shortcode == null) return undefined;
    return this.getEmojiUrl(shortcode);
  }

  toReactionTypes(): ReactionTypes {
    return reactionToReactionTypes(this);
  }
}
