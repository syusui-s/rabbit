import assert from 'assert';

import { describe, it } from 'vitest';

import { thumbnailUrl } from '@/utils/url';

describe('thumbnailUrl', () => {
  it('should return an image url for a given imgur.com URL with additional path', () => {
    const actual = thumbnailUrl('https://imgur.com/uBf5Qts.jpeg');
    const expected = 'https://i.imgur.com/uBf5Qtsl.webp';
    assert.deepStrictEqual(actual, expected);
  });

  it('should return url for nostr.build', () => {
    const actual = thumbnailUrl(
      'https://nostr.build/i/2489ee648a4fef6943f4a7c88349477e78a91e28232246b801fe8ce86e64624e.png',
    );
    const expected =
      'https://nostr.build/responsive/240p/i/2489ee648a4fef6943f4a7c88349477e78a91e28232246b801fe8ce86e64624e.png';
    assert.deepStrictEqual(actual, expected);
  });

  it('should return url for image.nostr.build', () => {
    const actual = thumbnailUrl(
      'https://image.nostr.build/f56ee902307158c1ebbcb5ac00430dbf1425eac12d55e4277ebccbe54d09671b.jpg',
    );
    const expected =
      'https://nostr.build/responsive/240p/i/f56ee902307158c1ebbcb5ac00430dbf1425eac12d55e4277ebccbe54d09671b.jpg';
    assert.deepStrictEqual(actual, expected);
  });

  it('should return url for cdn.nostr.build', () => {
    const actual = thumbnailUrl(
      'https://cdn.nostr.build/i/6a2868ebb53da2c295e3a2a20a29fa009f230f721b71e88c7ffc3ec8eaae870f.png',
    );
    const expected =
      'https://nostr.build/responsive/240p/i/6a2868ebb53da2c295e3a2a20a29fa009f230f721b71e88c7ffc3ec8eaae870f.png';
    assert.deepStrictEqual(actual, expected);
  });
});
