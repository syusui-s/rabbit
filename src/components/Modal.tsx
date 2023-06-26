import { type Component, type JSX } from 'solid-js';

export type ModalProps = {
  onClose?: () => void;
  children?: JSX.Element;
};

const Modal: Component<ModalProps> = (props) => {
  let containerRef: HTMLDivElement | undefined;

  const handleClickContainer: JSX.EventHandler<HTMLDivElement, MouseEvent> = (ev) => {
    if (ev.target === containerRef) {
      props.onClose?.();
    }
  };

  return (
    /* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
    <div
      ref={containerRef}
      class="absolute left-0 top-0 z-10 flex h-screen w-screen cursor-default place-content-center place-items-start bg-black/30"
      onClick={handleClickContainer}
    >
      {props.children}
    </div>
  );
};

export default Modal;
