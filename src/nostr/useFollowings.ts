import { createMemo } from 'solid-js';
import useCachedEvents from '@/nostr/useCachedEvents';

type UseFollowingsProps = {
  relayUrls: string[];
  pubkey: string;
};

type Following = {
  pubkey: string;
  mainRelayUrl?: string;
  petname?: string;
};

const useFollowings = (propsProvider: () => UseFollowingsProps | null) => {
  const props = createMemo(propsProvider);
  const query = useCachedEvents(() => {
    const currentProps = props();
    if (currentProps == null) return null;
    const { relayUrls, pubkey } = currentProps;
    return {
      relayUrls,
      filters: [
        {
          kinds: [3],
          authors: [pubkey],
          limit: 1,
        },
      ],
    };
  });

  const followings = () => {
    if (query.data != null && query.data.length === 0) return [];

    const event = query.data?.reduce((a, b) => (a.created_at > b.created_at ? a : b));

    if (event == null) return [];

    const result: Following[] = [];
    event.tags.forEach((tag) => {
      // TODO zodにする
      const [tagName, followingPubkey, mainRelayUrl, petname] = tag;
      if (!tag.every((e) => typeof e === 'string')) return;
      if (tagName !== 'p') return;

      const following: Following = { pubkey: followingPubkey, petname };
      if (mainRelayUrl != null && mainRelayUrl.length > 0) {
        following.mainRelayUrl = mainRelayUrl;
      }

      result.push(following);
    });

    return result;
  };

  const followingPubkeys = (): string[] => {
    return followings().map((follow) => follow.pubkey);
  };

  return { followings, followingPubkeys };
};

export default useFollowings;
