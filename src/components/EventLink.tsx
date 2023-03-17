import { Component } from 'solid-js';
import { noteEncode } from 'nostr-tools/nip19';

type EventLinkProps = {
  eventId: string;
};

const EventLink: Component<EventLinkProps> = (props) => (
  <span class="text-blue-500 underline">{noteEncode(props.eventId)}</span>
);

export default EventLink;
