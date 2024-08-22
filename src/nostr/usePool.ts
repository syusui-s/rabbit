import { createRoot, createSignal } from 'solid-js';

import { AbstractSimplePool } from 'nostr-tools/abstract-pool';
import { AbstractRelay } from 'nostr-tools/abstract-relay';
import { normalizeURL } from 'nostr-tools/utils';
import { setNostrWasm, verifyEvent } from 'nostr-tools/wasm';
import { initNostrWasm } from 'nostr-wasm';

class Pool extends AbstractSimplePool {
  getRelay(relayUrl: string): AbstractRelay | undefined {
    return this.relays.get(normalizeURL(relayUrl));
  }
}

initNostrWasm()
  .then(setNostrWasm)
  .catch((err) => console.error(err));

const createPool = () => {
  const newPool = new Pool({ verifyEvent });
  newPool.trackRelays = true;
  return newPool;
};

const [pool] = createRoot(() => createSignal<Pool>(createPool()));

const usePool = () => pool;

export default usePool;
