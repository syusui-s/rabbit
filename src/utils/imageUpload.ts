export type UploadResult = {
  imageUrl: string;
};

export type Uploader = {
  name: string;
  tos: string;
  upload: (file: File) => Promise<UploadResult>;
};

export type NostrBuildResult = {
  status: 'success' | 'error';
  message: string;
  data: {
    input_name: string;
    name: string;
    url: string;
    thumbnail?: string;
    blurhash?: string;
    sha256: string;
    type: 'image' | 'video' | 'profile' | 'other';
    mime: string;
    size: number;
    metadata?: Record<string, string>;
    dimensions?: {
      width: number;
      height: number;
    };
    responsive?: {
      '240p': string;
      '360p': string;
      '480p': string;
      '720p': string;
      '1080p': string;
    };
  }[];
};

export const uploadNostrBuild = async (blob: Blob): Promise<UploadResult> => {
  const form = new FormData();
  form.set('file', blob);

  const res = await fetch('https://nostr.build/api/v2/upload/files', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
    },
    mode: 'cors',
    body: form,
  });

  if (!res.ok) throw new Error('failed to post image: status code was not 2xx');

  const result = (await res.json()) as NostrBuildResult;

  if (result.status !== 'success') throw new Error(`failed to post image: ${result.message}`);

  return { imageUrl: result.data[0].url };
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
