import { nip19, type Event as NostrEvent } from 'nostr-tools';
import eventWrapper from './event';

type ProfilePointer = nip19.ProfilePointer;
type EventPointer = nip19.EventPointer;

const { decode } = nip19;

export type PlainText = {
  type: 'PlainText';
  content: string;
};

export type TagReference = {
  type: 'TagReference';
  tagIndex: number;
  content: string;
};

export type Bech32Entity = {
  type: 'Bech32Entity';
  content: string;
  data:
    | { type: 'npub' | 'note'; data: string }
    | { type: 'nprofile'; data: ProfilePointer }
    | { type: 'nevent'; data: EventPointer };
};

export type HashTag = {
  type: 'HashTag';
  content: string;
  tagName: string;
};

export type UrlText = {
  type: 'URL';
  content: string;
};

export type ParsedTextNoteNode = PlainText | TagReference | Bech32Entity | HashTag | UrlText;

export type ParsedTextNote = ParsedTextNoteNode[];

export type MentionedEvent = {
  type: 'MentionedEvent';
  content: string;
  tagIndex: number;
  eventId: string;
  marker: 'reply' | 'root' | 'mention' | undefined;
};

export type MentionedUser = {
  type: 'MentionedUser';
  content: string;
  tagIndex: number;
  pubkey: string;
};

const tagRefRegex = /(?:#\[(?<idx>\d+)\])/g;
const hashTagRegex = /#(?<hashtag>[^[-^`:-@!-/{-~\d\s][^[-^`:-@!-/{-~\s]+)/g;
// raw NIP-19 codes, NIP-21 links (NIP-27)
// nrelay and naddr is not supported by nostr-tools
const mentionRegex = /(?:nostr:)?(?<mention>(npub|note|nprofile|nevent)1[ac-hj-np-z02-9]+)/gi;
const urlRegex =
  /(?<url>(?:https?|wss?):\/\/[-a-zA-Z0-9.]+(:\d{1,5})?(?:\/[-[\]~!$&'()*+.,:;@&=%\w]+|\/)*(?:\?[-[\]~!$&'()*+.,/:;%@&=\w?]+)?(?:#[-[\]~!$&'()*+.,/:;%@\w&=?#]+)?)/g;

const parseTextNote = (textNoteContent: string) => {
  const matches = [
    ...textNoteContent.matchAll(tagRefRegex),
    ...textNoteContent.matchAll(hashTagRegex),
    ...textNoteContent.matchAll(mentionRegex),
    ...textNoteContent.matchAll(urlRegex),
  ].sort((a, b) => (a.index as number) - (b.index as number));
  let pos = 0;
  const result: ParsedTextNote = [];

  const pushPlainText = (index: number | undefined) => {
    if (index != null && pos !== index) {
      const content = textNoteContent.slice(pos, index);
      const plainText: PlainText = { type: 'PlainText', content };
      result.push(plainText);
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
        const decoded = decode(match[1]);
        const bech32Entity: Bech32Entity = {
          type: 'Bech32Entity',
          content: match[0],
          data: decoded as Bech32Entity['data'],
        };
        result.push(bech32Entity);
      } catch (e) {
        console.warn(`failed to parse Bech32 entity (NIP-19): ${match[0]}`);
        pushPlainText(index + match[0].length);
        return;
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
    }
    pos = index + match[0].length;
  });

  if (pos !== textNoteContent.length) {
    const content = textNoteContent.slice(pos);
    const plainText: PlainText = { type: 'PlainText', content };
    result.push(plainText);
  }

  return result;
};

export const resolveTagReference = (
  { tagIndex, content }: TagReference,
  event: NostrEvent,
): MentionedUser | MentionedEvent | null => {
  const tag = event.tags[tagIndex];
  if (tag == null) return null;

  const tagName = tag[0];

  if (tagName === 'p') {
    return {
      type: 'MentionedUser',
      tagIndex,
      content,
      pubkey: tag[1],
    } satisfies MentionedUser;
  }

  if (tagName === 'e') {
    const mention = eventWrapper(event)
      .taggedEvents()
      .find((ev) => ev.index === tagIndex);

    return {
      type: 'MentionedEvent',
      tagIndex,
      content,
      eventId: tag[1],
      marker: mention?.marker,
    } satisfies MentionedEvent;
  }

  return null;
};

export default parseTextNote;
