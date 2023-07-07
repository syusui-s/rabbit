import { createMemo } from 'solid-js';

import { createQuery, useQueryClient, type CreateQueryResult } from '@tanstack/solid-query';
import { Event as NostrEvent } from 'nostr-tools';

import useConfig from '@/core/useConfig';
import { eventsQuery } from '@/nostr/query';
import { BatchedEventsTask } from '@/nostr/useBatchedEvents';

export type UseReactionsProps = {
  eventId: string;
};

export type UseReactions = {
  reactions: () => NostrEvent[];
  reactionsGroupedByContent: () => Map<string, NostrEvent[]>;
  isReactedBy: (pubkey: string) => boolean;
  isReactedByWithEmoji: (pubkey: string) => boolean;
  invalidateReactions: () => Promise<void>;
  query: CreateQueryResult<NostrEvent[]>;
};

const EmojiRegex = /\p{Emoji_Presentation}/u;

const useReactions = (propsProvider: () => UseReactionsProps | null): UseReactions => {
  const { shouldMuteEvent } = useConfig();
  const queryClient = useQueryClient();
  const props = createMemo(propsProvider);
  const genQueryKey = createMemo(() => ['useReactions', props()] as const);

  const query = createQuery(
    genQueryKey,
    eventsQuery({
      taskProvider: ([, currentProps]) => {
        if (currentProps == null) return null;
        const { eventId: mentionedEventId } = currentProps;
        return new BatchedEventsTask({ type: 'Reactions', mentionedEventId });
      },
      queryClient,
    }),
    {
      staleTime: 1 * 60 * 1000, // 1 min
      cacheTime: 4 * 60 * 60 * 1000, // 4 hour
      refetchInterval: 1 * 60 * 1000, // 1 min
    },
  );

  const reactions = () => {
    const data = query.data ?? [];
    return data.filter((ev) => !shouldMuteEvent(ev));
  };

  const reactionsGroupedByContent = () => {
    const result = new Map<string, NostrEvent[]>();
    reactions().forEach((event) => {
      const events = result.get(event.content) ?? [];
      events.push(event);
      result.set(event.content, events);
    });
    return result;
  };

  const isReactedBy = (pubkey: string): boolean =>
    reactions().findIndex((event) => event.pubkey === pubkey) !== -1;

  const isReactedByWithEmoji = (pubkey: string): boolean =>
    reactions().findIndex((event) => event.pubkey === pubkey && EmojiRegex.test(event.content)) !==
    -1;

  const invalidateReactions = (): Promise<void> => queryClient.invalidateQueries(genQueryKey());

  return {
    reactions,
    reactionsGroupedByContent,
    isReactedBy,
    isReactedByWithEmoji,
    invalidateReactions,
    query,
  };
};

export default useReactions;
