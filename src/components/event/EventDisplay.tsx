import { Switch, Match, Component } from 'solid-js';

import { Kind, type Event as NostrEvent } from 'nostr-tools';

// eslint-disable-next-line import/no-cycle
import Repost from '@/components/event/Repost';
// eslint-disable-next-line import/no-cycle
import TextNote from '@/components/event/TextNote';
import EventLink from '@/components/EventLink';

export type EventDisplayProps = {
  event: NostrEvent;
  embedding?: boolean;
  actions?: boolean;
  kinds?: Kind[];
};

const EventDisplay: Component<EventDisplayProps> = (props) => {
  const isAllowedKind = () =>
    props.kinds == null || props.kinds.length === 0 || props.kinds.includes(props.event.kind);

  return (
    <Switch
      fallback={
        <span>
          <span>未対応のイベント種別（{props.event.kind}）</span>
          <EventLink eventId={props.event.id} kind={props.event.kind} />
        </span>
      }
    >
      <Match when={!isAllowedKind()}>{null}</Match>
      <Match when={props.event.kind === Kind.Text}>
        <TextNote event={props.event} embedding={props.actions} actions={props.actions} />
      </Match>
      <Match when={(props.event.kind as number) === 6}>
        <Repost event={props.event} />
      </Match>
    </Switch>
  );
};

export default EventDisplay;
