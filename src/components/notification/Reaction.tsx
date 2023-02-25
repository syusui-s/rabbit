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
  const { event } = useEvent(() => ({ relayUrls: config().relayUrls, eventId: eventId() }));

  return (
    <div>
      <div class="flex gap-1 text-sm">
        <div>
          <Switch fallback={props.event.content}>
            <Match when={props.event.content === '+'}>
              <span class="inline-block h-4 w-4 text-rose-400">
                <HeartSolid />
              </span>
            </Match>
          </Switch>
        </div>
        <div>
          <span class="font-bold">{profile()?.display_name}</span>
          {' reacted'}
        </div>
      </div>
      <div>
        <Show when={event() != null} fallback={'loading'}>
          <TextNote event={event()} />
        </Show>
      </div>
    </div>
  );
};

export default Reaction;
