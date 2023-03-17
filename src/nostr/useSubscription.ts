import { createSignal, createEffect, onCleanup } from 'solid-js';
import type { Event as NostrEvent, Filter, SubscriptionOptions } from 'nostr-tools';
import usePool from '@/nostr/usePool';

export type UseSubscriptionProps = {
  relayUrls: string[];
  filters: Filter[];
  options?: SubscriptionOptions;
  // subscribe not only stored events but also new events published after the subscription
  // default is true
  clientEventFilter?: (event: NostrEvent) => boolean;
  continuous?: boolean;
  onEvent?: (event: NostrEvent) => void;
  onEOSE?: () => void;
  signal?: AbortSignal;
};

const sortEvents = (events: NostrEvent[]) =>
  Array.from(events).sort((a, b) => b.created_at - a.created_at);

const useSubscription = (propsProvider: () => UseSubscriptionProps | null) => {
  const pool = usePool();
  const [events, setEvents] = createSignal<NostrEvent[]>([]);

  createEffect(() => {
    const props = propsProvider();
    if (props == null) return;

    const { relayUrls, filters, options, onEvent, onEOSE, continuous = true } = props;

    const sub = pool().sub(relayUrls, filters, options);
    let pushed = false;
    let eose = false;
    const storedEvents: NostrEvent[] = [];

    sub.on('event', (event: NostrEvent) => {
      if (onEvent != null) {
        onEvent(event);
      }
      if (props.clientEventFilter != null && !props.clientEventFilter(event)) {
        return;
      }
      if (!eose) {
        pushed = true;
        storedEvents.push(event);
      } else {
        // いったん50件だけ保持
        setEvents((prevEvents) => sortEvents([event, ...prevEvents].slice(0, 50)));
      }
    });

    sub.on('eose', () => {
      if (onEOSE != null) {
        onEOSE();
      }

      eose = true;
      setEvents(sortEvents(storedEvents));

      if (!continuous) {
        sub.unsub();
      }
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
