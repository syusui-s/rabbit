import { createSignal, createEffect, onCleanup } from 'solid-js';

export type Task<TaskArgs, TaskResult> = {
  id: number;
  args: TaskArgs;
  resolve: (result: TaskResult) => void;
  reject: (error: any) => void;
};

export type UseBatchProps<TaskArgs, TaskResult> = {
  executor: (task: Task<TaskArgs, TaskResult>[]) => void;
  interval?: number;
  // batchSize: number;
};

export type PromiseWithCallbacks<T> = {
  promise: Promise<T>;
  resolve: (e: T) => void;
  reject: (e: any) => void;
};

const promiseWithCallbacks = <T>(): PromiseWithCallbacks<T> => {
  let resolve: ((e: T) => void) | undefined;
  let reject: ((e: any) => void) | undefined;

  const promise = new Promise<T>((resolveFn, rejectFn) => {
    resolve = resolveFn;
    reject = rejectFn;
  });

  if (resolve == null || reject == null) {
    throw new Error('PromiseWithCallbacks failed to extract callbacks');
  }

  return { promise, resolve, reject };
};

const useBatch = <TaskArgs, TaskResult>(
  propsProvider: () => UseBatchProps<TaskArgs, TaskResult>,
) => {
  const [seqId, setSeqId] = createSignal<number>(0);
  const [taskQueue, setTaskQueue] = createSignal<Task<TaskArgs, TaskResult>[]>([]);

  createEffect(() => {
    const { executor, interval = 1000 } = propsProvider();
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    if (timeoutId == null && taskQueue().length > 0) {
      timeoutId = setTimeout(() => {
        const currentTaskQueue = taskQueue();
        if (currentTaskQueue.length > 0) {
          setTaskQueue([]);
          executor(currentTaskQueue);
        }
        timeoutId = undefined;
      }, interval);
    }
  });

  const nextId = (): number => {
    const id = seqId();
    setSeqId((currentId) => currentId + 1);
    return id;
  };

  // enqueue task and wait response
  const exec = async (args: TaskArgs, signal?: AbortSignal): Promise<TaskResult> => {
    const { promise, resolve, reject } = promiseWithCallbacks<TaskResult>();
    const id = nextId();
    const newTask: Task<TaskArgs, TaskResult> = { id, args, resolve, reject };

    signal?.addEventListener('abort', () => {
      reject(new Error('AbortError'));
      setTaskQueue((currentTaskQueue) => currentTaskQueue.filter((task) => task.id !== newTask.id));
    });

    setTaskQueue((currentTaskQueue) => [...currentTaskQueue, newTask]);

    return promise;
  };

  return { exec };
};

export default useBatch;
