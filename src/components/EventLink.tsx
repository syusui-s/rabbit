import { createMemo, Show, type Component } from 'solid-js';

import { neventEncode } from 'nostr-tools/nip19';

type EventLinkProps = {
  eventId: string;
  kind?: number;
};

const EventLink: Component<EventLinkProps> = (props) => {
  const url = createMemo(() => {
    try {
      const nip19 = neventEncode({ id: props.eventId });
      return `nostr:${nip19}`;
    } catch (err) {
      console.error(
        'failed to encode event id into Bech32 entity (NIP-19) but ignore',
        props.eventId,
        err,
      );
      return null;
    }
  });

  return (
    <Show when={url()} fallback={<span>{props.eventId}</span>} keyed>
      {(href) => (
        <a class="text-link underline" href={href}>
          {href}
        </a>
      )}
    </Show>
  );
};

export default EventLink;
