import assert from 'assert';

import { describe, it } from 'vitest';

import { escapeRegExpSymbols } from '@/utils/regex';

describe('escapeRegExpString', () => {
  it.each<{ given: string; expected: string }>([
    { given: '^hello$', expected: '\\^hello\\$' },
    { given: '.*+?^${}()|[]\\', expected: '\\.\\*\\+\\?\\^\\$\\{\\}\\(\\)\\|\\[\\]\\\\' },
  ])('should return $expected for $given', ({ given, expected }) => {
    const actual = escapeRegExpSymbols(given);
    assert.deepStrictEqual(actual, expected);
  });
});
