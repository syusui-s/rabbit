import {
  createSignal,
  createEffect,
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
import useSubscription from '@/nostr/useSubscription';
import useConfig from './useConfig';

type TaskArg =
  | { type: 'Profile'; pubkey: string }
  | { type: 'TextNote'; eventId: string }
  | { type: 'Reactions'; mentionedEventId: string }
  | { type: 'DeprecatedReposts'; mentionedEventId: string };

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
  profile: () => Profile | undefined;
  query: CreateQueryResult<NostrEvent | undefined>;
};

// Textnote
export type UseTextNoteProps = {
  eventId: string;
};

export type UseTextNote = {
  event: Accessor<NostrEvent | undefined>;
  query: CreateQueryResult<NostrEvent | undefined>;
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

const { exec } = useBatch<TaskArg, TaskRes>(() => ({
  executor: (tasks) => {
    const profileTasks = new Map<string, Task<TaskArg, TaskRes>[]>();
    const textNoteTasks = new Map<string, Task<TaskArg, TaskRes>[]>();
    const reactionsTasks = new Map<string, Task<TaskArg, TaskRes>[]>();
    const repostsTasks = new Map<string, Task<TaskArg, TaskRes>[]>();

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
      }
    });

    const profilePubkeys = [...profileTasks.keys()];
    const textNoteIds = [...textNoteTasks.keys()];
    const reactionsIds = [...reactionsTasks.keys()];
    const repostsIds = [...repostsTasks.keys()];

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

    useSubscription(() => ({
      relayUrls: config().relayUrls,
      filters,
      continuous: false,
      onEvent: (event: NostrEvent & { id: string }) => {
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
        }
      },
      onEOSE: () => {
        finalizeTasks();
      },
    }));
  },
}));

export const useProfile = (propsProvider: () => UseProfileProps | null): UseProfile => {
  const props = createMemo(propsProvider);
  const queryClient = useQueryClient();

  const query = createQuery(
    () => ['useProfile', props()] as const,
    ({ queryKey, signal }) => {
      const [, currentProps] = queryKey;
      if (currentProps == null) return undefined;
      const { pubkey } = currentProps;
      const promise = exec({ type: 'Profile', pubkey }, signal).then((batchedEvents) => {
        const latestEvent = () => {
          const { events } = batchedEvents();
          if (events.length === 0) throw new Error(`profile not found: ${pubkey}`);
          const latest = events.reduce((a, b) => (a.created_at > b.created_at ? a : b));
          return latest;
        };
        observable(batchedEvents).subscribe(() => {
          try {
            queryClient.setQueryData(queryKey, latestEvent());
          } catch (err) {
            console.error(err);
          }
        });
        return latestEvent();
      });
      // TODO timeoutと同時にsignalでキャンセルするようにしたい
      return timeout(15000, `useProfile: ${pubkey}`)(promise);
    },
    {
      // profile is updated occasionally
      staleTime: 5 * 60 * 1000, // 5min
      cacheTime: 24 * 60 * 60 * 1000, // 1day
    },
  );

  const profile = createMemo((): Profile | undefined => {
    if (query.data == null) return undefined;
    const { content } = query.data;
    if (content == null || content.length === 0) return undefined;
    // TODO 大きすぎたりしないかどうか、JSONかどうかのチェック
    try {
      return JSON.parse(content) as Profile;
    } catch (err) {
      console.error('failed to parse profile (kind 0): ', err, content);
      return undefined;
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
      if (currentProps == null) return undefined;
      const { eventId } = currentProps;
      const promise = exec({ type: 'TextNote', eventId }, signal).then((batchedEvents) => {
        const event = batchedEvents().events[0];
        if (event == null) throw new Error(`event not found: ${eventId}`);
        return event;
      });
      return timeout(15000, `useTextNote: ${eventId}`)(promise);
    },
    {
      // text note cannot be updated.
      staleTime: 24 * 60 * 60 * 1000, // 1 day
      cacheTime: 24 * 60 * 60 * 1000, // 1 day
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
          setTimeout(() => {
            observable(batchedEvents).subscribe(() => {
              queryClient.setQueryData(queryKey, events());
            });
          });
          return events();
        },
      );
      return timeout(15000, `useReactions: ${mentionedEventId}`)(promise);
    },
    {
      staleTime: 1 * 60 * 1000, // 1 min
      cacheTime: 5 * 60 * 1000, // 5 min
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
          setTimeout(() => {
            observable(batchedEvents).subscribe(() => {
              queryClient.setQueryData(queryKey, events());
            });
          });
          return events();
        },
      );
      return timeout(15000, `useDeprecatedReposts: ${mentionedEventId}`)(promise);
    },
    {
      staleTime: 1 * 60 * 1000, // 1 min
      cacheTime: 5 * 60 * 1000, // 5 min
    },
  );

  const reposts = () => query.data ?? [];

  const isRepostedBy = (pubkey: string): boolean =>
    reposts().findIndex((event) => event.pubkey === pubkey) !== -1;

  const invalidateDeprecatedReposts = (): Promise<void> =>
    queryClient.invalidateQueries(genQueryKey());

  return { reposts, isRepostedBy, invalidateDeprecatedReposts, query };
};
