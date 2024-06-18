import { createSignal, Show, type Component } from 'solid-js';

import ClipboardDocument from 'heroicons/24/outline/clipboard-document.svg';

type CopyProps = {
  class: string;
  text: string;
};

const Copy: Component<CopyProps> = (props) => {
  const [showPopup, setShowPopup] = createSignal(false);

  const handleClick = () => {
    navigator.clipboard
      .writeText(props.text)
      .then(() => {
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 1000);
      })
      .catch((err) => {
        console.error('failed to copy', err);
      });
  };

  return (
    <div class="relative inline-block">
      <button type="button" class={props.class} onClick={handleClick}>
        <ClipboardDocument />
      </button>
      <Show when={showPopup()}>
        <div class="absolute -left-10 -top-6 rounded bg-primary p-1 text-xs font-bold text-primary-fg shadow">
          Copied!
        </div>
      </Show>
    </div>
  );
};

export default Copy;
