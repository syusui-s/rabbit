import assert from 'assert';

import * as Kind from 'nostr-tools/kinds';
import { describe, it } from 'vitest';

import TextNote from '@/nostr/event/TextNote';
import { MarkedEventTag, markedEventTags } from '@/nostr/event/TextNoteLike';

describe('markedEventTags', () => {
  it('should return an empty array if the event has no tags', () => {
    const actual = markedEventTags([]);
    const expected: MarkedEventTag[] = [];
    assert.deepStrictEqual(actual, expected);
  });
  it('should return MarkedEventTags if the event has tags with markers', () => {
    // the order of markers is not important
    const given = [
      ['e', '375ffd613e99b6359d9239b329f92bc8d19e4c164626567f68fd5112bfa5570b', '', 'mention'],
      ['e', '005c079e4c7c103168e0cb359270ac96a6a46e5ff4ce8f4643e0831f6d1c2450', '', 'reply'],
      ['e', '59cd96d24acd0679080679330a06ae9dcb5026ba080528fb93762c49050be8c9', '', 'root'],
    ];
    const actual = markedEventTags(given);
    const expected: MarkedEventTag[] = [
      {
        id: '375ffd613e99b6359d9239b329f92bc8d19e4c164626567f68fd5112bfa5570b',
        index: 0,
        relayUrl: null,
        marker: 'mention',
      },
      {
        id: '005c079e4c7c103168e0cb359270ac96a6a46e5ff4ce8f4643e0831f6d1c2450',
        index: 1,
        relayUrl: null,
        marker: 'reply',
      },
      {
        id: '59cd96d24acd0679080679330a06ae9dcb5026ba080528fb93762c49050be8c9',
        index: 2,
        relayUrl: null,
        marker: 'root',
      },
    ];
    assert.deepStrictEqual(actual, expected);
  });

  it('should return a root MarkedEventTag if the event has a single e tag', () => {
    const given = [['e', '59cd96d24acd0679080679330a06ae9dcb5026ba080528fb93762c49050be8c9', '']];
    const actual = markedEventTags(given);
    const expected: MarkedEventTag[] = [
      {
        id: '59cd96d24acd0679080679330a06ae9dcb5026ba080528fb93762c49050be8c9',
        index: 0,
        relayUrl: null,
        marker: 'reply',
      },
    ];
    assert.deepStrictEqual(actual, expected);
  });

  it('should return root and reply MarkedEventTag if the event has two e tags', () => {
    const given = [
      ['e', '59cd96d24acd0679080679330a06ae9dcb5026ba080528fb93762c49050be8c9', ''],
      ['e', '005c079e4c7c103168e0cb359270ac96a6a46e5ff4ce8f4643e0831f6d1c2450', ''],
    ];
    const actual = markedEventTags(given);
    const expected: MarkedEventTag[] = [
      {
        id: '59cd96d24acd0679080679330a06ae9dcb5026ba080528fb93762c49050be8c9',
        index: 0,
        relayUrl: null,
        marker: 'root',
      },
      {
        id: '005c079e4c7c103168e0cb359270ac96a6a46e5ff4ce8f4643e0831f6d1c2450',
        index: 1,
        relayUrl: null,
        marker: 'reply',
      },
    ];
    assert.deepStrictEqual(actual, expected);
  });

  it('should return root, mention and reply MarkedEventTags if the event has three e tags', () => {
    const given = [
      ['e', '59cd96d24acd0679080679330a06ae9dcb5026ba080528fb93762c49050be8c9', ''],
      ['e', '375ffd613e99b6359d9239b329f92bc8d19e4c164626567f68fd5112bfa5570b', ''],
      ['e', '005c079e4c7c103168e0cb359270ac96a6a46e5ff4ce8f4643e0831f6d1c2450', ''],
    ];
    const actual = markedEventTags(given);
    const expected: MarkedEventTag[] = [
      {
        id: '59cd96d24acd0679080679330a06ae9dcb5026ba080528fb93762c49050be8c9',
        index: 0,
        relayUrl: null,
        marker: 'root',
      },
      {
        id: '375ffd613e99b6359d9239b329f92bc8d19e4c164626567f68fd5112bfa5570b',
        index: 1,
        relayUrl: null,
        marker: 'mention',
      },
      {
        id: '005c079e4c7c103168e0cb359270ac96a6a46e5ff4ce8f4643e0831f6d1c2450',
        index: 2,
        relayUrl: null,
        marker: 'reply',
      },
    ];
    assert.deepStrictEqual(actual, expected);
  });

  it('should ignore invalid event id', () => {
    const given = [
      ['e', 'note1xa0l6cf7nxmrt8vj8xejn7ftergeunqkgcn9vlmgl4g390a92u9snvtljd', '', 'root'],
    ];
    const actual = markedEventTags(given);
    const expected: MarkedEventTag[] = [];
    assert.deepStrictEqual(actual, expected);
  });
});

describe('TextNote', () => {
  describe('constructor', () => {
    it('should throws an exception if non-kind:1 event is given', () => {
      assert.throws(() => {
        const textnote = new TextNote({
          id: '',
          kind: Kind.Metadata,
          content: '',
          created_at: 0,
          pubkey: '',
          sig: '',
          tags: [],
        });
        assert.deepStrictEqual(textnote, null);
      });
    });
  });

  describe('#containsEventNote', () => {
    it('should return true if content of the event includes a NIP-19-styled note ID', () => {
      const textnote = new TextNote({
        id: '',
        kind: Kind.ShortTextNote,
        content: 'nostr:note1qpwq08jv0sgrz68qev6eyu9vj6n2gmjl7n8g73jruzp37mguy3gq8d7asa',
        created_at: 0,
        pubkey: '',
        sig: '',
        tags: [],
      });
      assert(
        textnote.containsEventNote(
          '005c079e4c7c103168e0cb359270ac96a6a46e5ff4ce8f4643e0831f6d1c2450',
        ),
      );
    });

    it('should return true if content of the event includes a NIP-19-styled nevent ID', () => {
      const textnote = new TextNote({
        id: '',
        kind: Kind.ShortTextNote,
        content: 'nostr:nevent1qqsttdc4rmxn8fqmk9s6823fqvpcmlm8ry6dmtu4m2snv0cm9sv70kq6urpy5',
        created_at: 0,
        pubkey: '',
        sig: '',
        tags: [],
      });
      assert(
        textnote.containsEventNote(
          'b5b7151ecd33a41bb161a3aa2903038dff671934ddaf95daa1363f1b2c19e7d8',
        ),
      );
    });
  });

  describe('#contentWarning', () => {
    it('should return a reply MarkedEventTag if the event has a reply tag', () => {
      const textnote = new TextNote({
        id: '',
        kind: Kind.ShortTextNote,
        content: '',
        created_at: 0,
        pubkey: '',
        sig: '',
        tags: [
          ['e', '005c079e4c7c103168e0cb359270ac96a6a46e5ff4ce8f4643e0831f6d1c2450', '', 'reply'],
        ],
      });
      const expected = {
        id: '005c079e4c7c103168e0cb359270ac96a6a46e5ff4ce8f4643e0831f6d1c2450',
        index: 0,
        marker: 'reply',
        relayUrl: null,
      };
      assert.deepStrictEqual(textnote.replyingToEvent(), expected);
    });
  });
});
