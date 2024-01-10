import { createSignal, createEffect, createMemo, onCleanup, Show, type JSX } from 'solid-js';

import { Portal } from 'solid-js/web';

export type UsePopupProps = {
  popup?: JSX.Element | (() => JSX.Element);
  position?: 'left' | 'bottom' | 'right' | 'top';
};

export type UsePopup = {
  targetRef: (el: HTMLElement) => void;
  open: () => void;
  close: () => void;
  toggle: () => void;
  popup: () => JSX.Element;
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

  const handleClickOutside = (ev: MouseEvent) => {
    const target = ev.target as HTMLElement;
    if (target != null && !popupRef()?.contains(target)) {
      close();
    }
  };

  const addClickOutsideHandler = () => {
    document.addEventListener('mousedown', handleClickOutside);
  };
  const removeClickOutsideHandler = () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };

  const adjustPosition = () => {
    const target = targetRef();
    const popupElem = popupRef();
    if (target == null || popupElem == null) return;

    const targetRect = target.getBoundingClientRect();
    const popupRect = popupElem.getBoundingClientRect();

    let { top, left } = targetRect;

    if (props().position === 'left') {
      left -= targetRect.width;
    } else if (props().position === 'right') {
      left += targetRect.width;
    } else if (props().position === 'top') {
      top -= targetRect.height;
      left -= targetRect.left + targetRect.width / 2;
    } else {
      top += targetRect.height;
      left += targetRect.width / 2;
    }

    top = Math.min(top, window.innerHeight - popupRect.height);
    left = Math.min(left, window.innerWidth - popupRect.width);

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
  };
};

export default usePopup;
