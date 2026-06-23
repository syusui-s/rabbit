import {
  readServerConfig,
  checkFileProcessingStatus,
  type FileUploadResponse,
} from 'nostr-tools/nip96';
import { getToken } from 'nostr-tools/nip98';
import { type EventTemplate } from 'nostr-tools/pure';
import { z } from 'zod';

import sleep from '@/utils/sleep';

export const FileServerDefinitionScheme = z.discriminatedUnion('type', [
  z.object({
    type: z.literal('nip96'),
    name: z.string(),
    serverUrl: z.string().url(),
  }),
  z.object({
    type: z.literal('blossom'),
    name: z.string(),
    serverUrl: z.string().url(),
  }),
]);

export type FileServerDefinition = z.infer<typeof FileServerDefinitionScheme>;

export type UploadFileStorageParams = {
  files: File[];
  serverUrl: string;
};

export type UploadFileProps = {
  file: File;
  authorizationHeader: string;
  media_type?: 'avatar' | 'banner';
};

export const defaultFileServers = [
  {
    type: 'nip96',
    name: 'nostr.build',
    serverUrl: 'https://nostr.build/',
  },
  {
    type: 'nip96',
    name: 'nostrcheck.me',
    serverUrl: 'https://nostrcheck.me/',
  },
  {
    type: 'nip96',
    name: 'files.sovbit.host',
    serverUrl: 'https://files.sovbit.host/',
  },
  {
    type: 'nip96',
    name: 'nostpic.com',
    serverUrl: 'https://nostpic.com/',
  },
  {
    type: 'nip96',
    name: 'void.cat',
    serverUrl: 'https://void.cat/',
  },
  {
    type: 'nip96',
    name: 'yabu.me',
    serverUrl: 'https://yabu.me/',
  },
  {
    type: 'blossom',
    name: 'blossom.primal.net',
    serverUrl: 'https://blossom.primal.net/',
  },
  {
    type: 'blossom',
    name: 'cdn.satellite.earth',
    serverUrl: 'https://cdn.satellite.earth/',
  },
  {
    type: 'blossom',
    name: 'blossom.band',
    serverUrl: 'https://blossom.band/',
  },
] satisfies FileServerDefinition[];

export const fileUploadResponseToImetaTag = (res: FileUploadResponse): string[] | null => {
  const tags = res.nip94_event?.tags;
  if (tags == null || tags.length === 0) {
    return null;
  }

  const keyValues = tags.map(([key, value]) => `${key} ${value}`);
  return ['imeta', ...keyValues];
};

export const getAuthorizationHeader = (uploadApiUrl: string): Promise<string> => {
  const windowNostr = window.nostr;
  if (windowNostr == null) throw new Error('NIP-07 implementation not found');

  const method = 'POST';
  const signEvent = (ev: EventTemplate) => windowNostr.signEvent(ev);
  const includeAuthorizationScheme = true;

  return getToken(uploadApiUrl, method, signEvent, includeAuthorizationScheme);
};

export const waitDelayProcessing = async (delayProcessingUrl: string) => {
  // 14.2 sec
  const multiplier = 1.7;
  const initialInterval = 1000;
  const maxRetry = 5;

  const exec = async (interval: number, retry: number) => {
    if (retry <= 0) throw new Error('Upload timeout');

    const delayProcessingResult = await checkFileProcessingStatus(delayProcessingUrl);
    if (delayProcessingResult.status !== 'processing') {
      return delayProcessingResult;
    }
    await sleep(interval);
    return exec(interval * multiplier, retry - 1);
  };

  return exec(initialInterval, maxRetry);
};

export const uploadFile = async (
  uploadApiUrl: string,
  props: UploadFileProps,
): Promise<FileUploadResponse> => {
  const body = new FormData();
  body.set('file', props.file);
  body.set('content_type', props.file.type);
  body.set('size', props.file.size.toString(10));

  const headers = new Headers();
  if (props.authorizationHeader != null) {
    headers.set('Authorization', props.authorizationHeader);
  }

  // nostr-tools validation is too strict so I use fetch instead.
  const response = await fetch(uploadApiUrl, { method: 'POST', headers, body });
  // TODO validate event
  const json = (await response.json()) as FileUploadResponse;
  // const json = await nip96UploadFile(props.file, uploadApiUrl, props.authorizationHeader, {
  //  content_type: props.file.type,
  //  size: props.file.size.toString(10),
  // });

  if (json.status === 'processing') {
    if (json.processing_url == null) {
      throw new Error('processing url is not specified');
    }
    await waitDelayProcessing(json.processing_url);
  }

  if (json.status === 'error') {
    throw new Error(`failed to upload: ${json.message}`);
  }

  return json;
};

const MaxRedirect = 5;
const getServerConfig = async (serverUrl: string) => {
  const exec = async (url: string, maxRedirect: number = MaxRedirect) => {
    if (maxRedirect <= 0) throw new Error('Max redirect');

    const serverConfig = await readServerConfig(url);

    if (serverConfig.api_url == null || serverConfig.api_url.length === 0) {
      if (serverConfig.delegated_to_url == null) {
        throw new Error('api_url is blank and delegated_to_url is not specified');
      }
      return exec(serverConfig.delegated_to_url, maxRedirect - 1);
    }

    return serverConfig;
  };

  return exec(serverUrl);
};

const buildApiUrl = (apiUrl: string, serverUrl: string): string => {
  // support relative path for route96 (void.cat, nostr.download)
  if (apiUrl.startsWith('/')) {
    const url = new URL(apiUrl, serverUrl);
    return url.toString();
  }

  return apiUrl;
};

export const uploadFileStorageNip96 = async ({
  serverUrl,
  files,
}: UploadFileStorageParams): Promise<PromiseSettledResult<FileUploadResponse>[]> => {
  const serverConfig = await getServerConfig(serverUrl);
  const uploadApiUrl = buildApiUrl(serverConfig.api_url, serverUrl);
  const authorizationHeader = await getAuthorizationHeader(uploadApiUrl);

  const promises = Array.from(files).map(async (file) =>
    uploadFile(uploadApiUrl, { authorizationHeader, file }),
  );

  return Promise.allSettled(promises);
};

// Blossom (BUD-01/BUD-02/BUD-08)

const sha256Hex = async (file: File): Promise<string> => {
  const buffer = await file.arrayBuffer();
  const digest = await crypto.subtle.digest('SHA-256', buffer);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
};

// BUD-01 authorization event (kind 24242), base64-encoded into a `Nostr` scheme header.
export const getBlossomAuthorizationHeader = async (sha256: string): Promise<string> => {
  const windowNostr = window.nostr;
  if (windowNostr == null) throw new Error('NIP-07 implementation not found');

  const now = Math.floor(Date.now() / 1000);
  const event = await windowNostr.signEvent({
    kind: 24242,
    content: 'Upload file',
    created_at: now,
    tags: [
      ['t', 'upload'],
      ['x', sha256],
      ['expiration', (now + 60 * 5).toString(10)],
    ],
  });

  return `Nostr ${btoa(JSON.stringify(event))}`;
};

export type BlossomBlobDescriptor = {
  url: string;
  sha256: string;
  size: number;
  type?: string;
  uploaded?: number;
  // BUD-08: optional NIP-94 tags provided by the server
  nip94?: [string, string][];
};

// Normalize a Blossom blob descriptor into the NIP-96 FileUploadResponse shape so the rest of
// the upload pipeline (URL extraction, imeta tags) can stay protocol-agnostic.
export const blossomDescriptorToFileUploadResponse = (
  descriptor: BlossomBlobDescriptor,
): FileUploadResponse => {
  const tags: [string, string][] =
    descriptor.nip94 != null && descriptor.nip94.length > 0
      ? descriptor.nip94
      : [
          ['url', descriptor.url],
          ['x', descriptor.sha256],
          ['ox', descriptor.sha256],
          ...(descriptor.size != null
            ? ([['size', descriptor.size.toString(10)]] as [string, string][])
            : []),
          ...(descriptor.type != null && descriptor.type.length > 0
            ? ([['m', descriptor.type]] as [string, string][])
            : []),
        ];

  return {
    status: 'success',
    message: 'Uploaded',
    nip94_event: { content: '', tags },
  };
};

export const uploadBlossom = async (serverUrl: string, file: File): Promise<FileUploadResponse> => {
  const sha256 = await sha256Hex(file);
  const authorizationHeader = await getBlossomAuthorizationHeader(sha256);

  const uploadUrl = new URL('/upload', serverUrl).toString();
  const headers = new Headers();
  headers.set('Authorization', authorizationHeader);
  if (file.type.length > 0) {
    headers.set('Content-Type', file.type);
  }

  const response = await fetch(uploadUrl, { method: 'PUT', headers, body: file });
  if (!response.ok) {
    const reason = response.headers.get('X-Reason') ?? response.statusText;
    throw new Error(`failed to upload: ${reason}`);
  }

  const descriptor = (await response.json()) as BlossomBlobDescriptor;
  return blossomDescriptorToFileUploadResponse(descriptor);
};

export const uploadFileStorageBlossom = async ({
  serverUrl,
  files,
}: UploadFileStorageParams): Promise<PromiseSettledResult<FileUploadResponse>[]> => {
  const promises = Array.from(files).map(async (file) => uploadBlossom(serverUrl, file));
  return Promise.allSettled(promises);
};

export const upload = (server: FileServerDefinition) => (files: File[]) => {
  if (server.type === 'blossom') {
    return uploadFileStorageBlossom({ files, serverUrl: server.serverUrl });
  }
  return uploadFileStorageNip96({ files, serverUrl: server.serverUrl });
};
