import { createMemo, Show, type Component } from 'solid-js';

import { noteEncode, neventEncode } from 'nostr-tools/nip19';

type EventLinkProps = {
  eventId: string;
  kind?: number;
};

const tryEncodeNote = (eventId: string) => {
  try {
    return noteEncode(eventId);
  } catch (err) {
    console.error('failed to encode event id into Bech32 entity (NIP-19) but ignore', eventId, err);
    return eventId;
  }
};

const tryEncodeNevent = (eventId: string, kind: number) => {
  try {
    return neventEncode({ id: eventId, kind });
  } catch (err) {
    console.error('failed to encode event id into Bech32 entity (NIP-19) but ignore', eventId, err);
    return eventId;
  }
};

const EventLink: Component<EventLinkProps> = (props) => {
  const nip19 = createMemo(() =>
    props.kind == null || props.kind === 1
      ? tryEncodeNote(props.eventId)
      : tryEncodeNevent(props.eventId, props.kind),
  );

  const url = () => (nip19() !== props.eventId ? `nostr:${nip19()}` : null);

  return (
    <Show when={url()} fallback={<span>{props.eventId}</span>} keyed>
      {(href) => (
        <a class="text-link underline" href={href}>
          {nip19()}
        </a>
      )}
    </Show>
  );
};

export default EventLink;
