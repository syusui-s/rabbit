import { Component, JSX, For } from 'solid-js';

import ChevronLeft from 'heroicons/24/outline/chevron-left.svg';
import ChevronRight from 'heroicons/24/outline/chevron-right.svg';
import Trash from 'heroicons/24/outline/trash.svg';

import { ColumnType } from '@/core/column';
import useConfig from '@/core/useConfig';
import useCursor from '@/hooks/useCursor';
import { useTranslation } from '@/i18n/useTranslation';

type ColumnSettingsProps = {
  column: ColumnType;
};

type ColumnSettingsSectionProps = {
  title: string;
  children: JSX.Element;
};

const ColumnSettingsSection: Component<ColumnSettingsSectionProps> = (props) => (
  <div class="flex flex-col gap-2 border-b border-border p-2">
    <div>{props.title}</div>
    <div>{props.children}</div>
  </div>
);

const ColumnSettings: Component<ColumnSettingsProps> = (props) => {
  const i18n = useTranslation();
  const { saveColumn, removeColumn, moveColumn } = useConfig();
  const { setCursor } = useCursor();

  const setColumnWidth = (width: ColumnType['width']) => {
    saveColumn({ ...props.column, width });
  };

  const move = (diff: number) => {
    moveColumn(props.column.id, diff);
    setCursor({ columnId: props.column.id });
  };

  return (
    <div class="flex flex-col border-t border-border">
      <ColumnSettingsSection title={i18n.t('column.config.columnWidth')}>
        <div class="scrollbar flex h-9 gap-2 overflow-x-auto">
          <For each={['widest', 'wide', 'medium', 'narrow'] as const}>
            {(width) => (
              <button
                class="rounded-md border px-4 text-fg-secondary"
                classList={{
                  'border-fg-secondary': props.column.width === width,
                  'font-bold': props.column.width === width,
                  'border-border': props.column.width !== width,
                  'font-normal': props.column.width !== width,
                }}
                onClick={() => setColumnWidth(width)}
              >
                {i18n.t(`column.config.${width}`)}
              </button>
            )}
          </For>
        </div>
      </ColumnSettingsSection>
      <div class="flex h-10 items-center gap-2">
        <button class="py-4 pl-2" title={i18n.t('column.config.moveLeft')} onClick={() => move(-1)}>
          <span class="inline-block size-4">
            <ChevronLeft />
          </span>
        </button>
        <button class="py-4 pr-2" title={i18n.t('column.config.moveRight')} onClick={() => move(1)}>
          <span class="inline-block size-4">
            <ChevronRight />
          </span>
        </button>
        <div class="flex-1" />
        <button
          class="px-2 py-4 text-danger hover:text-rose-600"
          title={i18n.t('column.config.removeColumn')}
          onClick={() => removeColumn(props.column.id)}
        >
          <span class="inline-block size-4" aria-label={i18n.t('column.config.removeColumn')}>
            <Trash />
          </span>
        </button>
      </div>
    </div>
  );
};

export default ColumnSettings;
