import { createSignal, createEffect, onCleanup } from 'solid-js';
import type { Event as NostrEvent } from 'nostr-tools/event';
import type { Filter } from 'nostr-tools/filter';
import type { SubscriptionOptions } from 'nostr-tools/relay';
import usePool from '@/clients/usePool';

export type UseSubscriptionProps = {
  relayUrls: string[];
  filters: Filter[];
  options?: SubscriptionOptions;
};

const sortEvents = (events: NostrEvent[]) =>
  Array.from(events).sort((a, b) => b.created_at - a.created_at);

const useSubscription = (propsProvider: () => UseSubscriptionProps | undefined) => {
  const pool = usePool();
  const [events, setEvents] = createSignal<NostrEvent[]>([]);

  createEffect(() => {
    const props = propsProvider();
    if (props == null) return;

    const { relayUrls, filters, options } = props;

    const sub = pool().sub(relayUrls, filters, options);
    let pushed = false;
    let eose = false;
    const storedEvents: NostrEvent[] = [];

    sub.on('event', (event: NostrEvent) => {
      if (!eose) {
        pushed = true;
        storedEvents.push(event);
      } else {
        // いったん1000件だけ保持
        setEvents((prevEvents) => sortEvents([event, ...prevEvents].slice(0, 1000)));
      }
    });

    sub.on('eose', () => {
      eose = true;
      setEvents(sortEvents(storedEvents));
    });

    // avoid updating an array too rapidly while this is fetching stored events
    const intervalId = setInterval(() => {
      if (eose) {
        clearInterval(intervalId);
        return;
      }
      if (pushed) {
        pushed = false;
        setEvents(sortEvents(storedEvents));
      }
    }, 100);

    onCleanup(() => {
      sub.unsub();
      clearInterval(intervalId);
    });
  });

  return { events };
};

export default useSubscription;
