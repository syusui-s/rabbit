import assert from 'assert';

import { describe, it } from 'vitest';

import { parseReactionText, resolveDefaultReaction } from '@/nostr/defaultReaction';

const emojis: Record<string, { shortcode: string; url: string }> = {
  pepe: { shortcode: 'pepe', url: 'https://example.com/pepe.png' },
};
const getEmoji = (shortcode: string) => emojis[shortcode];

describe('parseReactionText', () => {
  it('should parse + and - as like and dislike', () => {
    assert.deepStrictEqual(parseReactionText('+', getEmoji), { type: 'LikeDislike', content: '+' });
    assert.deepStrictEqual(parseReactionText('-', getEmoji), { type: 'LikeDislike', content: '-' });
  });

  it('should parse a registered shortcode as a custom emoji', () => {
    assert.deepStrictEqual(parseReactionText(' :pepe: ', getEmoji), {
      type: 'CustomEmoji',
      content: ':pepe:',
      shortcode: 'pepe',
      url: 'https://example.com/pepe.png',
    });
  });

  it('should reject an unregistered shortcode and an empty text', () => {
    assert.strictEqual(parseReactionText(':unknown:', getEmoji), undefined);
    assert.strictEqual(parseReactionText('  ', getEmoji), undefined);
  });

  it('should parse other text as an emoji', () => {
    assert.deepStrictEqual(parseReactionText('🐰', getEmoji), { type: 'Emoji', content: '🐰' });
  });
});

describe('resolveDefaultReaction', () => {
  it('should return + unless a valid custom reaction is chosen', () => {
    const plus = { type: 'LikeDislike', content: '+' };
    assert.deepStrictEqual(
      resolveDefaultReaction({ type: 'default', content: '🐰' }, getEmoji),
      plus,
    );
    assert.deepStrictEqual(resolveDefaultReaction({ type: 'custom', content: '' }, getEmoji), plus);
    assert.deepStrictEqual(resolveDefaultReaction({ type: 'custom', content: '🐰' }, getEmoji), {
      type: 'Emoji',
      content: '🐰',
    });
  });
});
