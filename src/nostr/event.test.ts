import assert from 'assert';

import { describe, it } from 'vitest';

import { isValidId } from '@/nostr/event';

describe('isValidId', () => {
  it.each([
    '59cd96d24acd0679080679330a06ae9dcb5026ba080528fb93762c49050be8c9',
    '005c079e4c7c103168e0cb359270ac96a6a46e5ff4ce8f4643e0831f6d1c2450',
  ])('should return true if valid id is given (%s)', (id) => {
    assert.deepStrictEqual(true, isValidId(id));
  });

  it.each([
    'd9553d75bb38da004d380168221fa8cb7c5c55f5242397c1459c7013a2a1264z',
    'a8e947afb422bbc44577a107147f684ab5c97538b505d2699181e8815160950z',
    'a8e947a',
    '',
  ])('should return false if invalid id is given (%s)', (id) => {
    assert.deepStrictEqual(false, isValidId(id));
  });
});
