import useConfig, { type Config } from '@/nostr/useConfig';
import { createSignal, For, type JSX } from 'solid-js';
import XMark from 'heroicons/24/outline/x-mark.svg';

import Modal from '@/components/Modal';

type ConfigProps = {
  onClose: () => void;
};

const RelayConfig = () => {
  const { config, addRelay, removeRelay } = useConfig();

  const [relayUrlInput, setRelayUrlInput] = createSignal<string>('');

  const handleClickAddRelay: JSX.EventHandler<HTMLFormElement, Event> = (ev) => {
    ev.preventDefault();
    if (relayUrlInput().length === 0) return;
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
              <li class="flex items-center">
                <div class="flex-1 truncate">{relayUrl}</div>
                <button class="h-3 w-3 shrink-0" onClick={() => removeRelay(relayUrl)}>
                  <XMark />
                </button>
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
      onClick={(event) => props.onClick(event)}
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

  const toggleShowImage = () => {
    setConfig((current) => ({
      ...current,
      showImage: !(current.showImage ?? true),
    }));
  };

  return (
    <div>
      <h3 class="font-bold">その他</h3>
      <div class="flex flex-col justify-evenly gap-2">
        <div class="flex w-full">
          <div class="flex-1">投稿欄を開いたままにする</div>
          <ToggleButton
            value={config().keepOpenPostForm}
            onClick={() => toggleKeepOpenPostForm()}
          />
        </div>
        <div class="flex w-full">
          <div class="flex-1">画像をデフォルトで表示する</div>
          <ToggleButton value={config().showImage} onClick={() => toggleShowImage()} />
        </div>
        {/*
        <div class="flex w-full">
          <div class="flex-1">リアクションのデフォルト</div>
          <input
            type="text"
            maxlength="1"
            // onBlur={handleChangeReaction}
          />
        </div>
        */}
      </div>
    </div>
  );
};

const ConfigUI = (props: ConfigProps) => {
  return (
    <Modal onClose={props.onClose}>
      <div class="max-h-[90vh] w-[640px] max-w-[100vw] overflow-y-scroll rounded bg-white p-4 shadow">
        <div class="relative">
          <div class="flex flex-col gap-1">
            <h2 class="flex-1 text-center font-bold">設定</h2>
            <button class="absolute top-1 right-0 z-0 h-4 w-4" onClick={() => props.onClose?.()}>
              <XMark />
            </button>
          </div>
        </div>
        <RelayConfig />
        <DateFormatConfig />
        <OtherConfig />
      </div>
    </Modal>
  );
};

export default ConfigUI;
