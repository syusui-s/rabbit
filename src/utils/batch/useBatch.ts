import { createSignal, createMemo } from 'solid-js';

export type UseBatchProps<Task> = {
  executor: (tasks: Task[]) => void;
  interval?: number;
  batchSize?: number;
};

const useBatch = <Task>(propsProvider: () => UseBatchProps<Task>) => {
  const props = createMemo(propsProvider);
  const batchSize = createMemo(() => props().batchSize ?? 100);
  const interval = createMemo(() => props().interval ?? 2000);

  const [taskQueue, setTaskQueue] = createSignal<Task[]>([]);

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

  const launchTimer = () => {
    if (timeoutId == null) {
      timeoutId = setTimeout(() => {
        executeTasks();
      }, interval());
    }
  };

  const addTask = (task: Task) => {
    if (taskQueue().length < batchSize()) {
      setTaskQueue((currentTaskQueue) => [...currentTaskQueue, task]);
    } else {
      executeTasks();
      setTaskQueue([task]);
    }
    launchTimer();
  };

  const removeTask = (task: Task) => {
    setTaskQueue((currentTaskQueue) => currentTaskQueue.filter((e) => e !== task));
  };

  return { addTask, removeTask };
};

export default useBatch;
