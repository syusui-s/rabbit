import assert from 'assert';

import { describe, it } from 'vitest';

import { parseLnurlEndpointMetadata } from '@/nostr/zap/fetchLnurlEndpoint';

describe('parseLnurlEndpointMetadata', () => {
  it('should parse endpoint metadata correctly', () => {
    const metadata =
      '[["text/plain","Pay to Wallet of Satoshi user: vitalalloy83"],["text/identifier","vitalalloy83@walletofsatoshi.com"]]';
    const actual = parseLnurlEndpointMetadata(metadata);
    const expected = {
      textPlain: 'Pay to Wallet of Satoshi user: vitalalloy83',
      identifier: 'vitalalloy83@walletofsatoshi.com',
      textLongDesc: undefined,
      imagePNG: undefined,
      imageJPEG: undefined,
      rest: [],
    };
    assert.deepStrictEqual(actual, expected);
  });
});
