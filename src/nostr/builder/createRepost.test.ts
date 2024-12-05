import assert from 'assert';

import { describe, it } from 'vitest';

import createRepost from '@/nostr/builder/createRepost';

describe('createRepost', () => {
  it('create repost event with given information', () => {
    const pubkey = '8c1bdf8eb87aa0ad42c5ae70d85921c24a7b2cf56278509e74f18a644c68050b';
    const eventId = '998fd497d92acffcd903afbe06d6dc73a1e22cfcfa261a572740f2b592db6605';
    const notifyPubkey = '96203d66276e3214ea93b6c78a577c3c9a7279f9ee7e51b22f3b8c17643a819c';

    const actual = createRepost({ kind: 1, eventId, notifyPubkey, pubkey });
    const expectedTags = [
      ['e', eventId, ''],
      ['p', notifyPubkey],
    ];

    assert.equal(actual.kind, 6);
    assert.equal(actual.content, '');
    assert.equal(actual.pubkey, pubkey);
    assert.deepStrictEqual(actual.tags, expectedTags);
  });

  it('create generic repost event with given information', () => {
    const pubkey = '8c1bdf8eb87aa0ad42c5ae70d85921c24a7b2cf56278509e74f18a644c68050b';
    const eventId = '8e429c6bce16e1b9bae7028396fbcb82f74b5aedbfa123bd06843400e504b24c';
    const notifyPubkey = '96203d66276e3214ea93b6c78a577c3c9a7279f9ee7e51b22f3b8c17643a819c';

    const actual = createRepost({ kind: 42, eventId, notifyPubkey, pubkey });
    const expectedTags = [
      ['e', eventId, ''],
      ['p', notifyPubkey],
      ['k', '42'],
    ];

    assert.equal(actual.kind, 16);
    assert.equal(actual.content, '');
    assert.equal(actual.pubkey, pubkey);
    assert.deepStrictEqual(actual.tags, expectedTags);
  });
});
