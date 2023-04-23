import { Component } from 'solid-js';

import { nip19 } from 'nostr-tools';

const { noteEncode } = nip19;

type EventLinkProps = {
  eventId: string;
};

const tryEncode = (eventId: string) => {
  try {
    return noteEncode(eventId);
  } catch (err) {
    console.error('failed to encode event id into Bech32 entity (NIP-19) but ignore', eventId, err);
    return eventId;
  }
};

const EventLink: Component<EventLinkProps> = (props) => {
  return <button class="text-blue-500 underline">{tryEncode(props.eventId)}</button>;
};

export default EventLink;
