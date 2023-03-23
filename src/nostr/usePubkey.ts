import '@/types/nostr.d';
import { createSignal, onMount, type Accessor } from 'solid-js';

let asking = false;
const [pubkey, setPubkey] = createSignal<string | undefined>(undefined);

// TODO 失敗したときに通知等を表示したい
const usePubkey = (): Accessor<string | undefined> => {
  onMount(() => {
    console.time('pubkey loaded');
    let count = 0;
    let intervalId: ReturnType<typeof setInterval> | undefined;
    const loadPubkey = () => {
      if (count >= 20) {
        clearInterval(intervalId);
        if (pubkey() == null) {
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
          .then((key) => {
            clearInterval(intervalId);
            setPubkey(key);
            console.timeEnd('pubkey loaded');
          })
          .catch((err) => console.error('failed to obtain public key: ', err))
          .finally(() => {
            asking = false;
          });
      }
      count += 1;
    };
    intervalId = setInterval(loadPubkey, 200);
  });

  return pubkey;
};

export default usePubkey;
