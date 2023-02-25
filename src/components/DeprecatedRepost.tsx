// NIP-18 (DEPRECATED)
import { Show, type Component } from 'solid-js';
import { Event as NostrEvent } from 'nostr-tools/event';
import ArrowPathRoundedSquare from 'heroicons/24/outline/arrow-path-rounded-square.svg';

import useConfig from '@/clients/useConfig';
import useEvent from '@/clients/useEvent';
import useProfile from '@/clients/useProfile';

import TextNote from '@/components/TextNote';

export type DeprecatedRepostProps = {
  event: NostrEvent;
};

const DeprecatedRepost: Component<DeprecatedRepostProps> = (props) => {
  const [config] = useConfig();
  const pubkey = () => props.event.pubkey;
  const eventId = () => props.event.tags.find(([tagName]) => tagName === 'e')?.[1];

  const { profile } = useProfile(() => ({ relayUrls: config().relayUrls, pubkey: pubkey() }));
  const { event } = useEvent(() => ({ relayUrls: config().relayUrls, eventId: eventId() }));

  return (
    <div>
      <div class="flex  content-center px-1 text-xs">
        <div class="h-5 w-5 pr-1 text-green-500" aria-hidden="true">
          <ArrowPathRoundedSquare />
        </div>
        <div>{profile()?.display_name} Reposted</div>
      </div>
      <Show when={event() != null} fallback={'loading'}>
        <TextNote event={event()} />
      </Show>
    </div>
  );
};

export default DeprecatedRepost;
