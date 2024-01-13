const lud16ToLnurlPayUrl = (lud16: string): string | null => {
  if (lud16.length === 0) return null;

  const [name, domain] = lud16.split('@');
  if (domain == null) return null;

  const url = new URL(`https://${domain}/`);
  url.pathname = `.well-known/lnurlp/${name}`;
  return url.toString();
};

export default lud16ToLnurlPayUrl;
