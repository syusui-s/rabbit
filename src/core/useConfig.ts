import { createRoot, type Accessor, type Setter, createMemo } from 'solid-js';

import sortBy from 'lodash/sortBy';
import uniq from 'lodash/uniq';
import * as Kind from 'nostr-tools/kinds';
import { type Event as NostrEvent } from 'nostr-tools/pure';

import { colorThemes, type ColorTheme } from '@/core/colorThemes';
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
import { useTranslation } from '@/i18n/useTranslation';
import { genericEvent } from '@/nostr/event';
import { asCaseInsensitive, wordsRegex } from '@/utils/regex';

export type CustomEmojiConfig = {
  shortcode: string;
  url: string;
};

export type ColorThemeConfig = {
  type: 'specific';
  id: string;
};

export type Config = {
  relayUrls: string[];
  columns: ColumnType[];
  customEmojis: Record<string, CustomEmojiConfig>;
  colorTheme: ColorThemeConfig;
  dateFormat: 'relative' | 'absolute-long' | 'absolute-short';
  keepOpenPostForm: boolean;
  useEmojiReaction: boolean;
  showEmojiReaction: boolean;
  showMedia: boolean; // TODO 'always' | 'only-followings' | 'never'
  embedding: {
    twitter: boolean;
    youtube: boolean;
    ogp: boolean;
  };
  hideCount: boolean;
  mutedPubkeys: string[];
  mutedKeywords: string[];
};

type UseConfig = {
  config: Accessor<Config>;
  setConfig: Setter<Config>;
  // display
  getColorTheme: () => ColorTheme;
  // relay
  addRelay: (url: string) => void;
  removeRelay: (url: string) => void;
  // column
  saveColumn: (column: ColumnType) => void;
  moveColumn: (columnId: string, index: number) => void;
  moveColumnById: (columnId: string, insertBeforeId: string) => void;
  removeColumn: (columnId: string) => void;
  initializeColumns: (param: { pubkey: string }) => void;
  // emoji
  saveEmoji: (emoji: CustomEmojiConfig) => void;
  saveEmojis: (emojis: CustomEmojiConfig[]) => void;
  removeEmoji: (shortcode: string) => void;
  getEmoji: (shortcode: string) => CustomEmojiConfig | undefined;
  searchEmojis: (term: string) => CustomEmojiConfig[];
  // mute
  addMutedPubkey: (pubkey: string) => void;
  removeMutedPubkey: (pubkey: string) => void;
  addMutedKeyword: (keyword: string) => void;
  removeMutedKeyword: (keyword: string) => void;
  isPubkeyMuted: (pubkey: string) => boolean;
  shouldMuteEvent: (event: NostrEvent) => boolean;
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
  customEmojis: {},
  colorTheme: { type: 'specific', id: 'sakura' },
  dateFormat: 'relative',
  keepOpenPostForm: false,
  useEmojiReaction: true,
  showEmojiReaction: true,
  showMedia: true,
  embedding: {
    twitter: true,
    youtube: true,
    ogp: true,
  },
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
  }) as Config;

const storage = createStorageWithSerializer(() => window.localStorage, serializer, deserializer);
const [config, setConfig] = createRoot(() =>
  createStoreWithStorage('RabbitConfig', InitialConfig(), storage),
);

const useConfig = (): UseConfig => {
  const i18n = useTranslation();

  const getColorTheme = (): ColorTheme => {
    const colorThemeConfig = config.colorTheme;
    if (colorThemeConfig.type === 'specific' && colorThemes[colorThemeConfig.id] != null) {
      return colorThemes[colorThemeConfig.id];
    }
    return colorThemes.sakura;
  };

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

  const moveColumnById = (columnId: string, insertBeforeId: string) => {
    const toIndex = config.columns.findIndex((column) => column.id === insertBeforeId);
    moveColumn(columnId, toIndex + 1);
  };

  const removeColumn = (columnId: string) => {
    setConfig('columns', (current) => current.filter((e) => e.id !== columnId));
  };

  const saveEmoji = (emoji: CustomEmojiConfig) => {
    setConfig('customEmojis', (current) => ({ ...current, [emoji.shortcode]: emoji }));
  };

  const saveEmojis = (emojis: CustomEmojiConfig[]) => {
    setConfig('customEmojis', (current) => {
      const newEmojis = Object.fromEntries(emojis.map((emoji) => [emoji.shortcode, emoji]));
      return { ...current, ...newEmojis };
    });
  };

  const removeEmoji = (shortcode: string) => {
    setConfig('customEmojis', (current) => ({ ...current, [shortcode]: undefined }));
  };

  const getEmoji = (shortcode: string): CustomEmojiConfig | undefined =>
    config.customEmojis[shortcode];

  const searchEmojis = (term: string): CustomEmojiConfig[] =>
    sortBy(
      Object.values(config.customEmojis).filter(({ shortcode }) => shortcode.includes(term)),
      [(e) => e.shortcode.length],
    );

  const mutedPubkeySet = createMemo(() => new Set(config.mutedPubkeys));
  const isPubkeyMuted = (pubkey: string) => mutedPubkeySet().has(pubkey);

  const mutedKeywordsRegex = createMemo(() => asCaseInsensitive(wordsRegex(config.mutedKeywords)));
  const hasMutedKeyword = (event: NostrEvent) => {
    if (event.kind === Kind.ShortTextNote) {
      return mutedKeywordsRegex().test(event.content);
    }
    return false;
  };

  const shouldMuteEvent = (event: NostrEvent) => {
    const ev = genericEvent(event);
    return (
      isPubkeyMuted(event.pubkey) ||
      ev.taggedPubkeys().some(isPubkeyMuted) ||
      (event.kind === Kind.ShortTextNote && hasMutedKeyword(event))
    );
  };

  const initializeColumns = ({ pubkey }: { pubkey: string }) => {
    // すでに設定されている場合は終了
    if ((config.columns?.length ?? 0) > 0) return;

    const columns: ColumnType[] = [
      createFollowingColumn({ width: 'widest', pubkey }),
      createNotificationColumn({ pubkey }),
      createPostsColumn({ name: i18n.t('column.myPosts'), pubkey }),
      createReactionsColumn({ name: i18n.t('column.myReactions'), pubkey }),
    ];

    if (navigator.language.includes('ja')) {
      columns.splice(2, 0, createJapanRelaysColumn());
    }

    setConfig('columns', () => [...columns]);
  };

  return {
    config: () => config,
    setConfig,
    // display
    getColorTheme,
    // relay
    addRelay,
    removeRelay,
    // column
    saveColumn,
    moveColumn,
    moveColumnById,
    removeColumn,
    initializeColumns,
    // emoji
    saveEmoji,
    saveEmojis,
    removeEmoji,
    getEmoji,
    searchEmojis,
    // mute
    addMutedPubkey,
    removeMutedPubkey,
    addMutedKeyword,
    removeMutedKeyword,
    isPubkeyMuted,
    shouldMuteEvent,
  };
};

export default useConfig;
