import '@/types/nostr.d';
import { createSignal, onMount, type Accessor } from 'solid-js';

let asking = false;
const [pubkey, setPubkey] = createSignal<string | undefined>(undefined);

const usePubkey = (): Accessor<string | undefined> => {
  onMount(() => {
    if (window.nostr != null && pubkey() == null && !asking) {
      asking = true;
      window.nostr
        .getPublicKey()
        .then((key) => setPubkey(key))
        .catch((err) => console.error(`failed to obtain public key: ${err}`));
    }
  });

  return pubkey;
};

export default usePubkey;
