import { bech32 } from 'bech32';

const lnurlPayUrlToLud06 = (url: string): string => {
  const data = new TextEncoder().encode(url);
  const words = bech32.toWords(data);
  return bech32.encode('lnurl', words, 2000);
};

export default lnurlPayUrlToLud06;
