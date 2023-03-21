import { Switch, Match, type Component, Show } from 'solid-js';
import { type Event as NostrEvent } from 'nostr-tools';
import HeartSolid from 'heroicons/24/solid/heart.svg';

import ColumnItem from '@/components/ColumnItem';
import TextNoteDisplay from '@/components/textNote/TextNoteDisplay';
import UserDisplayName from '@/components/UserDisplayName';

import useProfile from '@/nostr/useProfile';
import useEvent from '@/nostr/useEvent';

type ReactionProps = {
  event: NostrEvent;
};

const Reaction: Component<ReactionProps> = (props) => {
  const eventId = () => props.event.tags.find(([tagName]) => tagName === 'e')?.[1];

  const { profile } = useProfile(() => ({
    pubkey: props.event.pubkey,
  }));
  const { event: reactedEvent, query: reactedEventQuery } = useEvent(() => ({
    eventId: eventId(),
  }));
  const isRemoved = () => reactedEventQuery.isSuccess && reactedEvent() == null;

  return (
    // if the reacted event is not found, it should be a removed event
    <Show when={!isRemoved()}>
      <ColumnItem>
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
          <div class="notification-user flex gap-1">
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
            <div>
              <span class="truncate whitespace-pre-wrap break-all font-bold">
                <UserDisplayName pubkey={props.event.pubkey} />
              </span>
              {' がリアクション'}
            </div>
          </div>
        </div>
        <div class="notification-event py-1">
          <Show
            when={reactedEvent()}
            fallback={<div class="truncate">loading {eventId()}</div>}
            keyed
          >
            {(event) => <TextNoteDisplay event={event} />}
          </Show>
        </div>
      </ColumnItem>
    </Show>
  );
};

export default Reaction;
