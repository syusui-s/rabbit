import { Switch, Match, type Component, Show } from 'solid-js';
import { type Event as NostrEvent } from 'nostr-tools/event';
import HeartSolid from 'heroicons/24/solid/heart.svg';

import useConfig from '@/clients/useConfig';
import useProfile from '@/clients/useProfile';
import useEvent from '@/clients/useEvent';
import TextNote from '../TextNote';

type ReactionProps = {
  event: NostrEvent;
};

const Reaction: Component<ReactionProps> = (props) => {
  const [config] = useConfig();
  const eventId = () => props.event.tags.find(([tagName]) => tagName === 'e')?.[1];

  const { profile } = useProfile(() => ({
    relayUrls: config().relayUrls,
    pubkey: props.event.pubkey,
  }));
  const { event: reactedEvent, query: reactedEventQuery } = useEvent(() => ({
    relayUrls: config().relayUrls,
    eventId: eventId(),
  }));
  const isRemoved = () => reactedEventQuery.isSuccess && reactedEvent() == null;

  return (
    // if the reacted event is not found, it should be a removed event
    <Show when={!isRemoved()}>
      <div>
        <div class="notification-icon flex gap-1 px-1 text-sm">
          <div class="flex place-items-center">
            <Switch fallback={props.event.content}>
              <Match when={props.event.content === '+'}>
                <span class="h-4 w-4 pt-[1px] text-rose-400">
                  <HeartSolid />
                </span>
              </Match>
            </Switch>
          </div>
          <div class="notification-user flex gap-1 pt-1">
            <div class="author-icon h-5 w-5 shrink-0">
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
                <Show when={profile() != null} fallback={props.event.pubkey}>
                  {profile()?.display_name}
                </Show>
              </span>
              {' reacted'}
            </div>
          </div>
        </div>
        <div class="notification-event">
          <Show when={reactedEvent() != null} fallback="loading">
            <TextNote event={reactedEvent()} />
          </Show>
        </div>
      </div>
    </Show>
  );
};

export default Reaction;
