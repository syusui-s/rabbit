import { decode, type DecodeResult } from 'nostr-tools/nip19';

import isValidId from '@/nostr/event/isValidId';
import TagsBase from '@/nostr/event/TagsBase';

export type PlainText = {
  type: 'PlainText';
  content: string;
};

export type UrlText = {
  type: 'URL';
  content: string;
};

// NIP-08
export type TagReference = {
  type: 'TagReference';
  content: string;
  tagIndex: number;
};

export type TagReferenceResolved = Omit<TagReference, 'type'> & {
  type: 'TagReferenceResolved';
  reference: MentionedUser | MentionedEvent | undefined;
};

export type Bech32Entity = {
  type: 'Bech32Entity';
  content: string;
  data: DecodeResult;
  isNIP19: boolean;
};

export type HashTag = {
  type: 'HashTag';
  content: string;
  tagName: string;
};

// NIP-30
export type CustomEmoji = {
  type: 'CustomEmoji';
  content: string;
  shortcode: string;
};

export type CustomEmojiResolved = Omit<CustomEmoji, 'type'> & {
  type: 'CustomEmojiResolved';
  url: string | undefined;
};

export type ParsedTextNoteNode =
  | PlainText
  | UrlText
  | TagReference
  | Bech32Entity
  | HashTag
  | CustomEmoji;

export type ParsedTextNote = ParsedTextNoteNode[];

export type ParsedTextNoteResolvedNode =
  | Exclude<ParsedTextNoteNode, TagReference | CustomEmoji>
  | TagReferenceResolved
  | CustomEmojiResolved;

export type ParsedTextNoteResolved = ParsedTextNoteResolvedNode[];

const MarkerValues = ['reply', 'root', 'mention'] as const;
type Markers = (typeof MarkerValues)[number];

export type MentionedEvent = {
  type: 'MentionedEvent';
  content: string;
  tagIndex: number;
  eventId: string;
  marker: Markers | undefined;
};

export type MentionedUser = {
  type: 'MentionedUser';
  content: string;
  tagIndex: number;
  pubkey: string;
};

const urlRegex =
  /(?<url>(?:https?|wss?):\/\/[-a-zA-Z0-9.]+(:\d{1,5})?(?:\/[-[\]~!$&'()*+.,:;@&=%\w]+|\/)*(?:\?[-[\]~!$&'()*+.,/:;%@&=\w?]+)?(?:#[-[\]~!$&'()*+.,/:;%@\w&=?#]+)?)/g;
const tagRefRegex = /(?:#\[(?<idx>\d+)\])/g;
// raw NIP-19 codes, NIP-21 links (NIP-27)
const mentionRegex =
  /(?<mention>(?<nip19>nostr:)?(?<bech32>(?:npub|note|nprofile|nevent|naddr|nrelay)1[ac-hj-np-z02-9]+))/gi;
const hashTagRegex = /#(?<hashtag>[\p{Letter}\p{Number}_]+)/gu;
const customEmojiRegex = /:(?<emoji>\w+):/gu;

const parseTextNote = (textNoteContent: string) => {
  const matches = [
    ...textNoteContent.matchAll(urlRegex),
    ...textNoteContent.matchAll(tagRefRegex),
    ...textNoteContent.matchAll(mentionRegex),
    ...textNoteContent.matchAll(hashTagRegex),
    ...textNoteContent.matchAll(customEmojiRegex),
  ].sort((a, b) => (a.index as number) - (b.index as number));
  let pos = 0;
  const result: ParsedTextNote = [];

  const pushPlainText = (index: number | undefined) => {
    if (index != null && index > pos) {
      const content = textNoteContent.slice(pos, index);

      // combine plaintext node when failed to decode (e.g. bech32)
      const lastNode = result[result.length - 1];
      if (lastNode?.type === 'PlainText') {
        lastNode.content += content;
      } else {
        const plainText: PlainText = { type: 'PlainText', content };
        result.push(plainText);
      }

      pos = index;
    }
  };

  matches.forEach((match) => {
    const { index } = match as RegExpMatchArray & { index: number };

    // skip if it was already processed
    if (index < pos) return;

    if (match.groups?.url) {
      pushPlainText(index);
      const url: UrlText = { type: 'URL', content: match.groups?.url };
      result.push(url);
    } else if (match.groups?.idx) {
      const tagIndex = parseInt(match.groups.idx, 10);
      pushPlainText(index);

      result.push({
        type: 'TagReference',
        tagIndex,
        content: match[0],
      });
    } else if (match.groups?.mention) {
      pushPlainText(index);
      try {
        const decoded = decode(match.groups.bech32);
        const bech32Entity: Bech32Entity = {
          type: 'Bech32Entity',
          content: match[0],
          data: decoded,
          isNIP19: match.groups.nip19 === 'nostr:',
        };
        result.push(bech32Entity);
      } catch (e) {
        console.warn(`ignored invalid bech32 entity: ${match[0]}`);
        pushPlainText(index + match[0].length);
      }
    } else if (match.groups?.hashtag) {
      pushPlainText(index);
      const tagName = match.groups?.hashtag;
      const hashtag: HashTag = {
        type: 'HashTag',
        content: match[0],
        tagName,
      };
      result.push(hashtag);
    } else if (match.groups?.emoji) {
      pushPlainText(index);
      const shortcode = match.groups?.emoji;
      const customEmoji: CustomEmoji = {
        type: 'CustomEmoji',
        content: match[0],
        shortcode,
      };
      result.push(customEmoji);
    }
    pos = index + match[0].length;
  });

  if (pos < textNoteContent.length) {
    pushPlainText(textNoteContent.length);
  }

  return result;
};

const isValidMarker = (marker: string | undefined): marker is Markers => {
  if (marker == null) return false;
  return (MarkerValues as readonly string[]).includes(marker);
};

export const resolveTagReference = (
  tags: TagsBase,
  { tagIndex, content }: TagReference,
): MentionedUser | MentionedEvent | undefined => {
  const tag = tags.tags[tagIndex];
  if (tag == null) return undefined;

  const tagName = tag[0];

  if (tagName === 'p' && isValidId(tag[1])) {
    return {
      type: 'MentionedUser',
      tagIndex,
      content,
      pubkey: tag[1],
    } satisfies MentionedUser;
  }

  if (tagName === 'e' && isValidId(tag[1])) {
    const marker = isValidMarker(tag[3]) ? tag[3] : undefined;

    return {
      type: 'MentionedEvent',
      tagIndex,
      content,
      eventId: tag[1],
      marker,
    } satisfies MentionedEvent;
  }

  return undefined;
};

export const toResolved = (parsed: ParsedTextNote, tags: TagsBase): ParsedTextNoteResolved =>
  parsed.map((node): ParsedTextNoteResolvedNode => {
    if (node.type === 'TagReference') {
      const reference = resolveTagReference(tags, node);
      return { ...node, type: 'TagReferenceResolved', reference };
    }
    if (node.type === 'CustomEmoji') {
      const url = tags.getEmojiUrl(node.shortcode);
      return { ...node, type: 'CustomEmojiResolved', url };
    }
    return node;
  });

export default parseTextNote;
