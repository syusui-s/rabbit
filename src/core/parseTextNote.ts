import type { Event as NostrEvent } from 'nostr-tools';

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

export type UrlText = {
  type: 'URL';
  content: string;
};

export type ParsedTextNoteNode = PlainText | MentionedEvent | MentionedUser | HashTag | UrlText;

export type ParsedTextNote = ParsedTextNoteNode[];

export const parseTextNote = (event: NostrEvent): ParsedTextNote => {
  const matches = [
    ...event.content.matchAll(/(?:#\[(?<idx>\d+)\])/g),
    ...event.content.matchAll(/#(?<hashtag>[^[\]()\d\s][^[\]()\s]+)/g),
    ...event.content.matchAll(
      /(?<url>https?:\/\/[-a-zA-Z0-9.]+(?:\/[-\w.%:]+|\/)*(?:\?[-\w=.%:&]*)?(?:#[-\w=.%:&]*)?)/g,
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
        const mentionedEvent: MentionedEvent = {
          type: 'MentionedEvent',
          tagIndex,
          content: match[0],
          eventId: tag[1],
          marker: tag[2],
        };
        result.push(mentionedEvent);
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

  if (result.length > 1) {
    console.log(JSON.stringify(result, null, 2));
  }

  return result;
};

export default parseTextNote;
