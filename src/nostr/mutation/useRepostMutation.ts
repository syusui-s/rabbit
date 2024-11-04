import { createMemo } from 'solid-js';

import { createMutation, useQueryClient } from '@tanstack/solid-query';
import { type UnsignedEvent } from 'nostr-tools/pure';

import useConfig from '@/core/useConfig';
import createRepost from '@/nostr/builder/createRepost';
import useCommands from '@/nostr/useCommands';
import { queryKeyUseReposts } from '@/nostr/useReposts';
import timeout from '@/utils/timeout';

type UseRepostMutationProps = {
  eventId: string;
};

const useRepostMutation = (propsProvider: () => UseRepostMutationProps) => {
  const queryClient = useQueryClient();

  const props = createMemo(propsProvider);

  const { config } = useConfig();
  const commands = useCommands();

  const mutation = createMutation(() => ({
    mutationKey: ['useRepostMutation', props().eventId] as const,
    mutationFn: (unsignedEvent: UnsignedEvent) =>
      commands
        .signAndPublishEvent(config().relayUrls, unsignedEvent)
        .then((promises) => Promise.allSettled(promises.map(timeout(10000)))),
    onSuccess: (results) => {
      const succeeded = results.filter((res) => res.status === 'fulfilled').length;
      const failed = results.length - succeeded;
      if (succeeded === results.length) {
        console.log('Succeeded to publish a repost');
      } else if (succeeded > 0) {
        console.warn(`Failed to publish a repost on ${failed} relays`);
      } else {
        console.error('Failed to publish a repost on all relays');
      }
    },
    onError: (err) => {
      console.error('failed to publish repost: ', err);
    },
    onSettled: () => {
      const queryKey = queryKeyUseReposts({ eventId: props().eventId });
      queryClient
        .refetchQueries({ queryKey })
        .then(() => queryClient.invalidateQueries({ queryKey }))
        .catch((err) => console.error('failed to refetch repost', err));
    },
  }));

  const repost = (...params: Parameters<typeof createRepost>) => {
    const unsignedEvent = createRepost(...params);
    mutation.mutate(unsignedEvent);
  };

  return { mutation, repost };
};

export default useRepostMutation;
