import type { Component, JSX } from 'solid-js';
import { useHandleCommand } from '@/hooks/useCommandBus';

type ColumnProps = {
  name: string;
  columnIndex: number;
  lastColumn?: true;
  width: 'widest' | 'wide' | 'medium' | 'narrow' | null | undefined;
  children: JSX.Element;
};

const Column: Component<ColumnProps> = (props) => {
  let columnDivRef: HTMLDivElement | undefined;

  const width = () => props.width ?? 'medium';

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
    <div
      ref={columnDivRef}
      class="flex w-[80vw] shrink-0 snap-center snap-always flex-col border-r sm:snap-align-none"
      classList={{
        'sm:w-[500px]': width() === 'widest',
        'sm:w-[350px]': width() === 'wide',
        'sm:w-[310px]': width() === 'medium',
        'sm:w-[270px]': width() === 'narrow',
      }}
    >
      <div class="flex h-8 shrink-0 items-center border-b bg-white px-2">
        {/* <span class="column-icon">🏠</span> */}
        <span class="column-name">{props.name}</span>
      </div>
      <ul class="flex flex-col overflow-y-scroll scroll-smooth">{props.children}</ul>
    </div>
  );
};

export default Column;
