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
    <div
      ref={containerRef}
      class="absolute top-0 left-0 flex h-screen w-screen cursor-default place-content-center place-items-center bg-black/25"
      onClick={handleClickContainer}
    >
      {props.children}
    </div>
  );
};

export default Modal;
