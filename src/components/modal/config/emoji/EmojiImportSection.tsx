import { createSignal, type JSX } from 'solid-js';

import Section from '@/components/modal/config/Section';
import useConfig from '@/core/useConfig';
import { useTranslation } from '@/i18n/useTranslation';
import { convertToEmojiConfig, simpleEmojiPackSchema } from '@/utils/emojipack';

const EmojiImportSection = () => {
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

export default EmojiImportSection;
