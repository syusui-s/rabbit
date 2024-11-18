import { useQueryClient } from '@tanstack/solid-query';

import { addPubkey, removePubkey } from '@/nostr/builder/createFollowings';
import usePublishEventMutation, {
  type PublishEventResult,
} from '@/nostr/mutation/usePublishEventMutation';
import { queryKeyUseFollowings } from '@/nostr/useFollowings';

export type UseFollowingsMutationProps = {
  pubkey?: string;
  onSuccess?: (result: PublishEventResult) => void;
  onError?: (err: Error) => void;
};

const useFollowingsMutation = (props: UseFollowingsMutationProps) => {
  const queryClient = useQueryClient();

  const { mutation, wrapMutate } = usePublishEventMutation(() => ({
    mutationKey: ['updateContacts', props.pubkey],
    onSuccess: (results) => {
      if (props.pubkey != null) {
        const queryKey = queryKeyUseFollowings({ pubkey: props.pubkey });
        queryClient
          .invalidateQueries({ queryKey })
          .catch((err) => console.error('failed to invalidate profile', err));
      }
      props.onSuccess?.(results);
    },
    onError: (err) => {
      props.onError?.(err);
    },
  }));

  const follow = wrapMutate(addPubkey);
  const unfollow = wrapMutate(removePubkey);

  return { mutation, follow, unfollow };
};

export default useFollowingsMutation;
