/**
 * This file is licensed under MIT license, not AGPL.
 *
 * Copyright (c) 2023 Syusui Moyatani
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
import { matchFilter, type Filter, type Event as NostrEvent, type SimplePool } from 'nostr-tools';

export type BatchExecutorConstructor<Task> = {
  executor: (reqs: Task[]) => void;
  interval: number;
  size: number;
};

let incrementalId = 0;

const nextId = (): number => {
  const currentId = incrementalId;
  incrementalId += 1;
  return currentId;
};

export class ObservableTask<BatchRequest, BatchResponse> {
  id: number;

  req: BatchRequest;

  res: BatchResponse | undefined;

  isCompleted = false;

  #updateListeners: ((res: BatchResponse) => void)[] = [];

  #completeListeners: (() => void)[] = [];

  #promise: Promise<BatchResponse> | undefined;

  constructor(req: BatchRequest) {
    this.id = nextId();
    this.req = req;
  }

  #executeUpdateListeners() {
    const { res } = this;
    if (res != null) {
      this.#updateListeners.forEach((listener) => {
        listener(res);
      });
    }
  }

  update(res: BatchResponse) {
    this.res = res;
    this.#executeUpdateListeners();
  }

  updateWith(f: (current: BatchResponse | undefined) => BatchResponse) {
    this.res = f(this.res);
    this.#executeUpdateListeners();
  }

  complete() {
    this.isCompleted = true;
    this.#completeListeners.forEach((listener) => {
      listener();
    });
  }

  onUpdate(f: (res: BatchResponse) => void) {
    this.#updateListeners.push(f);
  }

  onComplete(f: () => void) {
    this.#completeListeners.push(f);
  }

  toPromise(): Promise<BatchResponse> {
    if (this.#promise == null) {
      this.#promise = new Promise((resolve, reject) => {
        this.onComplete(() => {
          if (this.res != null) {
            resolve(this.res);
          } else {
            reject();
          }
        });
      });
    }
    return this.#promise;
  }
}

export class BatchExecutor<Task> {
  #executor: (reqs: Task[]) => void;

  #interval: number;

  #size: number;

  #tasks: Task[] = [];

  #timerId: ReturnType<typeof setTimeout> | null = null;

  constructor({ executor, interval, size }: BatchExecutorConstructor<Task>) {
    this.#executor = executor;
    this.#interval = interval;
    this.#size = size;
  }

  #executeTasks() {
    this.#executor(this.#tasks);
    this.#tasks = [];
  }

  #startTimerIfNotStarted() {
    if (this.#timerId == null) {
      this.#timerId = setTimeout(() => {
        this.#executeTasks();
        this.stop();
      }, this.#interval);
    }
  }

  pushTask(task: Task) {
    this.#tasks.push(task);
    if (this.#tasks.length < this.#size) {
      this.#startTimerIfNotStarted();
    } else {
      this.#executeTasks();
    }
  }

  stop() {
    if (this.#timerId != null) {
      clearTimeout(this.#timerId);
      this.#timerId = null;
    }
  }
}

export type BatchSubscriptionTask = ObservableTask<Filter[], NostrEvent[]>;

export class BatchSubscription {
  #batchExecutor: BatchExecutor<BatchSubscriptionTask>;

  constructor(pool: SimplePool, relays: string[]) {
    this.#batchExecutor = new BatchExecutor<BatchSubscriptionTask>({
      interval: 2000,
      size: 50,
      executor: (tasks) => {
        const filterTaskMap = new Map<Filter, BatchSubscriptionTask>();
        tasks.forEach((task) => {
          const filters = task.req;
          filters.forEach((filter) => {
            filterTaskMap.set(filter, task);
          });
        });

        const mergedFilter = [...filterTaskMap.keys()];
        const sub = pool.sub(relays, mergedFilter);
        const filterEvents = new Map<Filter, NostrEvent[]>();

        sub.on('event', (event: NostrEvent & { id: string }) => {
          mergedFilter.forEach((filter) => {
            if (matchFilter(filter, event)) {
              const task = filterTaskMap.get(filter);
              if (task == null) {
                console.error('task for filter not found', filter);
                return;
              }
              task.updateWith((current) => {
                if (current == null) return [event];
                return [...current, event];
              });
            }
          });
        });

        sub.on('eose', () => {
          tasks.forEach((task) => {
            task.complete();
          });
          sub.unsub();
        });
      },
    });
  }

  sub(filters: Filter[]): BatchSubscriptionTask {
    const task = new ObservableTask<Filter[], NostrEvent[]>(filters);
    this.#batchExecutor.pushTask(task);
    return task;
  }
}
