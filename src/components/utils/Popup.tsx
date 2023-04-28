import { createSignal, createEffect, type Component, type JSX } from 'solid-js';

export type PopupProps = {
  baseElemRef: HTMLElement | null;
  children: JSX.Element;
};

const Popup: Component<PopupProps> = (props) => {
  let popupRef: HTMLDivElement | undefined;

  const [style, setStyle] = createSignal({});

  createEffect(() => {
    if (props.baseElemRef == null || popupRef == null) return;

    const baseElemRect = props.baseElemRef;
  });

  return null;
};
