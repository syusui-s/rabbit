// import { z } from 'zod';
import { type Filter } from 'nostr-tools';

import { type ColumnProps } from '@/components/column/Column';
import { ContentFilter } from '@/core/contentFilter';
import { relaysForJapaneseTL } from '@/core/relayUrls';
import generateId from '@/utils/generateId';

export type NotificationType =
  // The event which includes ["p", ...] tags.
  | 'PubkeyMention'
  // The event which includes ["e", ...] tags.
  | 'EventMention'
  // The event which has the deprecated kind 6.
  | 'DeprecatedRepost'
  // The event which has the deprecated kind 7.
  | 'Reaction';

export type GenericFilterOptions = {
  matching: string;
  excluding: string;
  shouldIncludeRepost: boolean;
};

export type NotificationFilterOptions = {
  allowedTypes: NotificationType[];
};

// const notificationFilter =
//   (filterOption: NotificationFilterOptions) =>
//   (event: NostrEvent): boolean => {};
//
// const genericFilter =
//   (filterOption: GenericFilterOptions) =>
//   (event: NostrEvent): boolean => {
//     event.content;
//   };
//
// /**
//  * build a filter for the subscription ("REQ")
//  */
// export const buildFilter = (options: BuildOptions) => {};

export type BaseColumn = {
  id: string;
  name?: string;
  width: ColumnProps['width'];
  contentFilter?: ContentFilter;
};

/** A column which shows posts by following users */
export type FollowingColumnType = BaseColumn & {
  columnType: 'Following';
  pubkey: string;
};

/** A column which shows replies, reactions, reposts to the specific user */
export type NotificationColumnType = BaseColumn & {
  columnType: 'Notification';
  // notificationTypes: NotificationType[];
  pubkey: string;
};

/** A column which shows posts from the specific user */
export type PostsColumnType = BaseColumn & {
  columnType: 'Posts';
  pubkey: string;
};

/** A column which shows reactions published by the specific user */
export type ReactionsColumnType = BaseColumn & {
  columnType: 'Reactions';
  pubkey: string;
};

/** A column which shows reactions published by the specific user */
export type ChannelColumnType = BaseColumn & {
  columnType: 'Channel';
  rootEventId: string;
};

/** A column which shows text notes and reposts posted to the specific relays */
export type RelaysColumnType = BaseColumn & {
  columnType: 'Relays';
  relayUrls: string[];
};

/** A column which search text notes from relays which support NIP-50 */
export type SearchColumnType = BaseColumn & {
  columnType: 'Search';
  query: string;
};

/** A column which shows events in the bookmark */
export type BookmarkColumnType = BaseColumn & {
  columnType: 'Bookmark';
  pubkey: string;
  identifier: string;
};

/** A column which shows text notes and reposts posted to the specific relays */
export type CustomFilterColumnType = BaseColumn & {
  columnType: 'CustomFilter';
  filters: Filter[];
};

export type ColumnType =
  | FollowingColumnType
  | NotificationColumnType
  | PostsColumnType
  | ReactionsColumnType
  | ChannelColumnType
  | RelaysColumnType
  | SearchColumnType
  | BookmarkColumnType
  | CustomFilterColumnType;

type CreateParams<T extends BaseColumn> = Omit<T, keyof BaseColumn | 'columnType'> &
  Partial<BaseColumn>;

export const createBaseColumn = (): BaseColumn => ({
  id: generateId(),
  width: 'medium',
});

export const createFollowingColumn = (
  params: CreateParams<FollowingColumnType>,
): FollowingColumnType => ({
  ...createBaseColumn(),
  columnType: 'Following',
  ...params,
});

export const createNotificationColumn = (
  params: CreateParams<NotificationColumnType>,
): NotificationColumnType => ({
  ...createBaseColumn(),
  columnType: 'Notification',
  ...params,
});

export const createRelaysColumn = (params: CreateParams<RelaysColumnType>): RelaysColumnType => ({
  ...createBaseColumn(),
  columnType: 'Relays',
  ...params,
});

export const createJapanRelaysColumn = () =>
  createRelaysColumn({
    name: '日本語',
    relayUrls: relaysForJapaneseTL,
    contentFilter: {
      filterType: 'Regex',
      regex: '[\\p{sc=Hiragana}\\p{sc=Katakana}ー]',
      flag: 'u',
    },
  });

export const createPostsColumn = (params: CreateParams<PostsColumnType>): PostsColumnType => ({
  ...createBaseColumn(),
  columnType: 'Posts',
  ...params,
});

export const createReactionsColumn = (
  params: CreateParams<ReactionsColumnType>,
): ReactionsColumnType => ({
  ...createBaseColumn(),
  columnType: 'Reactions',
  ...params,
});

export const createChannelColumn = (
  params: CreateParams<ChannelColumnType>,
): ChannelColumnType => ({
  ...createBaseColumn(),
  columnType: 'Channel',
  ...params,
});

export const createSearchColumn = (params: CreateParams<SearchColumnType>): SearchColumnType => ({
  ...createBaseColumn(),
  columnType: 'Search',
  ...params,
});
