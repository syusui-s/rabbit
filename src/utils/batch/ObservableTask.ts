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
import nextId from './nextId';

export default class ObservableTask<BatchRequest, BatchResponse> {
  id: number;

  req: BatchRequest;

  res: BatchResponse | undefined;

  isCompleted = false;

  #updateListeners: ((res: BatchResponse) => void)[] = [];

  #completeListeners: (() => void)[] = [];

  #promise: Promise<BatchResponse>;

  constructor(req: BatchRequest) {
    this.id = nextId();
    this.req = req;
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

  // alias for onUpdate.
  subscribe(fn: (v: BatchResponse) => void) {
    this.onUpdate(fn);
  }

  onComplete(f: () => void) {
    this.#completeListeners.push(f);
  }

  toPromise(): Promise<BatchResponse> {
    return this.#promise;
  }
}
