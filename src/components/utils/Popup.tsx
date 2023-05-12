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

export type PopupRef = {
  close: () => void;
};

export type PopupProps = {
  children: JSX.Element;
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
  const resolvedChildren = children(() => props.children);

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
      props.onOpen?.();
    } else {
      removeClickOutsideHandler();
      props.onClose?.();
    }
  });

  createEffect(
    on(resolvedChildren, () => {
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
      console.log(popupRect);

      popupRef.style.left = `${left}px`;
      popupRef.style.top = `${top}px`;
    }),
  );

  onMount(() => {
    props.ref?.({ close });
  });

  onCleanup(() => removeClickOutsideHandler());

  return (
    <div>
      <button ref={buttonRef} class="flex items-center" onClick={handleClick}>
        {props.button}
      </button>
      <div ref={popupRef} class="absolute z-20" classList={{ hidden: !isOpen(), block: isOpen() }}>
        {resolvedChildren()}
      </div>
    </div>
  );
};

export default Popup;
