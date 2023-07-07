import { type Event as NostrEvent, type Filter, Kind } from 'nostr-tools';

import useConfig from '@/core/useConfig';
import { genericEvent } from '@/nostr/event';
import usePool from '@/nostr/usePool';
import useStats from '@/nostr/useStats';
import ObservableTask from '@/utils/batch/ObservableTask';
import useBatch from '@/utils/batch/useBatch';

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
  | FollowingsTask
  | ReactionsTask
  | ZapReceiptsTask
  | RepostsTask
  | ParameterizedReplaceableEventTask;

export const pickLatestEvent = (events: NostrEvent[]): NostrEvent | null => {
  if (events.length === 0) return null;
  return events.reduce((a, b) => {
    const diff = a.created_at - b.created_at;
    if (diff > 0) return a;
    if (diff < 0) return b;
    return a.id < b.id ? a : b;
  });
};

export class BatchedEventsTask extends ObservableTask<TaskArg, NostrEvent[]> {
  addEvent(event: NostrEvent) {
    this.updateWith((current) => [...(current ?? []), event]);
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

let count = 0;

const { setActiveBatchSubscriptions } = useStats();

setInterval(() => {
  setActiveBatchSubscriptions(count);
}, 1000);

const isParameterizedReplaceableEvent = (event: NostrEvent) =>
  event.kind >= 30000 && event.kind < 40000;

const keyForParameterizedReplaceableEvent = ({
  kind,
  author,
  identifier,
}: ParameterizedReplaceableEventTask) => `${kind}:${author}:${identifier}`;

const { addTask, removeTask } = useBatch<BatchedEventsTask>(() => ({
  interval: 2000,
  batchSize: 150,
  executor: (tasks) => {
    const profileTasks = new Map<string, BatchedEventsTask[]>();
    const eventTasks = new Map<string, BatchedEventsTask[]>();
    const reactionsTasks = new Map<string, BatchedEventsTask[]>();
    const repostsTasks = new Map<string, BatchedEventsTask[]>();
    const zapReceiptsTasks = new Map<string, BatchedEventsTask[]>();
    const parameterizedReplaceableEventsTasks = new Map<string, BatchedEventsTask[]>();
    const followingsTasks = new Map<string, BatchedEventsTask[]>();

    tasks.forEach((task) => {
      if (task.req.type === 'Event') {
        const current = eventTasks.get(task.req.eventId) ?? [];
        eventTasks.set(task.req.eventId, [...current, task]);
      } else if (task.req.type === 'Profile') {
        const current = profileTasks.get(task.req.pubkey) ?? [];
        profileTasks.set(task.req.pubkey, [...current, task]);
      } else if (task.req.type === 'Reactions') {
        const current = reactionsTasks.get(task.req.mentionedEventId) ?? [];
        reactionsTasks.set(task.req.mentionedEventId, [...current, task]);
      } else if (task.req.type === 'Reposts') {
        const current = repostsTasks.get(task.req.mentionedEventId) ?? [];
        repostsTasks.set(task.req.mentionedEventId, [...current, task]);
      } else if (task.req.type === 'ZapReceipts') {
        const current = zapReceiptsTasks.get(task.req.mentionedEventId) ?? [];
        repostsTasks.set(task.req.mentionedEventId, [...current, task]);
      } else if (task.req.type === 'ParameterizedReplaceableEvent') {
        const key = keyForParameterizedReplaceableEvent(task.req);
        const current = parameterizedReplaceableEventsTasks.get(key) ?? [];
        parameterizedReplaceableEventsTasks.set(key, [...current, task]);
      } else if (task.req.type === 'Followings') {
        const current = followingsTasks.get(task.req.pubkey) ?? [];
        followingsTasks.set(task.req.pubkey, [...current, task]);
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
        if (firstTask.req.type !== 'ParameterizedReplaceableEvent') return;
        const {
          req: { kind, author, identifier },
        } = firstTask;
        filters.push({ kinds: [kind], authors: [author], '#d': [identifier] });
      });
    }

    if (filters.length === 0) return;

    const resolveTasks = (registeredTasks: BatchedEventsTask[], event: NostrEvent) => {
      registeredTasks.forEach((task) => {
        task.addEvent(event);
      });
    };

    const finalizeTasks = () => {
      tasks.forEach((task) => {
        task.complete();
      });
    };

    const { config } = useConfig();
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

export const registerTask = ({
  task,
  signal,
}: {
  task: BatchedEventsTask;
  signal?: AbortSignal;
}) => {
  addTask(task);
  signal?.addEventListener('abort', () => removeTask(task));
};
