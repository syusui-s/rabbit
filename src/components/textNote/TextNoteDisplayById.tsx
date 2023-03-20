import { Switch, Match, type Component } from 'solid-js';
import { noteEncode } from 'nostr-tools/nip19';

import TextNoteDisplay, { type TextNoteDisplayProps } from '@/components/textNote/TextNoteDisplay';

import useConfig from '@/nostr/useConfig';
import useEvent from '@/nostr/useEvent';

import ensureNonNull from '@/utils/ensureNonNull';
import EventLink from '../EventLink';

type TextNoteDisplayByIdProps = Omit<TextNoteDisplayProps, 'event'> & {
  eventId: string | undefined;
};

const TextNoteDisplayById: Component<TextNoteDisplayByIdProps> = (props) => {
  const { event, query: eventQuery } = useEvent(() =>
    ensureNonNull([props.eventId] as const)(([eventIdNonNull]) => ({
      eventId: eventIdNonNull,
    })),
  );

  return (
    <Switch fallback="投稿が見つかりません">
      <Match when={event()} keyed>
        {(ev) => <TextNoteDisplay event={ev} {...props} />}
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
