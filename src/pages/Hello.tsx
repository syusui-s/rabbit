import { createSignal, onMount, Switch, Match, type Component } from 'solid-js';
import { useNavigate } from '@solidjs/router';
import useLoginStatus from '@/hooks/useLoginStatus';

type SignerStatus = 'checking' | 'available' | 'unavailable';

const useSignerStatus = () => {
  const [signerStatus, setSignerStatus] = createSignal<SignerStatus>('checking');

  const checkStatus = () => {
    if (window.nostr != null) {
      setSignerStatus('available');
    } else {
      setSignerStatus('unavailable');
    }
  };

  onMount(() => {
    let count = 0;
    const intervalId = setInterval(() => {
      checkStatus();
      if (count >= 10) clearInterval(intervalId);
      count += 1;
    }, 1000);
  });

  return signerStatus;
};

const Hello: Component = () => {
  const signerStatus = useSignerStatus();
  const navigate = useNavigate();
  const { loginStatus, loggedIn } = useLoginStatus();

  const handleLogin = () => {
    loggedIn();
    navigate('/');
  };

  onMount(() => {
    if (loginStatus().loggedIn) {
      navigate('/');
    }
  });

  return (
    <div class="mx-auto flex max-w-[640px] flex-col items-center p-4 text-stone-600">
      <div class="flex flex-col items-center gap-4 rounded bg-white p-4">
        <div class="text-7xl">🐰</div>
        <h1 class="text-5xl font-bold text-rose-300">Rabbit</h1>
        <div>Rabbit is a Web client for Nostr.</div>
        <p class="text-center">
          <span class="font-bold text-rose-400">注意: 現在ベータ版です。</span>
          <br />
          未実装の機能やバグがあることを承知の上でご利用ください。
        </p>
      </div>
      <div class="p-8 shadow-md">
        <Switch>
          <Match when={signerStatus() === 'checking'}>
            拡張機能のインストール状況を確認中です...
          </Match>
          <Match when={signerStatus() === 'unavailable'}>
            <div class="pb-1 text-lg font-bold">拡張機能がインストールされていません！</div>
            <p>
              利用にはNIP-07に対応した拡張機能が必要です。
              <br />
              <a
                class="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
                href="https://scrapbox.io/nostr/NIP-07#63e1c10c8b8fcb00000584fc"
              >
                こちらを参考
              </a>
              に拡張機能をインストールしてください
            </p>
          </Match>
          <Match when={signerStatus() === 'available'}>
            <button
              class="rounded bg-rose-400 p-4 text-lg font-bold text-white hover:shadow-md"
              onClick={handleLogin}
            >
              NIP-07 拡張機能でログイン
            </button>
          </Match>
        </Switch>
      </div>
    </div>
  );
};

export default Hello;
