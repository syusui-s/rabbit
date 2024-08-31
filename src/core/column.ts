import { z } from 'zod';

import { ContentFilterSchema } from '@/core/contentFilter';
import { relaysForJapaneseTL } from '@/core/relayUrls';
import generateId from '@/utils/generateId';
import { literalsUnion } from '@/utils/zodHelper';

export const NotificationTypes = ['Replies', 'Repost', 'Reaction', 'Zap'] as const;

const NotificationTypeSchema = literalsUnion(NotificationTypes.map((type) => z.literal(type)));

export type NotificationType = z.infer<typeof NotificationTypeSchema>;

export type GenericFilterOptions = {
  matching: string;
  excluding: string;
  shouldIncludeRepost: boolean;
};

// export type NotificationFilterOptions = {
//   allowedTypes: NotificationType[];
// };
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

export const ColumnWidthSchema = z.union([
  z.literal('widest'),
  z.literal('wide'),
  z.literal('medium'),
  z.literal('narrow'),
]);

export type ColumnWidth = z.infer<typeof ColumnWidthSchema>;

export const BaseColumnSchema = z.object({
  id: z.string(),
  name: z.string().optional(),
  width: ColumnWidthSchema,
  contentFilter: z.optional(ContentFilterSchema),
});

export type BaseColumn = z.infer<typeof BaseColumnSchema>;

/** A column which shows posts by following users */
export const FollowingColumnSchema = BaseColumnSchema.extend({
  columnType: z.literal('Following'),
  pubkey: z.string(),
});
export type FollowingColumnType = z.infer<typeof FollowingColumnSchema>;

/** A column which shows replies, reactions, reposts to the specific user */
export const NotificationColumnSchema = BaseColumnSchema.extend({
  columnType: z.literal('Notification'),
  pubkey: z.string(),
  notificationTypes: z.optional(z.array(NotificationTypeSchema)),
});
export type NotificationColumnType = z.infer<typeof NotificationColumnSchema>;

/** A column which shows posts from the specific user */
export const PostsColumnSchema = BaseColumnSchema.extend({
  columnType: z.literal('Posts'),
  pubkey: z.string(),
});
export type PostsColumnType = z.infer<typeof PostsColumnSchema>;

/** A column which shows reactions published by the specific user */
export const ReactionsColumnSchema = BaseColumnSchema.extend({
  columnType: z.literal('Reactions'),
  pubkey: z.string(),
});
export type ReactionsColumnType = z.infer<typeof ReactionsColumnSchema>;

/** A column which shows posts published on the specific channel */
export const ChannelColumnSchema = BaseColumnSchema.extend({
  columnType: z.literal('Channel'),
  rootEventId: z.string(),
});
export type ChannelColumnType = z.infer<typeof ChannelColumnSchema>;

/** A column which shows text notes and reposts posted to the specific relays */
export const RelaysColumnSchema = BaseColumnSchema.extend({
  columnType: z.literal('Relays'),
  relayUrls: z.array(z.string()),
});
export type RelaysColumnType = z.infer<typeof RelaysColumnSchema>;

/** A column which search text notes from relays which support NIP-50 */
export const SearchColumnSchema = BaseColumnSchema.extend({
  columnType: z.literal('Search'),
  query: z.string(),
});
export type SearchColumnType = z.infer<typeof SearchColumnSchema>;

/** A column which shows events in the bookmark */
export const BookmarkColumnSchema = BaseColumnSchema.extend({
  columnType: z.literal('Bookmark'),
  pubkey: z.string(),
  identifier: z.string(),
});
export type BookmarkColumnType = z.infer<typeof BookmarkColumnSchema>;

// /** A column which shows text notes and reposts posted to the specific relays */
// const CustomFilterColumnSchema = BaseColumnSchema.extend({
//   columnType: z.literal('CustomFilter'),
//   filters: z.array(z.any()), // Replace `z.any()` with the appropriate Zod schema if `Filter` is known
// });

export const ColumnTypeSchema = z.union([
  FollowingColumnSchema,
  NotificationColumnSchema,
  PostsColumnSchema,
  ReactionsColumnSchema,
  ChannelColumnSchema,
  RelaysColumnSchema,
  SearchColumnSchema,
  BookmarkColumnSchema,
]);

export type ColumnType = z.infer<typeof ColumnTypeSchema>;

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
