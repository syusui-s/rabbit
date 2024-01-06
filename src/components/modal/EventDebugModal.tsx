import { Component, createMemo } from 'solid-js';

import { type Event as NostrEvent } from 'nostr-tools/pure';

import BasicModal from '@/components/modal/BasicModal';
import Copy from '@/components/utils/Copy';
import usePool from '@/nostr/usePool';

export type EventDebugModalProps = {
  event: NostrEvent;
  onClose: () => void;
};

const EventDebugModal: Component<EventDebugModalProps> = (props) => {
  const pool = usePool();

  const json = createMemo(() => JSON.stringify(props.event, null, 2));
  const seenOn = createMemo(() => {
    const relays = pool().seenOn.get(props.event.id) ?? [];
    return [...relays].map((relay) => relay.url).join('\n');
  });

  return (
    <BasicModal onClose={props.onClose}>
      <div class="p-2">
        <h2 class="text-lg font-bold">JSON</h2>
        <pre class="whitespace-pre-wrap break-all rounded-lg border border-border p-4 text-xs">
          {json()}
        </pre>
        <div class="flex justify-end">
          <Copy class="h-4 w-4 hover:text-primary" text={json()} />
        </div>
      </div>
      <div class="p-2">
        <h2 class="text-lg font-bold">Found in these relays</h2>
        <pre class="whitespace-pre-wrap break-all rounded-lg border border-border p-2 text-xs">
          {seenOn()}
        </pre>
      </div>
    </BasicModal>
  );
};

export default EventDebugModal;
