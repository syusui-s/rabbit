import { createSignal } from 'solid-js';
import { SimplePool } from 'nostr-tools/pool';

const [pool] = createSignal<SimplePool>(new SimplePool());

const usePool = () => {
  return pool;
};

export default usePool;
