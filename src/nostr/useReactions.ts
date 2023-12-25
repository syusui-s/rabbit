import { createMemo } from 'solid-js';

import { createQuery, useQueryClient, type CreateQueryResult } from '@tanstack/solid-query';
import { type Event as NostrEvent } from 'nostr-tools/pure';

import useConfig from '@/core/useConfig';
import { reaction } from '@/nostr/event';
import { eventsQuery } from '@/nostr/query';
import { BatchedEventsTask } from '@/nostr/useBatchedEvents';

export type UseReactionsProps = {
  eventId: string;
};

export type UseReactions = {
  reactions: () => NostrEvent[];
  reactionsGrouped: () => Map<string, NostrEvent[]>;
  isReactedBy: (pubkey: string) => boolean;
  isReactedByWithEmoji: (pubkey: string) => boolean;
  query: CreateQueryResult<NostrEvent[]>;
};

const EmojiRegex = /\p{Emoji_Presentation}/u;

export const queryKeyUseReactions = (props: UseReactionsProps | null) =>
  ['useReactions', props] as const;

const useReactions = (propsProvider: () => UseReactionsProps | null): UseReactions => {
  const { shouldMuteEvent } = useConfig();
  const queryClient = useQueryClient();
  const genQueryKey = createMemo(() => queryKeyUseReactions(propsProvider()));

  const query = createQuery(() => ({
    queryKey: genQueryKey(),
    queryFn: eventsQuery<ReturnType<typeof queryKeyUseReactions>>({
      taskProvider: ([, currentProps]) => {
        if (currentProps == null) return null;
        const { eventId: mentionedEventId } = currentProps;
        return new BatchedEventsTask({ type: 'Reactions', mentionedEventId });
      },
      queryClient,
    }),
    staleTime: 1 * 60 * 1000, // 1 min
    gcTime: 4 * 60 * 60 * 1000, // 4 hour
    refetchInterval: 1 * 60 * 1000, // 1 min
  }));

  const reactions = () => {
    const data = query.data ?? [];
    return data.filter((ev) => !shouldMuteEvent(ev));
  };

  const reactionsGrouped = () => {
    const result = new Map<string, NostrEvent[]>();
    reactions().forEach((event) => {
      const key = reaction(event).isCustomEmoji()
        ? `${event.content}${reaction(event).getUrl() ?? ''}`
        : event.content;
      const events = result.get(key) ?? [];
      events.push(event);
      result.set(key, events);
    });
    return result;
  };

  const isReactedBy = (pubkey: string): boolean =>
    reactions().findIndex((event) => event.pubkey === pubkey) !== -1;

  const isReactedByWithEmoji = (pubkey: string): boolean =>
    reactions().findIndex((event) => event.pubkey === pubkey && EmojiRegex.test(event.content)) !==
    -1;

  return {
    reactions,
    reactionsGrouped,
    isReactedBy,
    isReactedByWithEmoji,
    query,
  };
};

export default useReactions;
