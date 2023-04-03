import { type Accessor, type Setter } from 'solid-js';
import {
  createStorageWithSerializer,
  createStoreWithStorage,
} from '@/hooks/createSignalWithStorage';

export type Config = {
  relayUrls: string[];
  dateFormat: 'relative' | 'absolute-long' | 'absolute-short';
  keepOpenPostForm: boolean;
  showImage: boolean;
  mutedPubkeys: string[];
};

type UseConfig = {
  config: Accessor<Config>;
  setConfig: Setter<Config>;
  addRelay: (url: string) => void;
  removeRelay: (url: string) => void;
  addMutedPubkey: (pubkey: string) => void;
  removeMutedPubkey: (pubkey: string) => void;
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
    showImage: true,
    mutedPubkeys: [],
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
const [config, setConfig] = createStoreWithStorage('RabbitConfig', InitialConfig(), storage);

const useConfig = (): UseConfig => {
  const addRelay = (relayUrl: string) => {
    setConfig('relayUrls', (current) => [...current, relayUrl]);
  };

  const removeRelay = (relayUrl: string) => {
    setConfig('relayUrls', (current) => current.filter((e) => e !== relayUrl));
  };

  const addMutedPubkey = (pubkey: string) => {
    setConfig('mutedPubkeys', (current) => [...current, pubkey]);
  };

  const removeMutedPubkey = (pubkey: string) => {
    setConfig('mutedPubkeys', (current) => current.filter((e) => e !== pubkey));
  };

  return {
    config: () => config,
    setConfig,
    addRelay,
    removeRelay,
    addMutedPubkey,
    removeMutedPubkey,
  };
};

export default useConfig;
