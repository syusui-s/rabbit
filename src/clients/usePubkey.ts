import { createSignal, onMount, type Accessor } from 'solid-js';

const usePubkey = (): Accessor<string | undefined> => {
  const [pubkey, setPubkey] = createSignal<string | undefined>(undefined);

  onMount(() => {
    if (window.nostr != null) {
      window.nostr.getPublicKey().then((pubkey) => setPubkey(pubkey));
    }
  });

  return pubkey;
};

export default usePubkey;
