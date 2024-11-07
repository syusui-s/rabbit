import { onMount, onCleanup } from 'solid-js';

type UseLongPressProps = {
  delay?: number;
  onLongPress: () => void;
  onClick: () => void;
};

const DefaultDelay = 300;

const useLongPress = (propsProvider: () => UseLongPressProps) => {
  let ref: HTMLElement | undefined;
  let longPressed = false;

  onMount(() => {
    if (ref == null) return;
    const { onLongPress, onClick, delay = DefaultDelay } = propsProvider();

    let timer: ReturnType<typeof setTimeout> | undefined;

    const startTimer = () => {
      longPressed = false;
      timer = setTimeout(() => {
        longPressed = true;
        onLongPress();
      }, delay);
    };

    const clearTimer = () => {
      if (timer != null) {
        clearTimeout(timer);
      }
    };

    const handlePressStart = (ev: Event) => {
      // Calling preventDefault prevents 'mousedown' event from firing if the event was triggered by a touch event
      ev.preventDefault();
      startTimer();
    };

    const handlePressEnd = (ev: Event) => {
      // Calling preventDefault prevents 'mouseup' event from firing if the event was triggered by a touch event
      ev.preventDefault();
      clearTimer();
    };

    const handleClick = () => {
      if (longPressed) return;
      clearTimer();
      onClick();
    };

    ref.addEventListener('mousedown', handlePressStart);
    ref.addEventListener('mouseup', handlePressEnd);

    ref.addEventListener('touchstart', handlePressStart);
    ref.addEventListener('touchend', handlePressEnd);

    ref.addEventListener('click', handleClick);

    onCleanup(() => {
      clearTimer();
      ref?.removeEventListener('mouseddown', handlePressStart);
      ref?.removeEventListener('mouseup', handlePressEnd);

      ref?.removeEventListener('touchstart', handlePressStart);
      ref?.removeEventListener('touchend', handlePressEnd);

      ref?.removeEventListener('click', handleClick);
    });
  });

  return {
    ref: (el: HTMLElement) => {
      ref = el;
    },
  };
};

export default useLongPress;
