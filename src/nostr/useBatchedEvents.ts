import {
  createSignal,
  createMemo,
  createRoot,
  observable,
  type Accessor,
  type Signal,
} from 'solid-js';
import { type Event as NostrEvent, type Filter, Kind } from 'nostr-tools';
import { createQuery, useQueryClient, type CreateQueryResult } from '@tanstack/solid-query';

import timeout from '@/utils/timeout';
import useBatch, { type Task } from '@/nostr/useBatch';
import eventWrapper from '@/core/event';
import useConfig from './useConfig';
import usePool from './usePool';

type TaskArg =
  | { type: 'Profile'; pubkey: string }
  | { type: 'TextNote'; eventId: string }
  | { type: 'Reactions'; mentionedEventId: string }
  | { type: 'DeprecatedReposts'; mentionedEventId: string }
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

export type UseProfileProps = {
  pubkey: string;
};

type UseProfile = {
  profile: () => Profile | null;
  query: CreateQueryResult<NostrEvent | null>;
};

// Textnote
export type UseTextNoteProps = {
  eventId: string;
};

export type UseTextNote = {
  event: Accessor<NostrEvent | null>;
  query: CreateQueryResult<NostrEvent | null>;
};

// Reactions
export type UseReactionsProps = {
  eventId: string;
};

export type UseReactions = {
  reactions: Accessor<NostrEvent[]>;
  reactionsGroupedByContent: Accessor<Map<string, NostrEvent[]>>;
  isReactedBy: (pubkey: string) => boolean;
  invalidateReactions: () => Promise<void>;
  query: CreateQueryResult<NostrEvent[]>;
};

// DeprecatedReposts
export type UseDeprecatedRepostsProps = {
  eventId: string;
};

export type UseDeprecatedReposts = {
  reposts: Accessor<NostrEvent[]>;
  isRepostedBy: (pubkey: string) => boolean;
  invalidateDeprecatedReposts: () => Promise<void>;
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
  followings: Accessor<Following[]>;
  followingPubkeys: Accessor<string[]>;
  query: CreateQueryResult<NostrEvent | null>;
};

let count = 0;

setInterval(() => console.log('batchSub', count), 1000);

const { exec } = useBatch<TaskArg, TaskRes>(() => ({
  interval: 2000,
  batchSize: 100,
  executor: (tasks) => {
    const profileTasks = new Map<string, Task<TaskArg, TaskRes>[]>();
    const textNoteTasks = new Map<string, Task<TaskArg, TaskRes>[]>();
    const reactionsTasks = new Map<string, Task<TaskArg, TaskRes>[]>();
    const repostsTasks = new Map<string, Task<TaskArg, TaskRes>[]>();
    const followingsTasks = new Map<string, Task<TaskArg, TaskRes>[]>();

    tasks.forEach((task) => {
      if (task.args.type === 'Profile') {
        const current = profileTasks.get(task.args.pubkey) ?? [];
        profileTasks.set(task.args.pubkey, [...current, task]);
      } else if (task.args.type === 'TextNote') {
        const current = textNoteTasks.get(task.args.eventId) ?? [];
        textNoteTasks.set(task.args.eventId, [...current, task]);
      } else if (task.args.type === 'Reactions') {
        const current = reactionsTasks.get(task.args.mentionedEventId) ?? [];
        reactionsTasks.set(task.args.mentionedEventId, [...current, task]);
      } else if (task.args.type === 'DeprecatedReposts') {
        const current = repostsTasks.get(task.args.mentionedEventId) ?? [];
        repostsTasks.set(task.args.mentionedEventId, [...current, task]);
      } else if (task.args.type === 'Followings') {
        const current = followingsTasks.get(task.args.pubkey) ?? [];
        followingsTasks.set(task.args.pubkey, [...current, task]);
      }
    });

    const profilePubkeys = [...profileTasks.keys()];
    const textNoteIds = [...textNoteTasks.keys()];
    const reactionsIds = [...reactionsTasks.keys()];
    const repostsIds = [...repostsTasks.keys()];
    const followingsIds = [...followingsTasks.keys()];

    const filters: Filter[] = [];

    if (profilePubkeys.length > 0) {
      filters.push({ kinds: [Kind.Metadata], authors: profilePubkeys });
    }
    if (textNoteIds.length > 0) {
      filters.push({ kinds: [Kind.Text], ids: textNoteIds });
    }
    if (reactionsIds.length > 0) {
      filters.push({ kinds: [Kind.Reaction], '#e': reactionsIds });
    }
    if (repostsIds.length > 0) {
      filters.push({ kinds: [6], '#e': repostsIds });
    }
    if (followingsIds.length > 0) {
      filters.push({ kinds: [Kind.Contacts], authors: followingsIds });
    }

    if (filters.length === 0) return;

    const signals = new Map<number, Signal<BatchedEvents>>();

    const resolveTasks = (registeredTasks: Task<TaskArg, TaskRes>[], event: NostrEvent) => {
      registeredTasks.forEach((task) => {
        const signal =
          signals.get(task.id) ?? createRoot(() => createSignal({ events: [], completed: false }));
        signals.set(task.id, signal);
        const [batchedEvents, setBatchedEvents] = signal;
        setBatchedEvents((current) => ({
          ...current,
          events: [...current.events, event],
        }));
        task.resolve(batchedEvents);
      });
    };

    const emptyBatchedEvents = () => ({ events: [], completed: true });

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

    const { config } = useConfig();
    const pool = usePool();

    const sub = pool().sub(config().relayUrls, filters);

    count += 1;

    sub.on('event', (event: NostrEvent & { id: string }) => {
      if (event.kind === Kind.Metadata) {
        const registeredTasks = profileTasks.get(event.pubkey) ?? [];
        resolveTasks(registeredTasks, event);
      } else if (event.kind === Kind.Text) {
        const registeredTasks = textNoteTasks.get(event.id) ?? [];
        resolveTasks(registeredTasks, event);
      } else if (event.kind === Kind.Reaction) {
        const eventTags = eventWrapper(event).taggedEvents();
        eventTags.forEach((eventTag) => {
          const taggedEventId = eventTag.id;
          const registeredTasks = reactionsTasks.get(taggedEventId) ?? [];
          resolveTasks(registeredTasks, event);
        });
      } else if ((event.kind as number) === 6) {
        const eventTags = eventWrapper(event).taggedEvents();
        eventTags.forEach((eventTag) => {
          const taggedEventId = eventTag.id;
          const registeredTasks = repostsTasks.get(taggedEventId) ?? [];
          resolveTasks(registeredTasks, event);
        });
      } else if (event.kind === Kind.Contacts) {
        const registeredTasks = followingsTasks.get(event.pubkey) ?? [];
        resolveTasks(registeredTasks, event);
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
  const props = createMemo(propsProvider);
  const queryClient = useQueryClient();

  const query = createQuery(
    () => ['useProfile', props()] as const,
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
            console.error('updating profile error', err);
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
      console.error('failed to parse profile (kind 0): ', err, content);
      return null;
    }
  });

  return { profile, query };
};

export const useTextNote = (propsProvider: () => UseTextNoteProps | null): UseTextNote => {
  const props = createMemo(propsProvider);
  const queryClient = useQueryClient();

  const query = createQuery(
    () => ['useTextNote', props()] as const,
    ({ queryKey, signal }) => {
      const [, currentProps] = queryKey;
      if (currentProps == null) return null;
      const { eventId } = currentProps;
      const promise = exec({ type: 'TextNote', eventId }, signal).then((batchedEvents) => {
        const event = batchedEvents().events[0];
        if (event == null) throw new Error(`event not found: ${eventId}`);
        return event;
      });
      return timeout(15000, `useTextNote: ${eventId}`)(promise);
    },
    {
      // Text notes never change, so they can be stored for a long time.
      staleTime: 4 * 60 * 60 * 1000, // 4 hour
      cacheTime: 4 * 60 * 60 * 1000, // 4 hour
    },
  );

  const event = () => query.data;

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

  const invalidateReactions = (): Promise<void> => queryClient.invalidateQueries(genQueryKey());

  return { reactions, reactionsGroupedByContent, isReactedBy, invalidateReactions, query };
};

export const useDeprecatedReposts = (
  propsProvider: () => UseDeprecatedRepostsProps,
): UseDeprecatedReposts => {
  const queryClient = useQueryClient();
  const props = createMemo(propsProvider);
  const genQueryKey = createMemo(() => ['useDeprecatedReposts', props()] as const);

  const query = createQuery(
    genQueryKey,
    ({ queryKey, signal }) => {
      const [, currentProps] = queryKey;
      if (currentProps == null) return [];
      const { eventId: mentionedEventId } = currentProps;
      const promise = exec({ type: 'DeprecatedReposts', mentionedEventId }, signal).then(
        (batchedEvents) => {
          const events = () => batchedEvents().events;
          observable(batchedEvents).subscribe(() => {
            queryClient.setQueryData(queryKey, events());
          });
          return events();
        },
      );
      return timeout(15000, `useDeprecatedReposts: ${mentionedEventId}`)(promise);
    },
    {
      staleTime: 1 * 60 * 1000, // 1 min
      cacheTime: 4 * 60 * 60 * 1000, // 4 hour
    },
  );

  const reposts = () => query.data ?? [];

  const isRepostedBy = (pubkey: string): boolean =>
    reposts().findIndex((event) => event.pubkey === pubkey) !== -1;

  const invalidateDeprecatedReposts = (): Promise<void> =>
    queryClient.invalidateQueries(genQueryKey());

  return { reposts, isRepostedBy, invalidateDeprecatedReposts, query };
};

export const useFollowings = (propsProvider: () => UseFollowingsProps | null): UseFollowings => {
  const queryClient = useQueryClient();
  const props = createMemo(propsProvider);
  const genQueryKey = () => ['useFollowings', props()] as const;

  const query = createQuery(
    genQueryKey,
    ({ queryKey, signal }) => {
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
            console.error('updating followings error', err);
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
    },
  );

  const followings = () => {
    if (query.data == null) return [];

    const event = query.data;

    const result: Following[] = [];
    event.tags.forEach((tag) => {
      // TODO zodにする
      const [tagName, followingPubkey, mainRelayUrl, petname] = tag;
      if (!tag.every((e) => typeof e === 'string')) return;
      if (tagName !== 'p') return;

      const following: Following = { pubkey: followingPubkey, petname };
      if (mainRelayUrl != null && mainRelayUrl.length > 0) {
        following.mainRelayUrl = mainRelayUrl;
      }

      result.push(following);
    });

    return result;
  };

  const followingPubkeys = (): string[] => followings().map((follow) => follow.pubkey);

  return { followings, followingPubkeys, query };
};

export default useFollowings;
