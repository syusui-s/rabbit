import { Show, type Component } from 'solid-js';

import { Kind, nip19 } from 'nostr-tools';

const { noteEncode, neventEncode } = nip19;

type EventLinkProps = {
  eventId: string;
  kind?: Kind;
};

const tryEncodeNote = (eventId: string) => {
  try {
    return noteEncode(eventId);
  } catch (err) {
    console.error('failed to encode event id into Bech32 entity (NIP-19) but ignore', eventId, err);
    return eventId;
  }
};

const tryEncodeNevent = (eventId: string) => {
  try {
    return neventEncode({ id: eventId });
  } catch (err) {
    console.error('failed to encode event id into Bech32 entity (NIP-19) but ignore', eventId, err);
    return eventId;
  }
};

const EventLink: Component<EventLinkProps> = (props) => {
  return (
    <button class="text-blue-500 underline">
      <Show
        when={props.kind == null || props.kind === Kind.Text}
        fallback={tryEncodeNevent(props.eventId)}
      >
        {tryEncodeNote(props.eventId)}
      </Show>
    </button>
  );
};

export default EventLink;
