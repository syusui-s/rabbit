import { createSignal, createEffect, type Component, type JSX, onCleanup, onMount } from 'solid-js';

export type PopupRef = {
  close: () => void;
};

export type PopupProps = {
  children: JSX.Element;
  button: JSX.Element;
  position?: 'left' | 'bottom' | 'right' | 'top';
  onOpen?: () => void;
  ref?: (ref: PopupRef) => void;
};

const Popup: Component<PopupProps> = (props) => {
  let buttonRef: HTMLButtonElement | undefined;
  let popupRef: HTMLDivElement | undefined;

  const [isOpen, setIsOpen] = createSignal(false);

  const handleClickOutside = (ev: MouseEvent) => {
    const target = ev.target as HTMLElement;
    if (target != null && !popupRef?.contains(target)) {
      setIsOpen(false);
    }
  };

  const addClickOutsideHandler = () => {
    document.addEventListener('mousedown', handleClickOutside);
  };
  const removeClickOutsideHandler = () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };

  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen((current) => !current);

  const handleClick: JSX.EventHandler<HTMLButtonElement, MouseEvent> = () => toggle();

  createEffect(() => {
    if (isOpen()) {
      addClickOutsideHandler();
    } else {
      removeClickOutsideHandler();
    }
  });

  createEffect(() => {
    if (isOpen()) props.onOpen?.();
  });

  createEffect(() => {
    if (buttonRef == null || popupRef == null) return;

    const buttonRect = buttonRef?.getBoundingClientRect();

    if (props.position === 'left') {
      popupRef.style.left = `${buttonRect.left - buttonRect.width}px`;
      popupRef.style.top = `${buttonRect.top}px`;
    } else if (props.position === 'right') {
      popupRef.style.left = `${buttonRect.left + buttonRect.width}px`;
      popupRef.style.top = `${buttonRect.top}px`;
    } else if (props.position === 'top') {
      popupRef.style.left = `${buttonRect.left + buttonRect.width}px`;
      popupRef.style.top = `${buttonRect.top - buttonRect.height}px`;
    } else {
      popupRef.style.left = `${buttonRect.left + buttonRect.width / 2}px`;
      popupRef.style.top = `${buttonRect.top + buttonRect.height}px`;
    }
  });

  onMount(() => {
    props.ref?.({ close });
  });

  onCleanup(() => removeClickOutsideHandler());

  return (
    <div>
      <button ref={buttonRef} onClick={handleClick}>
        {props.button}
      </button>
      <div ref={popupRef} class="absolute z-20" classList={{ hidden: !isOpen(), block: isOpen() }}>
        {props.children}
      </div>
    </div>
  );
};

export default Popup;
