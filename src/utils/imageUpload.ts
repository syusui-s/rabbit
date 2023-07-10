export type UploadResult = {
  imageUrl: string;
};

export type Uploader = {
  name: string;
  tos: string;
  upload: (file: File) => Promise<UploadResult>;
};

const toHexString = (buff: ArrayBuffer): string => {
  const arr = new Array(buff.byteLength);
  const view = new Int8Array(buff);

  for (let i = 0; i < view.byteLength; i += 1) {
    arr[i] = view[i].toString(16).padStart(2, '0');
  }

  return arr.join();
};

export const uploadNostrBuild = async (blob: Blob): Promise<UploadResult> => {
  const form = new FormData();
  form.set('fileToUpload', blob);
  form.set('img_url', '');
  form.set('submit', 'Upload');

  const res = await fetch('https://nostr.build/api/upload/ios.php', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
    },
    mode: 'cors',
    body: form,
  });

  if (!res.ok) throw new Error('failed to post image: status code was not 2xx');

  const imageUrl = (await res.json()) as string;

  return { imageUrl };
};

export const uploadVoidCat = async (blob: Blob): Promise<any> => {
  const data = await blob.arrayBuffer();
  const digestBuffer = await window.crypto.subtle.digest('SHA-256', data);
  const digest = toHexString(digestBuffer);

  const res = await fetch('https://void.cat/upload', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'V-Content-Type': blob.type,
      'V-Full-Digest': digest,
    },
    mode: 'cors',
    body: data,
  });

  if (!res.ok) throw new Error('failed to post image: status code was not 2xx');

  return res.json();
};

export const uploaders = {
  nostrBuild: {
    name: 'nostr.build',
    tos: 'https://nostr.build/tos/',
    upload: uploadNostrBuild,
  } satisfies Uploader,
} as const;

export type UploaderIds = keyof typeof uploaders;

export const uploadFiles =
  <T>(uploadFn: (file: Blob) => Promise<T>) =>
  (files: File[]): Promise<PromiseSettledResult<Awaited<T>>[]> =>
    Promise.allSettled(files.map((file) => uploadFn(file)));
