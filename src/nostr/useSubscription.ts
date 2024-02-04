import { createSignal, createEffect, createMemo, onMount, onCleanup, on } from 'solid-js';

import uniqBy from 'lodash/uniqBy';
import { type Filter } from 'nostr-tools/filter';
import { type SubscribeManyParams } from 'nostr-tools/pool';
import { type Event as NostrEvent } from 'nostr-tools/pure';
import { insertEventIntoDescendingList } from 'nostr-tools/utils';

import useConfig from '@/core/useConfig';
import { sortEvents } from '@/nostr/event/comparator';
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

const useSubscription = (propsProvider: () => UseSubscriptionProps | null) => {
  const { config, shouldMuteEvent } = useConfig();
  const pool = usePool();
  const [events, setEvents] = createSignal<NostrEvent[]>([]);
  const [eose, setEose] = createSignal<boolean>(false);
  const props = createMemo(propsProvider);

  const eoseLimit = () => propsProvider()?.eoseLimit ?? 25;
  const limit = () => propsProvider()?.limit ?? 50;

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

  const addEvent = (event: NostrEvent) => {
    const SecondsToIgnore = 300; // 5 min

    const diffSec = event.created_at - epoch();
    if (diffSec > SecondsToIgnore) return;
    if (diffSec > 0) {
      setTimeout(() => addEvent(event), diffSec * 1000);
      return;
    }

    setEvents((current) => {
      const sorted = insertEventIntoDescendingList(current, event).slice(0, limit());
      // FIXME なぜか重複して取得される問題があるが一旦uniqByで対処
      // https://github.com/syusui-s/rabbit/issues/5
      const deduped = uniqBy(sorted, (e) => e.id);
      if (deduped.length !== sorted.length) {
        console.warn('duplicated event', event);
      }
      return deduped;
    });
  };

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

    let pushed = false;
    setEose(false);
    const storedEvents: NostrEvent[] = [];

    const updateEvents = () => setEvents(sortEvents(storedEvents).slice(0, eoseLimit()));

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

          if (!eose()) {
            pushed = true;
            storedEvents.push(event);
          } else {
            addEvent(event);
          }
        },
        oneose: () => {
          // sometimes `oneose` called twice
          if (eose()) return;

          if (onEOSE != null) {
            onEOSE();
          }

          setEose(true);
          updateEvents();
          storedEvents.splice(0, storedEvents.length);

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

    // avoid updating an array too rapidly while this is fetching stored events
    const intervalId = setInterval(() => {
      if (eose()) {
        clearInterval(intervalId);
        return;
      }
      if (pushed) {
        pushed = false;
        updateEvents();
      }
    }, 100);

    onCleanup(() => {
      console.debug('startSubscription: end');
      sub.close();
      if (subscribing) {
        subscribing = false;
        count -= 1;
      }
      clearInterval(intervalId);
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
