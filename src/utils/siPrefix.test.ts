import assert from 'assert';

import { describe, it } from 'vitest';

import siPrefix, { formatSiPrefix, type SIPrefix } from '@/utils/siPrefix';

describe('siPrefix', () => {
  it.each<{ given: number; expected: SIPrefix }>([
    { given: 0, expected: { value: 0, prefix: null } },
    { given: 1, expected: { value: 1, prefix: null } },
    { given: 999, expected: { value: 999, prefix: null } },
    { given: 1000, expected: { value: 1000, prefix: null } },
    { given: 9999, expected: { value: 9999, prefix: null } },
    { given: 10000, expected: { value: 10, prefix: 'k' } },
    { given: 12345, expected: { value: 12.35, prefix: 'k' } },
    { given: 98765, expected: { value: 98.77, prefix: 'k' } },
    { given: 986999, expected: { value: 987, prefix: 'k' } },
    { given: 999999, expected: { value: 1, prefix: 'M' } },
    { given: 1e6, expected: { value: 1, prefix: 'M' } },
  ])('should return $expected for $given', ({ given, expected }) => {
    const actual = siPrefix(given, { precision: 2, minDigits: 5 });
    assert.deepStrictEqual(actual, expected);
  });
});

describe('formatSiPrefix', () => {
  it.each<{ given: number; expected: string }>([
    { given: 0, expected: '0' },
    { given: 1, expected: '1' },
    { given: 999, expected: '999' },
    { given: 1000, expected: '1000' },
    { given: 9999, expected: '9999' },
    { given: 10000, expected: '10k' },
    { given: 12345, expected: '12.4k' },
    { given: 98765, expected: '98.8k' },
    { given: 986999, expected: '987k' },
    { given: 998999, expected: '999k' },
    { given: 999999, expected: '1M' },
  ])('should return $expected for $given', ({ given, expected }) => {
    const actual = formatSiPrefix(given);
    assert.deepStrictEqual(actual, expected);
  });
});
