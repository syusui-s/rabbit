import assert from 'assert';

import { describe, it } from 'vitest';

import { thumbnailUrl } from '@/utils/url';

describe('thumbnailUrl', () => {
  it('should return thumbnail url for imgur.com', () => {
    const actual = thumbnailUrl('https://i.imgur.com/p05kUim.gif');
    const expected = 'https://i.imgur.com/p05kUiml.gif';
    assert.deepStrictEqual(actual, expected);
  });

  it('should return thumbnail url for imgur.com', () => {
    const actual = thumbnailUrl('https://i.imgur.com/p05kUim.gif', 'icon');
    const expected = 'https://i.imgur.com/p05kUims.gif';
    assert.deepStrictEqual(actual, expected);
  });

  it('should return url for nostr.build', () => {
    const actual = thumbnailUrl(
      'https://nostr.build/i/2489ee648a4fef6943f4a7c88349477e78a91e28232246b801fe8ce86e64624e.png',
    );
    const expected =
      'https://image.nostr.build/resp/240p/2489ee648a4fef6943f4a7c88349477e78a91e28232246b801fe8ce86e64624e.png';
    assert.deepStrictEqual(actual, expected);
  });

  it('should return url for image.nostr.build', () => {
    const actual = thumbnailUrl(
      'https://image.nostr.build/78fc3c02f0488e2f3efb818adf1421bcee8c1612189e217c5ced1c2785eee1a8.jpg',
    );
    const expected =
      'https://image.nostr.build/resp/240p/78fc3c02f0488e2f3efb818adf1421bcee8c1612189e217c5ced1c2785eee1a8.jpg';
    assert.deepStrictEqual(actual, expected);
  });

  it('should return url for cdn.nostr.build', () => {
    const actual = thumbnailUrl(
      'https://cdn.nostr.build/i/78fc3c02f0488e2f3efb818adf1421bcee8c1612189e217c5ced1c2785eee1a8.jpg',
    );
    const expected =
      'https://image.nostr.build/resp/240p/78fc3c02f0488e2f3efb818adf1421bcee8c1612189e217c5ced1c2785eee1a8.jpg';
    assert.deepStrictEqual(actual, expected);
  });

  it('should return url for pbs.twimg.com/profile_images/', () => {
    const actual = thumbnailUrl(
      'https://pbs.twimg.com/profile_images/1713367977725509632/iLgoXgtx_400x400.jpg',
    );
    const expected = 'https://pbs.twimg.com/profile_images/1713367977725509632/iLgoXgtx_normal.jpg';
    assert.deepStrictEqual(actual, expected);
  });

  it('should return url for pbs.twimg.com/media/', () => {
    const actual = thumbnailUrl(
      'https://pbs.twimg.com/media/FPUltrpaAAQQdIO?format=png&name=900x900',
    );
    const expected = 'https://pbs.twimg.com/media/FPUltrpaAAQQdIO?format=jpg&name=small';
    assert.deepStrictEqual(actual, expected);
  });
});
