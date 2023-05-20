import { Switch, Match, type Component, splitProps } from 'solid-js';

// eslint-disable-next-line import/no-cycle
import EventDisplay from '@/components/event/EventDisplay';
import { type EventDisplayProps } from '@/components/event/EventDisplay';
import EventLink from '@/components/EventLink';
import useConfig from '@/core/useConfig';
import useEvent from '@/nostr/useEvent';
import ensureNonNull from '@/utils/ensureNonNull';

type EventDisplayByIdProps = Omit<EventDisplayProps, 'event'> & {
  eventId: string | undefined;
};

const EventDisplayById: Component<EventDisplayByIdProps> = (props) => {
  const [localProps, restProps] = splitProps(props, ['eventId']);
  const { shouldMuteEvent } = useConfig();

  const { event: fetchedEvent, query: eventQuery } = useEvent(() =>
    ensureNonNull([localProps.eventId] as const)(([eventIdNonNull]) => ({
      eventId: eventIdNonNull,
    })),
  );

  const hidden = (): boolean => {
    const ev = fetchedEvent();
    return ev != null && shouldMuteEvent(ev);
  };

  return (
    <Switch
      fallback={
        <span>
          投稿が見つかりません
          {props.eventId}
        </span>
      }
    >
      <Match when={hidden()}>{null}</Match>
      <Match when={fetchedEvent()} keyed>
        {(event) => <EventDisplay event={event} {...restProps} />}
      </Match>
      <Match when={eventQuery.isLoading && localProps.eventId} keyed>
        {(id) => (
          <div class="truncate">
            {'読み込み中 '}
            <EventLink eventId={id} />
          </div>
        )}
      </Match>
    </Switch>
  );
};

export default EventDisplayById;
