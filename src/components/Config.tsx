import useConfig, { type Config } from '@/nostr/useConfig';
import { createSignal, For, type JSX } from 'solid-js';

type ConfigProps = {
  onClose: () => void;
};

const RelayConfig = () => {
  const { config, setConfig, addRelay, removeRelay } = useConfig();

  const [relayUrlInput, setRelayUrlInput] = createSignal<string>('');

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

const dateFormats: { id: Config['dateFormat']; name: string; example: string }[] = [
  {
    id: 'relative',
    name: '相対',
    example: '〜秒前',
  },
  {
    id: 'absolute-short',
    name: '絶対 (短形式)',
    example: '昨日 12:34',
  },
  {
    id: 'absolute-long',
    name: '絶対 (長形式)',
    example: '2023',
  },
];

const DateFormatConfig = () => {
  const { config, setConfig } = useConfig();

  const updateDateFormat = (dateFormat: Config['dateFormat']) => {
    setConfig((current) => ({ ...current, dateFormat }));
  };

  return (
    <div>
      <h3 class="font-bold">時刻の表記</h3>
      <div class="flex justify-evenly gap-2">
        <For each={dateFormats}>
          {({ id, name, example }) => (
            <div class="flex flex-1 flex-col items-center">
              <button
                type="button"
                class="w-full rounded border border-rose-300 p-2 font-bold"
                classList={{
                  'bg-rose-300': config().dateFormat === id,
                  'text-white': config().dateFormat === id,
                  'bg-white': config().dateFormat !== id,
                  'text-rose-300': config().dateFormat !== id,
                }}
                onClick={() => updateDateFormat(id)}
              >
                {name}
              </button>
              {example}
            </div>
          )}
        </For>
      </div>
    </div>
  );
};

const ConfigUI = (props: ConfigProps) => {
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
        <DateFormatConfig />
      </div>
    </div>
  );
};

export default ConfigUI;
