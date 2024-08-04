import { createRoot, createSignal } from 'solid-js';

import { AbstractRelay } from 'nostr-tools/abstract-relay';
import { SimplePool } from 'nostr-tools/pool';
import { normalizeURL } from 'nostr-tools/utils';

class Pool extends SimplePool {
  getRelay(relayUrl: string): AbstractRelay | undefined {
    return this.relays.get(normalizeURL(relayUrl));
  }
}

const createPool = () => {
  const newPool = new Pool();
  newPool.trackRelays = true;
  return newPool;
};

const [pool] = createRoot(() => createSignal<Pool>(createPool()));

const usePool = () => pool;

export default usePool;
