import assert from 'assert';

import { describe, it } from 'vitest';

import { RelayInfoSchema } from '@/nostr/useRelayInfo';

describe('RelayInfoSchema', () => {
  it('should understand empty object', () => {
    const input = {};
    assert.doesNotThrow(() => {
      RelayInfoSchema.parse(input);
    });
  });

  it('should understand basic relay infos', () => {
    const input = {
      name: 'hopping.rabbit.syusui.net',
      description: 'hopping around the nostr',
      pubkey: '2683f7e23dc0cf4cdd269a1d734a0f3247d5814d9bff44cb2039657c233d34e1',
      contact: 'example@example.com',
      supported_nips: [1],
      software: 'https://github.com/Cameri/nostream',
      version: '1.0.0',
    };
    assert.doesNotThrow(() => {
      RelayInfoSchema.parse(input);
    });
  });
});
