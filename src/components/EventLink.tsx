import { Component } from 'solid-js';
import { nip19 } from 'nostr-tools';

const { noteEncode } = nip19;

type EventLinkProps = {
  eventId: string;
};

const EventLink: Component<EventLinkProps> = (props) => (
  <span class="text-blue-500 underline">{noteEncode(props.eventId)}</span>
);

export default EventLink;
