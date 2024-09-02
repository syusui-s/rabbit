import { onMount, onCleanup } from 'solid-js';

type UseLongPressProps = {
  delay?: number;
  onLongPress: () => void;
  onClick: () => void;
};

const DefaultDelay = 300;

const useLongPress = (propsProvider: () => UseLongPressProps) => {
  let ref: HTMLElement | undefined;

  onMount(() => {
    if (ref == null) return;
    const { onLongPress, onClick, delay = DefaultDelay } = propsProvider();

    let timer: ReturnType<typeof setTimeout> | undefined;
    let longPressed = false;

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

    const handleMouseDown = () => {
      startTimer();
    };

    const handleMouseUp = () => {
      clearTimer();
    };

    const handleClick = () => {
      if (longPressed) return;
      clearTimer();
      onClick();
    };

    ref.addEventListener('mousedown', handleMouseDown);
    ref.addEventListener('mouseup', handleMouseUp);
    ref.addEventListener('click', handleClick);

    ref.addEventListener('touchstart', handleMouseDown);
    ref.addEventListener('touchend', handleMouseUp);

    // mousedown touchstart
    // mouseup mouseleave touchend touchcancel

    onCleanup(() => {
      clearTimer();
      ref?.removeEventListener('mouseddown', handleMouseDown);
      ref?.removeEventListener('mouseup', handleMouseUp);
      ref?.removeEventListener('click', handleClick);

      ref?.removeEventListener('touchstart', handleMouseDown);
      ref?.removeEventListener('touchend', handleMouseUp);
    });
  });

  return {
    ref: (el: HTMLElement) => {
      ref = el;
    },
  };
};

export default useLongPress;
