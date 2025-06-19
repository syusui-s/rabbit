import { type JSX, Show, createMemo, createSignal, onMount } from 'solid-js';

import EmojiDisplay, { type EmojiTypes } from '@/components/EmojiDisplay';
import usePopup from '@/components/utils/usePopup';
import useLongPress from '@/hooks/useLongPress';

export type UseEmojiPopupProps = {
  emoji: EmojiTypes;
  onClick?: () => void;
};

type UseEmojiPopup = {
  emojiRef: (el: HTMLElement) => void;
  popup: () => JSX.Element;
};

const useEmojiPopup = (propsProvider: () => UseEmojiPopupProps | null): UseEmojiPopup => {
  let emojiRef: HTMLElement | undefined;

  const props = createMemo(propsProvider);

  const [popupHover, setPopupHover] = createSignal(false);

  const close = () => {
    setTimeout(() => {
      if (popupHover()) return;
      popup.close();
    }, 100);
  };

  const open = () => {
    popup.open();
  };

  const popup = usePopup(() => ({
    popup: () => (
      <Show when={props()?.emoji} keyed>
        {(emoji) => (
          <div
            onMouseEnter={() => {
              setPopupHover(true);
            }}
            onMouseLeave={() => {
              setPopupHover(false);
              close();
            }}
          >
            <div class="flex h-24 min-w-24 max-w-screen-lg items-center justify-center rounded border border-border bg-bg text-5xl shadow">
              <EmojiDisplay emoji={emoji} />
            </div>
          </div>
        )}
      </Show>
    ),
    position: { x: 'center', y: 'top' },
  }));

  const longPress = useLongPress(() => ({
    onLongPress: () => open(),
    onClick: () => props()?.onClick?.(),
  }));

  onMount(() => {
    emojiRef?.addEventListener('mouseenter', open);
    emojiRef?.addEventListener('mouseleave', close);
  });

  return {
    emojiRef: (el) => {
      emojiRef = el;
      popup.targetRef(el);
      longPress.ref(el);
    },
    popup: popup.popup,
  };
};

export default useEmojiPopup;
