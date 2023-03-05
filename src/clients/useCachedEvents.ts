import { createQuery } from '@tanstack/solid-query';
import { type UseSubscriptionProps } from '@/clients/useSubscription';
import type { Event as NostrEvent } from 'nostr-tools/event';
import type { Filter } from 'nostr-tools/filter';
import type { SimplePool } from 'nostr-tools/pool';
import type { SubscriptionOptions } from 'nostr-tools/relay';
import usePool from './usePool';

type GetEventsArgs = {
  pool: SimplePool;
  relayUrls: string[];
  filters: Filter[];
  // TODO 継続的に取得する場合、Promiseでは無理なので、無理やりキャッシュにストアする仕組みを使う
  continuous?: boolean;
  options?: SubscriptionOptions;
  signal?: AbortSignal;
};

const getEvents = async ({
  pool,
  relayUrls,
  filters,
  options,
  signal,
}: GetEventsArgs): Promise<NostrEvent[]> => {
  const result: NostrEvent[] = [];

  const sub = pool.sub(relayUrls, filters, options);
  sub.on('event', (event: NostrEvent) => result.push(event));

  return new Promise((resolve, reject) => {
    sub.on('eose', () => {
      sub.unsub();
      resolve(result);
    });

    if (signal != null) {
      signal.addEventListener('abort', () => {
        sub.unsub();
        reject(signal.reason);
      });
    }
  });
};

/**
 * This aims to fetch stored data, and doesn't support fetching streaming data continuously.
 *
 * This is useful when you want to fetch some data which change occasionally:
 * profile or following list, reactions, and something like that.
 */
const useCachedEvents = (propsProvider: () => UseSubscriptionProps | null) => {
  const pool = usePool();

  return createQuery(
    () => {
      const currentProps = propsProvider();
      return ['useCachedEvents', currentProps] as const;
    },
    ({ queryKey, signal }) => {
      const [, currentProps] = queryKey;
      if (currentProps == null) return [];
      return getEvents({ pool: pool(), signal, ...currentProps });
    },
    {
      staleTime: 5 * 60 * 1000,
      cacheTime: 15 * 60 * 1000,
    },
  );
};

export default useCachedEvents;
