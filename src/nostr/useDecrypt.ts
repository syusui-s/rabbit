import { createEffect, createRoot, createSignal, batch, untrack } from 'solid-js';

import { decrypt } from '@/nostr/useCommands';
import usePubkey from '@/nostr/usePubkey';

type UseDecryptProps = {
  encrypted: string;
};

// eslint-disable-next-line solid/reactivity
const [memo, setMemo] = createRoot(() => createSignal<Record<string, string>>({}));
const updateMemo = (encrypted: string, decrypted: string) =>
  setMemo((current) => ({ ...current, [encrypted]: decrypted }));

// eslint-disable-next-line solid/reactivity
const [decrypting, setDecrypting] = createRoot(() => createSignal<Record<string, boolean>>({}));
const isDecrypting = (encrypted: string) => untrack(() => decrypting()[encrypted] ?? false);

const useDecrypt = (propsProvider: () => UseDecryptProps | null) => {
  const pubkey = usePubkey();
  const [decrypted, setDecrypted] = createSignal<string | null>(null);

  createEffect(() => {
    const props = propsProvider();
    if (props == null) return;

    if (props.encrypted.length === 0) return;

    const { encrypted } = props;
    const memoizedValue = untrack(() => memo()[encrypted]);

    if (memoizedValue != null) {
      setDecrypted(memoizedValue);
      return;
    }

    if (isDecrypting(encrypted)) {
      return;
    }

    const p = pubkey();
    if (p == null) return;

    const updateDecrypting = (value: boolean) =>
      setDecrypting((current) => ({ ...current, [encrypted]: value }));

    updateDecrypting(true);

    decrypt(p, encrypted)
      .then((result) => {
        batch(() => {
          updateMemo(encrypted, result);
          setDecrypted(result);
        });
      })
      .catch((err) => {
        console.error(`failed to decrypt "${encrypted}"`, err);
      })
      .finally(() => {
        updateDecrypting(false);
      });
  });

  return decrypted;
};

export default useDecrypt;
