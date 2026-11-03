import { type CustomEmojiConfig, type DefaultReaction } from '@/core/useConfig';
import { type ReactionTypes } from '@/nostr/event/Reaction';

export const plusReaction: ReactionTypes = { type: 'LikeDislike', content: '+' };

/**
 * Converts the reaction written in the config into a reaction to publish.
 * `:shortcode:` becomes a custom emoji reaction if it is registered.
 * Returns undefined if the custom one cannot be published.
 */
export const parseReactionText = (
  text: string,
  getEmoji: (shortcode: string) => CustomEmojiConfig | undefined,
): ReactionTypes | undefined => {
  const content = text.trim();
  if (content.length === 0) return undefined;
  if (content === '+' || content === '-') return { type: 'LikeDislike', content };

  const shortcode = content.match(/^:([\w-]+):$/)?.[1];
  if (shortcode != null) {
    const emoji = getEmoji(shortcode);
    if (emoji == null) return undefined;
    return { type: 'CustomEmoji', content, shortcode, url: emoji.url };
  }
  return { type: 'Emoji', content };
};

/** Returns the reaction to publish when the reaction button is clicked. */
export const resolveDefaultReaction = (
  defaultReaction: DefaultReaction,
  getEmoji: (shortcode: string) => CustomEmojiConfig | undefined,
): ReactionTypes => {
  if (defaultReaction.type === 'default') return plusReaction;
  return parseReactionText(defaultReaction.content, getEmoji) ?? plusReaction;
};
