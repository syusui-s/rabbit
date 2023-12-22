import { Switch, Match, Component } from 'solid-js';

import * as Kind from 'nostr-tools/kinds';
import { type Event as NostrEvent } from 'nostr-tools/pure';

// import ChannelInfo from '@/components/event/ChannelInfo';
// eslint-disable-next-line import/no-cycle
import Repost from '@/components/event/Repost';
// eslint-disable-next-line import/no-cycle
import TextNote from '@/components/event/TextNote';
import EventLink from '@/components/EventLink';

export type EventDisplayProps = {
  event: NostrEvent;
  embedding?: boolean;
  actions?: boolean;
  ensureKinds?: number[];
};

const EventDisplay: Component<EventDisplayProps> = (props) => {
  // noteの場合は kind:1 であることを保証するために利用できる
  // タイムラインで表示されるべきでないイベントが表示されてしまうのを防ぐ
  const isAllowedKind = () =>
    props.ensureKinds == null ||
    props.ensureKinds.length === 0 ||
    props.ensureKinds.includes(props.event.kind);

  return (
    <Switch
      fallback={
        <span>
          <span>未対応のイベント種別（{props.event.kind}）</span>
          <EventLink eventId={props.event.id} kind={props.event.kind} />
        </span>
      }
    >
      <Match when={!isAllowedKind()} keyed>
        <span>
          予期しないイベント種別（{props.event.kind}）
          <EventLink eventId={props.event.id} kind={props.event.kind} />
        </span>
      </Match>
      <Match when={props.event.kind === Kind.ShortTextNote}>
        <TextNote event={props.event} embedding={props.actions} actions={props.actions} />
      </Match>
      <Match when={props.event.kind === Kind.Repost}>
        <Repost event={props.event} />
      </Match>
    </Switch>
  );
  /*
      <Match when={props.event.kind === Kind.ChannelCreation}>
        <ChannelInfo event={props.event} />
      </Match>
   */
};

export default EventDisplay;
