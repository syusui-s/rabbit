import type { Component, JSX } from 'solid-js';
import { useHandleCommand } from '@/hooks/useCommandBus';

const widthToClass = {
  widest: 'w-[500px]',
  wide: 'w-[350px]',
  medium: 'w-[310px]',
  narrow: 'w-[270px]',
} as const;

type ColumnProps = {
  name: string;
  columnIndex: number;
  lastColumn?: true;
  width: keyof typeof widthToClass | null | undefined;
  children: JSX.Element;
};

const Column: Component<ColumnProps> = (props) => {
  let columnDivRef: HTMLDivElement | undefined;

  const width = () => {
    if (props.width == null) {
      return widthToClass.medium;
    }
    return widthToClass[props.width];
  };

  useHandleCommand(() => ({
    commandType: 'moveToColumn',
    handler: (command) => {
      if (command.command === 'moveToColumn' && command.columnIndex === props.columnIndex) {
        columnDivRef?.scrollIntoView({ behavior: 'smooth', inline: 'center' });
      }
    },
  }));

  useHandleCommand(() => ({
    commandType: 'moveToLastColumn',
    handler: (command) => {
      if (props.lastColumn) {
        columnDivRef?.scrollIntoView({ behavior: 'smooth' });
      }
    },
  }));

  return (
    <div ref={columnDivRef} class={`flex shrink-0 flex-col border-r ${width()}`}>
      <div class="flex h-8 shrink-0 items-center border-b bg-white px-2">
        {/* <span class="column-icon">🏠</span> */}
        <span class="column-name">{props.name}</span>
      </div>
      <div class="flex flex-col overflow-y-scroll scroll-smooth">{props.children}</div>
    </div>
  );
};

export default Column;
