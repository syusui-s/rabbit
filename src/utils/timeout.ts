export class TimeoutError extends Error {}

const timeout =
  (ms: number, info?: string) =>
  <T>(promise: Promise<T>): Promise<T> => {
    const timeoutPromise = new Promise<T>((_resolve, reject) => {
      setTimeout(() => {
        const message = info != null ? `TimeoutError: ${info}` : 'TimeoutError';
        reject(new TimeoutError(message));
      }, ms);
    });

    return Promise.race([promise, timeoutPromise]);
  };

export default timeout;
