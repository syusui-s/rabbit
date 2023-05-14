import { For, type Component, Show } from 'solid-js';

import { type Event as NostrEvent } from 'nostr-tools';

import ColumnItem from '@/components/ColumnItem';
import EventDisplay from '@/components/event/EventDisplay';
import useConfig from '@/core/useConfig';

export type TimelineProps = {
  events: NostrEvent[];
};

const Timeline: Component<TimelineProps> = (props) => {
  const { shouldMuteEvent } = useConfig();

  return (
    <For each={props.events}>
      {(event) => (
        <Show when={!shouldMuteEvent(event)}>
          <ColumnItem>
            <EventDisplay event={event} />
          </ColumnItem>
        </Show>
      )}
    </For>
  );
};

export default Timeline;
