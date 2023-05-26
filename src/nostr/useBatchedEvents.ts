import { createSignal, createMemo, observable, type Accessor, type Signal } from 'solid-js';

import { createQuery, useQueryClient, type CreateQueryResult } from '@tanstack/solid-query';
import { type Event as NostrEvent, type Filter, Kind } from 'nostr-tools';

import useConfig from '@/core/useConfig';
import eventWrapper from '@/nostr/event';
import useBatch, { type Task } from '@/nostr/useBatch';
import usePool from '@/nostr/usePool';
import useStats from '@/nostr/useStats';
import timeout from '@/utils/timeout';

type TaskArg =
  | { type: 'Profile'; pubkey: string }
  | { type: 'Event'; eventId: string }
  | { type: 'Reactions'; mentionedEventId: string }
  | { type: 'ZapReceipts'; mentionedEventId: string }
  | { type: 'Reposts'; mentionedEventId: string }
  | { type: 'Followings'; pubkey: string };

type BatchedEvents = { completed: boolean; events: NostrEvent[] };

type TaskRes = Accessor<BatchedEvents>;

// Profile
// TODO zodにする
// deleted等の特殊なもの
export type StandardProfile = {
  name?: string;
  about?: string;
  // user's icon
  picture?: string;
  // user's banner image
  banner?: string;
  nip05?: string; // NIP-05
  lud06?: string; // NIP-57
  lud16?: string; // NIP-57
};

export type NonStandardProfile = {
  display_name?: string;
  website?: string;
};

export type Profile = StandardProfile & NonStandardProfile;

export type ProfileWithOtherProperties = Profile & Record<string, any>;

export type UseProfileProps = {
  pubkey: string;
};

type UseProfile = {
  profile: () => ProfileWithOtherProperties | null;
  invalidateProfile: () => Promise<void>;
  query: CreateQueryResult<NostrEvent | null>;
};

// Event
export type UseEventProps = {
  eventId: string;
};

export type UseEvent = {
  event: () => NostrEvent | null;
  query: CreateQueryResult<NostrEvent | null>;
};

// Reactions
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

// Reposts
export type UseRepostsProps = {
  eventId: string;
};

export type UseReposts = {
  reposts: () => NostrEvent[];
  isRepostedBy: (pubkey: string) => boolean;
  invalidateReposts: () => Promise<void>;
  query: CreateQueryResult<NostrEvent[]>;
};

// Followings
type UseFollowingsProps = {
  pubkey: string;
};

type Following = {
  pubkey: string;
  mainRelayUrl?: string;
  petname?: string;
};

export type UseFollowings = {
  followings: () => Following[];
  followingPubkeys: () => string[];
  invalidateFollowings: () => Promise<void>;
  query: CreateQueryResult<NostrEvent | null>;
};

const EmojiRegex = /\p{Emoji_Presentation}/u;

let count = 0;

const { setActiveBatchSubscriptions } = useStats();

setInterval(() => {
  setActiveBatchSubscriptions(count);
}, 1000);

const EmptyBatchedEvents = { events: [], completed: true };
const emptyBatchedEvents = () => EmptyBatchedEvents;

const { exec } = useBatch<TaskArg, TaskRes>(() => ({
  interval: 2000,
  batchSize: 150,
  executor: (tasks) => {
    const profileTasks = new Map<string, Task<TaskArg, TaskRes>[]>();
    const eventTasks = new Map<string, Task<TaskArg, TaskRes>[]>();
    const reactionsTasks = new Map<string, Task<TaskArg, TaskRes>[]>();
    const repostsTasks = new Map<string, Task<TaskArg, TaskRes>[]>();
    const zapReceiptsTasks = new Map<string, Task<TaskArg, TaskRes>[]>();
    const followingsTasks = new Map<string, Task<TaskArg, TaskRes>[]>();

    tasks.forEach((task) => {
      if (task.args.type === 'Event') {
        const current = eventTasks.get(task.args.eventId) ?? [];
        eventTasks.set(task.args.eventId, [...current, task]);
      } else if (task.args.type === 'Profile') {
        const current = profileTasks.get(task.args.pubkey) ?? [];
        profileTasks.set(task.args.pubkey, [...current, task]);
      } else if (task.args.type === 'Reactions') {
        const current = reactionsTasks.get(task.args.mentionedEventId) ?? [];
        reactionsTasks.set(task.args.mentionedEventId, [...current, task]);
      } else if (task.args.type === 'Reposts') {
        const current = repostsTasks.get(task.args.mentionedEventId) ?? [];
        repostsTasks.set(task.args.mentionedEventId, [...current, task]);
      } else if (task.args.type === 'ZapReceipts') {
        const current = zapReceiptsTasks.get(task.args.mentionedEventId) ?? [];
        repostsTasks.set(task.args.mentionedEventId, [...current, task]);
      } else if (task.args.type === 'Followings') {
        const current = followingsTasks.get(task.args.pubkey) ?? [];
        followingsTasks.set(task.args.pubkey, [...current, task]);
      }
    });

    const eventIds = [...eventTasks.keys()];
    const profilePubkeys = [...profileTasks.keys()];
    const reactionsIds = [...reactionsTasks.keys()];
    const repostsIds = [...repostsTasks.keys()];
    const zapReceiptsIds = [...zapReceiptsTasks.keys()];
    const followingsIds = [...followingsTasks.keys()];

    const filters: Filter[] = [];

    if (eventIds.length > 0) {
      filters.push({ ids: eventIds });
    }
    if (profilePubkeys.length > 0) {
      filters.push({ kinds: [Kind.Metadata], authors: profilePubkeys });
    }
    if (reactionsIds.length > 0) {
      filters.push({ kinds: [Kind.Reaction], '#e': reactionsIds });
    }
    if (repostsIds.length > 0) {
      filters.push({ kinds: [6], '#e': repostsIds });
    }
    if (zapReceiptsIds.length > 0) {
      filters.push({ kinds: [9735], '#e': zapReceiptsIds });
    }
    if (followingsIds.length > 0) {
      filters.push({ kinds: [Kind.Contacts], authors: followingsIds });
    }

    if (filters.length === 0) return;

    const signals = new Map<number, Signal<BatchedEvents>>();

    const resolveTasks = (registeredTasks: Task<TaskArg, TaskRes>[], event: NostrEvent) => {
      registeredTasks.forEach((task) => {
        const signal = signals.get(task.id) ?? createSignal({ events: [], completed: false });
        signals.set(task.id, signal);
        const [batchedEvents, setBatchedEvents] = signal;
        setBatchedEvents((current) => ({
          ...current,
          events: [...current.events, event],
        }));
        task.resolve(batchedEvents);
      });
    };

    const finalizeTasks = () => {
      tasks.forEach((task) => {
        const signal = signals.get(task.id);
        if (signal != null) {
          const setEvents = signal[1];
          setEvents((current) => ({ ...current, completed: true }));
        } else {
          task.resolve(emptyBatchedEvents);
        }
      });
    };

    const { config, shouldMuteEvent } = useConfig();
    const pool = usePool();

    const sub = pool().sub(config().relayUrls, filters, {});

    count += 1;

    sub.on('event', (event: NostrEvent & { id: string }) => {
      if (event.kind === Kind.Metadata) {
        const registeredTasks = profileTasks.get(event.pubkey) ?? [];
        resolveTasks(registeredTasks, event);
        return;
      }

      if (event.kind === Kind.Reaction) {
        // Use the last event id
        const id = eventWrapper(event).lastTaggedEventId();
        if (id != null) {
          const registeredTasks = reactionsTasks.get(id) ?? [];
          resolveTasks(registeredTasks, event);
        }
      } else if ((event.kind as number) === 6) {
        // Use the last event id
        const id = eventWrapper(event).lastTaggedEventId();
        if (id != null) {
          const registeredTasks = repostsTasks.get(id) ?? [];
          resolveTasks(registeredTasks, event);
        }
      } else if (event.kind === Kind.Zap) {
        const eTags = eventWrapper(event).eTags();
        eTags.forEach(([, id]) => {
          const registeredTasks = repostsTasks.get(id) ?? [];
          resolveTasks(registeredTasks, event);
        });
      } else if (event.kind === Kind.Contacts) {
        const registeredTasks = followingsTasks.get(event.pubkey) ?? [];
        resolveTasks(registeredTasks, event);
      } else {
        const registeredTasks = eventTasks.get(event.id) ?? [];
        if (registeredTasks.length > 0) {
          resolveTasks(registeredTasks, event);
        } else {
          console.warn('unknown event received');
        }
      }
    });

    sub.on('eose', () => {
      finalizeTasks();
      sub.unsub();
      count -= 1;
    });
  },
}));

const pickLatestEvent = (events: NostrEvent[]): NostrEvent | null => {
  if (events.length === 0) return null;
  return events.reduce((a, b) => (a.created_at > b.created_at ? a : b));
};

export const useProfile = (propsProvider: () => UseProfileProps | null): UseProfile => {
  const queryClient = useQueryClient();
  const props = createMemo(propsProvider);
  const genQueryKey = createMemo(() => ['useProfile', props()] as const);

  const query = createQuery(
    genQueryKey,
    ({ queryKey, signal }) => {
      const [, currentProps] = queryKey;
      if (currentProps == null) return Promise.resolve(null);
      const { pubkey } = currentProps;
      if (pubkey.startsWith('npub1')) return Promise.resolve(null);
      const promise = exec({ type: 'Profile', pubkey }, signal).then((batchedEvents) => {
        const latestEvent = () => {
          const latest = pickLatestEvent(batchedEvents().events);
          if (latest == null) throw new Error(`profile not found: ${pubkey}`);
          return latest;
        };
        observable(batchedEvents).subscribe(() => {
          try {
            queryClient.setQueryData(queryKey, latestEvent());
          } catch (err) {
            console.error('error occurred while updating profile cache: ', err);
          }
        });
        return latestEvent();
      });
      // TODO timeoutと同時にsignalでキャンセルするようにしたい
      return timeout(15000, `useProfile: ${pubkey}`)(promise);
    },
    {
      // Profiles are updated occasionally, so a short staleTime is used here.
      // cacheTime is long so that the user see profiles instantly.
      staleTime: 5 * 60 * 1000, // 5 min
      cacheTime: 24 * 60 * 60 * 1000, // 1 day
      refetchInterval: 5 * 60 * 1000, // 5 min
    },
  );

  const profile = createMemo((): Profile | null => {
    if (query.data == null) return null;
    const { content } = query.data;
    if (content == null || content.length === 0) return null;
    // TODO 大きすぎたりしないかどうか、JSONかどうかのチェック
    try {
      return JSON.parse(content) as Profile;
    } catch (err) {
      console.warn('failed to parse profile (kind 0): ', err, content);
      return null;
    }
  });

  const invalidateProfile = (): Promise<void> => queryClient.invalidateQueries(genQueryKey());

  return { profile, invalidateProfile, query };
};

export const useEvent = (propsProvider: () => UseEventProps | null): UseEvent => {
  const props = createMemo(propsProvider);

  const query = createQuery(
    () => ['useEvent', props()] as const,
    ({ queryKey, signal }) => {
      const [, currentProps] = queryKey;
      if (currentProps == null) return null;
      const { eventId } = currentProps;
      const promise = exec({ type: 'Event', eventId }, signal).then((batchedEvents) => {
        const event = batchedEvents().events[0];
        if (event == null) throw new Error(`event not found: ${eventId}`);
        return event;
      });
      return timeout(15000, `useEvent: ${eventId}`)(promise);
    },
    {
      // Text notes never change, so they can be stored for a long time.
      // However, events tend to be unreferenced as time passes.
      staleTime: 4 * 60 * 60 * 1000, // 4 hour
      cacheTime: 4 * 60 * 60 * 1000, // 4 hour
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  );

  const event = () => query.data ?? null;

  return { event, query };
};

export const useReactions = (propsProvider: () => UseReactionsProps | null): UseReactions => {
  const queryClient = useQueryClient();
  const props = createMemo(propsProvider);
  const genQueryKey = createMemo(() => ['useReactions', props()] as const);

  const query = createQuery(
    genQueryKey,
    ({ queryKey, signal }) => {
      const [, currentProps] = queryKey;
      if (currentProps == null) return [];

      const { eventId: mentionedEventId } = currentProps;
      const promise = exec({ type: 'Reactions', mentionedEventId }, signal).then(
        (batchedEvents) => {
          const events = () => batchedEvents().events;
          observable(batchedEvents).subscribe(() => {
            queryClient.setQueryData(queryKey, events());
          });
          return events();
        },
      );
      return timeout(15000, `useReactions: ${mentionedEventId}`)(promise);
    },
    {
      staleTime: 1 * 60 * 1000, // 1 min
      cacheTime: 4 * 60 * 60 * 1000, // 4 hour
      refetchInterval: 1 * 60 * 1000, // 1 min
    },
  );

  const reactions = () => query.data ?? [];

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

export const useReposts = (propsProvider: () => UseRepostsProps): UseReposts => {
  const queryClient = useQueryClient();
  const props = createMemo(propsProvider);
  const genQueryKey = createMemo(() => ['useReposts', props()] as const);

  const query = createQuery(
    genQueryKey,
    ({ queryKey, signal }) => {
      const [, currentProps] = queryKey;
      if (currentProps == null) return [];
      const { eventId: mentionedEventId } = currentProps;
      const promise = exec({ type: 'Reposts', mentionedEventId }, signal).then((batchedEvents) => {
        const events = () => batchedEvents().events;
        observable(batchedEvents).subscribe(() => {
          queryClient.setQueryData(queryKey, events());
        });
        return events();
      });
      return timeout(15000, `useReposts: ${mentionedEventId}`)(promise);
    },
    {
      staleTime: 1 * 60 * 1000, // 1 min
      cacheTime: 4 * 60 * 60 * 1000, // 4 hour
      refetchInterval: 1 * 60 * 1000, // 1 min
    },
  );

  const reposts = () => query.data ?? [];

  const isRepostedBy = (pubkey: string): boolean =>
    reposts().findIndex((event) => event.pubkey === pubkey) !== -1;

  const invalidateReposts = (): Promise<void> => queryClient.invalidateQueries(genQueryKey());

  return { reposts, isRepostedBy, invalidateReposts, query };
};

export const useFollowings = (propsProvider: () => UseFollowingsProps | null): UseFollowings => {
  const queryClient = useQueryClient();
  const props = createMemo(propsProvider);
  const genQueryKey = () => ['useFollowings', props()] as const;

  const query = createQuery(
    genQueryKey,
    ({ queryKey, signal }) => {
      console.debug('useFollowings');
      const [, currentProps] = queryKey;
      if (currentProps == null) return Promise.resolve(null);
      const { pubkey } = currentProps;
      const promise = exec({ type: 'Followings', pubkey }, signal).then((batchedEvents) => {
        const latestEvent = () => {
          const latest = pickLatestEvent(batchedEvents().events);
          if (latest == null) throw new Error(`followings not found: ${pubkey}`);
          return latest;
        };
        observable(batchedEvents).subscribe(() => {
          try {
            queryClient.setQueryData(queryKey, latestEvent());
          } catch (err) {
            console.error('error occurred while updating followings cache: ', err);
          }
        });
        return latestEvent();
      });
      return timeout(15000, `useFollowings: ${pubkey}`)(promise);
    },
    {
      staleTime: 5 * 60 * 1000, // 5 min
      cacheTime: 24 * 60 * 60 * 1000, // 24 hour
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchInterval: 0,
    },
  );

  const followings = () => {
    if (query.data == null) return [];

    const result: Following[] = [];

    // TODO zodにする
    const event = eventWrapper(query.data);
    event.pTags().forEach((tag) => {
      const [, followingPubkey, mainRelayUrl, petname] = tag;

      const following: Following = { pubkey: followingPubkey, petname };
      if (mainRelayUrl != null && mainRelayUrl.length > 0) {
        following.mainRelayUrl = mainRelayUrl;
      }

      result.push(following);
    });

    return result;
  };

  const followingPubkeys = (): string[] => followings().map((follow) => follow.pubkey);

  const invalidateFollowings = (): Promise<void> => queryClient.invalidateQueries(genQueryKey());

  return { followings, followingPubkeys, invalidateFollowings, query };
};
