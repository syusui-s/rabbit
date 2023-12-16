import { createSignal, onMount, onCleanup } from 'solid-js';

// TODO Find a better way to solve this. Firefox on Windows can cause 2px gap.
const Offset = 2;

const useDetectOverflow = () => {
  let elementRef: HTMLElement | undefined;
  const [overflow, setOverflow] = createSignal(false);

  const setElementRef = (el: HTMLElement) => {
    elementRef = el;
  };

  const detectOverflow = () => {
    if (elementRef != null) {
      setOverflow(elementRef.scrollHeight > elementRef.clientHeight + Offset);
    }
  };

  onMount(() => {
    if (elementRef != null) {
      detectOverflow();

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              detectOverflow();
            }
          });
        },
        {
          threshold: [0, 0.5, 1],
        },
      );
      observer.observe(elementRef);

      onCleanup(() => {
        observer.disconnect();
      });
    }
  });

  return { overflow, elementRef: setElementRef };
};

export default useDetectOverflow;
