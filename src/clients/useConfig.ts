import { Signal } from 'solid-js';
import {
  createStorageWithSerializer,
  createSignalWithStorage,
} from '@/hooks/createSignalWithStorage';

type Config = {
  relayUrls: string[];
};

const InitialConfig: Config = {
  relayUrls: [
    'wss://relay-jp.nostr.wirednet.jp',
    'wss://nostr.h3z.jp/',
    'wss://relay.damus.io',
    'wss://nos.lol',
    'wss://brb.io',
    'wss://relay.snort.social',
    'wss://relay.current.fyi',
    'wss://relay.nostr.wirednet.jp',
  ],
};

const serializer = (config: Config): string => JSON.stringify(config);
// TODO zod使う
const deserializer = (json: string): Config => JSON.parse(json) as Config;

const storage = createStorageWithSerializer(() => window.localStorage, serializer, deserializer);
const [config, setConfig] = createSignalWithStorage('rabbit_config', InitialConfig, storage);

const useConfig = (): Signal<Config> => {
  return [config, setConfig];
};

export default useConfig;
