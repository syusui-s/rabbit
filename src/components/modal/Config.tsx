import { createSignal, Show, For, type JSX, batch } from 'solid-js';

import ArrowLeft from 'heroicons/24/outline/arrow-left.svg';
import ChevronDown from 'heroicons/24/outline/chevron-down.svg';
import ChevronUp from 'heroicons/24/outline/chevron-up.svg';
import EyeSlash from 'heroicons/24/outline/eye-slash.svg';
import FaceSmile from 'heroicons/24/outline/face-smile.svg';
import PaintBrush from 'heroicons/24/outline/paint-brush.svg';
import ServerStack from 'heroicons/24/outline/server-stack.svg';
import User from 'heroicons/24/outline/user.svg';
import XMark from 'heroicons/24/outline/x-mark.svg';

import BasicModal from '@/components/modal/BasicModal';
import UserNameDisplay from '@/components/UserDisplayName';
import LazyLoad from '@/components/utils/LazyLoad';
import usePopup from '@/components/utils/usePopup';
import { colorThemes } from '@/core/colorThemes';
import useConfig, { ConfigSchema, type Config } from '@/core/useConfig';
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

const Section = (props: { title: string; initialOpened?: boolean; children: JSX.Element }) => {
  const [opened, setOpened] = createSignal(props.initialOpened ?? true);
  const toggleOpened = () => setOpened((current) => !current);

  return (
    <div class="mb-2 rounded border border-border shadow hover:shadow-md">
      <h3 class="text-lg font-bold">
        <button
          type="button"
          class="flex w-full items-center p-2 text-start"
          onClick={() => toggleOpened()}
        >
          <span class="flex-1 hover:text-fg-secondary">{props.title}</span>
          <span class="inline-block size-4 shrink-0 text-fg">
            <Show when={opened()} fallback={<ChevronDown />}>
              <ChevronUp />
            </Show>
          </span>
        </button>
      </h3>
      <Show when={opened()}>
        <div class="border-t border-border p-2">{props.children}</div>
      </Show>
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
    <span class="m-[-3px] inline-block size-5 rounded-full border bg-primary-fg shadow" />
  </button>
);

const ProfileSection = () => {
  const i18n = useTranslation();
  const pubkey = usePubkey();
  const { showProfile, showProfileEdit } = useModalState();

  return (
    <Section title={i18n.t('config.account.profile')}>
      <div class="flex gap-2 py-1">
        <button
          class="rounded border border-primary px-4 py-1 font-bold text-primary"
          onClick={() =>
            ensureNonNull([pubkey()])(([pubkeyNonNull]) => {
              showProfile(pubkeyNonNull);
            })
          }
        >
          {i18n.t('config.account.openProfile')}
        </button>
        <button
          class="rounded border border-primary px-4 py-1 font-bold text-primary"
          onClick={() => showProfileEdit()}
        >
          {i18n.t('config.account.editProfile')}
        </button>
      </div>
    </Section>
  );
};

const BackupSection = () => {
  let fileInputRef: HTMLInputElement | undefined;

  const i18n = useTranslation();
  const config = useConfig();

  const handleSave = () => {
    const json = JSON.stringify(config.config(), null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const dataUrl = URL.createObjectURL(blob);

    const datetime = new Date().toISOString();
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = `rabbit-${datetime}.json`;

    link.click();
  };

  const handleRestore = () => {
    if (fileInputRef == null) return;
    fileInputRef.click();
  };

  const restore = async (file: File) => {
    try {
      const json = await file.text();
      const validated = ConfigSchema.parse(JSON.parse(json));
      config.setConfig(validated);

      window.alert(i18n.t('config.account.restored'));
      window.location.reload();
    } catch (e) {
      if (e instanceof Error) {
        window.alert(`${i18n.t('config.account.failedToRestore')}: ${e.message}`);
      } else {
        window.alert(i18n.t('config.account.failedToRestore'));
      }
    }
  };

  const handleChangeFile: JSX.EventHandler<HTMLInputElement, Event> = (ev) => {
    ev.preventDefault();

    const files = [...(ev.currentTarget.files ?? [])];
    if (files.length !== 1) return;
    const file = files[0];
    restore(file).catch((err) => console.log(err));
  };

  return (
    <Section title={i18n.t('config.account.backupConfig')}>
      <div class="flex gap-2 py-1">
        <button
          class="rounded border border-primary px-4 py-1 font-bold text-primary"
          onClick={handleSave}
        >
          {i18n.t('config.account.save')}
        </button>
        <button
          class="rounded border border-primary px-4 py-1 font-bold text-primary"
          onClick={handleRestore}
        >
          {i18n.t('config.account.restore')}
        </button>
      </div>
      <input
        ref={fileInputRef}
        type="file"
        hidden
        multiple={false}
        name="config"
        accept="application/json"
        onChange={handleChangeFile}
      />
    </Section>
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
      window.alert(i18n.t('config.relays.notConfigured'));
      return;
    }

    if (!window.confirm(`${i18n.t('config.relays.askImport')}\n\n${relayUrls}`)) {
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
    window.alert(i18n.t('config.relays.imported', { count: importedCount }));
  };

  return (
    <>
      <Section title={i18n.t('config.relays.relays')}>
        <p class="py-1">
          {i18n.t('config.relays.numOfRelays', { count: config().relayUrls.length })}
        </p>
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
            {i18n.t('config.relays.addRelay')}
          </button>
        </form>
        <ul class="pt-2">
          <For each={config().relayUrls}>
            {(relayUrl: string) => (
              <li class="flex items-center border-t border-border pr-4">
                <div class="flex-1 truncate">{relayUrl}</div>
                <button class="size-3 shrink-0" onClick={() => removeRelay(relayUrl)}>
                  <XMark />
                </button>
              </li>
            )}
          </For>
        </ul>
      </Section>
      <Section title={i18n.t('config.relays.importRelays')}>
        <button
          type="button"
          class="rounded bg-primary p-2 font-bold text-primary-fg"
          onClick={() => {
            importFromNIP07().catch((err) => {
              console.error('failed to import relays', err);
              window.alert(i18n.t('config.relays.failedToImport'));
            });
          }}
        >
          {i18n.t('config.relays.importFromExtension')}
        </button>
      </Section>
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
    <Section title={i18n.t('config.display.colorTheme')}>
      <div class="scrollbar flex flex-col overflow-y-auto rounded-md border border-border">
        <For each={Object.values(colorThemes)}>
          {(colorTheme) => (
            <button
              type="button"
              class="border-t border-border px-2 py-1 text-left first:border-none"
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
    </Section>
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
      name: i18n.t('config.display.relativeTimeNotation'),
      example: i18n.t('config.display.relativeTimeNotationExample'),
    },
    {
      id: 'absolute-short',
      name: i18n.t('config.display.absoluteTimeNotationShort'),
      example: i18n.t('config.display.absoluteTimeNotationShortExample'),
    },
    {
      id: 'absolute-long',
      name: i18n.t('config.display.absoluteTimeNotationLong'),
      example: i18n.t('config.display.absoluteTimeNotationLongExample'),
    },
  ];

  const updateDateFormat = (dateFormat: Config['dateFormat']) => {
    setConfig((current) => ({ ...current, dateFormat }));
  };

  return (
    <Section title={i18n.t('config.display.timeNotation')}>
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
    </Section>
  );
};

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
    <Section title={i18n.t('config.display.reaction')}>
      <div class="flex flex-col justify-evenly gap-2">
        <div class="flex w-full">
          <div class="flex-1">{i18n.t('config.display.enableEmojiReaction')}</div>
          <ToggleButton
            value={config().useEmojiReaction}
            onClick={() => toggleUseEmojiReaction()}
          />
        </div>
        <div class="flex w-full">
          <div class="flex-1">{i18n.t('config.display.showEmojiReaction')}</div>
          <ToggleButton
            value={config().showEmojiReaction}
            onClick={() => toggleShowEmojiReaction()}
          />
        </div>
      </div>
    </Section>
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
    <Section title={i18n.t('config.customEmoji.customEmoji')}>
      <form class="flex flex-col gap-2" onSubmit={handleClickSaveEmoji}>
        <label class="flex flex-1 items-center gap-1">
          <div class="w-9">{i18n.t('config.customEmoji.shortcode')}</div>
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
          <div class="w-9">{i18n.t('config.customEmoji.url')}</div>
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
          {i18n.t('config.customEmoji.addEmoji')}
        </button>
      </form>
      <ul class="mt-4 flex max-h-[40vh] min-h-64 flex-wrap overflow-y-auto border-t border-border">
        <For each={Object.values(config().customEmojis)}>
          {({ shortcode, url }) => {
            const popup = usePopup(() => ({
              popup: (
                <div class="flex min-w-24 flex-col items-center rounded border border-border bg-bg shadow">
                  <div class="flex items-center p-1">
                    <img class="h-20 max-w-20 object-contain" src={url} alt={shortcode} />
                  </div>
                  <div class="p-1 text-center text-sm">{shortcode}</div>
                  <div class="w-full border-t border-border">
                    <button
                      type="button"
                      class="w-full px-2 py-1 text-danger"
                      onClick={() => removeEmoji(shortcode)}
                    >
                      {i18n.t('config.customEmoji.removeEmoji')}
                    </button>
                  </div>
                </div>
              ),
            }));

            return (
              <li ref={popup.targetRef} class="min-w-0 basis-1/2 sm:basis-1/4">
                <button
                  type="button"
                  class="flex w-full flex-col items-center gap-1 rounded p-2 hover:bg-bg-tertiary/20 hover:shadow"
                  onClick={() => popup.open()}
                >
                  <LazyLoad fallback={<div class="size-8" />}>
                    {() => (
                      <div class="flex h-8 max-w-8 items-center">
                        <img class="object-contain" src={url} alt={shortcode} />
                      </div>
                    )}
                  </LazyLoad>
                  <div class="w-full truncate text-xs text-fg-secondary">{shortcode}</div>
                </button>
                {popup.popup()}
              </li>
            );
          }}
        </For>
      </ul>
    </Section>
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
    <Section title={i18n.t('config.customEmoji.emojiImport')}>
      <p>{i18n.t('config.customEmoji.emojiImportDescription')}</p>
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
          {i18n.t('config.customEmoji.importEmoji')}
        </button>
      </form>
    </Section>
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
      <Section title={i18n.t('config.mute.mutedUsers')} initialOpened={false}>
        <ul class="flex max-h-[50vh] min-h-64 flex-col overflow-y-auto">
          <For each={config().mutedPubkeys}>
            {(pubkey) => (
              <li class="flex items-center border-b border-border pr-4">
                <div class="flex-1 truncate">
                  <LazyLoad fallback={<div class="h-4" />}>
                    {() => <UserNameDisplay pubkey={pubkey} />}
                  </LazyLoad>
                </div>
                <button class="size-3 shrink-0" onClick={() => removeMutedPubkey(pubkey)}>
                  <XMark />
                </button>
              </li>
            )}
          </For>
        </ul>
      </Section>
      <Section title={i18n.t('config.mute.mutedKeywords')} initialOpened={false}>
        <form class="flex gap-2" onSubmit={handleClickAddKeyword}>
          <input
            class="flex-1 rounded-md border border-border bg-bg ring-border focus:border-border focus:ring-primary"
            type="text"
            name="keyword"
            value={keywordInput()}
            onChange={(ev) => setKeywordInput(ev.currentTarget.value)}
          />
          <button type="submit" class="rounded bg-primary p-2 font-bold text-primary-fg">
            {i18n.t('config.mute.add')}
          </button>
        </form>
        <ul class="mt-2 flex max-h-[50vh] min-h-64 flex-col overflow-y-auto border-t border-border">
          <For each={config().mutedKeywords}>
            {(keyword) => (
              <li class="flex items-center border-b border-border pr-4">
                <div class="flex-1 truncate">{keyword}</div>
                <button class="size-3 shrink-0" onClick={() => removeMutedKeyword(keyword)}>
                  <XMark />
                </button>
              </li>
            )}
          </For>
        </ul>
      </Section>
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
    <Section title={i18n.t('config.display.embedding')}>
      <p>{i18n.t('config.display.embeddingDescription')}</p>
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
    </Section>
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
    <Section title={i18n.t('config.display.others')}>
      <div class="flex flex-col justify-evenly gap-2">
        <div class="flex w-full">
          <div class="flex-1">{i18n.t('config.display.keepOpenPostForm')}</div>
          <ToggleButton
            value={config().keepOpenPostForm}
            onClick={() => toggleKeepOpenPostForm()}
          />
        </div>
        <div class="flex w-full">
          <div class="flex-1">{i18n.t('config.display.showMediaByDefault')}</div>
          <ToggleButton value={config().showMedia} onClick={() => toggleShowMedia()} />
        </div>
        <div class="flex w-full">
          <div class="flex-1">{i18n.t('config.display.hideNumbers')}</div>
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
    </Section>
  );
};

const ConfigUI = (props: ConfigProps) => {
  const i18n = useTranslation();
  const [menuIndex, setMenuIndex] = createSignal<number | null>(null);

  const menu = [
    {
      name: () => i18n.t('config.account.profile'),
      icon: () => <User />,
      render: () => (
        <>
          <ProfileSection />
          <BackupSection />
        </>
      ),
    },
    {
      name: () => i18n.t('config.relays.relays'),
      icon: () => <ServerStack />,
      render: () => <RelayConfig />,
    },
    {
      name: () => i18n.t('config.display.display'),
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
      name: () => i18n.t('config.customEmoji.customEmoji'),
      icon: () => <FaceSmile />,
      render: () => (
        <>
          <EmojiConfig />
          <EmojiImport />
        </>
      ),
    },
    {
      name: () => i18n.t('config.mute.mute'),
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
              <h2 class="flex-1 text-center text-lg font-bold">{i18n.t('config.config')}</h2>
              <ul class="flex flex-col">
                <For each={menu}>
                  {(menuItem, i) => (
                    <li class="w-full">
                      <button
                        class="flex w-full gap-2 py-3 hover:text-primary"
                        onClick={() => setMenuIndex(i)}
                      >
                        <span class="inline-block size-6">{menuItem.icon()}</span>
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
              <div>
                <button
                  class="pr-4 text-fg hover:text-fg-secondary"
                  onClick={() => setMenuIndex(null)}
                >
                  <span class="inline-block size-6">
                    <ArrowLeft />
                  </span>
                </button>
              </div>
              <div class="w-full flex-1 pt-4">{menuItem.render()}</div>
            </div>
          )}
        </Show>
      </div>
    </BasicModal>
  );
};

export default ConfigUI;
