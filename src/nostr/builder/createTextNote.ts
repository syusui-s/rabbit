import * as Kind from 'nostr-tools/kinds';
import { type UnsignedEvent } from 'nostr-tools/pure';

import epoch from '@/utils/epoch';

export type TagParams = {
  tags?: string[][];
  notifyPubkeys?: string[];
  rootEventId?: string;
  mentionEventIds?: string[];
  replyEventId?: string;
  hashtags?: string[];
  urls?: string[];
  contentWarning?: string;
};

export type CreateTextNoteParams = {
  pubkey: string;
  content: string;
} & TagParams;

export const buildTags = ({
  notifyPubkeys,
  rootEventId,
  mentionEventIds,
  replyEventId,
  contentWarning,
  hashtags,
  urls,
  tags,
}: TagParams): string[][] => {
  // NIP-10
  const eTags = [];
  const pTags = notifyPubkeys?.map((p) => ['p', p]) ?? [];
  const otherTags = [];

  // the order of e tags should be [rootId, ...mentionIds, replyIds] for old clients
  if (rootEventId != null) {
    eTags.push(['e', rootEventId, '', 'root']);
  }
  // For top level replies, only the "root" marker should be used.
  if (rootEventId == null && replyEventId != null) {
    eTags.push(['e', replyEventId, '', 'root']);
  }
  if (mentionEventIds != null) {
    mentionEventIds.forEach((id) => eTags.push(['e', id, '', 'mention']));
  }
  if (rootEventId != null && replyEventId != null && rootEventId !== replyEventId) {
    eTags.push(['e', replyEventId, '', 'reply']);
  }

  if (hashtags != null) {
    hashtags.forEach((tag) => otherTags.push(['t', tag]));
  }

  if (urls != null) {
    urls.forEach((url) => otherTags.push(['r', url]));
  }

  if (contentWarning != null) {
    otherTags.push(['content-warning', contentWarning]);
  }

  if (tags != null && tags.length > 0) {
    otherTags.push(...tags);
  }

  return [...eTags, ...pTags, ...otherTags];
};

// NIP-01
const createTextNote = (params: CreateTextNoteParams): UnsignedEvent => {
  const { pubkey, content } = params;
  const tags = buildTags(params);

  return {
    kind: Kind.ShortTextNote,
    pubkey,
    created_at: epoch(),
    tags,
    content,
  };
};

export default createTextNote;
