import { createSignal, type Accessor, type Signal } from 'solid-js';

import { type Event as NostrEvent, type Filter, Kind } from 'nostr-tools';

import useConfig from '@/core/useConfig';
import { genericEvent } from '@/nostr/event';
import useBatch, { type Task } from '@/nostr/useBatch';
import usePool from '@/nostr/usePool';
import useStats from '@/nostr/useStats';

type ProfileTask = { type: 'Profile'; pubkey: string };
type EventTask = { type: 'Event'; eventId: string };
type ReactionsTask = { type: 'Reactions'; mentionedEventId: string };
type ZapReceiptsTask = { type: 'ZapReceipts'; mentionedEventId: string };
type RepostsTask = { type: 'Reposts'; mentionedEventId: string };
type FollowingsTask = { type: 'Followings'; pubkey: string };
type ParameterizedReplaceableEventTask = {
  type: 'ParameterizedReplaceableEvent';
  kind: number;
  author: string;
  identifier: string;
};

type TaskArg =
  | ProfileTask
  | EventTask
  | ReactionsTask
  | ZapReceiptsTask
  | RepostsTask
  | FollowingsTask
  | ParameterizedReplaceableEventTask;

type BatchedEvents = { completed: boolean; events: NostrEvent[] };

type TaskRes = Accessor<BatchedEvents>;

let count = 0;

const { setActiveBatchSubscriptions } = useStats();

setInterval(() => {
  setActiveBatchSubscriptions(count);
}, 1000);

const EmptyBatchedEvents = { events: [], completed: true };
const emptyBatchedEvents = () => EmptyBatchedEvents;

const isParameterizedReplaceableEvent = (event: NostrEvent) =>
  event.kind >= 30000 && event.kind < 40000;

const keyForParameterizedReplaceableEvent = ({
  kind,
  author,
  identifier,
}: ParameterizedReplaceableEventTask) => `${kind}:${author}:${identifier}`;

export const { exec } = useBatch<TaskArg, TaskRes>(() => ({
  interval: 2000,
  batchSize: 150,
  executor: (tasks) => {
    const profileTasks = new Map<string, Task<TaskArg, TaskRes>[]>();
    const eventTasks = new Map<string, Task<TaskArg, TaskRes>[]>();
    const reactionsTasks = new Map<string, Task<TaskArg, TaskRes>[]>();
    const repostsTasks = new Map<string, Task<TaskArg, TaskRes>[]>();
    const zapReceiptsTasks = new Map<string, Task<TaskArg, TaskRes>[]>();
    const parameterizedReplaceableEventsTasks = new Map<string, Task<TaskArg, TaskRes>[]>();
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
      } else if (task.args.type === 'ParameterizedReplaceableEvent') {
        const key = keyForParameterizedReplaceableEvent(task.args);
        const current = parameterizedReplaceableEventsTasks.get(key) ?? [];
        parameterizedReplaceableEventsTasks.set(key, [...current, task]);
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
    if (parameterizedReplaceableEventsTasks.size > 0) {
      Array.from(parameterizedReplaceableEventsTasks.values()).forEach(([firstTask]) => {
        if (firstTask.args.type !== 'ParameterizedReplaceableEvent') return;
        const {
          args: { kind, author, identifier },
        } = firstTask;
        filters.push({ kinds: [kind], authors: [author], '#d': [identifier] });
      });
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
        const id = genericEvent(event).lastTaggedEventId();
        if (id != null) {
          const registeredTasks = reactionsTasks.get(id) ?? [];
          resolveTasks(registeredTasks, event);
        }
      } else if ((event.kind as number) === 6) {
        // Use the last event id
        const id = genericEvent(event).lastTaggedEventId();
        if (id != null) {
          const registeredTasks = repostsTasks.get(id) ?? [];
          resolveTasks(registeredTasks, event);
        }
      } else if (event.kind === Kind.Zap) {
        const eTags = genericEvent(event).eTags();
        eTags.forEach(([, id]) => {
          const registeredTasks = repostsTasks.get(id) ?? [];
          resolveTasks(registeredTasks, event);
        });
      } else if (event.kind === Kind.Contacts) {
        const registeredTasks = followingsTasks.get(event.pubkey) ?? [];
        resolveTasks(registeredTasks, event);
      } else if (isParameterizedReplaceableEvent(event)) {
        const identifier = genericEvent(event).findFirstTagByName('d')?.[1];
        if (identifier != null) {
          const key = `${event.kind}:${event.pubkey}:${identifier}`;
          const registeredTasks = parameterizedReplaceableEventsTasks.get(key) ?? [];
          resolveTasks(registeredTasks, event);
        } else {
          console.warn('identifier is undefined');
        }
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

export const pickLatestEvent = (events: NostrEvent[]): NostrEvent | null => {
  if (events.length === 0) return null;
  return events.reduce((a, b) => (a.created_at > b.created_at ? a : b));
};
