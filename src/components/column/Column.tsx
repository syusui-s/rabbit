import { Show, type JSX, type Component } from 'solid-js';

import ArrowLeft from 'heroicons/24/outline/arrow-left.svg';

import TimelineContentDisplay from '@/components/timeline/TimelineContentDisplay';
import { TimelineContext, useTimelineState } from '@/components/timeline/TimelineContext';
import { useHandleCommand } from '@/hooks/useCommandBus';
import { ScrollerProvider, useScroller } from '@/hooks/useScroller';
import { useTranslation } from '@/i18n/useTranslation';

export type ColumnProps = {
  timelineRef?: (el: HTMLDivElement) => void;
  columnIndex: number;
  lastColumn: boolean;
  width: 'widest' | 'wide' | 'medium' | 'narrow' | null | undefined;
  header: JSX.Element;
  children: JSX.Element;
};

const Column: Component<ColumnProps> = (props) => {
  let columnDivRef: HTMLDivElement | undefined;

  const timelineState = useTimelineState();
  const i18n = useTranslation();

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

  const { Scrollable } = useScroller();

  return (
    <TimelineContext.Provider value={timelineState}>
      <div
        ref={columnDivRef}
        class="flex w-[80vw] shrink-0 snap-center snap-always flex-col border-r border-border sm:snap-align-none"
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
              <div class="shrink-0 border-b border-border">{props.header}</div>
              <Scrollable
                // I will fix:
                // ref={props.timelineRef}
                class="scrollbar flex flex-col overflow-y-scroll pb-16"
              >
                {props.children}
              </Scrollable>
            </>
          }
        >
          {(timeline) => (
            <>
              <div class="flex shrink-0 items-center border-b border-border px-2">
                <button
                  class="flex w-full items-center gap-1"
                  onClick={() => timelineState?.clearTimeline()}
                >
                  <div class="inline-block size-4">
                    <ArrowLeft />
                  </div>
                  <div>{i18n.t('column.back')}</div>
                </button>
              </div>
              <Scrollable class="scrollbar flex max-h-full flex-col overflow-y-scroll scroll-smooth pb-16">
                <TimelineContentDisplay timelineContent={timeline} />
              </Scrollable>
            </>
          )}
        </Show>
      </div>
    </TimelineContext.Provider>
  );
};

const Wrapper: Component<ColumnProps> = (props) => (
  <ScrollerProvider>
    <Column {...props} />
  </ScrollerProvider>
);

export default Wrapper;
