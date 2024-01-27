import { createEffect, type Component, type JSX } from 'solid-js';

import useCursor, {
  useColumnCursor,
  useTimelineCursor,
  ItemCursorContext,
} from '@/hooks/useCursor';

type ColumnItemProps = {
  itemId: string;
  children: JSX.Element;
};

const ColumnItem: Component<ColumnItemProps> = (props) => {
  let containerRef: HTMLDivElement | undefined;

  const { cursor, setCursor } = useCursor();
  const { columnCursor } = useColumnCursor();
  const { timelineCursor } = useTimelineCursor();

  const selected = () =>
    cursor().columnId === columnCursor.columnId &&
    cursor().timelineId === timelineCursor.timelineId &&
    cursor().itemId === props.itemId;

  createEffect(() => {
    if (selected()) {
      containerRef?.scrollIntoView(false);
    }
  });

  return (
    <ItemCursorContext.Provider value={{ itemId: props.itemId }}>
      <div
        ref={containerRef}
        class="block shrink-0 overflow-hidden border border-border p-1"
        classList={{
          'border-border': !selected(),
          'border-primary': selected(),
        }}
      >
        {props.children}
      </div>
    </ItemCursorContext.Provider>
  );
};

export default ColumnItem;
