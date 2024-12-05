import { createMemo } from 'solid-js';

import { Picker } from 'emoji-mart';

import usePopup, { type UsePopup, type UsePopupProps } from '@/components/utils/usePopup';
import useConfig from '@/core/useConfig';

// https://github.com/missive/emoji-mart/blob/main/packages/emoji-mart/src/utils.ts#L26
export type EmojiData = {
  id: string;
  name: string;
  native?: string;
  src?: string;
  unified: string;
  keywords: string[];
  shortcodes: string;
};

type UseEmojiPickerProps = Omit<UsePopupProps, 'popup'> & {
  onEmojiSelect?: (emoji: EmojiData) => void;
  customEmojis?: boolean;
};

const useEmojiPicker = (propsProvider: () => UseEmojiPickerProps) => {
  const { config } = useConfig();

  const props = createMemo(propsProvider);

  let popup: UsePopup | undefined;

  const pickerElement = () => {
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
      /*
      // TODO uncomment if this is fixed: https://github.com/missive/emoji-mart/issues/794
      i18n: async () => {
        const response = await fetch('https://cdn.jsdelivr.net/npm/@emoji-mart/data/i18n/ja.json');
        return response.json();
      },
      locale: 'ja',
      */
      custom: [
        {
          id: 'custom',
          name: 'Custom Emojis',
          emojis: customEmojis,
        },
      ],
      autoFocus: true,
      theme: 'light',
      onEmojiSelect: (emoji: EmojiData) => {
        console.log(emoji);
        props().onEmojiSelect?.(emoji);
        popup?.close();
      },
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return picker as any as HTMLElement;
  };

  popup = usePopup(() => ({
    position: { y: 'bottom' },
    ...props(),
    popup: () => pickerElement(),
  }));

  return popup;
};

export default useEmojiPicker;
