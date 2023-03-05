import '@/types/nostr.d';
import { createSignal, onMount, type Accessor } from 'solid-js';

let asking = false;
const [pubkey, setPubkey] = createSignal<string | undefined>(undefined);

const usePubkey = (): Accessor<string | undefined> => {
  onMount(() => {
    let count = 0;
    const intervalId = setInterval(() => {
      if (count >= 5) {
        clearInterval(intervalId);
        if (pubkey() == null && !asking) {
          if (window.nostr == null) {
            throw new Error('Failed to obtain public key: Timeout. window.nostr is not defined.');
          }
          throw new Error('Failed to obtain public key: Timeout');
        }
        return;
      }

      if (window.nostr != null && pubkey() == null && !asking) {
        asking = true;
        window.nostr
          .getPublicKey()
          .then((key) => setPubkey(key))
          .catch((err) => console.error(`failed to obtain public key: ${err}`));
      }
      count += 1;
    }, 1000);
  });

  return pubkey;
};

export default usePubkey;
