const toHexString = (buff: ArrayBuffer): string => {
  const arr = new Array(buff.byteLength);
  const view = new Int8Array(buff);

  for (let i = 0; i < view.byteLength; i += 1) {
    arr[i] = view[i].toString(16).padStart(2, '0');
  }

  return arr.join();
};

const upload = async (blob: Blob): Promise<object> => {
  const data = await blob.arrayBuffer();
  const digestBuffer = await window.crypto.subtle.digest('SHA-256', data);
  const digest = toHexString(digestBuffer);

  const res = await fetch('https://void.cat/upload', {
    method: 'POST',
    headers: {
      'V-Content-Type': blob.type,
      'V-Full-Digest': digest,
    },
    mode: 'cors',
    body: data,
  });

  if (!res.ok) throw new Error('failed to post image: status code was not 2xx');

  return res.json();
};

export default upload;
