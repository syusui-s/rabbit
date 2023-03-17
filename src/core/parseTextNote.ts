import type { Event as NostrEvent } from 'nostr-tools';
import { decode, type ProfilePointer, type EventPointer } from 'nostr-tools/nip19';
import eventWrapper from './event';

export type PlainText = {
  type: 'PlainText';
  content: string;
};

export type MentionedEvent = {
  type: 'MentionedEvent';
  content: string;
  tagIndex: number;
  eventId: string;
  marker: string | null; // TODO 'reply' | 'root' | 'mention' | null;
};

export type MentionedUser = {
  type: 'MentionedUser';
  content: string;
  tagIndex: number;
  pubkey: string;
};

export type Bech32Entity = {
  type: 'Bech32Entity';
  content: string;
  data:
    | { type: 'npub' | 'note'; data: string }
    | { type: 'nprofile'; data: ProfilePointer }
    | { type: 'nevent'; data: EventPointer }
    | { type: 'naddr'; data: AddressPointer };
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

export type ParsedTextNoteNode =
  | PlainText
  | MentionedEvent
  | MentionedUser
  | Bech32Entity
  | HashTag
  | UrlText;

export type ParsedTextNote = ParsedTextNoteNode[];

export const parseTextNote = (event: NostrEvent): ParsedTextNote => {
  const matches = [
    ...event.content.matchAll(/(?:#\[(?<idx>\d+)\])/g),
    ...event.content.matchAll(/#(?<hashtag>[^[-^`:-@!-/{-~\d\s][^[-^`:-@!-/{-~\s]+)/g),
    ...event.content.matchAll(
      /(?<nip19>(npub|note|nprofile|nevent|nrelay|naddr)1[ac-hj-np-z02-9]+)/gi,
    ),
    ...event.content.matchAll(
      /(?<url>(https?|wss?):\/\/[-a-zA-Z0-9.]+(?:\/[-\w.@%:]+|\/)*(?:\?[-\w=.@%:&]*)?(?:#[-\w=.%:&]*)?)/g,
    ),
  ].sort((a, b) => a?.index - b?.index);
  let pos = 0;
  const result: ParsedTextNote = [];

  const pushPlainText = (index: number | undefined) => {
    if (index != null && pos !== index) {
      const content = event.content.slice(pos, index);
      const plainText: PlainText = { type: 'PlainText', content };
      result.push(plainText);
    }
  };

  matches.forEach((match) => {
    if (match.groups?.url && match.index >= pos) {
      pushPlainText(match.index);
      const url: UrlText = { type: 'URL', content: match.groups?.url };
      result.push(url);
    } else if (match.groups?.idx && match.index >= pos) {
      const tagIndex = parseInt(match.groups.idx, 10);
      const tag = event.tags[tagIndex];
      if (tag == null) return;

      pushPlainText(match.index);

      const tagName = tag[0];
      if (tagName === 'p') {
        const mentionedUser: MentionedUser = {
          type: 'MentionedUser',
          tagIndex,
          content: match[0],
          pubkey: tag[1],
        };
        result.push(mentionedUser);
      } else if (tagName === 'e') {
        const mention = eventWrapper(event)
          .mentionedEvents()
          .find((ev) => ev.index === tagIndex);
        if (mention == null) return;

        const mentionedEvent: MentionedEvent = {
          type: 'MentionedEvent',
          tagIndex,
          content: match[0],
          eventId: tag[1],
          marker: mention.marker,
        };
        result.push(mentionedEvent);
      }
    } else if (match.groups?.nip19 && match.index >= pos) {
      try {
        const decoded = decode(match[0]);
        const bech32Entity: Bech32Entity = {
          type: 'Bech32Entity',
          content: match[0],
          data: decoded as Bech32Entity['data'],
        };
        result.push(bech32Entity);
      } catch (e) {
        console.error(`failed to parse Bech32 entity (NIP-19) but ignore this: ${match[0]}`);
      }
    } else if (match.groups?.hashtag && match.index >= pos) {
      pushPlainText(match.index);
      const tagName = match.groups?.hashtag;
      const hashtag: HashTag = {
        type: 'HashTag',
        content: match[0],
        tagName,
      };
      result.push(hashtag);
    }
    pos = match.index + match[0].length;
  });

  if (pos !== event.content.length) {
    const content = event.content.slice(pos);
    const plainText: PlainText = { type: 'PlainText', content };
    result.push(plainText);
  }

  return result;
};

export default parseTextNote;
