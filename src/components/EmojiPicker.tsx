import { Component, JSX, createSignal } from 'solid-js';

import { Picker } from 'emoji-mart';

import Popup, { PopupRef } from '@/components/utils/Popup';
import useConfig from '@/core/useConfig';

type EmojiPickerProps = {
  onEmojiSelect?: (emoji: string) => void;
  customEmojis?: boolean;
  children: JSX.Element;
};

const EmojiPicker: Component<EmojiPickerProps> = (props) => {
  let popupRef: PopupRef | undefined;

  const { config } = useConfig();
  const [pickerElement, setPickerElement] = createSignal<HTMLElement | undefined>(undefined);

  const handleOpen = () => {
    const picker = new Picker({
      data: async () => {
        const response = await fetch('https://cdn.jsdelivr.net/npm/@emoji-mart/data');
        return response.json();
      },
      i18n: async () => {
        const response = await fetch('https://cdn.jsdelivr.net/npm/@emoji-mart/data/i18n/ja.json');
        return response.json();
      },
      autoFocus: false,
      locale: 'ja',
      theme: 'light',
      onEmojiSelect: (emoji: { id: string; native?: string }) => {
        props.onEmojiSelect?.(emoji.native ?? `:${emoji.id}:`);
        popupRef?.close();
      },
    });

    setPickerElement(picker as any as HTMLElement);
  };

  const handleClose = () => {
    setPickerElement(undefined);
  };

  return (
    <Popup
      ref={(e) => {
        popupRef = e;
      }}
      position="bottom"
      button={props.children}
      onOpen={handleOpen}
      onClose={handleClose}
    >
      {pickerElement()}
    </Popup>
  );
};

export default EmojiPicker;
