import { type Event as NostrEvent } from 'nostr-tools/pure';

/**
 * compareEvents compares events by created_at and id in ascending order.
 */
export const compareEvents = (a: NostrEvent, b: NostrEvent): number => {
  const diff = a.created_at - b.created_at;
  if (diff !== 0) return diff;
  return -a.id.localeCompare(b.id);
};

export const pickLatestEvent = (events: NostrEvent[]): NostrEvent | undefined => {
  if (events.length === 0) return undefined;
  if (events.length === 1) return events[0];
  return events.reduce((a, b) => (compareEvents(a, b) > 0 ? a : b));
};

export const pickOldestEvent = (events: NostrEvent[]): NostrEvent | undefined => {
  if (events.length === 0) return undefined;
  if (events.length === 1) return events[0];
  return events.reduce((a, b) => (-compareEvents(a, b) > 0 ? a : b));
};

export const sortEvents = (events: NostrEvent[]) =>
  Array.from(events).sort((a, b) => -compareEvents(a, b));
