import { type Accessor, type Setter } from 'solid-js';

import uniq from 'lodash/uniq';
import { Kind, type Event as NostrEvent } from 'nostr-tools';

import { ColumnConfig } from '@/core/column';
import {
  createStorageWithSerializer,
  createStoreWithStorage,
} from '@/hooks/createSignalWithStorage';

export type Config = {
  relayUrls: string[];
  columns: ColumnConfig[];
  dateFormat: 'relative' | 'absolute-long' | 'absolute-short';
  keepOpenPostForm: boolean;
  showImage: boolean;
  hideCount: boolean;
  mutedPubkeys: string[];
  mutedKeywords: string[];
};

type UseConfig = {
  config: Accessor<Config>;
  setConfig: Setter<Config>;
  addRelay: (url: string) => void;
  removeRelay: (url: string) => void;
  addMutedPubkey: (pubkey: string) => void;
  removeMutedPubkey: (pubkey: string) => void;
  addMutedKeyword: (keyword: string) => void;
  removeMutedKeyword: (keyword: string) => void;
  isPubkeyMuted: (pubkey: string) => boolean;
  shouldMuteEvent: (event: NostrEvent) => boolean;
  initializeColumns: (param: { pubkey: string }) => void;
};

const relaysGlobal = [
  'wss://relay.damus.io',
  'wss://nos.lol',
  'wss://relay.snort.social',
  'wss://relay.current.fyi',
];

const relaysOnlyAvailableInJP = [
  'wss://relay-jp.nostr.wirednet.jp',
  'wss://nostr.h3z.jp',
  'wss://nostr.holybea.com',
];

const relaysInJP = [
  ...relaysOnlyAvailableInJP,
  'wss://nostr.holybea.com',
  'wss://nostr-relay.nokotaro.com',
];

const InitialConfig = (): Config => {
  const relayUrls = [...relaysGlobal];
  if (navigator.language === 'ja') {
    relayUrls.push(...relaysInJP);
  }

  return {
    relayUrls,
    columns: [],
    dateFormat: 'relative',
    keepOpenPostForm: false,
    showImage: true,
    hideCount: false,
    mutedPubkeys: [],
    mutedKeywords: [],
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
    setConfig('relayUrls', (current) => uniq([...current, relayUrl]));
  };

  const removeRelay = (relayUrl: string) => {
    setConfig('relayUrls', (current) => current.filter((e) => e !== relayUrl));
  };

  const addMutedPubkey = (pubkey: string) => {
    setConfig('mutedPubkeys', (current) => uniq([...current, pubkey]));
  };

  const removeMutedPubkey = (pubkey: string) => {
    setConfig('mutedPubkeys', (current) => current.filter((e) => e !== pubkey));
  };

  const addMutedKeyword = (keyword: string) => {
    setConfig('mutedKeywords', (current) => uniq([...current, keyword]));
  };

  const removeMutedKeyword = (keyword: string) => {
    setConfig('mutedKeywords', (current) => current.filter((e) => e !== keyword));
  };

  const isPubkeyMuted = (pubkey: string) => config.mutedPubkeys.includes(pubkey);

  const hasMutedKeyword = (event: NostrEvent) => {
    if (event.kind === Kind.Text) {
      return config.mutedKeywords.some((keyword) => event.content.includes(keyword));
    }
    return false;
  };

  const shouldMuteEvent = (event: NostrEvent) =>
    isPubkeyMuted(event.pubkey) || hasMutedKeyword(event);

  const initializeColumns = ({ pubkey }: { pubkey: string }) => {
    // すでに設定されている場合は終了
    if ((config.columns?.length ?? 0) > 0) return;

    const myColumns: ColumnConfig[] = [
      { columnType: 'Following', title: 'ホーム', width: 'widest', pubkey },
      { columnType: 'Notification', title: '通知', width: 'medium', pubkey },
      { columnType: 'Posts', title: '自分の投稿', width: 'medium', pubkey },
      { columnType: 'Reactions', title: '自分のリアクション', width: 'medium', pubkey },
      // { columnType: 'Global', relays: [] },
    ];

    setConfig('columns', () => [...myColumns]);
  };

  return {
    config: () => config,
    setConfig,
    addRelay,
    removeRelay,
    addMutedPubkey,
    removeMutedPubkey,
    addMutedKeyword,
    removeMutedKeyword,
    isPubkeyMuted,
    shouldMuteEvent,
    initializeColumns,
  };
};

export default useConfig;
