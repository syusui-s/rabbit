import { Show, type JSX, type Component } from 'solid-js';

import ArrowLeft from 'heroicons/24/outline/arrow-left.svg';

import TimelineContentDisplay from '@/components/timeline/TimelineContentDisplay';
import { TimelineContext, useTimelineState } from '@/components/timeline/TimelineContext';
import { useHandleCommand } from '@/hooks/useCommandBus';

export type ColumnProps = {
  columnIndex: number;
  lastColumn: boolean;
  width: 'widest' | 'wide' | 'medium' | 'narrow' | null | undefined;
  header: JSX.Element;
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
        class="flex w-[80vw] shrink-0 snap-center snap-always flex-col border-r sm:snap-align-none"
        classList={{
          'sm:w-[500px]': width() === 'widest',
          'sm:w-[360px]': width() === 'wide',
          'sm:w-[320px]': width() === 'medium',
          'sm:w-[280px]': width() === 'narrow',
        }}
      >
        <Show
          when={timelineState.timelineState.content}
          keyed
          fallback={
            <>
              <div class="shrink-0 border-b">{props.header}</div>
              <div class="scrollbar flex flex-col overflow-y-scroll scroll-smooth">
                {props.children}
              </div>
            </>
          }
        >
          {(timeline) => (
            <div class="h-full w-full bg-white">
              <div class="flex shrink-0 items-center border-b bg-white px-2">
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
              <ul class="scrollbar flex h-full flex-col overflow-y-scroll scroll-smooth">
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
