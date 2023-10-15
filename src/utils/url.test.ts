import assert from 'assert';

import { describe, it } from 'vitest';

import { thumbnailUrl } from '@/utils/url';

describe('thumbnailUrl', () => {
  it('should return an image url for a given imgur.com URL with additional path', () => {
    const actual = thumbnailUrl('https://imgur.com/uBf5Qts.jpeg');
    const expected = 'https://i.imgur.com/uBf5Qtsl.webp';
    assert.deepStrictEqual(actual, expected);
  });
});
