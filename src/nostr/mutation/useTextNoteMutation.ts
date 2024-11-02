import { createMutation } from '@tanstack/solid-query';
import { type UnsignedEvent } from 'nostr-tools/pure';

import useConfig from '@/core/useConfig';
import useCommands from '@/nostr/useCommands';
import timeout from '@/utils/timeout';

const useTextNoteMutation = () => {
  const { config } = useConfig();
  const commands = useCommands();

  const mutation = createMutation(() => ({
    mutationKey: ['publishTextNote'] as const,
    mutationFn: (unsignedEvent: UnsignedEvent) =>
      commands
        .signAndPublishEvent(config().relayUrls, unsignedEvent)
        .then((promises) => Promise.allSettled(promises.map(timeout(10000)))),
    onSuccess: (results) => {
      const succeeded = results.filter((res) => res.status === 'fulfilled').length;
      const failed = results.length - succeeded;
      if (succeeded === results.length) {
        console.log('Succeeded to publish a text note');
      } else if (succeeded > 0) {
        console.warn(`Failed to publish a text note on ${failed} relays`);
      } else {
        console.error('Failed to publish a text note on all relays');
      }
    },
    onError: (err) => {
      console.error('failed to publish text note', err);
    },
  }));

  return mutation;
};

export default useTextNoteMutation;
