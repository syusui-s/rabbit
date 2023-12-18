import { createSignal, onMount, onCleanup } from 'solid-js';

import throttle from 'lodash/throttle';

// TODO Find a better way to solve this. Firefox on Windows can cause 2px gap.
const Offset = 2;

const ThrottleWaitMs = 200;

/**
 * Detect overflow if the height of the target element content is bigger than
 * actual displayed height or window height.
 */
const useDetectOverflow = () => {
  let elementRef: HTMLElement | undefined;
  const [overflow, setOverflow] = createSignal(false);

  const setElementRef = (el: HTMLElement) => {
    elementRef = el;
  };

  const detectOverflow = throttle(() => {
    if (elementRef != null) {
      setOverflow(
        elementRef.scrollHeight > elementRef.clientHeight + Offset ||
          elementRef.scrollHeight > document.documentElement.clientHeight + Offset,
      );
    }
  }, ThrottleWaitMs);

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
          threshold: 0,
        },
      );
      observer.observe(elementRef);

      const handleResize = () => detectOverflow();
      window.addEventListener('resize', handleResize);

      onCleanup(() => {
        observer.disconnect();
        window.removeEventListener('resize', handleResize);
      });
    }
  });

  return { overflow, elementRef: setElementRef };
};

export default useDetectOverflow;
