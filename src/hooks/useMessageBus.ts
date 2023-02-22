import { createSignal, onMount, type Signal } from 'solid-js';

const [channels, setChannels]: Signal<Record<string, MessageChannel>> = createSignal({});

export const CommandChannel = 'CommandChannel' as const;

export type UseMessageChannelProps = {
  id: typeof CommandChannel;
};

const useMessageChannel = (propsProvider: () => UseMessageChannelProps) => {
  const channel = () => channels()[id];

  onMount(() => {
    const { id } = propsProvider();
    if (channel() == null) {
      setChannels((currentChannels) => ({
        ...currentChannels,
        [id]: new MessageChannel(),
      }));
    }
  });

  const listen = async (requestId: string, timeout = 1000) => {
    return new Promise((resolve, reject) => {
      const listener = (event: MessageEvent) => {
        if (event.origin !== window.location.origin) return;

        const data = JSON.parse(event.data);

        if (data.requestId !== requestId) return;

        channel().port2.removeEventListener('message', listener);
        resolve(data);
      };

      setTimeout(() => {
        reject(new Error('Timeout'));
        channel().port2.removeEventListener('message', listener);
      }, timeout);

      window.addEventListener('message', listener, false);
    });
  };

  return {
    async requst(message) {
      const requestId = Math.random();
      const messageStr = JSON.stringify({ ...message, requestId });
      const response = listen(requestId, timeout);
      channel().postMessage(messageStr);

      return response;
    },
    handle(handler) {},
  };
};
