import { Component, createMemo } from 'solid-js';

import { type Event as NostrEvent } from 'nostr-tools/pure';

import BasicModal from '@/components/modal/BasicModal';
import Copy from '@/components/utils/Copy';

export type EventDebugModalProps = {
  event: NostrEvent;
  onClose: () => void;
};

const EventDebugModal: Component<EventDebugModalProps> = (props) => {
  const json = createMemo(() => JSON.stringify(props.event, null, 2));

  return (
    <BasicModal onClose={props.onClose}>
      <div class="p-2">
        <pre class="whitespace-pre-wrap break-all rounded border p-4 text-xs">{json()}</pre>
        <div class="flex justify-end">
          <Copy class="h-4 w-4" text={json()} />
        </div>
      </div>
    </BasicModal>
  );
};

export default EventDebugModal;
