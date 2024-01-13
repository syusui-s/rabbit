import assert from 'assert';

import { describe, it } from 'vitest';

import { buildTags } from '@/nostr/builder/createTextNote';

describe('buildTags', () => {
  it('should return a root tag if only rootEventId is given', () => {
    const rootEventId = '9d6f6ae00ede6420fb053c66f06163f5096c8e11c44313cadcc5dd4ddae7f842';
    const actual = buildTags({ rootEventId });
    const expect = [['e', rootEventId, '', 'root']];

    assert.deepStrictEqual(actual, expect);
  });

  // For top level replies, only the "root" marker should be used.
  // https://github.com/nostr-protocol/nips/blob/master/10.md
  it('should return a root tag if only replyEventId is given', () => {
    const replyEventId = '9d6f6ae00ede6420fb053c66f06163f5096c8e11c44313cadcc5dd4ddae7f842';
    const actual = buildTags({ replyEventId });
    const expect = [['e', replyEventId, '', 'root']];

    assert.deepStrictEqual(actual, expect);
  });

  it('should return just a root tag if rootEventId and replyEventId are the same', () => {
    const eventId = '9d6f6ae00ede6420fb053c66f06163f5096c8e11c44313cadcc5dd4ddae7f842';
    const actual = buildTags({ rootEventId: eventId, replyEventId: eventId });
    const expect = [['e', eventId, '', 'root']];

    assert.deepStrictEqual(actual, expect);
  });

  it('should return root tag and reply tag if rootEventId and replyEventId are different', () => {
    const rootEventId = '9d6f6ae00ede6420fb053c66f06163f5096c8e11c44313cadcc5dd4ddae7f842';
    const replyEventId = '750bd0e083d49b36e4d1e25f68b3d9bfa5987c71198e3fe97b955d65acefa5a0';
    const actual = buildTags({ rootEventId, replyEventId });
    const expect = [
      ['e', rootEventId, '', 'root'],
      ['e', replyEventId, '', 'reply'],
    ];

    assert.deepStrictEqual(actual, expect);
  });

  it('should return root tag, mention tag and reply tag if rootEventId, mentionEventIds and replyEventId are given', () => {
    const rootEventId = '9d6f6ae00ede6420fb053c66f06163f5096c8e11c44313cadcc5dd4ddae7f842';
    const replyEventId = '750bd0e083d49b36e4d1e25f68b3d9bfa5987c71198e3fe97b955d65acefa5a0';
    const mentionEventIds = ['750bd0e083d49b36e4d1e25f68b3d9bfa5987c71198e3fe97b955d65acefa5a0'];
    const actual = buildTags({ rootEventId, replyEventId, mentionEventIds });
    const expect = [
      ['e', rootEventId, '', 'root'],
      ['e', mentionEventIds[0], '', 'mention'],
      ['e', replyEventId, '', 'reply'],
    ];

    assert.deepStrictEqual(actual, expect);
  });

  it("should add a url as a 'r' tag", () => {
    const urls = ['https://syusui-s.github.io/rabbit/'];
    const actual = buildTags({ urls });
    const expect = [['r', 'https://syusui-s.github.io/rabbit/']];

    assert.deepStrictEqual(actual, expect);
  });
});
