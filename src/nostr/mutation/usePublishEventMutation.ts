import { createMemo } from 'solid-js';

import { createMutation, MutationKey } from '@tanstack/solid-query';
import { UnsignedEvent } from 'nostr-tools/pure';

import useConfig from '@/core/useConfig';
import useCommands from '@/nostr/useCommands';
import { getErrorMessage } from '@/utils/error';
import timeout from '@/utils/timeout';

export type PublishEventResult = {
  succeeded: {
    relayUrl: string;
  }[];
  failed: {
    relayUrl: string;
    reason: string;
  }[];
};

export type UsePublishEventMutation<T extends MutationKey> = {
  mutationKey: T;
  onSuccess?: (result: PublishEventResult) => void;
  onError?: (err: Error) => void;
};

const usePublishEventMutation = <T extends MutationKey>(
  propsProvider: () => UsePublishEventMutation<T>,
) => {
  const props = createMemo(propsProvider);

  const { config } = useConfig();
  const commands = useCommands();

  const mutation = createMutation(() => ({
    mutationKey: props().mutationKey,
    mutationFn: async (unsignedEvent: UnsignedEvent) => {
      const { relayUrls } = config();
      const results = await commands.signAndPublishEvent(relayUrls, unsignedEvent);
      const promiseSettledResults = await Promise.allSettled(results.map(timeout(10000)));

      const succeeded: PublishEventResult['succeeded'] = [];
      const failed: PublishEventResult['failed'] = [];
      promiseSettledResults.forEach((result, i) => {
        const relayUrl = relayUrls[i];
        if (result.status === 'fulfilled') {
          succeeded.push({ relayUrl });
        } else {
          failed.push({ relayUrl, reason: getErrorMessage(result.reason) });
        }
      });

      return { succeeded, failed };
    },
    onSuccess: (result, unsignedEvent) => {
      console.log(
        `Successfully published event: ${JSON.stringify(props().mutationKey)}`,
        unsignedEvent,
        result,
      );
      props().onSuccess?.(result);
    },
    onError: (err, unsignedEvent) => {
      console.log(
        `Failed to publish event: ${JSON.stringify(props().mutationKey)}`,
        unsignedEvent,
        err,
      );
      props().onError?.(err);
    },
  }));

  const wrapMutate =
    <P>(f: (p: P) => UnsignedEvent) =>
    async (params: P): Promise<PublishEventResult> => {
      const unsignedEvent = f(params);
      return mutation.mutateAsync(unsignedEvent);
    };

  return { mutation, wrapMutate };
};

export default usePublishEventMutation;
