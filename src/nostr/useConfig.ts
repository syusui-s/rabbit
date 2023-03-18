import { type Accessor, type Setter } from 'solid-js';
import {
  createStorageWithSerializer,
  createSignalWithStorage,
} from '@/hooks/createSignalWithStorage';

export type Config = {
  relayUrls: string[];
  dateFormat: 'relative' | 'absolute-long' | 'absolute-short';
  keepOpenPostForm: boolean;
};

type UseConfig = {
  config: Accessor<Config>;
  setConfig: Setter<Config>;
  addRelay: (url: string) => void;
  removeRelay: (url: string) => void;
};

const InitialConfig: Config = {
  relayUrls: [
    'wss://relay-jp.nostr.wirednet.jp',
    'wss://nostr.h3z.jp',
    'wss://relay.damus.io',
    'wss://nos.lol',
    'wss://relay.snort.social',
    'wss://relay.current.fyi',
    'wss://relay.nostr.wirednet.jp',
    'wss://nostr-relay.nokotaro.com',
    'wss://nostr.holybea.com',
  ],
  dateFormat: 'relative',
  keepOpenPostForm: false,
};

const serializer = (config: Config): string => JSON.stringify(config);
// TODO zod使う
const deserializer = (json: string): Config => JSON.parse(json) as Config;

const storage = createStorageWithSerializer(() => window.localStorage, serializer, deserializer);
const [config, setConfig] = createSignalWithStorage('RabbitConfig', InitialConfig, storage);

const useConfig = (): UseConfig => {
  const addRelay = (relayUrl: string) => {
    setConfig((current) => ({
      ...current,
      relayUrls: [...current.relayUrls, relayUrl],
    }));
  };

  const removeRelay = (relayUrl: string) => {
    setConfig((current) => ({
      ...current,
      relayUrls: current.relayUrls.filter((e) => e !== relayUrl),
    }));
  };

  return {
    config: () => ({ ...InitialConfig, ...config() }),
    setConfig,
    addRelay,
    removeRelay,
  };
};

export default useConfig;
