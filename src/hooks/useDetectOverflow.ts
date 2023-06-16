import { createSignal, onMount } from 'solid-js';

// TODO Find a better way to solve this. Firefox on Windows can cause 2px gap.
const Offset = 2;

const useDetectOverflow = () => {
  let elementRef: HTMLElement | undefined;
  const [overflow, setOverflow] = createSignal(false);

  const setElementRef = (el: HTMLElement) => {
    elementRef = el;
  };

  onMount(() => {
    if (elementRef != null) {
      setOverflow(elementRef.scrollHeight > elementRef.clientHeight + Offset);
    }
  });

  return { overflow, elementRef: setElementRef };
};

export default useDetectOverflow;
