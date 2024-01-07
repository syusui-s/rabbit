import { createSignal } from 'solid-js';

export type UseScroll = {
  targetRef: (el: HTMLElement) => void;
  currentPosition: () => number;
  scrollToTop: () => void;
  scrollToBottom: () => void;
};

const useScroll = (): UseScroll => {
  const [elementRef, setElementRef] = createSignal<HTMLElement | undefined>();

  const scrollToTop = () => {
    const el = elementRef();
    if (el == null) return;
    el.scrollTo(0, 0);
  };

  const scrollToBottom = () => {
    const el = elementRef();
    if (el == null) return;
    el.scrollTo(0, el.scrollHeight);
  };

  const currentPosition = () => elementRef()?.scrollTop ?? 0;

  return {
    targetRef: setElementRef,
    currentPosition,
    scrollToTop,
    scrollToBottom,
  };
};

export default useScroll;
