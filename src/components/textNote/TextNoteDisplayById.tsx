import { Switch, Match, type Component } from 'solid-js';

import TextNoteDisplay, { type TextNoteDisplayProps } from '@/components/textNote/TextNoteDisplay';

import useConfig from '@/nostr/useConfig';
import useEvent from '@/nostr/useEvent';

import ensureNonNull from '@/utils/ensureNonNull';

type TextNoteDisplayByIdProps = Omit<TextNoteDisplayProps, 'event'> & {
  eventId: string | undefined;
};

const TextNoteDisplayById: Component<TextNoteDisplayByIdProps> = (props) => {
  const { config } = useConfig();
  const { event, query: eventQuery } = useEvent(() =>
    ensureNonNull([props.eventId] as const)(([eventIdNonNull]) => ({
      relayUrls: config().relayUrls,
      eventId: eventIdNonNull,
    })),
  );

  return (
    <Switch fallback="投稿が見つかりません">
      <Match when={event()} keyed>
        {(ev) => <TextNoteDisplay event={ev} {...props} />}
      </Match>
      <Match when={eventQuery.isLoading}>
        <div class="truncate">
          {'読み込み中 '}
          <span>{props.eventId}</span>
        </div>
      </Match>
    </Switch>
  );
};

export default TextNoteDisplayById;
