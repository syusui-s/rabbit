/**
 * Generate a random string which compatible with UUIDv4.
 */
const generateId = () => {
  const arr = [];
  if (window.crypto?.getRandomValues != null) {
    const randomValues = crypto.getRandomValues(new Uint8Array(16));
    arr.push(...randomValues);
  } else {
    for (let i = 0; i < 16; i += 1) {
      // eslint-disable-next-line no-bitwise
      arr[i] = Math.round(Math.random() * 0xffff) >> 8;
    }
  }
  // Version: 4
  // eslint-disable-next-line no-bitwise
  arr[6] = (arr[6] & 0x0f) | 0x40;
  // Variant: 0b10 (RFC4122)
  // eslint-disable-next-line no-bitwise
  arr[8] = (arr[8] & 0x3f) | 0x80;
  const binaryString = String.fromCharCode(...arr);
  const b64String = btoa(binaryString);
  // base64url
  const urlSafeString = b64String.replaceAll('+', '-').replaceAll('/', '_').replaceAll('=', '');
  return urlSafeString;
};

export default generateId;
