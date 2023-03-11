import { type Accessor, type Setter } from 'solid-js';
import {
  createStorageWithSerializer,
  createSignalWithStorage,
} from '@/hooks/createSignalWithStorage';

type Config = {
  relayUrls: string[];
};

type UseConfig = {
  config: Accessor<Config>;
  setConfig: Setter<Config>;
};

const InitialConfig: Config = {
  relayUrls: [
    'wss://relay-jp.nostr.wirednet.jp',
    'wss://nostr.h3z.jp/',
    'wss://relay.damus.io',
    'wss://nos.lol',
    'wss://relay.snort.social',
    'wss://relay.current.fyi',
    'wss://relay.nostr.wirednet.jp',
    'wss://nostr-relay.nokotaro.com',
    'wss://nostr.holybea.com',
  ],
};

const serializer = (config: Config): string => JSON.stringify(config);
// TODO zod使う
const deserializer = (json: string): Config => JSON.parse(json) as Config;

const storage = createStorageWithSerializer(() => window.localStorage, serializer, deserializer);
const [config, setConfig] = createSignalWithStorage('RabbitConfig', InitialConfig, storage);

const useConfig = (): UseConfig => {
  return { config, setConfig };
};

export default useConfig;
