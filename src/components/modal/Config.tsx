import { createSignal, Show, For, type JSX } from 'solid-js';

import ArrowLeft from 'heroicons/24/outline/arrow-left.svg';
import EyeSlash from 'heroicons/24/outline/eye-slash.svg';
import FaceSmile from 'heroicons/24/outline/face-smile.svg';
import PaintBrush from 'heroicons/24/outline/paint-brush.svg';
import ServerStack from 'heroicons/24/outline/server-stack.svg';
import User from 'heroicons/24/outline/user.svg';
import XMark from 'heroicons/24/outline/x-mark.svg';

import BasicModal from '@/components/modal/BasicModal';
import UserNameDisplay from '@/components/UserDisplayName';
import useConfig, { type Config } from '@/core/useConfig';
import useModalState from '@/hooks/useModalState';
import usePubkey from '@/nostr/usePubkey';
import { simpleEmojiPackSchema, convertToEmojiConfig } from '@/utils/emojipack';
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
    setShortcodeInput('');
    setUrlInput('');
  };

  return (
    <div class="py-2">
      <h3 class="font-bold">カスタム絵文字</h3>
      <ul class="flex flex-col gap-1 py-2">
        <For each={Object.values(config().customEmojis)}>
          {({ shortcode, url }) => (
            <li class="flex items-center gap-2">
              <img class="min-w-7 h-7 max-w-[128px]" src={url} alt={shortcode} />
              <div class="flex-1 truncate">{shortcode}</div>
              <button class="h-3 w-3 shrink-0" onClick={() => removeEmoji(shortcode)}>
                <XMark />
              </button>
            </li>
          )}
        </For>
      </ul>
      <form class="flex flex-col gap-2" onSubmit={handleClickSaveEmoji}>
        <label class="flex flex-1 items-center gap-1">
          <div class="w-9">名前</div>
          <input
            class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300"
            type="text"
            name="shortcode"
            placeholder="smiley"
            value={shortcodeInput()}
            pattern="^\\w+$"
            required
            onChange={(ev) => setShortcodeInput(ev.currentTarget.value)}
          />
        </label>
        <label class="flex flex-1 items-center gap-1">
          <div class="w-9">URL</div>
          <input
            class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300"
            type="text"
            name="url"
            value={urlInput()}
            placeholder="https://example.com/smiley.png"
            pattern={HttpUrlRegex}
            required
            onChange={(ev) => setUrlInput(ev.currentTarget.value)}
          />
        </label>
        <button type="submit" class="w-24 self-end rounded bg-rose-300 p-2 font-bold text-white">
          追加
        </button>
      </form>
    </div>
  );
};

const EmojiImport = () => {
  const { saveEmojis } = useConfig();

  const [jsonInput, setJSONInput] = createSignal('');

  const handleClickSaveEmoji: JSX.EventHandler<HTMLFormElement, SubmitEvent> = (ev) => {
    ev.preventDefault();
    if (jsonInput().length === 0) return;

    try {
      const data = simpleEmojiPackSchema.parse(JSON.parse(jsonInput()));
      const emojis = convertToEmojiConfig(data);
      saveEmojis(emojis);
      setJSONInput('');
    } catch (err) {
      const message = err instanceof Error ? `:${err.message}` : '';
      window.alert(`JSONの読み込みに失敗しました${message}`);
    }
  };

  return (
    <div class="py-2">
      <h3 class="font-bold">絵文字のインポート</h3>
      <p>絵文字の名前をキー、画像のURLを値とするJSONを読み込むことができます。</p>
      <form class="flex flex-col gap-2" onSubmit={handleClickSaveEmoji}>
        <textarea
          class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300"
          name="json"
          value={jsonInput()}
          placeholder='{ "smiley": "https://example.com/smiley.png" }'
          onChange={(ev) => setJSONInput(ev.currentTarget.value)}
        />
        <button type="submit" class="w-24 self-end rounded bg-rose-300 p-2 font-bold text-white">
          インポート
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
  const [menuIndex, setMenuIndex] = createSignal<number | null>(null);

  const menu = [
    {
      name: () => 'プロフィール',
      icon: () => <User />,
      render: () => <ProfileSection />,
    },
    {
      name: () => 'リレー',
      icon: () => <ServerStack />,
      render: () => <RelayConfig />,
    },
    {
      name: () => '表示',
      icon: () => <PaintBrush />,
      render: () => (
        <>
          <DateFormatConfig />
          <ReactionConfig />
          <OtherConfig />
        </>
      ),
    },
    {
      name: () => 'カスタム絵文字',
      icon: () => <FaceSmile />,
      render: () => (
        <>
          <EmojiConfig />
          <EmojiImport />
        </>
      ),
    },
    {
      name: () => 'ミュート',
      icon: () => <EyeSlash />,
      render: () => <MuteConfig />,
    },
  ];

  const getMenuItem = () => {
    const index = menuIndex();
    if (index == null) return null;
    return menu[index];
  };

  return (
    <BasicModal onClose={props.onClose}>
      <div class="p-4">
        <Show
          when={getMenuItem()}
          fallback={
            <>
              <h2 class="flex-1 text-center text-lg font-bold">設定</h2>
              <ul class="flex flex-col">
                <For each={menu}>
                  {(menuItem, i) => (
                    <li class="w-full">
                      <button
                        class="flex w-full gap-2 py-3 hover:text-rose-400"
                        onClick={() => setMenuIndex(i)}
                      >
                        <span class="inline-block h-6 w-6">{menuItem.icon()}</span>
                        {menuItem.name()}
                      </button>
                    </li>
                  )}
                </For>
              </ul>
            </>
          }
          keyed
        >
          {(menuItem) => (
            <div class="flex flex-col">
              <button class="inline-block h-6 w-6" onClick={() => setMenuIndex(null)}>
                <ArrowLeft />
              </button>
              <div class="w-full flex-1 pt-4">{menuItem.render()}</div>
            </div>
          )}
        </Show>
      </div>
    </BasicModal>
  );
};

export default ConfigUI;
