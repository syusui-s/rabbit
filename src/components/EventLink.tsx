import { Component } from 'solid-js';

type EventLinkProps = {
  eventId: string;
};

const EventLink: Component<EventLinkProps> = (props) => (
  <span class="text-blue-500 underline">{props.eventId}</span>
);

export default EventLink;
