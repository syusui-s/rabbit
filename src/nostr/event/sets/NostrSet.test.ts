import assert from 'assert';

import { describe, it } from 'vitest';

import { NostrSetTags } from '@/nostr/event/sets/NostrSet';

describe('NostrSetTags', () => {
  describe('title', () => {
    it('should return title', () => {
      const actual = new NostrSetTags([['title', 'Nostr Developers']]);
      assert.equal(actual.title(), 'Nostr Developers');
    });

    it('should return undefined if title is not defined', () => {
      const actual = new NostrSetTags([[]]);
      assert.equal(actual.title(), undefined);
    });
  });

  describe('description', () => {
    it('should return description', () => {
      const actual = new NostrSetTags([['description', 'The list of nostr developers']]);
      assert.equal(actual.description(), 'The list of nostr developers');
    });

    it('should return undefined if description is not defined', () => {
      const actual = new NostrSetTags([[]]);
      assert.equal(actual.description(), undefined);
    });
  });

  describe('image', () => {
    it('should return image', () => {
      const actual = new NostrSetTags([['image', 'https://example.com/nostr-devs.webp']]);
      assert.equal(actual.image(), 'https://example.com/nostr-devs.webp');
    });

    it('should return undefined if image is not defined', () => {
      const actual = new NostrSetTags([[]]);
      assert.equal(actual.image(), undefined);
    });
  });
});
