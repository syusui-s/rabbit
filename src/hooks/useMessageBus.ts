import { createSignal, onMount, type Signal } from 'solid-js';

const [channels, setChannels]: Signal<Record<string, MessageChannel>> = createSignal({});

export const CommandChannel = 'CommandChannel' as const;

export type UseMessageChannelProps = {
  id: typeof CommandChannel;
};

export type MessageChannelRequest<T> = {
  requestId: string;
  request: T;
};

export type MessageChannelResponse<T> = {
  requestId: string;
  response: T;
};

// https://developer.mozilla.org/ja/docs/Web/API/Web_Workers_API/Structured_clone_algorithm
type Clonable =
  | number
  | string
  | boolean
  | null
  | bigint
  | Date
  | Array<Clonable>
  | Record<string, Clonable>;

const useMessageBus = <Req extends Clonable, Res extends Clonable>(
  propsProvider: () => UseMessageChannelProps,
) => {
  onMount(() => {
    const { id } = propsProvider();
    if (channel() == null) {
      setChannels((currentChannels) => ({
        ...currentChannels,
        [id]: new MessageChannel(),
      }));
    }
  });

  const channel = () => channels()[propsProvider().id];

  const sendRequest = (requestId: string, message: Req) => {
    const request: MessageChannelRequest<Req> = { requestId, request: message };
    const messageStr = JSON.stringify(request);
    channel().port1.postMessage(messageStr);
  };

  const waitResponse = (requestId: string, timeoutMs = 1000): Promise<Res> =>
    new Promise((resolve, reject) => {
      const listener = (event: MessageEvent) => {
        const data = event.data as MessageChannelResponse<Res>;

        if (data.requestId !== requestId) return;

        channel().port1.removeEventListener('message', listener);
        resolve(data.response);
      };

      setTimeout(() => {
        channel().port1.removeEventListener('message', listener);
        reject(new Error('TimeoutError'));
      }, timeoutMs);

      channel().port1.addEventListener('message', listener, false);
      channel().port1.start();
    });

  const sendResponse = (res: Res) => {};

  return {
    async requst(message: Req): Promise<Res> {
      const requestId = Math.random().toString();
      const response = waitResponse(requestId);
      sendRequest(requestId, message);
      return response;
    },
    handle(handler: (message: Req) => Res | Promise<Res>) {
      channel().port2.addEventListener('message', (ev) => {
        const request = event.data as MessageChannelRequest<Req>;
        const res = handler(request.request).then((res) => {});
      });
    },
  };
};

export default useMessageBus;
