import { Component } from 'solid-js';

import DocumentText from 'heroicons/24/outline/document-text.svg';
import { Kind, Event as NostrEvent } from 'nostr-tools';

import eventWrapper from '@/nostr/event';

export type LongFormContentProps = {
  event: NostrEvent;
};

const LongFormContent: Component<LongFormContentProps> = (props) => {
  const event = () => eventWrapper(props.event);
  const getMeta = (name: string) => {
    const tags = event().findTagsByName(name);
    if (tags.length === 0) return null;
    const [, lastTagValue] = tags[tags.length - 1];
    return lastTagValue;
  };
  const title = () => getMeta('title');
  // const imageUrl = () => getMeta('image');
  // const summary = () => getMeta('summary');
  // const publishdAt = () => getMeta('published_at');

  return (
    <button class="flex flex-col gap-1 px-1">
      <div class="flex items-center gap-1">
        <span class="inline-block h-4 w-4 text-purple-400">
          <DocumentText />
        </span>
        <span>{title()}</span>
      </div>
    </button>
  );
};

export default LongFormContent;
