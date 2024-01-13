const sha256Hex = async (text: string): Promise<string> => {
  const encoder = new TextEncoder();
  const utf8Array = encoder.encode(text);
  const sha256Buffer = await crypto.subtle.digest('SHA-256', utf8Array);
  const sha256 = new Uint8Array(sha256Buffer);
  return [...sha256].map((b) => b.toString(16).padStart(2, '0')).join('');
};

export default sha256Hex;
