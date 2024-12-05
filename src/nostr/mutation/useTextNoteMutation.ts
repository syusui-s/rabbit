import createTextNote from '@/nostr/builder/createTextNote';
import usePublishEventMutation from '@/nostr/mutation/usePublishEventMutation';

const useTextNoteMutation = () => {
  const { mutation, wrapMutate } = usePublishEventMutation(() => ({
    mutationKey: ['publishTextNote'] as const,
  }));

  const publishTextNote = wrapMutate(createTextNote);

  return { mutation, publishTextNote };
};

export default useTextNoteMutation;
