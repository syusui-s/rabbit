import { createMemo } from 'solid-js';

import { createMutation, useQueryClient } from '@tanstack/solid-query';

import useCommands from '@/nostr/useCommands';
import { queryKeyUseReposts } from '@/nostr/useReposts';
import timeout from '@/utils/timeout';

type UseRepostMutationProps = {
  eventId: string;
};

const useRepostMutation = (propsProvider: () => UseRepostMutationProps) => {
  const queryClient = useQueryClient();
  const props = createMemo(propsProvider);

  const commands = useCommands();

  const mutation = createMutation({
    mutationKey: ['useRepostMutation', props().eventId] as const,
    mutationFn: (...params: Parameters<typeof commands.publishRepost>) =>
      commands
        .publishRepost(...params)
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
  });

  return mutation;
};

export default useRepostMutation;
