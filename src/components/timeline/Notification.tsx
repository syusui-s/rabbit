import { For, Switch, Match, type Component, Show } from 'solid-js';

import * as Kind from 'nostr-tools/kinds';
import { type Event as NostrEvent } from 'nostr-tools/pure';

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
            <Match when={event.kind === Kind.ShortTextNote}>
              <ColumnItem>
                <TextNote event={event} />
              </ColumnItem>
            </Match>
            <Match when={event.kind === Kind.Reaction}>
              <ColumnItem>
                <Reaction event={event} />
              </ColumnItem>
            </Match>
            {/* TODO ちゃんとnotification用のコンポーネント使う */}
            <Match when={event.kind === Kind.Repost}>
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
