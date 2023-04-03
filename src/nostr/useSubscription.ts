import { createSignal, createEffect, onCleanup } from 'solid-js';
import type { Event as NostrEvent, Filter, SubscriptionOptions } from 'nostr-tools';
import uniqBy from 'lodash/uniqBy';
import usePool from '@/nostr/usePool';
import useStats from './useStats';
import useConfig from './useConfig';

export type UseSubscriptionProps = {
  relayUrls: string[];
  filters: Filter[];
  options?: SubscriptionOptions;
  /**
   * subscribe not only stored events but also new events published after the subscription
   * default is true
   */
  continuous?: boolean;
  /**
   * limit the number of events
   */
  limit?: number;
  clientEventFilter?: (event: NostrEvent) => boolean;
  onEvent?: (event: NostrEvent & { id: string }) => void;
  onEOSE?: () => void;
  signal?: AbortSignal;
};

const sortEvents = (events: NostrEvent[]) =>
  Array.from(events).sort((a, b) => b.created_at - a.created_at);

let count = 0;

const { setActiveSubscriptions } = useStats();
setInterval(() => {
  setActiveSubscriptions(count);
}, 1000);

const useSubscription = (propsProvider: () => UseSubscriptionProps | null) => {
  const { config } = useConfig();
  const pool = usePool();
  const [events, setEvents] = createSignal<NostrEvent[]>([]);

  const startSubscription = () => {
    const props = propsProvider();
    if (props == null) return;

    const { relayUrls, filters, options, onEvent, onEOSE, continuous = true } = props;
    const limit = props.limit ?? 50;

    const sub = pool().sub(relayUrls, filters, options);
    let subscribing = true;
    count += 1;

    let pushed = false;
    let eose = false;
    const storedEvents: NostrEvent[] = [];

    sub.on('event', (event: NostrEvent) => {
      if (onEvent != null) {
        onEvent(event as NostrEvent & { id: string });
      }
      if (config().mutedPubkeys.includes(event.pubkey)) {
        return;
      }
      if (props.clientEventFilter != null && !props.clientEventFilter(event)) {
        return;
      }
      if (!eose) {
        pushed = true;
        storedEvents.push(event);
      } else {
        setEvents((current) => {
          const sorted = sortEvents([event, ...current].slice(0, limit));
          // FIXME なぜか重複して取得される問題があるが一旦uniqByで対処
          // https://github.com/syusui-s/rabbit/issues/5
          const deduped = uniqBy(sorted, (e) => e.id);
          if (deduped.length !== sorted.length) {
            console.warn('duplicated event', event);
          }
          return deduped;
        });
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
        if (subscribing) {
          subscribing = false;
          count -= 1;
        }
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
      if (subscribing) {
        subscribing = false;
        count -= 1;
      }
      clearInterval(intervalId);
    });
  };

  createEffect(() => {
    startSubscription();
  });

  return { events };
};

export default useSubscription;
