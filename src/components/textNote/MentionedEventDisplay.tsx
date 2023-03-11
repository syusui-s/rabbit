import { Switch, Match } from 'solid-js';
import TextNote from '@/components/TextNote';

import useConfig from '@/nostr/useConfig';
import useEvent from '@/nostr/useEvent';
import useProfile from '@/nostr/useProfile';

import type { MentionedEvent } from '@/core/parseTextNote';

export type MentionedEventDisplayProps = {
  mentionedEvent: MentionedEvent;
};

const MentionedEventDisplay = (props: MentionedEventDisplayProps) => {
  const { config } = useConfig();
  const { event, query: eventQuery } = useEvent(() => ({
    relayUrls: config().relayUrls,
    eventId: props.mentionedEvent.eventId,
  }));
  // return <span class="text-blue-500 underline">#{props.mentionedEvent.eventId}</span>;
  return (
    <div class="rounded border py-2 px-1">
      {/* TODO なんかこのあたりの処理は統一したい */}
      <Switch fallback="failed to load">
        <Match when={event() != null}>
          <TextNote event={event()} />
        </Match>
        <Match when={eventQuery.isLoading}>
          <div class="truncate">
            {'loading '}
            <span>{props.mentionedEvent.eventId}</span>
          </div>
        </Match>
      </Switch>
    </div>
  );
};

export default MentionedEventDisplay;
