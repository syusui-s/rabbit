import { createMemo } from 'solid-js';

import { useQueryClient } from '@tanstack/solid-query';

import createProfile from '@/nostr/builder/createProfile';
import usePublishEventMutation, {
  type PublishEventResult,
} from '@/nostr/mutation/usePublishEventMutation';
import { queryKeyUseProfile } from '@/nostr/useProfile';

export type UseProfileMutationProps = {
  pubkey?: string;
  onSuccess?: (result: PublishEventResult) => void;
  onError?: (err: Error) => void;
};

const useProfileMutation = (propsProvider: () => UseProfileMutationProps) => {
  const queryClient = useQueryClient();

  const props = createMemo(propsProvider);

  const { mutation, wrapMutate } = usePublishEventMutation(() => ({
    mutationKey: ['updateProfile', props().pubkey],
    onSuccess: (result) => {
      const { pubkey } = props();
      if (pubkey == null) return;
      const queryKey = queryKeyUseProfile({ pubkey });
      queryClient
        .invalidateQueries({ queryKey })
        .catch((err) => console.error('failed to invalidate profile', err));
      props().onSuccess?.(result);
    },
    onError: (err) => {
      props().onError?.(err);
    },
  }));

  const publishProfile = wrapMutate(createProfile);

  return { mutation, publishProfile };
};

export default useProfileMutation;
