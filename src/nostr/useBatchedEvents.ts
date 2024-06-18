import { createRoot } from 'solid-js';

import { type Filter } from 'nostr-tools/filter';
import * as Kind from 'nostr-tools/kinds';
import { type Event as NostrEvent } from 'nostr-tools/pure';
import { insertEventIntoDescendingList } from 'nostr-tools/utils';

import useConfig from '@/core/useConfig';
import { genericEvent } from '@/nostr/event';
import { pickLatestEvent } from '@/nostr/event/comparator';
import usePool from '@/nostr/usePool';
import useStats from '@/nostr/useStats';
import ObservableTask from '@/utils/batch/ObservableTask';
import useBatch from '@/utils/batch/useBatch';

export type ProfileTask = { type: 'Profile'; pubkey: string };
export type EventTask = { type: 'Event'; eventId: string };
export type ReactionsTask = { type: 'Reactions'; mentionedEventId: string };
export type ZapReceiptsTask = { type: 'ZapReceipts'; mentionedEventId: string };
export type RepostsTask = { type: 'Reposts'; mentionedEventId: string };
export type FollowingsTask = { type: 'Followings'; pubkey: string };
export type ReplaceableEventTask = {
  type: 'ReplaceableEvent';
  kind: number;
  author: string;
};
export type ParameterizedReplaceableEventTask = {
  type: 'ParameterizedReplaceableEvent';
  kind: number;
  author: string;
  identifier: string;
};

export type TaskArgs = [
  ProfileTask,
  EventTask,
  FollowingsTask,
  ReactionsTask,
  RepostsTask,
  ZapReceiptsTask,
  ReplaceableEventTask,
  ParameterizedReplaceableEventTask,
];

type TaskArg = TaskArgs[number];

export class BatchedEventsTask<T = TaskArg> extends ObservableTask<T, NostrEvent[]> {
  addEvent(event: NostrEvent) {
    this.updateWith((current) => insertEventIntoDescendingList(current ?? [], event));
  }

  firstEventPromise(): Promise<NostrEvent> {
    return this.toUpdatePromise().then((events) => events[0]);
  }

  latestEventPromise(): Promise<NostrEvent> {
    return this.toCompletePromise().then((events) => {
      const latest = pickLatestEvent(events);
      if (latest == null) throw new Error('event not found');
      return latest;
    });
  }
}

const isBatchedEventsTaskOf =
  <T extends TaskArg>(taskType: T['type']) =>
  (task: BatchedEventsTask): task is BatchedEventsTask<T> =>
    task.req.type === taskType;

let count = 0;

const { setActiveBatchSubscriptions } = useStats();

setInterval(() => {
  setActiveBatchSubscriptions(count);
}, 1000);

const keyForReplaceableEvent = ({ kind, author }: { kind: number; author: string }) =>
  `${kind}:${author}`;

const keyForParameterizedReplaceableEvent = ({
  kind,
  author,
  identifier,
}: {
  kind: number;
  author: string;
  identifier: string;
}) => `${kind}:${author}:${identifier}`;

type AggregatedTasks<T extends TaskArg> = {
  tasks: Map<string, BatchedEventsTask<T>[]>;
  add: (task: BatchedEventsTask<T>) => void;
  buildFilter: () => Filter[];
  resolve: (event: NostrEvent) => boolean;
};

const createTasks = <T extends TaskArg>({
  keyExtractor,
  filtersBuilder,
  eventKeyExtractor,
}: {
  keyExtractor: (e: T) => string;
  filtersBuilder: (keys: string[]) => Filter[];
  eventKeyExtractor: (e: NostrEvent) => string | null | undefined;
}): AggregatedTasks<T> => {
  const tasks = new Map<string, BatchedEventsTask<T>[]>();

  const add = (task: BatchedEventsTask<T>) => {
    const key = keyExtractor(task.req);
    const current = tasks.get(key) ?? [];
    tasks.set(key, [...current, task]);
  };

  const buildFilter = (): Filter[] => {
    const keys = Array.from(tasks.keys());
    if (keys.length === 0) {
      return [];
    }
    return filtersBuilder(keys);
  };

  const resolve = (event: NostrEvent): boolean => {
    const key = eventKeyExtractor(event);

    if (key == null) return false;

    const foundTasks = tasks.get(key) ?? [];

    if (foundTasks.length === 0) {
      return false;
    }

    foundTasks.forEach((task) => {
      task.addEvent(event);
    });
    return true;
  };

  return { tasks, add, buildFilter, resolve };
};

export const tasksRequestBuilder = (tasks: BatchedEventsTask[]) => {
  const eventTasks = createTasks<EventTask>({
    keyExtractor: (req) => req.eventId,
    filtersBuilder: (ids) => [{ ids }],
    eventKeyExtractor: (ev) => ev.id,
  });
  const profileTasks = createTasks<ProfileTask>({
    keyExtractor: (req) => req.pubkey,
    filtersBuilder: (authors) => [{ kinds: [Kind.Metadata], authors }],
    eventKeyExtractor: (ev) => ev.pubkey,
  });
  const followingsTasks = createTasks<FollowingsTask>({
    keyExtractor: (req) => req.pubkey,
    filtersBuilder: (authors) => [{ kinds: [Kind.Contacts], authors }],
    eventKeyExtractor: (ev) => ev.pubkey,
  });
  const repostsTasks = createTasks<RepostsTask>({
    keyExtractor: (req) => req.mentionedEventId,
    filtersBuilder: (ids) => [{ kinds: [Kind.Repost], '#e': ids }],
    // Use the last event id for compatibility
    eventKeyExtractor: (ev) => genericEvent(ev).lastTaggedEventId(),
  });
  const reactionsTasks = createTasks<ReactionsTask>({
    keyExtractor: (req) => req.mentionedEventId,
    filtersBuilder: (ids) => [{ kinds: [Kind.Reaction], '#e': ids }],
    // Use the last event id for compatibility
    eventKeyExtractor: (ev) => genericEvent(ev).lastTaggedEventId(),
  });
  const zapReceiptsTasks = createTasks<ZapReceiptsTask>({
    keyExtractor: (req) => req.mentionedEventId,
    filtersBuilder: (ids) => [{ kinds: [Kind.Zap], '#e': ids }],
    eventKeyExtractor: (ev) => genericEvent(ev).lastTaggedEventId(),
  });
  const replaceableEventsTasks = createTasks<ReplaceableEventTask>({
    keyExtractor: keyForReplaceableEvent,
    filtersBuilder: (keys) => {
      const result: Filter[] = [];
      keys.forEach((key) => {
        const task = replaceableEventsTasks.tasks.get(key)?.[0];
        if (task == null) return;
        const { kind, author } = task.req;
        result.push({ kinds: [kind], authors: [author] });
      });
      return result;
    },
    eventKeyExtractor: (ev) => keyForReplaceableEvent({ kind: ev.kind, author: ev.pubkey }),
  });
  const parameterizedReplaceableEventsTasks = createTasks<ParameterizedReplaceableEventTask>({
    keyExtractor: keyForParameterizedReplaceableEvent,
    filtersBuilder: (keys) => {
      const result: Filter[] = [];
      keys.forEach((key) => {
        const task = parameterizedReplaceableEventsTasks.tasks.get(key)?.[0];
        if (task == null) return;
        const { kind, author, identifier } = task.req;
        result.push({ kinds: [kind], authors: [author], '#d': [identifier] });
      });
      return result;
    },
    eventKeyExtractor: (ev) => {
      const identifier = genericEvent(ev).findFirstTagByName('d')?.[1];
      if (identifier == null) return undefined;
      return keyForParameterizedReplaceableEvent({
        kind: ev.kind,
        author: ev.pubkey,
        identifier,
      });
    },
  });

  const add = (task: BatchedEventsTask) => {
    if (isBatchedEventsTaskOf<EventTask>('Event')(task)) {
      eventTasks.add(task);
    } else if (isBatchedEventsTaskOf<ProfileTask>('Profile')(task)) {
      profileTasks.add(task);
    } else if (isBatchedEventsTaskOf<FollowingsTask>('Followings')(task)) {
      followingsTasks.add(task);
    } else if (isBatchedEventsTaskOf<RepostsTask>('Reposts')(task)) {
      repostsTasks.add(task);
    } else if (isBatchedEventsTaskOf<ReactionsTask>('Reactions')(task)) {
      reactionsTasks.add(task);
    } else if (isBatchedEventsTaskOf<ZapReceiptsTask>('ZapReceipts')(task)) {
      zapReceiptsTasks.add(task);
    } else if (isBatchedEventsTaskOf<ReplaceableEventTask>('ReplaceableEvent')(task)) {
      replaceableEventsTasks.add(task);
    } else if (
      isBatchedEventsTaskOf<ParameterizedReplaceableEventTask>('ParameterizedReplaceableEvent')(
        task,
      )
    ) {
      parameterizedReplaceableEventsTasks.add(task);
    } else {
      throw new Error(`unknown task: ${task.req.type}`);
    }
  };

  const buildFilters = (): Filter[] => [
    ...eventTasks.buildFilter(),
    ...profileTasks.buildFilter(),
    ...followingsTasks.buildFilter(),
    ...repostsTasks.buildFilter(),
    ...reactionsTasks.buildFilter(),
    ...zapReceiptsTasks.buildFilter(),
    ...replaceableEventsTasks.buildFilter(),
    ...parameterizedReplaceableEventsTasks.buildFilter(),
  ];

  const resolve = (event: NostrEvent) => {
    if (event.kind === Kind.Metadata) {
      if (profileTasks.resolve(event)) return;
    }
    if (event.kind === Kind.Contacts) {
      if (followingsTasks.resolve(event)) return;
    }
    if (event.kind === Kind.Repost) {
      if (repostsTasks.resolve(event)) return;
    }
    if (event.kind === Kind.Reaction) {
      if (reactionsTasks.resolve(event)) return;
    }
    if (event.kind === Kind.Zap) {
      if (zapReceiptsTasks.resolve(event)) return;
    }
    if (Kind.isReplaceableKind(event.kind)) {
      if (replaceableEventsTasks.resolve(event)) return;
    }
    if (Kind.isParameterizedReplaceableKind(event.kind)) {
      if (parameterizedReplaceableEventsTasks.resolve(event)) return;
    }
    eventTasks.resolve(event);
  };

  tasks.forEach((task) => {
    add(task);
  });

  return {
    tasks: {
      eventTasks,
      profileTasks,
      followingsTasks,
      repostsTasks,
      reactionsTasks,
      zapReceiptsTasks,
      replaceableEventsTasks,
      parameterizedReplaceableEventsTasks,
    },
    add,
    buildFilters,
    resolve,
  };
};

const { addTask, removeTask } = createRoot(() => {
  const { config } = useConfig();
  const pool = usePool();

  return useBatch<BatchedEventsTask>(() => ({
    interval: 2000,
    batchSize: 150,
    executor: (tasks) => {
      const builder = tasksRequestBuilder(tasks);
      const filters = builder.buildFilters();

      if (filters.length === 0) return;

      const finalizeTasks = () => {
        tasks.forEach((task) => {
          task.complete();
        });
      };

      count += 1;
      const sub = pool().subscribeMany(config().relayUrls, filters, {
        eoseTimeout: 15000,
        onevent: (event: NostrEvent) => {
          builder.resolve(event);
        },
        oneose: () => {
          finalizeTasks();
          sub.close();
          count -= 1;
        },
      });
    },
  }));
});

export const registerTask = ({
  task,
  signal,
}: {
  task: BatchedEventsTask<TaskArg>;
  signal?: AbortSignal;
}) => {
  addTask(task);
  signal?.addEventListener('abort', () => removeTask(task));
};
