import type { Event as NostrEvent } from 'nostr-tools/event';

export type PlainText = {
  type: 'PlainText';
  content: string;
};

export type MentionedEvent = {
  type: 'MentionedEvent';
  tagIndex: number;
  content: string;
  eventId: string;
  marker: string | null; // TODO 'reply' | 'root' | 'mention' | null;
};

export type MentionedUser = {
  type: 'MentionedUser';
  tagIndex: number;
  content: string;
  pubkey: string;
};

export type HashTag = {
  type: 'HashTag';
  content: string;
  tagName: string;
};

export type ParsedTextNoteNode = PlainText | MentionedEvent | MentionedUser | HashTag;

export type ParsedTextNote = ParsedTextNoteNode[];

export const parseTextNote = (event: NostrEvent): ParsedTextNote => {
  const matches = Array.from(
    event.content.matchAll(/(?:#\[(?<idx>\d+)\]|#(?<hashtag>[^\[\]\(\)\s]+))/g),
  );
  let pos = 0;
  const result: ParsedTextNote = [];

  matches.forEach((match) => {
    if (match.groups?.hashtag) {
      const tagName = match.groups?.hashtag;
      if (pos !== match.index) {
        const content = event.content.slice(pos, match.index);
        const plainText: PlainText = { type: 'PlainText', content };
        result.push(plainText);
      }
      const hashtag: HashTag = {
        type: 'HashTag',
        content: match[0],
        tagName,
      };
      result.push(hashtag);
    } else if (match.groups?.idx) {
      const tagIndex = parseInt(match.groups.idx, 10);
      const tag = event.tags[tagIndex];
      if (tag == null) return;
      if (pos !== match.index) {
        const content = event.content.slice(pos, match.index);
        const plainText: PlainText = { type: 'PlainText', content };
        result.push(plainText);
      }
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
        const mentionedEvent: MentionedEvent = {
          type: 'MentionedEvent',
          tagIndex,
          content: match[0],
          eventId: tag[1],
          marker: tag[2],
        };
        result.push(mentionedEvent);
      }
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
