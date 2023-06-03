import { createMemo, observable } from 'solid-js';

import { createQuery, useQueryClient, type CreateQueryResult } from '@tanstack/solid-query';
import { Event as NostrEvent } from 'nostr-tools';

import { exec, pickLatestEvent } from '@/nostr/useBatchedEvents';
import timeout from '@/utils/timeout';

// Parameterized Replaceable Event
export type UseParameterizedReplaceableEventProps = {
  kind: number;
  author: string;
  identifier: string;
};

export type UseParameterizedReplaceableEvent = {
  event: () => NostrEvent | null;
  query: CreateQueryResult<NostrEvent | null>;
};

export const useParameterizedReplaceableEvent = (
  propsProvider: () => UseParameterizedReplaceableEventProps | null,
): UseParameterizedReplaceableEvent => {
  const queryClient = useQueryClient();
  const props = createMemo(propsProvider);
  const genQueryKey = () => ['useFollowings', props()] as const;

  const query = createQuery(
    genQueryKey,
    ({ queryKey, signal }) => {
      console.debug('useFollowings');
      const [, currentProps] = queryKey;
      if (currentProps == null) return Promise.resolve(null);

      const { kind, author, identifier } = currentProps;
      const promise = exec(
        { type: 'ParameterizedReplaceableEvent', kind, author, identifier },
        signal,
      ).then((batchedEvents) => {
        const latestEvent = () => {
          const latest = pickLatestEvent(batchedEvents().events);
          if (latest == null)
            throw new Error(
              `parameterized replaceable event not found: ${kind}:${author}:${identifier}`,
            );
          return latest;
        };

        observable(batchedEvents).subscribe(() => {
          try {
            queryClient.setQueryData(queryKey, latestEvent());
          } catch (err) {
            console.error(
              'error occurred while updating parameterized replaceable event cache: ',
              err,
            );
          }
        });
        return latestEvent();
      });

      return timeout(
        15000,
        `useParameterizedReplaceableEvent: ${kind}:${author}:${identifier}`,
      )(promise);
    },
    {
      staleTime: 5 * 60 * 1000, // 5 min
      cacheTime: 4 * 60 * 60 * 1000, // 4 hour
    },
  );

  const event = () => query.data ?? null;

  return { event, query };
};

export default useParameterizedReplaceableEvent;
