import { nip19 } from 'nostr-tools';

const { npubEncode } = nip19;

const npubEncodeFallback = (pubkey: string): string => {
  try {
    return npubEncode(pubkey);
  } catch (err) {
    console.error('failed to encode pubkey into npub', pubkey);
    return pubkey;
  }
};

export default npubEncodeFallback;
