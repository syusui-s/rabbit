import { Switch, Match, type Component, Show } from 'solid-js';

import { Kind } from 'nostr-tools';

import EventLink from '@/components/EventLink';
// eslint-disable-next-line import/no-cycle
import TextNoteDisplay, { type TextNoteDisplayProps } from '@/components/textNote/TextNoteDisplay';
import useConfig from '@/core/useConfig';
import useEvent from '@/nostr/useEvent';
import ensureNonNull from '@/utils/ensureNonNull';

type TextNoteDisplayByIdProps = Omit<TextNoteDisplayProps, 'event'> & {
  eventId: string | undefined;
};

const TextNoteDisplayById: Component<TextNoteDisplayByIdProps> = (props) => {
  const { shouldMuteEvent } = useConfig();
  const { event: fetchedEvent, query: eventQuery } = useEvent(() =>
    ensureNonNull([props.eventId] as const)(([eventIdNonNull]) => ({
      eventId: eventIdNonNull,
    })),
  );

  const hidden = (): boolean => {
    const ev = fetchedEvent();
    return ev != null && shouldMuteEvent(ev);
  };

  return (
    <Switch fallback="投稿が見つかりません">
      <Match when={hidden()}>{null}</Match>
      <Match when={fetchedEvent()} keyed>
        {(event) => (
          <Show
            when={event.kind === Kind.Text}
            fallback={<div>未対応のイベント種別（{event.kind}）</div>}
          >
            <TextNoteDisplay event={event} {...props} />
          </Show>
        )}
      </Match>
      <Match when={eventQuery.isLoading && props.eventId} keyed>
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

export default TextNoteDisplayById;
