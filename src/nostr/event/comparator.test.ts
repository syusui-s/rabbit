import assert from 'assert';

import { Event as NostrEvent } from 'nostr-tools';
import { describe, it } from 'vitest';

import { compareEvents, pickLatestEvent } from '@/nostr/event/comparator';

describe('compareEvents', () => {
  it('should return negative value if first event was made earlier than second one', () => {
    const result = compareEvents(
      {
        id: 'b39d39a256ea0824436f1604830030c78f8a15c42b97036fe68124edc3452cc5',
        pubkey: '6e62e578bdf608e250e93c25dc0cbadbda8db17e6fc3a28cdce8a2f56db7d106',
        created_at: 1696169670,
        kind: 1,
        tags: [],
        content: 'hello',
        sig: '90787036c2cdb31125b7b6ef0ca746458d68e0a1d151243a7f29c7272e7be7ec14a72e425e2cf1cb0d9552e3d5acf97d20d4445ba71a710c5354153eeb9848ae',
      },
      {
        id: 'ec6a3a0a1061a45502b66df8fa4f3454a32fe11a6ce79bfc4b2affafa0346da9',
        pubkey: '6e62e578bdf608e250e93c25dc0cbadbda8db17e6fc3a28cdce8a2f56db7d106',
        created_at: 1696169675,
        kind: 1,
        tags: [],
        content: 'hello',
        sig: '65ac58f314c99274304c540221e9ff603c26472f91cbb59bf5203e397a686917bb777c6e4c7ac43b27b0b519fc490e91b383d22b9ee8f1efc88175b2c6108c79',
      },
    );
    assert(result < 0);
  });

  it('should return positive number if first event was made later than second one', () => {
    const result = compareEvents(
      {
        id: 'ec6a3a0a1061a45502b66df8fa4f3454a32fe11a6ce79bfc4b2affafa0346da9',
        pubkey: '6e62e578bdf608e250e93c25dc0cbadbda8db17e6fc3a28cdce8a2f56db7d106',
        created_at: 1696169675,
        kind: 1,
        tags: [],
        content: 'hello',
        sig: '65ac58f314c99274304c540221e9ff603c26472f91cbb59bf5203e397a686917bb777c6e4c7ac43b27b0b519fc490e91b383d22b9ee8f1efc88175b2c6108c79',
      },
      {
        id: 'b39d39a256ea0824436f1604830030c78f8a15c42b97036fe68124edc3452cc5',
        pubkey: '6e62e578bdf608e250e93c25dc0cbadbda8db17e6fc3a28cdce8a2f56db7d106',
        created_at: 1696169670,
        kind: 1,
        tags: [],
        content: 'hello',
        sig: '90787036c2cdb31125b7b6ef0ca746458d68e0a1d151243a7f29c7272e7be7ec14a72e425e2cf1cb0d9552e3d5acf97d20d4445ba71a710c5354153eeb9848ae',
      },
    );
    assert(result > 0);
  });

  it('should return negative number if both are made at the same time and first id is smaller than second one', () => {
    const result = compareEvents(
      {
        id: '2b4f598e0586b8e54c7fecfd2a1686ef7d91f0e55236bf53d437b100a29c07ea',
        pubkey: '6e62e578bdf608e250e93c25dc0cbadbda8db17e6fc3a28cdce8a2f56db7d106',
        created_at: 1696169680,
        kind: 1,
        tags: [],
        content: 'hello',
        sig: 'a6d20521d9c141852d1a85bd139b13f26457d0cb878909fa92357e8d47b9bdfa3199fdb7c5a1cf1c1f9e38a0450e453577ae8325b5036fdf75ecfa7077e775d9',
      },
      {
        id: '945a7a4df86e69eeafaba5b4025acb175f67e56a58ad3b8c8ce6532e6aad49a8',
        pubkey: '6e62e578bdf608e250e93c25dc0cbadbda8db17e6fc3a28cdce8a2f56db7d106',
        created_at: 1696169680,
        kind: 1,
        tags: [],
        content: 'hello world',
        sig: 'ca57fbea0f6a0e6a9a93920c204d4b829d0dcc71f0cff9b5e7d91dfe1af2245178d88c34acf9ff72d1afe2d799ef3f4b51a37a8ad2e8a27a9859e58fe984f6ee',
      },
    );
    assert(result < 0);
  });
});

describe('pickLatestEvent', () => {
  it('should return the first event if there is only a single event', () => {
    const events: NostrEvent[] = [
      {
        id: '2b4f598e0586b8e54c7fecfd2a1686ef7d91f0e55236bf53d437b100a29c07ea',
        pubkey: '6e62e578bdf608e250e93c25dc0cbadbda8db17e6fc3a28cdce8a2f56db7d106',
        created_at: 1696169680,
        kind: 1,
        tags: [],
        content: 'hello',
        sig: 'a6d20521d9c141852d1a85bd139b13f26457d0cb878909fa92357e8d47b9bdfa3199fdb7c5a1cf1c1f9e38a0450e453577ae8325b5036fdf75ecfa7077e775d9',
      },
    ];
    const result = pickLatestEvent(events);
    assert.deepStrictEqual(result, events[0]);
  });

  it('should return latest event', () => {
    const events: NostrEvent[] = [
      {
        id: 'b39d39a256ea0824436f1604830030c78f8a15c42b97036fe68124edc3452cc5',
        pubkey: '6e62e578bdf608e250e93c25dc0cbadbda8db17e6fc3a28cdce8a2f56db7d106',
        created_at: 1696169670,
        kind: 1,
        tags: [],
        content: 'hello',
        sig: '90787036c2cdb31125b7b6ef0ca746458d68e0a1d151243a7f29c7272e7be7ec14a72e425e2cf1cb0d9552e3d5acf97d20d4445ba71a710c5354153eeb9848ae',
      },
      {
        id: 'ec6a3a0a1061a45502b66df8fa4f3454a32fe11a6ce79bfc4b2affafa0346da9',
        pubkey: '6e62e578bdf608e250e93c25dc0cbadbda8db17e6fc3a28cdce8a2f56db7d106',
        created_at: 1696169675,
        kind: 1,
        tags: [],
        content: 'hello',
        sig: '65ac58f314c99274304c540221e9ff603c26472f91cbb59bf5203e397a686917bb777c6e4c7ac43b27b0b519fc490e91b383d22b9ee8f1efc88175b2c6108c79',
      },
      {
        id: '2b4f598e0586b8e54c7fecfd2a1686ef7d91f0e55236bf53d437b100a29c07ea',
        pubkey: '6e62e578bdf608e250e93c25dc0cbadbda8db17e6fc3a28cdce8a2f56db7d106',
        created_at: 1696169680,
        kind: 1,
        tags: [],
        content: 'hello',
        sig: 'a6d20521d9c141852d1a85bd139b13f26457d0cb878909fa92357e8d47b9bdfa3199fdb7c5a1cf1c1f9e38a0450e453577ae8325b5036fdf75ecfa7077e775d9',
      },
    ];
    const result = pickLatestEvent(events);
    assert.deepStrictEqual(result, events[2]);
  });
});
