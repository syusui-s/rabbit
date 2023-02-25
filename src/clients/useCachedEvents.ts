import { createQuery } from '@tanstack/solid-query';
import { UseSubscriptionProps } from '@/clients/useSubscription';
import type { Event as NostrEvent } from 'nostr-tools/event';
import type { Filter } from 'nostr-tools/filter';
import type { SimplePool } from 'nostr-tools/pool';
import type { SubscriptionOptions } from 'nostr-tools/relay';
import usePool from './usePool';

type GetEventsArgs = {
  pool: SimplePool;
  relayUrls: string[];
  filters: Filter[];
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
const useCachedEvents = (propsProvider: () => UseSubscriptionProps) => {
  const pool = usePool();

  return createQuery(
    () => {
      const { relayUrls, filters, options } = propsProvider();
      return ['useCachedEvents', relayUrls, filters, options] as const;
    },
    ({ queryKey, signal }) => {
      const [, relayUrls, filters, options] = queryKey;
      return getEvents({ pool: pool(), relayUrls, filters, options, signal });
    },
    {
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 24 * 60 * 60 * 1000, // 24 hours
    },
  );
};

export default useCachedEvents;
