import { createContext, useContext, type Component, type ParentProps } from 'solid-js';

interface ScrollerContextValue {
  scrollToTop: () => void;
  Scrollable: Scrollable;
}
type Scrollable = Component<ParentProps<{ class?: string }>>;

const ScrollableContext = createContext<ScrollerContextValue>();

export const ScrollerProvider: Component<ParentProps> = (props) => {
  let ref: HTMLDivElement;

  const Scrollable: Scrollable = (_props) => (
    <div ref={ref} class={_props.class}>
      {_props.children}
    </div>
  );

  const scrollToTop = () => {
    ref.scrollTo(0, 0);
  };

  return (
    <ScrollableContext.Provider value={{ scrollToTop, Scrollable }}>
      {props.children}
    </ScrollableContext.Provider>
  );
};

export const useScroller = () => {
  const context = useContext(ScrollableContext);

  if (context === undefined) {
    throw new Error('Context is not found');
  }

  return context;
};
