import {
  createSignal,
  createEffect,
  type Component,
  type JSX,
  on,
  onCleanup,
  onMount,
  children,
} from 'solid-js';

import { Portal } from 'solid-js/web';

export type PopupRef = {
  close: () => void;
  elem: HTMLElement | undefined;
};

export type PopupProps = {
  children?: JSX.Element;
  button: JSX.Element;
  position?: 'left' | 'bottom' | 'right' | 'top';
  onOpen?: () => void;
  onClose?: () => void;
  ref?: (ref: PopupRef) => void;
};

const Popup: Component<PopupProps> = (props) => {
  let buttonRef: HTMLButtonElement | undefined;
  let popupRef: HTMLDivElement | undefined;

  const [isOpen, setIsOpen] = createSignal(false);
  const [style, setStyle] = createSignal<JSX.CSSProperties>({});
  const resolvedChildren = children(() => props.children);

  const close = () => setIsOpen(false);
  const toggleOpened = () => setIsOpen((current) => !current);

  const handleClickOutside = (ev: MouseEvent) => {
    const target = ev.target as HTMLElement;
    if (target != null && !popupRef?.contains(target)) {
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
    if (buttonRef == null || popupRef == null) return;

    const buttonRect = buttonRef?.getBoundingClientRect();
    const popupRect = popupRef?.getBoundingClientRect();

    let { top, left } = buttonRect;

    if (props.position === 'left') {
      left -= buttonRect.width;
    } else if (props.position === 'right') {
      left += buttonRect.width;
    } else if (props.position === 'top') {
      top -= buttonRect.height;
      left -= buttonRect.left + buttonRect.width / 2;
    } else {
      top += buttonRect.height;
      left += buttonRect.width / 2;
    }

    top = Math.min(top, window.innerHeight - popupRect.height);
    left = Math.min(left, window.innerWidth - popupRect.width);

    setStyle({ left: `${left}px`, top: `${top}px` });
  };

  createEffect(() => {
    if (isOpen()) {
      addClickOutsideHandler();
      props.onOpen?.();
    } else {
      removeClickOutsideHandler();
      props.onClose?.();
    }
  });

  createEffect(
    on(resolvedChildren, () => {
      adjustPosition();
    }),
  );

  createEffect(() => {
    if (isOpen()) {
      adjustPosition();
    }
  });

  onMount(() => {
    props.ref?.({ close, elem: popupRef });
  });

  onCleanup(() => removeClickOutsideHandler());

  return (
    <div>
      <button
        type="button"
        ref={buttonRef}
        class="flex items-center"
        onClick={() => {
          toggleOpened();
          adjustPosition();
        }}
      >
        {props.button}
      </button>
      <Portal>
        <div
          ref={popupRef}
          class="absolute z-20"
          classList={{ hidden: !isOpen(), block: isOpen() }}
          style={style()}
        >
          {resolvedChildren()}
        </div>
      </Portal>
    </div>
  );
};

export default Popup;
