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

type Primitives = number | string | null;
type Serializable = Record<string, Primitives | Array<Primitives>>;

const useMessageChannel = <T extends Serializable>(propsProvider: () => UseMessageChannelProps) => {
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

  const listen = async (requestId: string, timeout = 1000): Promise<T> => {
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
        reject(new Error('Timeout'));
        channel().port2.removeEventListener('message', listener);
      }, timeout);

      window.addEventListener('message', listener, false);
    });
  };

  return {
    async requst(message: T) {
      const requestId = Math.random().toString();
      const messageStr = JSON.stringify({ message, requestId });
      const response = listen(requestId, timeout);
      channel().postMessage(messageStr);
      return response;
    },
    handle(handler) {},
  };
};

export default useMessageChannel;
