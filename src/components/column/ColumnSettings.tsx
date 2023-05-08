import { Component, JSX } from 'solid-js';

import ChevronLeft from 'heroicons/24/outline/chevron-left.svg';
import ChevronRight from 'heroicons/24/outline/chevron-right.svg';
import Trash from 'heroicons/24/outline/trash.svg';

import { ColumnType } from '@/core/column';
import useConfig from '@/core/useConfig';
import { useRequestCommand } from '@/hooks/useCommandBus';

type ColumnSettingsProps = {
  column: ColumnType;
  columnIndex: number;
};

type ColumnSettingsSectionProps = {
  title: string;
  children: JSX.Element;
};

const ColumnSettingsSection: Component<ColumnSettingsSectionProps> = (props) => {
  return (
    <div class="flex flex-col gap-2 border-b p-2">
      <div>{props.title}</div>
      <div>{props.children}</div>
    </div>
  );
};

const ColumnSettings: Component<ColumnSettingsProps> = (props) => {
  const { saveColumn, removeColumn, moveColumn } = useConfig();
  const requestCommand = useRequestCommand();

  const setColumnWidth = (width: ColumnType['width']) => {
    saveColumn({ ...props.column, width });
  };

  const move = (index: number) => {
    moveColumn(props.column.id, index);
    requestCommand({ command: 'moveToColumn', columnIndex: index }).catch((err) =>
      console.error(err),
    );
  };

  return (
    <div class="flex flex-col border-t">
      <ColumnSettingsSection title="カラム幅">
        <div class="flex h-9 gap-2">
          <button
            class="rounded-md border px-4 hover:bg-stone-100"
            onClick={() => setColumnWidth('widest')}
          >
            特大
          </button>
          <button
            class="rounded-md border px-4 hover:bg-stone-100"
            onClick={() => setColumnWidth('wide')}
          >
            大
          </button>
          <button
            class="rounded-md border px-4 hover:bg-stone-100"
            onClick={() => setColumnWidth('medium')}
          >
            中
          </button>
          <button
            class="rounded-md border px-4 hover:bg-stone-100"
            onClick={() => setColumnWidth('narrow')}
          >
            小
          </button>
        </div>
      </ColumnSettingsSection>
      <div class="flex h-10 items-center gap-2">
        <button class="py-4 pl-2" title="左に移動" onClick={() => move(props.columnIndex - 1)}>
          <span class="inline-block h-4 w-4">
            <ChevronLeft />
          </span>
        </button>
        <button class="py-4 pr-2" title="右に移動" onClick={() => move(props.columnIndex + 1)}>
          <span class="inline-block h-4 w-4">
            <ChevronRight />
          </span>
        </button>
        <div class="flex-1" />
        <button
          class="px-2 py-4 text-rose-500 hover:text-rose-600"
          title="削除"
          onClick={() => removeColumn(props.column.id)}
        >
          <span class="inline-block h-4 w-4" aria-label="削除">
            <Trash />
          </span>
        </button>
      </div>
    </div>
  );
};

export default ColumnSettings;
