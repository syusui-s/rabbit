import useCachedEvents from '@/clients/useCachedEvents';

type UseProfileProps = {
  relayUrls: string[];
  pubkey: string;
};

// TODO zodにする
// deleted等の特殊なもの
type StandardProfile = {
  name?: string;
  about?: string;
  picture?: string;
  nip05?: string; // NIP-05
  lud06?: string; // NIP-57
  lud16?: string; // NIP-57
};

type NonStandardProfile = {
  display_name?: string;
  website?: string;
};

type Profile = StandardProfile & NonStandardProfile;

const useProfile = (propsProvider: () => UseProfileProps) => {
  const query = useCachedEvents(() => {
    const { relayUrls, pubkey } = propsProvider();
    return {
      relayUrls,
      filters: [
        {
          kinds: [0],
          authors: [pubkey],
          limit: 1,
        },
      ],
    };
  });

  const profile = () => {
    const maybeProfile = query.data?.[0];
    if (maybeProfile == null) return null;

    // TODO 大きすぎたりしないかどうか、JSONかどうかのチェック
    return JSON.parse(maybeProfile.content) as Profile;
  };

  return { profile };
};

export default useProfile;
