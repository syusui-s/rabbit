import { createMemo } from 'solid-js';

import { useQueryClient } from '@tanstack/solid-query';

import createRepost from '@/nostr/builder/createRepost';
import usePublishEventMutation from '@/nostr/mutation/usePublishEventMutation';
import { queryKeyUseReposts } from '@/nostr/useReposts';

type UseRepostMutationProps = {
  eventId: string;
};

const useRepostMutation = (propsProvider: () => UseRepostMutationProps) => {
  const queryClient = useQueryClient();

  const props = createMemo(propsProvider);

  const { mutation, wrapMutate } = usePublishEventMutation(() => ({
    mutationKey: ['useRepostMutation', props().eventId] as const,
    onSuccess: () => {
      const queryKey = queryKeyUseReposts({ eventId: props().eventId });
      queryClient
        .refetchQueries({ queryKey })
        .then(() => queryClient.invalidateQueries({ queryKey }))
        .catch((err) => console.error('failed to refetch repost', err));
    },
  }));

  const publishRepost = wrapMutate(createRepost);

  return { mutation, publishRepost };
};

export default useRepostMutation;
