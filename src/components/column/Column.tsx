import { Show, type JSX, type Component, createSignal, createEffect } from 'solid-js';

import ArrowLeft from 'heroicons/24/outline/arrow-left.svg';

import TimelineContentDisplay from '@/components/timeline/TimelineContentDisplay';
import { TimelineContext, useTimelineState } from '@/components/timeline/TimelineContext';
import { ColumnWidth } from '@/core/column';
import { useHandleCommand } from '@/hooks/useCommandBus';
import { useTranslation } from '@/i18n/useTranslation';

export type ColumnProps = {
  columnIndex: number;
  lastColumn: boolean;
  width: ColumnWidth;
  header: JSX.Element;
  children: JSX.Element;
  columnOperatorRef?: (el: ColumnOperator) => void;
};

export interface ColumnOperator {
  scrollToTop(): void;
}

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

  // 2つの `ref={setTimelineEl}` は `<Show>` の異なる分岐に存在し、
  // 同時にレンダリングされないので、`timelineEl` は常にひとつの HTMLElement と関連づけられる。
  const [timelineEl, setTimelineEl] = createSignal<HTMLElement>();

  createEffect(() => {
    const operator: ColumnOperator = {
      scrollToTop: () => {
        timelineEl()?.scrollTo({ top: 0, behavior: 'smooth' });
      },
    };

    props.columnOperatorRef?.(operator);
  });

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
              <div ref={setTimelineEl} class="scrollbar flex flex-col overflow-y-scroll pb-16">
                {props.children}
              </div>
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
              <div
                ref={setTimelineEl}
                class="scrollbar flex max-h-full flex-col overflow-y-scroll scroll-smooth pb-16"
              >
                <TimelineContentDisplay timelineContent={timeline} />
              </div>
            </>
          )}
        </Show>
      </div>
    </TimelineContext.Provider>
  );
};

export default Column;
