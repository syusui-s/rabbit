import { bech32 } from 'bech32';

const lud06ToLnurlPayUrl = (lud06: string): string | null => {
  if (lud06.length === 0) return null;
  const { prefix, words } = bech32.decode(lud06, 2000);
  if (prefix.toLowerCase() !== 'lnurl') return null;
  const data = bech32.fromWords(words);
  return new TextDecoder('utf-8').decode(new Uint8Array(data));
};

export default lud06ToLnurlPayUrl;
