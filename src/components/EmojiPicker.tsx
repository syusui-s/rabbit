import { Component, JSX, onCleanup } from 'solid-js';

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
  let pickerElement: HTMLElement | undefined;

  const { config } = useConfig();

  const removePicker = () => {
    if (pickerElement != null) {
      pickerElement.remove();
      pickerElement = undefined;
    }
  };

  const handleOpen = () => {
    if (pickerElement != null) {
      console.error('unexpected state');
    }
    removePicker();

    const customEmojis = Object.entries(config().customEmojis).map(([name, { url }]) => ({
      id: name,
      name,
      keywords: [name],
      skins: [{ src: url }],
    }));
    const picker = new Picker({
      data: async () => {
        const response = await fetch('https://cdn.jsdelivr.net/npm/@emoji-mart/data');
        return response.json();
      },
      i18n: async () => {
        const response = await fetch('https://cdn.jsdelivr.net/npm/@emoji-mart/data/i18n/ja.json');
        return response.json();
      },
      custom: [
        {
          id: 'custom',
          name: 'Custom Emojis',
          emojis: customEmojis,
        },
      ],
      autoFocus: false,
      locale: 'ja',
      theme: 'light',
      onEmojiSelect: (emoji: { id: string; native?: string }) => {
        props.onEmojiSelect?.(emoji.native ?? `:${emoji.id}:`);
        popupRef?.close();
      },
    });

    pickerElement = picker as any as HTMLElement;
    popupRef?.elem?.appendChild(pickerElement);
  };

  onCleanup(() => {
    removePicker();
  });

  return (
    <Popup
      ref={(e) => {
        popupRef = e;
      }}
      position="bottom"
      button={props.children}
      onOpen={handleOpen}
      onClose={removePicker}
    />
  );
};

export default EmojiPicker;
