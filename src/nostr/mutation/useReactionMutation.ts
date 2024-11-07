import { createMemo } from 'solid-js';

import { useQueryClient } from '@tanstack/solid-query';

import createReaction from '@/nostr/builder/createReaction';
import usePublishEventMutation from '@/nostr/mutation/usePublishEventMutation';
import { queryKeyUseReactions } from '@/nostr/useReactions';

type UseReactionMutationProps = {
  eventId: string;
};

const useReactionMutation = (propsProvider: () => UseReactionMutationProps) => {
  const queryClient = useQueryClient();
  const props = createMemo(propsProvider);

  const { mutation, wrapMutate } = usePublishEventMutation(() => ({
    mutationKey: ['useReactionMutation', props().eventId] as const,
    onSuccess: () => {
      const queryKey = queryKeyUseReactions({ eventId: props().eventId });
      queryClient
        .refetchQueries({ queryKey })
        .then(() => queryClient.invalidateQueries({ queryKey }))
        .catch((err) => console.error('failed to refetch reactions', err));
    },
  }));

  const publishReaction = wrapMutate(createReaction);

  return { mutation, publishReaction };
};

export default useReactionMutation;
