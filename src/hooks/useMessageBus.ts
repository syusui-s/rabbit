import { createSignal, onMount, type Signal } from 'solid-js';

const [channels, setChannels]: Signal<Record<string, MessageChannel>> = createSignal({});

export const CommandChannel = 'CommandChannel' as const;

export type UseMessageChannelProps = {
  id: typeof CommandChannel;
};

export type MessageChannelRequest<T> = {
  requestId: string;
  message: T;
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

const useMessageChannel = <T extends Clonable>(propsProvider: () => UseMessageChannelProps) => {
  const channel = () => channels()[propsProvider().id];

  onMount(() => {
    const { id } = propsProvider();
    if (channel() == null) {
      setChannels((currentChannels) => ({
        ...currentChannels,
        [id]: new MessageChannel(),
      }));
    }
  });

  const listen = async (requestId: string, timeoutMs = 1000): Promise<T> => {
    return new Promise((resolve, reject) => {
      const listener = (event: MessageEvent) => {
        if (event.origin !== window.location.origin) return;
        if (typeof event.data !== 'string') return;

        const data = JSON.parse(event.data) as MessageChannelRequest<T>;

        if (data.requestId !== requestId) return;

        channel().port2.removeEventListener('message', listener);
        resolve(data.message);
      };

      setTimeout(() => {
        channel().port2.removeEventListener('message', listener);
        reject(new Error('TimeoutError'));
      }, timeoutMs);

      channel().port2.addEventListener('message', listener, false);
      channel().port2.start();
    });
  };

  return {
    async requst(message: T) {
      const requestId = Math.random().toString();
      const messageStr = JSON.stringify({ message, requestId });
      const response = listen(requestId, timeoutMs);
      channel().postMessage(messageStr);
      return response;
    },
    handle(handler) {},
  };
};

export default useMessageChannel;
