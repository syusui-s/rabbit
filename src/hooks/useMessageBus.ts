import { createRoot, createSignal, createMemo, onMount, type Signal, onCleanup } from 'solid-js';

export type UseRequestMessageProps = {
  id: string;
};

export type UseHandleMessageProps<Req, Res> = {
  id: string;
  handler: (req: Req) => Res | Promise<Res>;
};

export type MessageChannelRequest<T> = {
  requestId: string;
  request: T;
};

export type MessageChannelResponse<T> =
  | { requestId: string; ok: true; response: T }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  | { requestId: string; ok: false; error: any };

const [channels, setChannels]: Signal<Record<string, MessageChannel>> = createRoot(() =>
  createSignal({}),
);

const registerChannelIfNotExist = (id: string) => {
  if (channels()[id] == null) {
    setChannels((currentChannels) => ({
      ...currentChannels,
      [id]: new MessageChannel(),
    }));
  }
};

// https://developer.mozilla.org/ja/docs/Web/API/Web_Workers_API/Structured_clone_algorithm
export const useRequestMessage = <Req, Res>(propsProvider: () => UseRequestMessageProps) => {
  const channel = () => channels()[propsProvider().id];

  const sendRequest = (requestId: string, message: Req) => {
    const request: MessageChannelRequest<Req> = { requestId, request: message };
    channel().port1.postMessage(request);
  };

  const waitResponse = (requestId: string, timeoutMs = 1000): Promise<Res> =>
    new Promise((resolve, reject) => {
      let timeoutId: ReturnType<typeof setTimeout> | undefined;
      const listener = (event: MessageEvent) => {
        const data = event.data as MessageChannelResponse<Res>;

        if (data.requestId !== requestId) return;

        channel().port1.removeEventListener('message', listener);
        if (data.ok) {
          resolve(data.response);
        } else {
          reject(data.error);
        }
        if (timeoutId != null) {
          clearTimeout(timeoutId);
        }
      };

      timeoutId = setTimeout(() => {
        channel().port1.removeEventListener('message', listener);
        reject(new Error(`TimeoutError: ${requestId}`));
      }, timeoutMs);

      channel().port1.addEventListener('message', listener, false);
      channel().port1.start();
    });

  onMount(() => {
    const { id } = propsProvider();
    registerChannelIfNotExist(id);
  });

  return async (message: Req): Promise<Res> => {
    const requestId = Math.random().toString();
    const response = waitResponse(requestId);
    sendRequest(requestId, message);
    return response;
  };
};

export const useHandleMessage = <Req, Res>(
  propsProvider: () => UseHandleMessageProps<Req, Res>,
) => {
  const props = createMemo(propsProvider);
  const channel = () => channels()[props().id];

  onMount(() => {
    const { id } = props();
    registerChannelIfNotExist(id);

    const port = channel().port2;
    const messageHandler = (event: MessageEvent) => {
      const { requestId, request } = event.data as MessageChannelRequest<Req>;
      const result = props().handler(request);
      const resultPromise = result instanceof Promise ? result : Promise.resolve(result);

      resultPromise
        .then((res) => {
          const response: MessageChannelResponse<Res> = { requestId, ok: true, response: res };
          port.postMessage(response);
        })
        .catch((err) => {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          const response: MessageChannelResponse<Res> = { requestId, ok: false, error: err };
          port.postMessage(response);
        });
    };
    port.addEventListener('message', messageHandler);
    port.start();

    onCleanup(() => {
      port.removeEventListener('message', messageHandler);
    });
  });
};
