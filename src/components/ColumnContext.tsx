import { createContext, useContext, type JSX } from 'solid-js';
import { createStore } from 'solid-js/store';

export type ColumnContent = {
  type: 'Replies';
  eventId: string;
};

export type ColumnState = {
  content?: ColumnContent;
};

export type UseColumnState = {
  columnState: ColumnState;
  setColumnContent: (content: ColumnContent) => void;
  clearColumnContext: () => void;
};

export const ColumnContext = createContext<UseColumnState>();

export const useColumnContext = () => useContext(ColumnContext);

export const useColumnState = (): UseColumnState => {
  const [columnState, setColumnState] = createStore<ColumnState>({});

  return {
    columnState,
    setColumnContent: (content: ColumnContent) => setColumnState('content', content),
    clearColumnContext: () => setColumnState('content', undefined),
  };
};
