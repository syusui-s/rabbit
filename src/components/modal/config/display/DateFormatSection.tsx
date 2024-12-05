import { For } from 'solid-js';

import Section from '@/components/modal/config/Section';
import useConfig, { type Config } from '@/core/useConfig';
import { useTranslation } from '@/i18n/useTranslation';

const DateFormatSection = () => {
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

export default DateFormatSection;
