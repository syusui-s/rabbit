import { For, Switch, Match, type Component } from 'solid-js';
import { Kind, type Event as NostrEvent } from 'nostr-tools/event';

import TextNote from '@/components/TextNote';
import Reaction from '@/components/notification/Reaction';

export type TimelineProps = {
  events: NostrEvent[];
};

const Timeline: Component<TimelineProps> = (props) => {
  return (
    <For each={props.events}>
      {(event) => (
        <Switch fallback={<div>unknown event</div>}>
          <Match when={event.kind === Kind.Text}>
            <TextNote event={event} />
          </Match>
          <Match when={event.kind === Kind.Reaction}>
            <Reaction event={event} />
          </Match>
        </Switch>
      )}
    </For>
  );
};

export default Timeline;
