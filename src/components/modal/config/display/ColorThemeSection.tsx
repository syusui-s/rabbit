import { For } from 'solid-js';

import Section from '@/components/modal/config/Section';
import { colorThemes } from '@/core/colorThemes';
import useConfig from '@/core/useConfig';
import { useTranslation } from '@/i18n/useTranslation';

const ColorThemeSection = () => {
  const i18n = useTranslation();
  const { config, setConfig } = useConfig();

  const isCurrentlyUsing = (id: string) => {
    const theme = config().colorTheme;
    if (theme.type === 'specific') {
      return theme.id === id;
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

export default ColorThemeSection;
