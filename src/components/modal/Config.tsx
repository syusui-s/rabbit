import { createSignal, Show, For, type JSX, batch } from 'solid-js';

import ArrowLeft from 'heroicons/24/outline/arrow-left.svg';
import EyeSlash from 'heroicons/24/outline/eye-slash.svg';
import FaceSmile from 'heroicons/24/outline/face-smile.svg';
import PaintBrush from 'heroicons/24/outline/paint-brush.svg';
import ServerStack from 'heroicons/24/outline/server-stack.svg';
import User from 'heroicons/24/outline/user.svg';
import XMark from 'heroicons/24/outline/x-mark.svg';

import BasicModal from '@/components/modal/BasicModal';
import UserNameDisplay from '@/components/UserDisplayName';
import { colorThemes } from '@/core/colorThemes';
import useConfig, { type Config } from '@/core/useConfig';
import useModalState from '@/hooks/useModalState';
import { useTranslation } from '@/i18n/useTranslation';
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
  const i18n = useTranslation();
  const pubkey = usePubkey();
  const { showProfile, showProfileEdit } = useModalState();

  return (
    <div class="py-2">
      <h3 class="font-bold">{i18n()('config.profile.profile')}</h3>
      <div class="flex gap-2">
        <button
          class="rounded border border-primary px-4 py-2 font-bold text-primary"
          onClick={() =>
            ensureNonNull([pubkey()])(([pubkeyNonNull]) => {
              showProfile(pubkeyNonNull);
            })
          }
        >
          {i18n()('config.profile.openProfile')}
        </button>
        <button
          class="rounded border border-primary px-4 py-2 font-bold text-primary"
          onClick={() => showProfileEdit()}
        >
          {i18n()('config.profile.editProfile')}
        </button>
      </div>
    </div>
  );
};

const RelayConfig = () => {
  const i18n = useTranslation();
  const { config, addRelay, removeRelay } = useConfig();

  const [relayUrlInput, setRelayUrlInput] = createSignal<string>('');

  const handleClickAddRelay: JSX.EventHandler<HTMLFormElement, Event> = (ev) => {
    ev.preventDefault();
    if (relayUrlInput().length === 0) return;
    addRelay(relayUrlInput());
    setRelayUrlInput('');
  };

  const importFromNIP07 = async () => {
    if (window.nostr == null) return;

    const importedRelays = Object.entries((await window.nostr?.getRelays?.()) ?? []);
    const relayUrls = importedRelays.map(([relayUrl]) => relayUrl).join('\n');

    if (importedRelays.length === 0) {
      window.alert(i18n()('config.relays.notConfigured'));
      return;
    }

    if (!window.confirm(`${i18n()('config.relays.askImport')}\n\n${relayUrls}`)) {
      return;
    }

    const lastCount = config().relayUrls.length;
    batch(() => {
      importedRelays.forEach(([relayUrl]) => {
        addRelay(relayUrl);
      });
    });
    const currentCount = config().relayUrls.length;
    const importedCount = currentCount - lastCount;
    window.alert(i18n()('config.relays.imported', { count: importedCount }));
  };

  return (
    <>
      <div class="py-2">
        <h3 class="font-bold">{i18n()('config.relays.relays')}</h3>
        <p class="py-1">
          {i18n()('config.relays.numOfRelays', { count: config().relayUrls.length })}
        </p>
        <ul>
          <For each={config().relayUrls}>
            {(relayUrl: string) => (
              <li class="flex items-center">
                <div class="flex-1 truncate">{relayUrl}</div>
                <button class="h-3 w-3 shrink-0" onClick={() => removeRelay(relayUrl)}>
                  <XMark />
                </button>
              </li>
            )}
          </For>
        </ul>
        <form class="flex gap-2" onSubmit={handleClickAddRelay}>
          <input
            class="flex-1 rounded-md border border-border bg-bg ring-border placeholder:text-fg-secondary focus:border-border focus:ring-primary"
            type="text"
            name="relayUrl"
            placeholder="wss://..."
            value={relayUrlInput()}
            pattern={RelayUrlRegex}
            onChange={(ev) => setRelayUrlInput(ev.currentTarget.value)}
          />
          <button type="submit" class="rounded bg-primary p-2 font-bold text-primary-fg">
            {i18n()('config.relays.addRelay')}
          </button>
        </form>
      </div>
      <div class="py-2">
        <h3 class="pb-1 font-bold">{i18n()('config.relays.importRelays')}</h3>
        <button
          type="button"
          class="rounded bg-primary p-2 font-bold text-primary-fg"
          onClick={() => {
            importFromNIP07().catch((err) => {
              console.error('failed to import relays', err);
              window.alert(i18n()('config.relays.failedToImport'));
            });
          }}
        >
          {i18n()('config.relays.importFromExtension')}
        </button>
      </div>
    </>
  );
};

const ColorThemeConfig = () => {
  const i18n = useTranslation();
  const { config, setConfig } = useConfig();

  const isCurrentlyUsing = (id: string) => {
    const colorThemeConfig = config().colorTheme;
    if (colorThemeConfig.type === 'specific') {
      return colorThemeConfig.id === id;
    }
    return false;
  };

  const updateColorTheme = (id: string) => {
    setConfig((current) => ({ ...current, colorTheme: { type: 'specific', id } }));
  };

  return (
    <div class="py-2">
      <h3 class="font-bold">{i18n()('config.display.colorTheme')}</h3>
      <div class="flex max-h-[25vh] flex-col overflow-scroll rounded-md border border-border">
        <For each={Object.values(colorThemes)}>
          {(colorTheme) => (
            <button
              type="button"
              class="border-t border-border px-2 py-1 text-left"
              classList={{
                'bg-primary': isCurrentlyUsing(colorTheme.id),
                'text-primary-fg': isCurrentlyUsing(colorTheme.id),
                'text-fg': !isCurrentlyUsing(colorTheme.id),
              }}
              onClick={() => updateColorTheme(colorTheme.id)}
            >
              {colorTheme.name}
            </button>
          )}
        </For>
      </div>
    </div>
  );
};

const DateFormatConfig = () => {
  const i18n = useTranslation();
  const { config, setConfig } = useConfig();

  const dateFormats: {
    id: Config['dateFormat'];
    name: string;
    example: string;
  }[] = [
    {
      id: 'relative',
      name: i18n()('config.display.relativeTimeNotation'),
      example: i18n()('config.display.relativeTimeNotationExample'),
    },
    {
      id: 'absolute-short',
      name: i18n()('config.display.absoluteTimeNotationShort'),
      example: i18n()('config.display.absoluteTimeNotationShortExample'),
    },
    {
      id: 'absolute-long',
      name: i18n()('config.display.absoluteTimeNotationLong'),
      example: i18n()('config.display.absoluteTimeNotationLongExample'),
    },
  ];

  const updateDateFormat = (dateFormat: Config['dateFormat']) => {
    setConfig((current) => ({ ...current, dateFormat }));
  };

  return (
    <div class="py-2">
      <h3 class="font-bold">{i18n()('config.display.timeNotation')}</h3>
      <div class="flex flex-col justify-evenly gap-2 sm:flex-row">
        <For each={dateFormats}>
          {({ id, name, example }) => (
            <div class="flex flex-1 flex-row items-center gap-1 sm:flex-col">
              <button
                type="button"
                class="w-48 rounded border border-primary p-2 font-bold sm:w-full"
                classList={{
                  'bg-primary': config().dateFormat === id,
                  'text-primary-fg': config().dateFormat === id,
                  'bg-bg': config().dateFormat !== id,
                  'text-primary': config().dateFormat !== id,
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
}) => (
  <button
    class="flex h-[24px] w-[48px] items-center rounded-full border border-primary/80 px-1"
    classList={{
      'bg-bg-tertiary': !props.value,
      'justify-start': !props.value,
      'bg-primary': props.value,
      'justify-end': props.value,
    }}
    area-label={props.value}
    onClick={(event) => props.onClick(event)}
  >
    <span class="m-[-3px] inline-block h-5 w-5 rounded-full border bg-primary-fg shadow" />
  </button>
);

const ReactionConfig = () => {
  const i18n = useTranslation();
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
      <h3 class="font-bold">{i18n()('config.display.reaction')}</h3>
      <div class="flex flex-col justify-evenly gap-2">
        <div class="flex w-full">
          <div class="flex-1">{i18n()('config.display.enableEmojiReaction')}</div>
          <ToggleButton
            value={config().useEmojiReaction}
            onClick={() => toggleUseEmojiReaction()}
          />
        </div>
        <div class="flex w-full">
          <div class="flex-1">{i18n()('config.display.showEmojiReaction')}</div>
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
  const i18n = useTranslation();
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
      <h3 class="font-bold">{i18n()('config.customEmoji.customEmoji')}</h3>
      <ul class="flex flex-col gap-1 py-2">
        <For each={Object.values(config().customEmojis)}>
          {({ shortcode, url }) => (
            <li class="flex items-center gap-2">
              <img class="h-7 min-w-7 max-w-[128px]" src={url} alt={shortcode} />
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
          <div class="w-9">{i18n()('config.customEmoji.shortcode')}</div>
          <input
            class="flex-1 rounded-md border-border bg-bg placeholder:text-fg-secondary focus:border-border focus:ring-primary"
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
          <div class="w-9">{i18n()('config.customEmoji.url')}</div>
          <input
            class="flex-1 rounded-md border-border bg-bg placeholder:text-fg-secondary focus:border-border focus:ring-primary"
            type="text"
            name="url"
            value={urlInput()}
            placeholder="https://example.com/smiley.png"
            pattern={HttpUrlRegex}
            required
            onChange={(ev) => setUrlInput(ev.currentTarget.value)}
          />
        </label>
        <button
          type="submit"
          class="w-24 self-end rounded bg-primary p-2 font-bold text-primary-fg"
        >
          {i18n()('config.customEmoji.addEmoji')}
        </button>
      </form>
    </div>
  );
};

const EmojiImport = () => {
  const i18n = useTranslation();
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
      <h3 class="font-bold">{i18n()('config.customEmoji.emojiImport')}</h3>
      <p>{i18n()('config.customEmoji.emojiImportDescription')}</p>
      <form class="flex flex-col gap-2" onSubmit={handleClickSaveEmoji}>
        <textarea
          class="flex-1 rounded-md border-border bg-bg placeholder:text-fg-secondary focus:border-border focus:ring-primary"
          name="json"
          value={jsonInput()}
          placeholder='{ "smiley": "https://example.com/smiley.png" }'
          onChange={(ev) => setJSONInput(ev.currentTarget.value)}
        />
        <button
          type="submit"
          class="w-24 self-end rounded bg-primary p-2 font-bold text-primary-fg"
        >
          {i18n()('config.customEmoji.importEmoji')}
        </button>
      </form>
    </div>
  );
};

const MuteConfig = () => {
  const i18n = useTranslation();
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
        <h3 class="font-bold">{i18n()('config.mute.mutedUsers')}</h3>
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
        <h3 class="font-bold">{i18n()('config.mute.mutedKeywords')}</h3>
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
            class="flex-1 rounded-md border border-border bg-bg ring-border focus:border-border focus:ring-primary"
            type="text"
            name="keyword"
            value={keywordInput()}
            onChange={(ev) => setKeywordInput(ev.currentTarget.value)}
          />
          <button type="submit" class="rounded bg-primary p-2 font-bold text-primary-fg">
            {i18n()('config.mute.add')}
          </button>
        </form>
      </div>
    </>
  );
};

const EmbeddingConfig = () => {
  const i18n = useTranslation();
  const { config, setConfig } = useConfig();

  const toggle = (key: keyof Config['embedding']) => {
    setConfig((current) => ({
      ...current,
      embedding: {
        ...current.embedding,
        [key]: !current.embedding[key],
      },
    }));
  };

  return (
    <div class="py-2">
      <h3 class="font-bold">{i18n()('config.display.embedding')}</h3>
      <p>{i18n()('config.display.embeddingDescription')}</p>
      <div class="flex flex-col justify-evenly gap-2">
        <div class="flex w-full">
          <div class="flex-1">YouTube</div>
          <ToggleButton value={config().embedding.youtube} onClick={() => toggle('youtube')} />
        </div>
        <div class="flex w-full">
          <div class="flex-1">X (Twitter)</div>
          <ToggleButton value={config().embedding.twitter} onClick={() => toggle('twitter')} />
        </div>
        <div class="flex w-full">
          <div class="flex-1">OGP</div>
          <ToggleButton value={config().embedding.ogp} onClick={() => toggle('ogp')} />
        </div>
      </div>
    </div>
  );
};

const OtherConfig = () => {
  const i18n = useTranslation();
  const { config, setConfig } = useConfig();

  const toggleKeepOpenPostForm = () => {
    setConfig((current) => ({
      ...current,
      keepOpenPostForm: !(current.keepOpenPostForm ?? false),
    }));
  };

  const toggleShowMedia = () => {
    setConfig((current) => ({
      ...current,
      showMedia: !(current.showMedia ?? true),
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
      <h3 class="font-bold">{i18n()('config.display.others')}</h3>
      <div class="flex flex-col justify-evenly gap-2">
        <div class="flex w-full">
          <div class="flex-1">{i18n()('config.display.keepOpenPostForm')}</div>
          <ToggleButton
            value={config().keepOpenPostForm}
            onClick={() => toggleKeepOpenPostForm()}
          />
        </div>
        <div class="flex w-full">
          <div class="flex-1">{i18n()('config.display.showMediaByDefault')}</div>
          <ToggleButton value={config().showMedia} onClick={() => toggleShowMedia()} />
        </div>
        <div class="flex w-full">
          <div class="flex-1">{i18n()('config.display.hideNumbers')}</div>
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
  const i18n = useTranslation();
  const [menuIndex, setMenuIndex] = createSignal<number | null>(null);

  const menu = [
    {
      name: () => i18n()('config.profile.profile'),
      icon: () => <User />,
      render: () => <ProfileSection />,
    },
    {
      name: () => i18n()('config.relays.relays'),
      icon: () => <ServerStack />,
      render: () => <RelayConfig />,
    },
    {
      name: () => i18n()('config.display.display'),
      icon: () => <PaintBrush />,
      render: () => (
        <>
          <ColorThemeConfig />
          <DateFormatConfig />
          <ReactionConfig />
          <EmbeddingConfig />
          <OtherConfig />
        </>
      ),
    },
    {
      name: () => i18n()('config.customEmoji.customEmoji'),
      icon: () => <FaceSmile />,
      render: () => (
        <>
          <EmojiConfig />
          <EmojiImport />
        </>
      ),
    },
    {
      name: () => i18n()('config.mute.mute'),
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
              <h2 class="flex-1 text-center text-lg font-bold">{i18n()('config.config')}</h2>
              <ul class="flex flex-col">
                <For each={menu}>
                  {(menuItem, i) => (
                    <li class="w-full">
                      <button
                        class="flex w-full gap-2 py-3 hover:text-primary"
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
