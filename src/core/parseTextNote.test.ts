import assert from 'assert';
import { describe } from '@jest/globals';

import parseTextNote from './parseTextNote';

describe('parseTextNote', () => {
  /*
  it('should fail if the given event is not text note', () => {
    parseTextNote({
      kind: 0,
      content: '{}',
      tags: [],
    });
  });
  */

  it('should parse text note with the url with hash', () => {
    const parsed = parseTextNote({
      kind: 1,
      content: 'this is url\nhttps://github.com/syusui-s/rabbit/#readme #rabbit',
      tags: [],
      created_at: 1678377182,
      pubkey: '9366708117c4a7edf9178acdce538c95059b9eb3394808cdd90564094172d972',
    });

    const expected = [
      { type: 'PlainText', content: 'this is url\n' },
      { type: 'URL', content: 'https://github.com/syusui-s/rabbit/#readme' },
      { type: 'PlainText', content: ' ' },
      { type: 'HashTag', content: '#rabbit' },
    ];

    assert.deepStrictEqual(parsed, expected);
  });
});
