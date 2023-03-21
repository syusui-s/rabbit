// import { z } from 'zod';
import { type Event as NostrEvent, type Filter } from 'nostr-tools';
import ColumnComponent from '@/components/Column';

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

type BulidOptions = {
  supportedNips: string[];
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
  columnWidth: (typeof ColumnComponent)['width'];
};

/** A column which shows posts by following users */
export type FollowingColumn = {
  columnType: 'Following';
  pubkey: string;
};

/** A column which shows replies, reactions, reposts to the specific user */
export type NotificationColumn = {
  columnType: 'Notification';
  notificationTypes: NotificationType[];
  pubkey: string;
};

/** A column which shows posts from the specific user */
export type PostsColumn = {
  columnType: 'Posts';
  pubkey: string;
};

/** A column which shows reactions published by the specific user */
export type ReactionsColumn = {
  columnType: 'Reactions';
  pubkey: string;
};

/** A column which shows text notes and reposts posted to the specific relays */
export type GlobalColumn = {
  columnType: 'Global';
  relayUrls: string[];
};

/** A column which shows text notes and reposts posted to the specific relays */
export type CustomFilterColumn = {
  columnType: 'CustomFilter';
  filters: Filter[];
};

export type ColumnConfig =
  | FollowingColumn
  | NotificationColumn
  | GlobalColumn
  | PostsColumn
  | ReactionsColumn
  | CustomFilterColumn;
