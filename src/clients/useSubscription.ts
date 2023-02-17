import { createSignal, createEffect } from 'solid-js';
import type { Filter } from 'nostr-tools/filter';
import type { SubscriptionOptions } from 'nostr-tools/relay';
import usePool from '@/clients/usePool';

type UseSubscriptionProps = {
  relayUrls: string[];
  filters: Filter[];
  options?: SubscriptionOptions;
};

const useSubscription = ({ relayUrls, filters, options }: UseSubscriptionProps) => {
  const pool = usePool();
  const [events, setEvents] = createSignal<Event[]>([]);

  createEffect(() => {
    const sub = pool().sub(relayUrls, filters, options);
    const tempEvents: Event[] = [];

    sub.on('event', (event: Event) => {
      tempEvents.push(event);
    });

    const intervalId = setInterval(() => {
      const newEvents = tempEvents.splice(0, tempEvents.length);
      setEvents((prevEvents) => [...newEvents, ...prevEvents]);
    }, 500);

    return () => {
      sub.unsub();
      clearInterval(intervalId);
    };
  });

  return { events };
};

export default useSubscription;
