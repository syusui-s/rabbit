import { readServerConfig, type FileUploadResponse } from 'nostr-tools/nip96';
import { getToken } from 'nostr-tools/nip98';
import { type EventTemplate } from 'nostr-tools/pure';

export type ServerDefinition = {
  id: string;
  name: string;
  upload: (files: File[]) => Promise<PromiseSettledResult<FileUploadResponse>[]>;
};

export type UploadFileStorageProps = {
  files: File[];
  serverUrl: string;
};

export type UploadFileProps = {
  file: File;
  authorizationHeader?: string;
  media_type?: 'avatar' | 'banner';
};

export const getAuthorizationHeader = (uploadApiUrl: string): Promise<string> => {
  const windowNostr = window.nostr;
  if (windowNostr == null) throw new Error('NIP-07 implementation not found');

  const method = 'POST';
  const signEvent = (ev: EventTemplate) => windowNostr.signEvent(ev);
  const includeAuthorizationScheme = true;

  return getToken(uploadApiUrl, method, signEvent, includeAuthorizationScheme);
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

  const response = await fetch(uploadApiUrl, { method: 'POST', headers, body });

  // TODO validate event
  const json = (await response.json()) as FileUploadResponse;

  if (!response.ok) {
    throw new Error(`failed to upload: ${response.status} ${json.message}`);
  }

  return json;
};

export const uploadFileStorage = async (
  props: UploadFileStorageProps,
): Promise<PromiseSettledResult<FileUploadResponse>[]> => {
  const serverConfig = await readServerConfig(props.serverUrl);

  if (serverConfig.api_url.length === 0 || serverConfig.delegated_to_url != null) {
    throw new Error('delegated_to_url is not supported');
  }
  const uploadApiUrl = serverConfig.api_url;
  const authorizationHeader = await getAuthorizationHeader(uploadApiUrl);

  const promises = Array.from(props.files).map(async (file) =>
    uploadFile(uploadApiUrl, { authorizationHeader, file }),
  );

  return Promise.allSettled(promises);
};

export const uploadNostrBuild = (files: File[]) =>
  uploadFileStorage({ files, serverUrl: 'https://nostr.build' });

export const servers: Record<string, ServerDefinition> = {
  nostrBuild: {
    id: 'nostrBuild',
    name: 'nostr.build',
    upload: uploadNostrBuild,
  },
};
