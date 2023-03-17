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
    if (relayUrlInput().length > 0) return;
    addRelay(relayUrlInput());
    setRelayUrlInput('');
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

const dateFormats: {
  id: Config['dateFormat'];
  name: string;
  example: string;
}[] = [
  {
    id: 'relative',
    name: '相対表記',
    example: '7秒前',
  },
  {
    id: 'absolute-short',
    name: '絶対表記 (短形式)',
    example: '昨日 23:55',
  },
  {
    id: 'absolute-long',
    name: '絶対表記 (長形式)',
    example: '2020/11/8 21:02:53',
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
      <div class="flex flex-col justify-evenly gap-2 sm:flex-row">
        <For each={dateFormats}>
          {({ id, name, example }) => (
            <div class="flex flex-1 flex-row items-center gap-1 sm:flex-col">
              <button
                type="button"
                class="w-48 rounded border border-rose-300 p-2 font-bold sm:w-full"
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
              <div class="text-xs">{example}</div>
            </div>
          )}
        </For>
      </div>
    </div>
  );
};

const ToggleButton = (props: {
  value: boolean;
  onClick: JSX.EventHandler<HTMLButtonElement, MouseEvent>;
}) => {
  return (
    <button
      class="flex h-[24px] w-[48px] items-center rounded-full border border-primary px-1"
      classList={{
        'bg-white': !props.value,
        'justify-start': !props.value,
        'bg-rose-300': props.value,
        'justify-end': props.value,
      }}
      area-label={props.value}
      onClick={props.onClick}
    >
      <span class="m-[-2px] inline-block h-5 w-5 rounded-full border border-primary bg-white shadow" />
    </button>
  );
};

const OtherConfig = () => {
  const { config, setConfig } = useConfig();

  const toggleKeepOpenPostForm = () => {
    setConfig((current) => ({
      ...current,
      keepOpenPostForm: !(current.keepOpenPostForm ?? false),
    }));
  };

  return (
    <div>
      <h3 class="font-bold">その他</h3>
      <div class="flex flex-col justify-evenly gap-2 sm:flex-row">
        <div class="flex w-full">
          <div class="flex-1">投稿欄を開いたままにする</div>
          <ToggleButton
            value={config().keepOpenPostForm}
            onClick={() => toggleKeepOpenPostForm()}
          />
        </div>
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
      <div class="max-h-[90vh] w-[640px] max-w-[100vw] overflow-y-scroll rounded bg-white p-4 shadow">
        <div class="relative">
          <h2 class="flex-1 text-center font-bold">設定</h2>
          <button class="absolute top-1 right-0" onClick={() => props.onClose()}>
            X
          </button>
        </div>
        <RelayConfig />
        <DateFormatConfig />
        <OtherConfig />
      </div>
    </div>
  );
};

export default ConfigUI;
