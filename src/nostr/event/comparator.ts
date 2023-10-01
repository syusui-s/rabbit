import { Event as NostrEvent } from 'nostr-tools';

/**
 * compareEvents compares events by created_at and id.
 *
 * Comparison by id is defined in NIP-01 for parameterized replaceable events
 * but it is used here to ensure consistent results for sorting.
 */
export const compareEvents = (a: NostrEvent, b: NostrEvent): number => {
  const diff = a.created_at - b.created_at;
  if (diff !== 0) return diff;
  if (a.id === b.id) return 0;
  return a.id > b.id ? 1 : -1;
};

export const pickLatestEvent = (events: NostrEvent[]): NostrEvent | undefined => {
  if (events.length === 0) return undefined;
  if (events.length === 1) return events[0];
  return events.reduce((a, b) => (compareEvents(a, b) > 0 ? a : b));
};

export const sortEvents = (events: NostrEvent[]) =>
  Array.from(events).sort((a, b) => -compareEvents(a, b));
