import { createRoot, createSignal, createContext, useContext } from 'solid-js';

export type Cursor = {
  columnId?: string;
  timelineId?: string;
  itemId?: string;
};

export type ColumnCursor = { columnId: string };
export type TimelineCursor = { timelineId: string };
export type ItemCursor = { itemId: string };

export const ColumnCursorContext = createContext<ColumnCursor>();
export const useColumnCursor = () => {
  const columnCursor = useContext(ColumnCursorContext);
  if (columnCursor == null) throw new Error('invalid use of columnCursor');

  return { columnCursor };
};

export const TimelineCursorContext = createContext<TimelineCursor>();
export const useTimelineCursor = () => {
  const timelineCursor = useContext(TimelineCursorContext);
  if (timelineCursor == null) throw new Error('invalid use of timelineCursor');

  return { timelineCursor };
};

export const ItemCursorContext = createContext<ItemCursor>();
export const useItemCursor = () => {
  const itemCursor = useContext(ItemCursorContext);
  if (itemCursor == null) throw new Error('invalid use of timelineCursor');

  return { itemCursor };
};

const [cursor, setCursor] = createRoot(() => createSignal<Cursor>({}));
const useCursor = () => ({ cursor, setCursor });

export default useCursor;
