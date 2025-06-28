import { type AbstractConstructorOf } from '@/utils/typeUtils';

import type TagsBase from '@/nostr/event/TagsBase';

const NostrSetTagsMixIn = <TBase extends AbstractConstructorOf<TagsBase>>(Base: TBase) => {
  abstract class NostrSetBase extends Base {
    title(): string | undefined {
      const titleTag = this.findFirstTagByName('title');
      return titleTag?.[1];
    }

    image(): string | undefined {
      const imageTag = this.findFirstTagByName('image');
      return imageTag?.[1];
    }

    description(): string | undefined {
      const descriptionTag = this.findFirstTagByName('description');
      return descriptionTag?.[1];
    }
  }

  return NostrSetBase;
};

export default NostrSetTagsMixIn;
