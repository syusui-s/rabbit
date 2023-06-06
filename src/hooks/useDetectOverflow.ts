import { createSignal, onMount } from 'solid-js';

const useDetectOverflow = () => {
  let elementRef: HTMLElement | undefined;
  const [overflow, setOverflow] = createSignal(false);

  const setElementRef = (el: HTMLElement) => {
    elementRef = el;
  };

  onMount(() => {
    if (elementRef != null) {
      setOverflow(elementRef.scrollHeight > elementRef.clientHeight);
    }
  });

  return { overflow, elementRef: setElementRef };
};

export default useDetectOverflow;
