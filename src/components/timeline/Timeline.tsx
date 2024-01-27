import { For, createEffect, createMemo, type Component, Show } from 'solid-js';

import { type Event as NostrEvent } from 'nostr-tools/pure';

import ColumnItem from '@/components/ColumnItem';
import EventDisplay from '@/components/event/EventDisplay';
import useConfig from '@/core/useConfig';
import { useHandleCommand } from '@/hooks/useCommandBus';
import useCursor, { TimelineCursorContext, useColumnCursor } from '@/hooks/useCursor';
import generateId from '@/utils/generateId';

export type TimelineProps = {
  events: NostrEvent[];
};

const Timeline: Component<TimelineProps> = (props) => {
  const { shouldMuteEvent } = useConfig();

  const { columnCursor } = useColumnCursor();
  const { cursor, setCursor } = useCursor();

  const timelineId = createMemo(() => generateId());

  const updateCursor = (updateIndex: (index: number) => number) => {
    const current = cursor();
    if (current.timelineId === timelineId()) {
      const index = props.events.findIndex(({ id }) => id === current.itemId);
      if (index < 0) return;
      const newIndex = updateIndex(index);
      const event = props.events[newIndex];

      setCursor({
        columnId: columnCursor.columnId,
        timelineId: timelineId(),
        itemId: event.id,
      });
    }
  };

  useHandleCommand(() => ({
    commandType: 'moveToFirstItem',
    handler: () => {
      updateCursor(() => 0);
    },
  }));

  useHandleCommand(() => ({
    commandType: 'moveToPrevItem',
    handler: () => {
      updateCursor((index) => Math.max(index - 1, 0));
    },
  }));

  useHandleCommand(() => ({
    commandType: 'moveToNextItem',
    handler: () => {
      updateCursor((index) => Math.min(index + 1, props.events.length - 1));
    },
  }));

  createEffect(() => {
    const current = cursor();

    if (current.columnId === columnCursor.columnId && current.timelineId == null) {
      setCursor({ columnId: columnCursor.columnId, timelineId: timelineId() });
    }

    if (current.timelineId === timelineId() && current.itemId == null) {
      setCursor({
        columnId: columnCursor.columnId,
        timelineId: timelineId(),
        itemId: props.events[0]?.id,
      });
    }
  });

  return (
    <TimelineCursorContext.Provider value={{ timelineId: timelineId() }}>
      <For each={props.events}>
        {(event) => (
          <Show when={!shouldMuteEvent(event)}>
            <ColumnItem itemId={event.id}>
              <EventDisplay event={event} />
            </ColumnItem>
          </Show>
        )}
      </For>
    </TimelineCursorContext.Provider>
  );
};

export default Timeline;
