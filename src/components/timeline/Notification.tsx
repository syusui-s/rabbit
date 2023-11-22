import { For, Switch, Match, type Component, Show } from 'solid-js';

import { Kind, type Event as NostrEvent } from 'nostr-tools';

import ColumnItem from '@/components/ColumnItem';
import Reaction from '@/components/event/Reaction';
import Repost from '@/components/event/Repost';
import TextNote from '@/components/event/TextNote';
import useConfig from '@/core/useConfig';

export type NotificationProps = {
  events: NostrEvent[];
};

const Notification: Component<NotificationProps> = (props) => {
  const { shouldMuteEvent } = useConfig();

  return (
    <For each={props.events}>
      {(event) => (
        <Show when={!shouldMuteEvent(event)}>
          <Switch fallback={<div>unknown event</div>}>
            <Match when={event.kind === (Kind.Text as number)}>
              <ColumnItem>
                <TextNote event={event} />
              </ColumnItem>
            </Match>
            <Match when={event.kind === (Kind.Reaction as number)}>
              <ColumnItem>
                <Reaction event={event} />
              </ColumnItem>
            </Match>
            {/* TODO ちゃんとnotification用のコンポーネント使う */}
            <Match when={event.kind === (Kind.Repost as number)}>
              <ColumnItem>
                <Repost event={event} />
              </ColumnItem>
            </Match>
          </Switch>
        </Show>
      )}
    </For>
  );
};

export default Notification;
