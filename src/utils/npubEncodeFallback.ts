import { npubEncode } from 'nostr-tools/nip19';

const npubEncodeFallback = (pubkey: string): string => {
  try {
    return npubEncode(pubkey);
  } catch (err) {
    console.error('failed to encode pubkey into npub', pubkey);
    return pubkey;
  }
};

export default npubEncodeFallback;
