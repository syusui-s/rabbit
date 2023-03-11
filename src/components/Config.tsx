import useConfig from '@/nostr/useConfig';
import { createSignal, For, type JSX } from 'solid-js';

type ConfigProps = {
  onClose: () => void;
};

const RelayConfig = () => {
  const { config, setConfig } = useConfig();

  const [relayUrlInput, setRelayUrlInput] = createSignal<string>('');

  const addRelay = (relayUrl: string) => {
    setConfig((current) => ({
      ...current,
      relayUrls: [...current.relayUrls, relayUrl],
    }));
  };

  const removeRelay = (relayUrl: string) => {
    setConfig((current) => ({
      ...current,
      relayUrls: current.relayUrls.filter((e) => e !== relayUrl),
    }));
  };

  const handleClickAddRelay: JSX.EventHandler<HTMLFormElement, Event> = (ev) => {
    ev.preventDefault();
    const relayUrl = ev.currentTarget?.relayUrl?.value as string | undefined;
    if (relayUrl == null) return;
    addRelay(relayUrlInput());
  };

  return (
    <div>
      <h3 class="font-bold">リレー</h3>
      <ul>
        <For each={config().relayUrls}>
          {(relayUrl: string) => {
            return (
              <li class="flex">
                <div class="flex-1">{relayUrl}</div>
                <button onClick={() => removeRelay(relayUrl)}>x</button>
              </li>
            );
          }}
        </For>
      </ul>
      <form class="flex gap-2" onSubmit={handleClickAddRelay}>
        <input
          class="flex-1"
          type="text"
          name="relayUrl"
          value={relayUrlInput()}
          onChange={(ev) => setRelayUrlInput(ev.currentTarget.value)}
        />
        <button type="submit" class="rounded bg-rose-300 p-2 font-bold text-white">
          追加
        </button>
      </form>
    </div>
  );
};

const Config = (props: ConfigProps) => {
  let containerRef: HTMLDivElement | undefined;

  const handleClickContainer: JSX.EventHandler<HTMLDivElement, MouseEvent> = (ev) => {
    if (ev.target === containerRef) {
      props.onClose();
    }
  };

  return (
    <div
      ref={containerRef}
      class="absolute top-0 left-0 flex h-screen w-screen cursor-default place-content-center place-items-center bg-black/25"
      role="button"
      onClick={handleClickContainer}
    >
      <div class="w-[480px] max-w-[100vw] rounded bg-white p-4 shadow">
        <div class="relative">
          <h2 class="flex-1 text-center font-bold">設定</h2>
          <button class="absolute top-1 right-0" onClick={() => props.onClose()}>
            X
          </button>
        </div>
        <RelayConfig />
      </div>
    </div>
  );
};

export default Config;
