import { Switch, Match, type Component, Show } from 'solid-js';

import HeartSolid from 'heroicons/24/solid/heart.svg';
import { type Event as NostrEvent } from 'nostr-tools';

import TextNoteDisplay from '@/components/event/textNote/TextNoteDisplay';
import UserDisplayName from '@/components/UserDisplayName';
import useConfig from '@/core/useConfig';
import useModalState from '@/hooks/useModalState';
import { genericEvent } from '@/nostr/event';
import useEvent from '@/nostr/useEvent';
import useProfile from '@/nostr/useProfile';
import ensureNonNull from '@/utils/ensureNonNull';

type ReactionProps = {
  event: NostrEvent;
};

const Reaction: Component<ReactionProps> = (props) => {
  const { shouldMuteEvent } = useConfig();
  const { showProfile } = useModalState();
  const event = () => genericEvent(props.event);
  const eventId = () => event().lastTaggedEventId();

  const { profile } = useProfile(() => ({
    pubkey: props.event.pubkey,
  }));

  const { event: reactedEvent, query: reactedEventQuery } = useEvent(() =>
    ensureNonNull([eventId()] as const)(([eventIdNonNull]) => ({
      eventId: eventIdNonNull,
    })),
  );

  const isRemoved = () => reactedEventQuery.isSuccess && reactedEvent() == null;

  return (
    // if the reacted event is not found, it should be a removed event
    <Show when={!isRemoved() || shouldMuteEvent(props.event)}>
      <div class="flex gap-1 px-1 text-sm">
        <div class="notification-icon flex place-items-center">
          <Switch fallback={props.event.content}>
            <Match when={props.event.content === '+'}>
              <span class="h-4 w-4 pt-[1px] text-rose-400">
                <HeartSolid />
              </span>
            </Match>
          </Switch>
        </div>
        <div class="notification-user flex gap-1 overflow-hidden">
          <div class="author-icon h-5 w-5 shrink-0 overflow-hidden object-cover">
            <Show when={profile()?.picture != null}>
              <img
                src={profile()?.picture}
                alt="icon"
                // TODO autofit
                class="rounded"
              />
            </Show>
          </div>
          <div class="flex-1 overflow-hidden">
            <button
              class="truncate font-bold hover:text-blue-500 hover:underline"
              onClick={() => showProfile(props.event.pubkey)}
            >
              <UserDisplayName pubkey={props.event.pubkey} />
            </button>
            {' がリアクション'}
          </div>
        </div>
      </div>
      <div class="notification-event py-1">
        <Show
          when={reactedEvent()}
          fallback={<div class="truncate">読み込み中 {eventId()}</div>}
          keyed
        >
          {(ev) => <TextNoteDisplay event={ev} />}
        </Show>
      </div>
    </Show>
  );
};

export default Reaction;
