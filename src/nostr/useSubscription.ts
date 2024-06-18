import { createSignal, createEffect, createMemo, onMount, onCleanup, on } from 'solid-js';

import { type Filter } from 'nostr-tools/filter';
import { type SubscribeManyParams } from 'nostr-tools/pool';
import { type Event as NostrEvent } from 'nostr-tools/pure';
import { insertEventIntoDescendingList } from 'nostr-tools/utils';

import useConfig from '@/core/useConfig';
import usePool from '@/nostr/usePool';
import useStats from '@/nostr/useStats';
import epoch from '@/utils/epoch';

export type UseSubscriptionProps = {
  relayUrls: string[];
  filters: Filter[];
  options?: SubscribeManyParams;
  /**
   * subscribe not only stored events but also new events published after the subscription
   * default is true
   */
  continuous?: boolean;
  /**
   * limit the number of events
   */
  limit?: number;
  /**
   * limit the number of events until EOSE
   * This should be same to `limit` of REQ
   */
  eoseLimit?: number;
  clientEventFilter?: (event: NostrEvent) => boolean;
  onEvent?: (event: NostrEvent & { id: string }) => void;
  onEOSE?: () => void;
  signal?: AbortSignal;
  debugId?: string;
};

let count = 0;

const { setActiveSubscriptions } = useStats();
setInterval(() => {
  setActiveSubscriptions(count);
}, 1000);

// avoid updating an array rapidly while this is fetching stored events
const useThrottledEvents = ({
  eose,
  limit,
  eoseLimit,
}: {
  eose: () => boolean;
  limit: () => number;
  eoseLimit: () => number;
}) => {
  const SecondsToIgnore = 300; // 5 min
  const [events, setEvents] = createSignal<NostrEvent[]>([]);

  const delayedEvents: NostrEvent[] = [];
  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  const reflectDelayedEvents = () => {
    setEvents((currentEvents) => {
      const newEvents = [...currentEvents];
      delayedEvents.forEach((event) => {
        insertEventIntoDescendingList(newEvents, event);
      });
      return newEvents.slice(0, eoseLimit());
    });
    // clear delayed events
    delayedEvents.splice(0, delayedEvents.length);
  };

  const startTimerIfNotStarted = () => {
    if (timeoutId != null) return;
    timeoutId = setTimeout(() => {
      timeoutId = undefined;
      reflectDelayedEvents();
    }, 100);
  };

  const stopTimer = () => {
    if (timeoutId != null) {
      clearTimeout(timeoutId);
    }
  };

  const addEvent = (event: NostrEvent) => {
    const diffSec = event.created_at - epoch();
    if (diffSec > SecondsToIgnore) return;
    if (diffSec > 0) {
      setTimeout(() => addEvent(event), diffSec * 1000);
      return;
    }

    if (!eose()) {
      delayedEvents.push(event);
      startTimerIfNotStarted();
    } else {
      // SimplePool de-duplicates events but sometimes onEvent is called for duplicated events.
      // insertEventIntoDescendingList de-duplicates events.
      // https://github.com/syusui-s/rabbit/issues/5
      setEvents((currentEvents) => {
        const newEvents = [...currentEvents];
        insertEventIntoDescendingList(newEvents, event);
        return newEvents.slice(0, limit());
      });
    }
  };

  const clearEvents = () => {
    setEvents([]);
    stopTimer();
  };

  createEffect(() => {
    if (eose()) {
      reflectDelayedEvents();
    }
  });

  onCleanup(() => {
    stopTimer();
  });

  return { events, setEvents, addEvent, clearEvents };
};

const useSubscription = (propsProvider: () => UseSubscriptionProps | null) => {
  const { config, shouldMuteEvent } = useConfig();
  const pool = usePool();
  const [eose, setEose] = createSignal<boolean>(false);
  const props = createMemo(propsProvider);

  const eoseLimit = () => propsProvider()?.eoseLimit ?? 25;
  const limit = () => propsProvider()?.limit ?? 50;

  const { events, addEvent, clearEvents, setEvents } = useThrottledEvents({
    eose,
    eoseLimit,
    limit,
  });

  createEffect(
    on(
      () => [config().mutedPubkeys, config().mutedKeywords],
      () => {
        setEvents((currentEvents) => currentEvents.filter((event) => !shouldMuteEvent(event)));
      },
      { defer: true },
    ),
  );

  onMount(() => {
    console.debug('subscription mounted', propsProvider()?.debugId, propsProvider());
    onCleanup(() => {
      console.debug('subscription unmount', propsProvider()?.debugId, propsProvider());
    });
  });

  const startSubscription = () => {
    console.debug('startSubscription: start');

    const currentProps = props();
    if (currentProps == null) return;
    const {
      relayUrls,
      filters,
      options,
      onEvent,
      onEOSE,
      clientEventFilter,
      continuous = true,
    } = currentProps;
    let subscribing = true;
    count += 1;

    clearEvents();
    setEose(false);

    const sub = pool().subscribeMany(
      relayUrls,
      filters,
      options ?? {
        maxWait: 12000,
        onevent: (event: NostrEvent) => {
          if (onEvent != null) {
            onEvent(event as NostrEvent & { id: string });
          }
          if (clientEventFilter != null && !clientEventFilter(event)) {
            return;
          }

          addEvent(event);
        },
        oneose: () => {
          // sometimes `oneose` called twice
          if (eose()) return;

          if (onEOSE != null) {
            onEOSE();
          }
          setEose(true);

          if (!continuous) {
            sub.close();
            if (subscribing) {
              subscribing = false;
              count -= 1;
            }
          }
        },
      },
    );

    onCleanup(() => {
      console.debug('startSubscription: end');
      sub.close();
      if (subscribing) {
        subscribing = false;
        count -= 1;
      }
    });
  };

  createEffect(
    on(
      () => [props()],
      () => startSubscription(),
    ),
  );

  return { events, eose };
};

export default useSubscription;
