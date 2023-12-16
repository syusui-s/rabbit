import {
  createSignal,
  createEffect,
  type Component,
  type JSX,
  on,
  onCleanup,
  onMount,
  children,
  Show,
} from 'solid-js';

import { Portal } from 'solid-js/web';

export type PopupRef = {
  close: () => void;
  elem: () => Element | undefined;
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

  const [popupRef, setPopupRef] = createSignal<HTMLDivElement | undefined>();

  const [isOpen, setIsOpen] = createSignal(false);
  const [style, setStyle] = createSignal<JSX.CSSProperties>({});
  const resolvedChildren = children(() => props.children);

  const close = () => setIsOpen(false);
  const toggleOpened = () => setIsOpen((current) => !current);

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
    const popupElem = popupRef();
    if (buttonRef == null || popupElem == null) return;

    const buttonRect = buttonRef?.getBoundingClientRect();
    const popupRect = popupElem.getBoundingClientRect();

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
      <Show when={isOpen()}>
        <Portal>
          <div ref={setPopupRef} class="absolute z-20" style={style()}>
            {resolvedChildren()}
          </div>
        </Portal>
      </Show>
    </div>
  );
};

export default Popup;
