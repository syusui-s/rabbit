import { createSignal, onMount, onCleanup, observable } from 'solid-js';

import useConfig from '@/core/useConfig';
import {
  type InterWindowRequest,
  type InterWindowRequestWithId,
  type InterWindowResponseWithId,
} from '@/interWindow';

const useInterWindow = (url: string) => {
  let iframeRef: HTMLIFrameElement | undefined;
  const [loaded, setLoaded] = createSignal(false);

  onMount(() => {
    iframeRef = (<iframe title="interwindow" class="hidden" src={url} />) as HTMLIFrameElement;
    document.body.appendChild(iframeRef);
    iframeRef.addEventListener('load', () => setLoaded(true));
    onCleanup(() => {
      iframeRef?.remove();
    });
  });

  const waitLoaded = (): Promise<void> => {
    if (loaded()) return Promise.resolve();
    return new Promise((resolve) => {
      observable(loaded).subscribe((v) => {
        if (v) resolve();
      });
    });
  };

  const listen = async (
    expectedRequestId: number,
    timeout: number = 2000,
  ): Promise<InterWindowResponseWithId> =>
    new Promise((resolve, reject) => {
      const listener = (event: MessageEvent) => {
        console.log('message received', event);
        if (event.origin !== new URL(url).origin) return;
        if (typeof event.data !== 'string') return;

        const data = JSON.parse(event.data) as InterWindowResponseWithId;

        if (data.requestId !== expectedRequestId) return;

        window.removeEventListener('message', listener);
        resolve(data);
      };

      setTimeout(() => {
        reject(new Error('timeout'));
        window.removeEventListener('message', listener);
      }, timeout);

      window.addEventListener('message', listener, false);
    });

  const request = async (message: InterWindowRequest) => {
    const requestId = Math.random();
    const withId = { ...message, requestId } satisfies InterWindowRequestWithId;
    const messageStr = JSON.stringify(withId);

    await waitLoaded();
    const promise = listen(requestId);
    if (iframeRef == null) {
      throw new Error('iframeRef is null');
    }
    if (!loaded()) {
      throw new Error('iframeRef is not loaded');
    }
    iframeRef.contentWindow?.postMessage(messageStr, new URL(url).origin);
    return promise;
  };

  const getConfig = () => request({ type: 'GET_CONFIG' });

  return {
    loaded,
    request,
    getConfig,
  };
};

export const useOldConfig = () => {
  const url = 'https://syusui-s.github.io/rabbit/transfer-config.html';
  const { getConfig } = useInterWindow(url);
  const { setConfig } = useConfig();

  const [oldConfig, setOldConfig] = createSignal<string | undefined>();

  const canImport = () => {
    const c = oldConfig();
    return c != null && c.length > 0;
  };

  const importConfig = () => {
    const c = oldConfig();
    if (c != null && c.length > 0) {
      setConfig(JSON.parse(c));
    }
  };

  onMount(() => {
    setTimeout(() => {
      getConfig()
        .then((obtainedConfig) => {
          if (typeof obtainedConfig.payload === 'string' && obtainedConfig.payload.length > 0) {
            setOldConfig(obtainedConfig.payload);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }, 100);
  });

  return {
    canImport,
    importConfig,
  };
};

export default useInterWindow;
