import { createSignal, For, type JSX } from 'solid-js';

import XMark from 'heroicons/24/outline/x-mark.svg';

import BasicModal from '@/components/modal/BasicModal';
import UserNameDisplay from '@/components/UserDisplayName';
import useConfig, { type Config } from '@/core/useConfig';
import useModalState from '@/hooks/useModalState';
import usePubkey from '@/nostr/usePubkey';
import ensureNonNull from '@/utils/ensureNonNull';

type ConfigProps = {
  onClose: () => void;
};

const BaseUrlRegex = (schemaRegex: string) =>
  `^(?:${schemaRegex})://[-a-zA-Z0-9.]+(:\\d{1,5})?(?:/[-[\\]~!$&'()*+.,:;@&=%\\w]+|/)*(?:\\?[-[\\]~!$&'()*+.,/:;%@&=\\w?]+)?(?:#[-[\\]~!$&'()*+.,/:;%@\\w&=?#]+)?$`;
const HttpUrlRegex = BaseUrlRegex('https?');
const RelayUrlRegex = BaseUrlRegex('wss?');

const ProfileSection = () => {
  const pubkey = usePubkey();
  const { showProfile, showProfileEdit } = useModalState();

  return (
    <div class="py-2">
      <h3 class="font-bold">プロフィール</h3>
      <div class="flex gap-2">
        <button
          class="rounded border border-rose-300 px-4 py-2 font-bold text-rose-300"
          onClick={() =>
            ensureNonNull([pubkey()])(([pubkeyNonNull]) => {
              showProfile(pubkeyNonNull);
            })
          }
        >
          開く
        </button>
        <button
          class="rounded border border-rose-300 px-4 py-2 font-bold text-rose-300"
          onClick={() => showProfileEdit()}
        >
          編集
        </button>
      </div>
    </div>
  );
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
    <div class="py-2">
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
          class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300"
          type="text"
          name="relayUrl"
          value={relayUrlInput()}
          pattern={RelayUrlRegex}
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
    <div class="py-2">
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

const ReactionConfig = () => {
  const { config, setConfig } = useConfig();

  const toggleUseEmojiReaction = () => {
    setConfig((current) => ({
      ...current,
      useEmojiReaction: !(current.useEmojiReaction ?? false),
    }));
  };

  const toggleShowEmojiReaction = () => {
    setConfig((current) => ({
      ...current,
      showEmojiReaction: !(current.showEmojiReaction ?? false),
    }));
  };

  return (
    <div class="py-2">
      <h3 class="font-bold">リアクション</h3>
      <div class="flex flex-col justify-evenly gap-2">
        <div class="flex w-full">
          <div class="flex-1">絵文字を選べるようにする</div>
          <ToggleButton
            value={config().useEmojiReaction}
            onClick={() => toggleUseEmojiReaction()}
          />
        </div>
        <div class="flex w-full">
          <div class="flex-1">投稿にリアクションされた絵文字を表示する</div>
          <ToggleButton
            value={config().showEmojiReaction}
            onClick={() => toggleShowEmojiReaction()}
          />
        </div>
      </div>
    </div>
  );
};

const EmojiConfig = () => {
  const { config, saveEmoji, removeEmoji } = useConfig();

  const [shortcodeInput, setShortcodeInput] = createSignal('');
  const [urlInput, setUrlInput] = createSignal('');

  const handleClickSaveEmoji: JSX.EventHandler<HTMLFormElement, SubmitEvent> = (ev) => {
    ev.preventDefault();
    if (shortcodeInput().length === 0 || urlInput().length === 0) return;
    saveEmoji({ shortcode: shortcodeInput(), url: urlInput() });
  };

  return (
    <div class="py-2">
      <h3 class="font-bold">カスタム絵文字</h3>
      <ul class="flex flex-col gap-1 py-2">
        <For each={Object.values(config().customEmojis)}>
          {({ shortcode, url }) => (
            <li class="flex items-center gap-2">
              <img class="h-7 max-w-[128px]" src={url} alt={shortcode} />
              <div class="flex-1 truncate">{shortcode}</div>
              <button class="h-3 w-3 shrink-0" onClick={() => removeEmoji(shortcode)}>
                <XMark />
              </button>
            </li>
          )}
        </For>
      </ul>
      <form class="flex gap-2" onSubmit={handleClickSaveEmoji}>
        <label class="flex flex-1 items-center gap-1">
          <div>名前</div>
          <input
            class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300"
            type="text"
            name="shortcode"
            value={shortcodeInput()}
            pattern="^[a-zA-Z0-9]+$"
            required
            onChange={(ev) => setShortcodeInput(ev.currentTarget.value)}
          />
        </label>
        <label class="flex flex-1 items-center gap-1">
          <div>URL</div>
          <input
            class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300"
            type="text"
            name="url"
            value={urlInput()}
            placeholder="https://.../emoji.png"
            pattern={HttpUrlRegex}
            required
            onChange={(ev) => setUrlInput(ev.currentTarget.value)}
          />
        </label>
        <button type="submit" class="rounded bg-rose-300 p-2 font-bold text-white">
          保存
        </button>
      </form>
    </div>
  );
};

const MuteConfig = () => {
  const { config, removeMutedPubkey, addMutedKeyword, removeMutedKeyword } = useConfig();

  const [keywordInput, setKeywordInput] = createSignal('');

  const handleClickAddKeyword: JSX.EventHandler<HTMLFormElement, Event> = (ev) => {
    ev.preventDefault();
    if (keywordInput().length === 0) return;
    addMutedKeyword(keywordInput());
    setKeywordInput('');
  };

  return (
    <>
      <div class="py-2">
        <h3 class="font-bold">ミュートしたユーザ</h3>
        <ul class="flex flex-col">
          <For each={config().mutedPubkeys}>
            {(pubkey) => (
              <li class="flex items-center">
                <div class="flex-1 truncate">
                  <UserNameDisplay pubkey={pubkey} />
                </div>
                <button class="h-3 w-3 shrink-0" onClick={() => removeMutedPubkey(pubkey)}>
                  <XMark />
                </button>
              </li>
            )}
          </For>
        </ul>
      </div>
      <div class="py-2">
        <h3 class="font-bold">ミュートした単語</h3>
        <ul class="flex flex-col">
          <For each={config().mutedKeywords}>
            {(keyword) => (
              <li class="flex items-center">
                <div class="flex-1 truncate">{keyword}</div>
                <button class="h-3 w-3 shrink-0" onClick={() => removeMutedKeyword(keyword)}>
                  <XMark />
                </button>
              </li>
            )}
          </For>
        </ul>
        <form class="flex gap-2" onSubmit={handleClickAddKeyword}>
          <input
            class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300"
            type="text"
            name="keyword"
            value={keywordInput()}
            onChange={(ev) => setKeywordInput(ev.currentTarget.value)}
          />
          <button type="submit" class="rounded bg-rose-300 p-2 font-bold text-white">
            追加
          </button>
        </form>
      </div>
    </>
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

  const toggleHideCount = () => {
    setConfig((current) => ({
      ...current,
      hideCount: !(current.hideCount ?? false),
    }));
  };

  return (
    <div class="py-2">
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
        <div class="flex w-full">
          <div class="flex-1">いいねやリポスト、フォロワーなどの数を隠す</div>
          <ToggleButton value={config().hideCount} onClick={() => toggleHideCount()} />
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
  // <div class="max-h-[90vh] w-[640px] max-w-[100vw] overflow-y-scroll rounded bg-white p-4 shadow">
  return (
    <BasicModal onClose={props.onClose}>
      <div class="p-4">
        <h2 class="flex-1 text-center text-lg font-bold">設定</h2>
        <ProfileSection />
        <RelayConfig />
        <DateFormatConfig />
        <ReactionConfig />
        <EmojiConfig />
        <OtherConfig />
        <MuteConfig />
      </div>
    </BasicModal>
  );
};

export default ConfigUI;
