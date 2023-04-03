import { Show, type JSX, type Component } from 'solid-js';
import ArrowLeft from 'heroicons/24/outline/arrow-left.svg';

import { useHandleCommand } from '@/hooks/useCommandBus';
import { TimelineContext, useTimelineState } from '@/components/TimelineContext';
import TimelineContentDisplay from '@/components/TimelineContentDisplay';

export type ColumnProps = {
  name: string;
  columnIndex: number;
  lastColumn?: true;
  width: 'widest' | 'wide' | 'medium' | 'narrow' | null | undefined;
  children: JSX.Element;
};

const Column: Component<ColumnProps> = (props) => {
  let columnDivRef: HTMLDivElement | undefined;

  const timelineState = useTimelineState();

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
    handler: () => {
      if (props.lastColumn) {
        columnDivRef?.scrollIntoView({ behavior: 'smooth' });
      }
    },
  }));

  return (
    <TimelineContext.Provider value={timelineState}>
      <div
        ref={columnDivRef}
        class="relative flex w-[80vw] shrink-0 snap-center snap-always flex-col border-r sm:snap-align-none"
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
        <div class="flex flex-col overflow-y-scroll scroll-smooth">{props.children}</div>
        <Show when={timelineState.timelineState.content} keyed>
          {(timeline) => (
            <div class="absolute h-full w-full bg-white">
              <div class="flex h-8 shrink-0 items-center border-b bg-white px-2">
                <button
                  class="flex w-full items-center gap-1"
                  onClick={() => timelineState?.clearTimeline()}
                >
                  <div class="inline-block h-4 w-4">
                    <ArrowLeft />
                  </div>
                  <div>ホームに戻る</div>
                </button>
              </div>
              <ul class="flex h-full flex-col overflow-y-scroll scroll-smooth">
                <TimelineContentDisplay timelineContent={timeline} />
              </ul>
            </div>
          )}
        </Show>
      </div>
    </TimelineContext.Provider>
  );
};

export default Column;
