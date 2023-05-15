import { Component, Show } from 'solid-js';

import ChatBubbleLeftRight from 'heroicons/24/outline/chat-bubble-left-right.svg';
import { Event as NostrEvent } from 'nostr-tools';
import { z } from 'zod';

import EventLink from '@/components/EventLink';
import { isImageUrl } from '@/utils/imageUrl';

export type ChannelInfoProps = {
  event: NostrEvent;
};

const ChannelMetaSchema = z.object({
  name: z.string(),
  about: z.string().optional(),
  picture: z
    .string()
    .url()
    .refine((url) => isImageUrl(url), { message: 'not an image url' })
    .optional(),
});

export type ChannelMeta = z.infer<typeof ChannelMetaSchema>;

const parseContent = (content: string): ChannelMeta | null => {
  try {
    return ChannelMetaSchema.parse(JSON.parse(content));
  } catch (err) {
    console.warn('failed to parse chat channel schema: ', err);
    return null;
  }
};

const ChannelInfo: Component<ChannelInfoProps> = (props) => {
  const parsedContent = () => parseContent(props.event.content);

  return (
    <Show when={parsedContent()} keyed>
      {(meta) => (
        <button class="flex flex-col gap-1 px-1">
          <div class="flex items-center gap-1">
            <span class="inline-block h-4 w-4 text-purple-400">
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
