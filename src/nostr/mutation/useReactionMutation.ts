import { createMemo } from 'solid-js';

import { createMutation, useQueryClient } from '@tanstack/solid-query';

import useCommands from '@/nostr/useCommands';
import { queryKeyUseReactions } from '@/nostr/useReactions';
import timeout from '@/utils/timeout';

type UseReactionMutationProps = {
  eventId: string;
};

const useReactionMutation = (propsProvider: () => UseReactionMutationProps) => {
  const queryClient = useQueryClient();
  const props = createMemo(propsProvider);

  const commands = useCommands();

  const mutation = createMutation({
    mutationKey: ['useReactionMutation', props().eventId] as const,
    mutationFn: (...params: Parameters<typeof commands.publishReaction>) =>
      commands
        .publishReaction(...params)
        .then((promises) => Promise.allSettled(promises.map(timeout(5000)))),
    onSuccess: (results) => {
      const succeeded = results.filter((res) => res.status === 'fulfilled').length;
      const failed = results.length - succeeded;
      if (succeeded === results.length) {
        console.log('Succeeded to publish a reaction');
      } else if (succeeded > 0) {
        console.warn(`failed to publish a reaction on ${failed} relays`);
      } else {
        console.error('failed to publish reaction on all relays');
      }
    },
    onError: (err) => {
      console.error('failed to publish reaction: ', err);
    },
    onSettled: () => {
      const queryKey = queryKeyUseReactions({ eventId: props().eventId });
      queryClient
        .refetchQueries({ queryKey })
        .then(() => queryClient.invalidateQueries({ queryKey }))
        .catch((err) => console.error('failed to refetch reactions', err));
    },
  });

  return mutation;
};

export default useReactionMutation;
