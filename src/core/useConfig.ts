import { type Accessor, type Setter } from 'solid-js';

import uniq from 'lodash/uniq';
import { Kind, type Event as NostrEvent } from 'nostr-tools';

import {
  ColumnType,
  createFollowingColumn,
  createJapanRelaysColumn,
  createNotificationColumn,
  createPostsColumn,
  createReactionsColumn,
} from '@/core/column';
import { relaysGlobal, relaysInJP } from '@/core/relayUrls';
import {
  createStorageWithSerializer,
  createStoreWithStorage,
} from '@/hooks/createSignalWithStorage';

export type Config = {
  relayUrls: string[];
  columns: ColumnType[];
  dateFormat: 'relative' | 'absolute-long' | 'absolute-short';
  keepOpenPostForm: boolean;
  useEmojiReaction: boolean;
  showEmojiReaction: boolean;
  showImage: boolean;
  hideCount: boolean;
  mutedPubkeys: string[];
  mutedKeywords: string[];
};

type UseConfig = {
  config: Accessor<Config>;
  setConfig: Setter<Config>;
  // relay
  addRelay: (url: string) => void;
  removeRelay: (url: string) => void;
  // mute
  addMutedPubkey: (pubkey: string) => void;
  removeMutedPubkey: (pubkey: string) => void;
  addMutedKeyword: (keyword: string) => void;
  removeMutedKeyword: (keyword: string) => void;
  // column
  saveColumn: (column: ColumnType) => void;
  moveColumn: (columnId: string, index: number) => void;
  removeColumn: (columnId: string) => void;
  // functions
  isPubkeyMuted: (pubkey: string) => boolean;
  shouldMuteEvent: (event: NostrEvent) => boolean;
  initializeColumns: (param: { pubkey: string }) => void;
};

const initialRelays = (): string[] => {
  const relayUrls = [...relaysGlobal];
  if (window.navigator.language.includes('ja')) {
    relayUrls.push(...relaysInJP);
  }
  return relayUrls;
};

const InitialConfig = (): Config => ({
  relayUrls: initialRelays(),
  columns: [],
  dateFormat: 'relative',
  keepOpenPostForm: false,
  useEmojiReaction: false,
  showEmojiReaction: false,
  showImage: true,
  hideCount: false,
  mutedPubkeys: [],
  mutedKeywords: [],
});

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

  const saveColumn = (column: ColumnType) => {
    setConfig('columns', (current) => {
      const index = current.findIndex((e) => e.id === column.id);
      if (index >= 0) {
        const newColumns = [...current];
        newColumns.splice(index, 1, column);
        return newColumns;
      }
      return [...current, column];
    });
  };

  const moveColumn = (columnId: string, index: number) => {
    setConfig('columns', (current) => {
      // index starts with 1
      const idx = index - 1;
      const toIndex = Math.max(Math.min(idx, current.length), 0);
      const fromIndex = current.findIndex((e) => e.id === columnId);
      if (fromIndex < 0 || toIndex === fromIndex) return current;

      console.log(fromIndex, toIndex);
      const modified = [...current];
      const [column] = modified.splice(fromIndex, 1);
      modified.splice(toIndex, 0, column);
      return modified;
    });
  };

  const removeColumn = (columnId: string) => {
    setConfig('columns', (current) => current.filter((e) => e.id !== columnId));
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

    const columns: ColumnType[] = [
      createFollowingColumn({ width: 'widest', pubkey }),
      createNotificationColumn({ pubkey }),
      createPostsColumn({ name: '自分の投稿', pubkey }),
      createReactionsColumn({ name: '自分のリアクション', pubkey }),
    ];

    if (navigator.language.includes('ja')) {
      columns.splice(2, 0, createJapanRelaysColumn());
    }

    setConfig('columns', () => [...columns]);
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
    saveColumn,
    moveColumn,
    removeColumn,
    isPubkeyMuted,
    shouldMuteEvent,
    initializeColumns,
  };
};

export default useConfig;
