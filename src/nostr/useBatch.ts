import { createSignal, createMemo } from 'solid-js';

export type Task<TaskArgs, TaskResult> = {
  id: number;
  args: TaskArgs;
  resolve: (result: TaskResult) => void;
  reject: (error: any) => void;
};

export type UseBatchProps<TaskArgs, TaskResult> = {
  executor: (tasks: Task<TaskArgs, TaskResult>[]) => void;
  interval?: number;
  batchSize?: number;
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
  const props = createMemo(propsProvider);
  const batchSize = createMemo(() => props().batchSize ?? 100);
  const interval = createMemo(() => props().interval ?? 2000);

  const [seqId, setSeqId] = createSignal<number>(0);
  const [taskQueue, setTaskQueue] = createSignal<Task<TaskArgs, TaskResult>[]>([]);

  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  const executeTasks = () => {
    const { executor } = props();
    const currentTaskQueue = taskQueue();

    if (currentTaskQueue.length > 0) {
      setTaskQueue([]);
      executor(currentTaskQueue);
    }
    if (timeoutId != null) clearTimeout(timeoutId);
    timeoutId = undefined;
  };

  const nextId = (): number => {
    const id = seqId();
    setSeqId((currentId) => currentId + 1);
    return id;
  };

  const launchTimer = () => {
    if (timeoutId == null) {
      timeoutId = setTimeout(() => {
        executeTasks();
      }, interval());
    }
  };

  const addTask = (task: Task<TaskArgs, TaskResult>) => {
    if (taskQueue().length < batchSize()) {
      setTaskQueue((currentTaskQueue) => [...currentTaskQueue, task]);
    } else {
      executeTasks();
      setTaskQueue([task]);
    }
  };

  const removeTask = (id: number) => {
    setTaskQueue((currentTaskQueue) => currentTaskQueue.filter((task) => task.id !== id));
  };

  // enqueue task and wait response
  const exec = async (args: TaskArgs, signal?: AbortSignal): Promise<TaskResult> => {
    const { promise, resolve, reject } = promiseWithCallbacks<TaskResult>();
    const id = nextId();
    const newTask: Task<TaskArgs, TaskResult> = { id, args, resolve, reject };

    addTask(newTask);
    launchTimer();

    signal?.addEventListener('abort', () => {
      removeTask(id);
      reject(new Error('AbortError'));
    });

    return promise;
  };

  return { exec };
};

export default useBatch;
