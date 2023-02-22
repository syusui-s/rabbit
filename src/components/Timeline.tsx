import { For, Switch, Match, type Component } from 'solid-js';
import type { Event as NostrEvent } from 'nostr-tools/event';

import TextNote from '@/components/TextNote';

export type TimelineProps = {
  events: NostrEvent[];
};

export const Timeline: Component<TimelineProps> = (props) => {
  return (
    <For each={props.events}>
      {(event) => (
        <Switch fallback={<div>unknown event</div>}>
          <Match when={event.kind === 1}>
            <TextNote event={event} />
          </Match>
          <Match when={event.kind === 6}>
            <div>Deprecated Repost</div>
          </Match>
        </Switch>
      )}
    </For>
  );
};

export default Timeline;
