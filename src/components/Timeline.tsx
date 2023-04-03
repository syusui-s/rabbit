import { For, Switch, Match, type Component } from 'solid-js';
import { Kind, type Event as NostrEvent } from 'nostr-tools';

import TextNote from '@/components/TextNote';
import DeprecatedRepost from '@/components/DeprecatedRepost';

export type TimelineProps = {
  events: NostrEvent[];
};

const Timeline: Component<TimelineProps> = (props) => {
  return (
    <For each={props.events}>
      {(event) => (
        <Switch fallback={<div>未対応のイベント種別（{event.kind}）</div>}>
          <Match when={event.kind === Kind.Text}>
            <TextNote event={event} />
          </Match>
          <Match when={(event.kind as number) === 6}>
            <DeprecatedRepost event={event} />
          </Match>
        </Switch>
      )}
    </For>
  );
};

export default Timeline;
