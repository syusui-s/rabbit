import { Switch, Match, lazy, Component } from 'solid-js';

import * as Kind from 'nostr-tools/kinds';
import { type Event as NostrEvent } from 'nostr-tools/pure';

// eslint-disable-next-line import/no-cycle
import Reaction from '@/components/event/Reaction';
// eslint-disable-next-line import/no-cycle
import Repost from '@/components/event/Repost';
// eslint-disable-next-line import/no-cycle
import TextNote from '@/components/event/TextNote';
import EventLink from '@/components/EventLink';
import { useTranslation } from '@/i18n/useTranslation';

const ZapReceipt = lazy(() => import('@/components/event/ZapReceipt'));

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
      <Match when={props.event.kind === Kind.ShortTextNote}>
        <TextNote event={props.event} embedding={props.actions} actions={props.actions} />
      </Match>
      <Match when={props.event.kind === Kind.Repost}>
        <Repost event={props.event} />
      </Match>
      <Match when={props.event.kind === Kind.Reaction}>
        <Reaction event={props.event} />
      </Match>
      <Match when={props.event.kind === Kind.Zap}>
        <ZapReceipt event={props.event} />
      </Match>
    </Switch>
  );
};

export default EventDisplay;
