import { createSignal, createEffect, createMemo, onCleanup, Show, type JSX } from 'solid-js';

import { Portal } from 'solid-js/web';

export type UsePopupProps = {
  popup?: JSX.Element | (() => JSX.Element);
  position?: {
    x?: 'center' | 'left' | 'right' | number;
    y?: 'top' | 'bottom' | number;
  };
};

export type UsePopup = {
  targetRef: (el: HTMLElement) => void;
  open: () => void;
  close: () => void;
  toggle: () => void;
  popup: () => JSX.Element;
  isOpen: () => boolean;
};

const usePopup = (propsProvider: () => UsePopupProps): UsePopup => {
  const props = createMemo(propsProvider);

  const [targetRef, setTargetRef] = createSignal<HTMLElement | undefined>();
  const [popupRef, setPopupRef] = createSignal<HTMLDivElement | undefined>();
  const [style, setStyle] = createSignal<JSX.CSSProperties>({});
  const [isOpen, setIsOpen] = createSignal(false);

  const resolvedChildren = () => {
    const { popup } = props();
    if (typeof popup === 'function') {
      return popup();
    }
    return popup;
  };

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen((current) => !current);

  const handleClickOutside = (ev: MouseEvent | TouchEvent) => {
    const target = ev.target as HTMLElement;
    if (target != null && !popupRef()?.contains(target)) {
      close();
    }
  };

  const addClickOutsideHandler = () => {
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
  };
  const removeClickOutsideHandler = () => {
    document.removeEventListener('mousedown', handleClickOutside);
    document.removeEventListener('touchstart', handleClickOutside);
  };

  const adjustPosition = () => {
    const target = targetRef();
    const popupElem = popupRef();
    if (target == null || popupElem == null) return;

    const targetRect = target.getBoundingClientRect();
    const popupRect = popupElem.getBoundingClientRect();

    let { top, left } = targetRect;

    const positionX = props().position?.x;
    if (typeof positionX === 'number') {
      left += positionX;
    } else if (positionX === 'left') {
      left -= popupRect.width;
    } else if (positionX === 'right') {
      left += targetRect.width;
    } else {
      left += (targetRect.width - popupRect.width) / 2;
    }

    const positionY = props().position?.y;
    if (typeof positionY === 'number') {
      top += positionY;
    } else if (positionY === 'top') {
      top -= popupRect.height;
    } else {
      top += targetRect.height;
    }

    top = Math.max(Math.min(top, window.innerHeight - popupRect.height), 0);
    left = Math.max(Math.min(left, window.innerWidth - popupRect.width), 0);

    setStyle({ left: `${left}px`, top: `${top}px` });
  };

  createEffect(() => {
    if (isOpen()) {
      addClickOutsideHandler();
      adjustPosition();
    } else {
      removeClickOutsideHandler();
    }
  });

  onCleanup(() => removeClickOutsideHandler());

  const popup = () => (
    <Show when={isOpen()}>
      <Portal>
        <div ref={setPopupRef} class="absolute z-20" style={style()}>
          {resolvedChildren()}
        </div>
      </Portal>
    </Show>
  );

  return {
    targetRef: setTargetRef,
    open,
    close,
    toggle,
    popup,
    isOpen,
  };
};

export default usePopup;
