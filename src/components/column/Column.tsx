import { Show, type JSX, type Component } from 'solid-js';

import ArrowLeft from 'heroicons/24/outline/arrow-left.svg';

import TimelineContentDisplay from '@/components/timeline/TimelineContentDisplay';
import { TimelineContext, useTimelineState } from '@/components/timeline/TimelineContext';
import useConfig from '@/core/useConfig';
import { useHandleCommand } from '@/hooks/useCommandBus';
import { ColumnCursorContext } from '@/hooks/useCursor';
import { useTranslation } from '@/i18n/useTranslation';

export type ColumnProps = {
  columnId: string;
  timelineRef?: (el: HTMLDivElement) => void;
  width: 'widest' | 'wide' | 'medium' | 'narrow' | null | undefined;
  header: JSX.Element;
  children: JSX.Element;
};

const Column: Component<ColumnProps> = (props) => {
  let columnDivRef: HTMLDivElement | undefined;

  const timelineState = useTimelineState();
  const { config } = useConfig();
  const i18n = useTranslation();

  const width = () => props.width ?? 'medium';

  useHandleCommand(() => ({
    commandType: 'moveToColumn',
    handler: (command) => {
      if (
        command.columnIndex >= 0 &&
        command.columnIndex < config().columns.length &&
        config().columns[command.columnIndex].id === props.columnId
      ) {
        columnDivRef?.scrollIntoView({ behavior: 'smooth', inline: 'center' });
      }
    },
  }));

  useHandleCommand(() => ({
    commandType: 'moveToLastColumn',
    handler: () => {
      const lastColumn = config().columns[config().columns.length - 1];
      if (lastColumn.id === props.columnId) {
        columnDivRef?.scrollIntoView({ behavior: 'smooth' });
      }
    },
  }));

  return (
    <ColumnCursorContext.Provider value={{ columnId: props.columnId }}>
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
                <div
                  ref={props.timelineRef}
                  class="scrollbar flex flex-col overflow-y-scroll pb-16"
                >
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
                <div class="scrollbar flex max-h-full flex-col overflow-y-scroll scroll-smooth pb-16">
                  <TimelineContentDisplay timelineContent={timeline} />
                </div>
              </>
            )}
          </Show>
        </div>
      </TimelineContext.Provider>
    </ColumnCursorContext.Provider>
  );
};

export default Column;
