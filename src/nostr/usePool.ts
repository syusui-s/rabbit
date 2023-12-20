import { createSignal } from 'solid-js';

import { SimplePool } from 'nostr-tools/pool';

const [pool] = createSignal<SimplePool>(new SimplePool());

const usePool = () => pool;

export default usePool;
