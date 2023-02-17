// import { z } from 'zod';
import { Event as NostrEvent } from 'nostr-tools';

export type NotificationTypes =
  // The event which includes ["p", ...] tags.
  | 'PubkeyMention'
  // The event which includes ["e", ...] tags.
  | 'EventMention'
  // The event which has the deprecated kind 6.
  | 'DeprecatedRepost'
  // The event which has
  | 'Followed'
  | 'PlusReaction'
  | 'MinusReaction'
  | 'EmojiReaction';

export type GenericFilterOptions = {
  matching: string;
  excluding: string;
  shouldIncludeRepost: boolean;
};

export type NotificationFilterOptions = {
  allowedTypes: NotificationTypes[];
};

type BulidOptions = {
  supportedNips: string[];
};

const notificationFilter =
  (filterOption: NotificationFilterOptions) =>
  (event: NostrEvent): boolean => {};

const genericFilter =
  (filterOption: GenericFilterOptions) =>
  (event: NostrEvent): boolean => {
    event.content;
  };

/**
 * build a filter for the subscription ("REQ")
 */
export const buildFilter = (options: BuildOptions) => {};
