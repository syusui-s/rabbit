import { createMemo } from 'solid-js';

import { createMutation } from '@tanstack/solid-query';
import { UnsignedEvent } from 'nostr-tools/pure';

import useConfig from '@/core/useConfig';
import useCommands from '@/nostr/useCommands';
import timeout from '@/utils/timeout';

export type UseDeleteMutationProps = {
  id: string;
};

const useDeleteMutation = (propsProvider: () => UseDeleteMutationProps) => {
  const props = createMemo(propsProvider);

  const { config } = useConfig();
  const commands = useCommands();

  const mutation = createMutation(() => ({
    mutationKey: ['deleteEvent', props().id],
    mutationFn: (unsignedEvent: UnsignedEvent) =>
      commands
        .signAndPublishEvent(config().relayUrls, unsignedEvent)
        .then((promeses) => Promise.allSettled(promeses.map(timeout(10000)))),
    onSuccess: (results) => {
      console.log('succeeded to delete', results);
    },
    onError: (err) => {
      console.error('failed to delete', err);
    },
  }));

  return mutation;
};

export default useDeleteMutation;
