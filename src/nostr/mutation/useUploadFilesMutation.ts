import { createMutation } from '@tanstack/solid-query';

import useConfig from '@/core/useConfig';
import Tags from '@/nostr/event/Tags';
import { fileUploadResponseToImetaTag, upload } from '@/utils/imageUpload';

export type UseUploadFilesMutationResult = {
  urls: string[];
  uploadedImetaTags: Record<string, string[]>;
  failed: [File, string][];
};

export type UseUploadFilesMutationProps = {
  // onSuccess callback function of mutation.mutate() is not called. This is workaround.
  onSuccess: (result: UseUploadFilesMutationResult) => void;
};

const useUploadFilesMutation = (propsProvider: () => UseUploadFilesMutationProps) => {
  const props = propsProvider();

  const { config } = useConfig();

  const mutation = createMutation(() => ({
    mutationKey: ['uploadFiles'] as const,
    mutationFn: async (files: File[]): Promise<UseUploadFilesMutationResult> => {
      const uploadResults = await upload(config().fileServer)(files);

      const urls: string[] = [];
      const uploadedImetaTags: Record<string, string[]> = {};
      const failed: [File, string][] = [];

      uploadResults.forEach((result, i) => {
        if (result.status === 'fulfilled') {
          const { status, nip94_event: nip94Event } = result.value;
          if ((status === 'success' || status === 'processing') && nip94Event != null) {
            // TODO support delayed processing
            const tags = new Tags(nip94Event.tags);
            const urlTag = tags.findFirstTagByName('url');

            if (urlTag == null || urlTag.length < 2) {
              failed.push([files[i], 'url not found']);
              return;
            }
            const url = urlTag[1];
            urls.push(url);

            const imetaTag = fileUploadResponseToImetaTag(result.value);
            if (imetaTag != null) {
              uploadedImetaTags[url] = imetaTag;
            }
          } else if (result.value.status === 'error') {
            failed.push([files[i], result.value.message]);
          }
        } else if (result.reason instanceof Error) {
          failed.push([files[i], result.reason.message]);
        } else {
          failed.push([files[i], 'failed']);
        }
      });

      return { urls, uploadedImetaTags, failed };
    },
    onSuccess: (data) => {
      console.log('Succeeded to upload files', data);
      props.onSuccess(data);
    },
    onError: (err) => {
      console.error('failed to upload images: ', err);
    },
  }));

  return mutation;
};

export default useUploadFilesMutation;
