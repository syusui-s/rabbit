import { createSignal, createEffect } from 'solid-js';
import type { Event as NostrEvent } from 'nostr-tools/event';
import type { Filter } from 'nostr-tools/filter';
import type { SubscriptionOptions } from 'nostr-tools/relay';
import usePool from '@/clients/usePool';

export type UseSubscriptionProps = {
  relayUrls: string[];
  filters: Filter[];
  options?: SubscriptionOptions;
};

const sortEvents = (events: NostrEvent[]) => events.sort((a, b) => b.created_at - a.created_at);

const useSubscription = (propsProvider: () => UseSubscriptionProps) => {
  const pool = usePool();
  const [events, setEvents] = createSignal<NostrEvent[]>([]);

  createEffect(() => {
    const { relayUrls, filters, options } = propsProvider();

    const sub = pool().sub(relayUrls, filters, options);
    let eose = false;
    const storedEvents: NostrEvent[] = [];

    sub.on('event', (event: NostrEvent) => {
      if (!eose) {
        storedEvents.push(event);
      } else {
        setEvents((prevEvents) => sortEvents([event, ...prevEvents]));
      }
    });

    sub.on('eose', () => {
      eose = true;
      setEvents(sortEvents(storedEvents));
    });

    const intervalId = setInterval(() => {
      if (eose) {
        clearInterval(intervalId);
        return;
      }
      setEvents(sortEvents(storedEvents));
    }, 100);

    return () => {
      sub.unsub();
      clearInterval(intervalId);
    };
  });

  return { events };
};

export default useSubscription;
