import { createRoot, createSignal } from 'solid-js';

import { SimplePool } from 'nostr-tools/pool';

const createPool = () => {
  const newPool = new SimplePool();
  newPool.trackRelays = true;
  return newPool;
};

const [pool] = createRoot(() => createSignal<SimplePool>(createPool()));

const usePool = () => pool;

export default usePool;
