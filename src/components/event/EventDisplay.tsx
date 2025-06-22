import { Component, Match, Switch } from 'solid-js';

import * as Kind from 'nostr-tools/kinds';
import { type Event as NostrEvent } from 'nostr-tools/pure';

// import ChannelInfo from '@/components/event/ChannelInfo';
// eslint-disable-next-line import/no-cycle
import Highlight from '@/components/event/Highlight';
// eslint-disable-next-line import/no-cycle
import Repost from '@/components/event/Repost';
import TextNote from '@/components/event/TextNote';
import EventLink from '@/components/EventLink';
import { useTranslation } from '@/i18n/useTranslation';

export type EventDisplayProps = {
  event: NostrEvent;
  embedding?: boolean;
  actions?: boolean;
  ensureKinds?: number[];
};

const EventDisplay: Component<EventDisplayProps> = (props) => {
  const i18n = useTranslation();

  const isAllowedKind = () =>
    props.ensureKinds == null ||
    props.ensureKinds.length === 0 ||
    props.ensureKinds.includes(props.event.kind);

  return (
    <Switch
      fallback={
        <div>
          <span>{i18n.t('post.unsupportedKind', { kind: props.event.kind })}</span>
          <EventLink eventId={props.event.id} kind={props.event.kind} />
        </div>
      }
    >
      <Match when={!isAllowedKind()} keyed>
        <div>
          <span>{i18n.t('post.unexpectedKind', { kind: props.event.kind })}</span>
          <EventLink eventId={props.event.id} kind={props.event.kind} />
        </div>
      </Match>
      <Match when={props.event.kind === Kind.Highlights}>
        <Highlight event={props.event} />
      </Match>
      <Match when={props.event.kind === Kind.ShortTextNote}>
        <TextNote event={props.event} embedding={props.embedding} actions={props.actions} />
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
