import { createEffect, createRoot, createSignal } from 'solid-js';

import usePubkey from '@/nostr/usePubkey';

type UseDecryptProps = {
  encrypted: string;
};

const [memo, setMemo] = createRoot(() => createSignal<Record<string, string>>({}));
const [decrypting, setDecrypting] = createRoot(() => createSignal<Record<string, boolean>>({}));

const useDecrypt = (propsProvider: () => UseDecryptProps | null) => {
  const pubkey = usePubkey();
  const [decrypted, setDecrypted] = createSignal<string | null>(null);

  createEffect(() => {
    const props = propsProvider();
    if (props == null) return;

    const { encrypted } = props;
    if (encrypted in memo()) {
      setDecrypted(memo()[encrypted]);
      return;
    }

    const p = pubkey();
    if (p == null) return;

    if (decrypting()[encrypted]) {
      return;
    }

    setDecrypting((current) => ({ ...current, [encrypted]: true }));

    window.nostr?.nip04
      ?.decrypt?.(p, encrypted)
      ?.then((result) => {
        setMemo((current) => ({ ...current, [encrypted]: result }));
        setDecrypted(result);
      })
      .catch((err) => {
        console.error(`failed to decrypt "${encrypted}"`, err);
      });
  });

  return decrypted;
};

export default useDecrypt;
