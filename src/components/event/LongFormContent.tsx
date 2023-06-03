import { Component } from 'solid-js';

import DocumentText from 'heroicons/24/outline/document-text.svg';
import { Kind, Event as NostrEvent } from 'nostr-tools';

import { genericEvent } from '@/nostr/event';

export type LongFormContentProps = {
  event: NostrEvent;
};

const LongFormContent: Component<LongFormContentProps> = (props) => {
  // const event = () => genericEvent(props.event);

  return (
    <button class="flex flex-col gap-1 px-1">
      <div class="flex items-center gap-1">
        <span class="inline-block h-4 w-4 text-purple-400">
          <DocumentText />
        </span>
        <span>TODO</span>
      </div>
    </button>
  );
};

export default LongFormContent;
