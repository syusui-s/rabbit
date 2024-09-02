import { type JSX, createMemo, createSignal, onMount } from 'solid-js';

import EmojiDisplay from '@/components/EmojiDisplay';
import usePopup from '@/components/utils/usePopup';
import useLongPress from '@/hooks/useLongPress';
import { ReactionTypes } from '@/nostr/event/Reaction';

type UseEmojiPopupProps = {
  reactionTypes: ReactionTypes;
  onClick?: () => void;
};

type UseEmojiPopup = {
  emojiRef: (el: HTMLElement) => void;
  popup: () => JSX.Element;
};

const useEmojiPopup = (propsProvider: () => UseEmojiPopupProps): UseEmojiPopup => {
  let emojiRef: HTMLElement | undefined;

  const props = createMemo(propsProvider);

  const [popupHover, setPopupHover] = createSignal(false);

  let popup: ReturnType<typeof usePopup>;

  const close = () => {
    setTimeout(() => {
      if (popupHover()) return;
      popup.close();
    }, 100);
  };

  const open = () => {
    popup.open();
  };

  popup = usePopup(() => ({
    popup: () => (
      <div
        onMouseEnter={() => {
          setPopupHover(true);
        }}
        onMouseLeave={() => {
          setPopupHover(false);
          close();
        }}
      >
        <div class="max-w-screen flex h-24 min-w-24 items-center justify-center rounded border border-border bg-bg text-5xl shadow">
          <EmojiDisplay reactionTypes={props().reactionTypes} />
        </div>
      </div>
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
