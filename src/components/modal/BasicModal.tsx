import { Component, JSX, Show } from 'solid-js';

import XMark from 'heroicons/24/outline/x-mark.svg';

import Modal from '@/components/Modal';

export type BasicModalProps = {
  onClose: () => void;
  closeButton?: () => JSX.Element;
  children: JSX.Element;
};

const BasicModal: Component<BasicModalProps> = (props) => (
  <Modal onClose={() => props.onClose?.()}>
    <div class="w-[640px] max-w-full">
      <button
        class="w-full pt-1 text-start text-fg-secondary"
        aria-label="Close"
        onClick={() => props.onClose?.()}
      >
        <span class="inline-block size-8">
          <Show when={props?.closeButton} fallback={<XMark />} keyed>
            {(button) => button()}
          </Show>
        </span>
      </button>
      <div class="scrollbar flex max-h-[calc(100vh-6em)] flex-col overflow-y-auto rounded-xl border border-border bg-bg text-fg shadow-lg">
        {props.children}
      </div>
    </div>
  </Modal>
);

export default BasicModal;
