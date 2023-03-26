import assert from 'assert';
import { describe, it } from 'vitest';

import parseTextNote, { type ParsedTextNoteNode } from './parseTextNote';

describe('parseTextNote', () => {
  /*
  it('should fail if the given event is not text note', () => {
    assert.throws(() => {
      parseTextNote({
        id: '',
        sig: '',
        kind: 0,
        content: '{}',
        tags: [],
        created_at: 0,
        pubkey: '',
      });
    });
  });
  */

  it('should parse text note with the url with hash', () => {
    const parsed = parseTextNote({
      id: '',
      sig: '',
      kind: 1,
      content: 'this is url\nhttps://github.com/syusui-s/rabbit/#readme #rabbit',
      tags: [],
      created_at: 1678377182,
      pubkey: '9366708117c4a7edf9178acdce538c95059b9eb3394808cdd90564094172d972',
    });

    const expected: ParsedTextNoteNode[] = [
      { type: 'PlainText', content: 'this is url\n' },
      { type: 'URL', content: 'https://github.com/syusui-s/rabbit/#readme' },
      { type: 'PlainText', content: ' ' },
      { type: 'HashTag', content: '#rabbit', tagName: 'rabbit' },
    ];

    assert.deepStrictEqual(parsed, expected);
  });

  it('should parse text note with the url with hash and hashtag', () => {
    const parsed = parseTextNote({
      id: '',
      sig: '',
      kind: 1,
      content: 'this is url\nhttps://github.com/syusui-s/rabbit/#readme #rabbit',
      tags: [],
      created_at: 1678377182,
      pubkey: '9366708117c4a7edf9178acdce538c95059b9eb3394808cdd90564094172d972',
    });

    const expected: ParsedTextNoteNode[] = [
      { type: 'PlainText', content: 'this is url\n' },
      { type: 'URL', content: 'https://github.com/syusui-s/rabbit/#readme' },
      { type: 'PlainText', content: ' ' },
      { type: 'HashTag', content: '#rabbit', tagName: 'rabbit' },
    ];

    assert.deepStrictEqual(parsed, expected);
  });

  it('should parse text note which includes URL with + symbol', () => {
    const parsed = parseTextNote({
      id: '',
      sig: '',
      kind: 1,
      content: 'this is my page\nhttps://example.com/abc+def?q=ghi+jkl#lmn+opq',
      tags: [],
      created_at: 1678377182,
      pubkey: '9366708117c4a7edf9178acdce538c95059b9eb3394808cdd90564094172d972',
    });

    const expected: ParsedTextNoteNode[] = [
      { type: 'PlainText', content: 'this is my page\n' },
      { type: 'URL', content: 'https://example.com/abc+def?q=ghi+jkl#lmn+opq' },
    ];

    assert.deepStrictEqual(parsed, expected);
  });

  //
  it('should parse text note which includes URL with + symbol', () => {
    const parsed = parseTextNote({
      id: '',
      sig: '',
      kind: 1,
      content: 'I wrote this page\nhttps://example.com/test(test)?q=(q)#(h)',
      tags: [],
      created_at: 1678377182,
      pubkey: '9366708117c4a7edf9178acdce538c95059b9eb3394808cdd90564094172d972',
    });

    const expected: ParsedTextNoteNode[] = [
      { type: 'PlainText', content: 'I wrote this page\n' },
      {
        type: 'URL',
        content: 'https://example.com/test(test)?q=(q)#(h)',
      },
    ];

    assert.deepStrictEqual(parsed, expected);
  });

  it('should parse text note which includes wss URL', () => {
    const parsed = parseTextNote({
      id: '',
      sig: '',
      kind: 1,
      content: 'this is my using relays: wss://relay.damus.io, wss://relay.snort.social',
      tags: [],
      created_at: 1678377182,
      pubkey: '9366708117c4a7edf9178acdce538c95059b9eb3394808cdd90564094172d972',
    });

    const expected: ParsedTextNoteNode[] = [
      { type: 'PlainText', content: 'this is my using relays: ' },
      { type: 'URL', content: 'wss://relay.damus.io' },
      { type: 'PlainText', content: ', ' },
      { type: 'URL', content: 'wss://relay.snort.social' },
    ];

    assert.deepStrictEqual(parsed, expected);
  });

  it('should parse text note with pubkey mentions', () => {
    const parsed = parseTextNote({
      id: '',
      sig: '',
      kind: 1,
      content: 'this is pubkey\n#[0] #[1]',
      tags: [
        ['p', '9366708117c4a7edf9178acdce538c95059b9eb3394808cdd90564094172d972'],
        ['p', '80d3a41d8a00679c0105faac2cdf7643c9ba26835cff096bf7f9c7a0eee8c8fc'],
      ],
      created_at: 1678377182,
      pubkey: '9366708117c4a7edf9178acdce538c95059b9eb3394808cdd90564094172d972',
    });

    const expected: ParsedTextNoteNode[] = [
      { type: 'PlainText', content: 'this is pubkey\n' },
      {
        type: 'MentionedUser',
        tagIndex: 0,
        content: '#[0]',
        pubkey: '9366708117c4a7edf9178acdce538c95059b9eb3394808cdd90564094172d972',
      },
      { type: 'PlainText', content: ' ' },
      {
        type: 'MentionedUser',
        tagIndex: 1,
        content: '#[1]',
        pubkey: '80d3a41d8a00679c0105faac2cdf7643c9ba26835cff096bf7f9c7a0eee8c8fc',
      },
    ];

    assert.deepStrictEqual(parsed, expected);
  });

  it('should parse text note which includes npub string', () => {
    const parsed = parseTextNote({
      id: '',
      sig: '',
      kind: 1,
      content:
        'this is pubkey\nnpub1srf6g8v2qpnecqg9l2kzehmkg0ym5f5rtnlsj6lhl8r6pmhger7q5mtt3q\nhello',
      tags: [],
      created_at: 1678377182,
      pubkey: '9366708117c4a7edf9178acdce538c95059b9eb3394808cdd90564094172d972',
    });

    const expected: ParsedTextNoteNode[] = [
      { type: 'PlainText', content: 'this is pubkey\n' },
      {
        type: 'Bech32Entity',
        content: 'npub1srf6g8v2qpnecqg9l2kzehmkg0ym5f5rtnlsj6lhl8r6pmhger7q5mtt3q',
        data: {
          type: 'npub',
          data: '80d3a41d8a00679c0105faac2cdf7643c9ba26835cff096bf7f9c7a0eee8c8fc',
        },
      },
      { type: 'PlainText', content: '\nhello' },
    ];

    assert.deepStrictEqual(parsed, expected);
  });
});
