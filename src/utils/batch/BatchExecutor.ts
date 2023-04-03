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
export type BatchExecutorConstructor<Task> = {
  executor: (reqs: Task[]) => void;
  interval: number;
  size: number;
};

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
