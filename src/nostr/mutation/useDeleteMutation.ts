import { createMemo } from 'solid-js';

import createDeletion from '@/nostr/builder/createDeletion';
import usePublishEventMutation from '@/nostr/mutation/usePublishEventMutation';

export type UseDeleteMutationProps = {
  id: string;
};

const useDeleteMutation = (propsProvider: () => UseDeleteMutationProps) => {
  const props = createMemo(propsProvider);

  const { mutation, wrapMutate } = usePublishEventMutation(() => ({
    mutationKey: ['useDeleteMutation', props().id],
  }));

  const deleteEvent = wrapMutate(createDeletion);

  return { mutation, deleteEvent };
};

export default useDeleteMutation;
