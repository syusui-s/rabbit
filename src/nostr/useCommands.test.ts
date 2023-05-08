import assert from 'assert';

import { describe, it } from 'vitest';

import { buildTags } from '@/nostr/useCommands';

describe('buildTags', () => {
  it('should place a reply tag as first one if it is an only element', () => {
    const replyEventId = '6b280916873768d752cb95a0d2787a184926db8b717394c66ae255b221e607a8a';
    const actual = buildTags({ replyEventId });
    const expect = [['e', replyEventId, '', 'reply']];

    assert.deepStrictEqual(actual, expect);
  });

  it("should add a url as a 'r' tag", () => {
    const urls = ['https://syusui-s.github.io/rabbit/'];
    const actual = buildTags({ urls });
    const expect = [['r', 'https://syusui-s.github.io/rabbit/']];

    assert.deepStrictEqual(actual, expect);
  });
});
