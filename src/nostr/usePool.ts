import { createSignal } from 'solid-js';

import { SimplePool } from 'nostr-tools';

const [pool] = createSignal<SimplePool>(new SimplePool({ eoseSubTimeout: 7500 }));

const usePool = () => pool;

export default usePool;
