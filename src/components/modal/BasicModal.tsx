import { Component, JSX, Show } from 'solid-js';

import XMark from 'heroicons/24/outline/x-mark.svg';

import Modal from '@/components/Modal';

export type BasicModalProps = {
  onClose: () => void;
  closeButton?: () => JSX.Element;
  children: JSX.Element;
};

const BasicModal: Component<BasicModalProps> = (props) => {
  return (
    <Modal onClose={() => props.onClose?.()}>
      <div class="h-screen w-[640px] max-w-full">
        <button
          class="w-full pt-1 text-start text-stone-800"
          aria-label="Close"
          onClick={() => props.onClose?.()}
        >
          <span class="inline-block h-8 w-8">
            <Show when={props?.closeButton} fallback={<XMark />} keyed>
              {(button) => button()}
            </Show>
          </span>
        </button>
        <div class="flex h-full flex-col overflow-y-scroll rounded-xl border bg-white pb-32 text-stone-700 shadow-lg">
          {props.children}
        </div>
      </div>
    </Modal>
  );
};

export default BasicModal;
