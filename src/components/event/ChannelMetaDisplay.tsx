import { Component, Show } from 'solid-js';

import ChatBubbleLeftRight from 'heroicons/24/outline/chat-bubble-left-right.svg';
import { Event as NostrEvent } from 'nostr-tools/pure';

import { parseChannelMeta } from '@/nostr/event/channel';

export type ChannelInfoProps = {
  event: NostrEvent;
};

const ChannelInfo: Component<ChannelInfoProps> = (props) => {
  const parsedContent = () => parseChannelMeta(props.event.content);

  // useChannelMeta

  return (
    <Show when={parsedContent()} keyed>
      {(meta) => (
        <button class="flex flex-col gap-1 px-1">
          <div class="flex items-center gap-1">
            <span class="inline-block size-4 text-purple-400">
              <ChatBubbleLeftRight />
            </span>
            <span>{meta.name}</span>
          </div>
        </button>
      )}
    </Show>
  );
};

export default ChannelInfo;
