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

const InitialConfig = (): Config => {
  const relayUrls = [
    'wss://relay.damus.io',
    'wss://nos.lol',
    'wss://relay.snort.social',
    'wss://relay.current.fyi',
  ];
  if (navigator.language === 'ja') {
    relayUrls.push(
      'wss://nostr.h3z.jp',
      'wss://relay.nostr.wirednet.jp',
      'wss://relay-jp.nostr.wirednet.jp',
      'wss://nostr.holybea.com',
      'wss://nostr-relay.nokotaro.com',
    );
  }

  return {
    relayUrls,
    dateFormat: 'relative',
    keepOpenPostForm: false,
  };
};

const serializer = (config: Config): string => JSON.stringify(config);
// TODO zod使う
const deserializer = (json: string): Config =>
  ({
    ...InitialConfig(),
    ...JSON.parse(json),
  } as Config);

const storage = createStorageWithSerializer(() => window.localStorage, serializer, deserializer);
const [config, setConfig] = createSignalWithStorage('RabbitConfig', InitialConfig(), storage);

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
    config,
    setConfig,
    addRelay,
    removeRelay,
  };
};

export default useConfig;
