import {
  readServerConfig,
  checkFileProcessingStatus,
  type FileUploadResponse,
} from 'nostr-tools/nip96';
import { getToken } from 'nostr-tools/nip98';
import { type EventTemplate } from 'nostr-tools/pure';
import { z } from 'zod';

import sleep from '@/utils/sleep';

export const FileServerDefinitionScheme = z.object({
  type: z.literal('nip96'),
  name: z.string(),
  serverUrl: z.string().url(),
});

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

export const uploadFileStorage = async ({
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

export const upload = (server: FileServerDefinition) => (files: File[]) =>
  uploadFileStorage({ files, serverUrl: server.serverUrl });
