import { createSignal, For, type JSX } from 'solid-js';

import Section from '@/components/modal/config/Section';
import LazyLoad from '@/components/utils/LazyLoad';
import usePopup from '@/components/utils/usePopup';
import useConfig from '@/core/useConfig';
import { useTranslation } from '@/i18n/useTranslation';
import { HttpUrlRegex } from '@/utils/regex';

const EmojiSection = () => {
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
          class="w-24 self-end rounded-sm bg-primary p-2 font-bold text-primary-fg"
        >
          {i18n.t('config.customEmoji.addEmoji')}
        </button>
      </form>
      <ul class="mt-4 flex max-h-[40vh] min-h-64 flex-wrap overflow-y-auto border-t border-border">
        <For each={Object.values(config().customEmojis)}>
          {({ shortcode, url }) => {
            const popup = usePopup(() => ({
              popup: (
                <div class="flex min-w-24 flex-col items-center rounded-sm border border-border bg-bg shadow-sm">
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
                  class="flex w-full flex-col items-center gap-1 rounded-sm p-2 hover:bg-bg-tertiary/20 hover:shadow-sm"
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

export default EmojiSection;
