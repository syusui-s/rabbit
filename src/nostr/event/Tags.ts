import { z } from 'zod';

import TagsBase, { TagsSchema } from '@/nostr/event/TagsBase';

export default class Tags extends TagsBase {
  constructor(readonly tags: string[][]) {
    super();
  }
}

export const parseTags = (content: string): Tags => {
  try {
    const tags = TagsSchema.parse(JSON.parse(content));
    return new Tags(tags);
  } catch (err) {
    throw new TypeError('failed to parse tags schema: ', { cause: err });
  }
};
