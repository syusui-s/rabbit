import { createMemo, type Accessor } from 'solid-js';

import { createQuery, type CreateQueryResult } from '@tanstack/solid-query';
import { queryProfile } from 'nostr-tools/nip05';
import { type ProfilePointer } from 'nostr-tools/nip19';

export type UseVerificationProps = {
  nip05: string;
};

export type UseVerification = {
  verification: Accessor<ProfilePointer | null>;
  query: CreateQueryResult<ProfilePointer | null>;
};

const useVerification = (propsProvider: () => UseVerificationProps | null): UseVerification => {
  const props = createMemo(propsProvider);
  const genQueryKey = () => ['useVerification', props()] as const;

  const query = createQuery(() => ({
    queryKey: genQueryKey(),
    queryFn: ({ queryKey }) => {
      const [, currentProps] = queryKey;
      if (currentProps == null) return Promise.resolve(null);
      const { nip05: nip05string } = currentProps;
      return queryProfile(nip05string);
    },
    staleTime: 30 * 60 * 1000, // 30 min
    gcTime: 24 * 60 * 60 * 1000, // 24 hour
  }));

  const verification = () => query?.data ?? null;

  return { verification, query };
};

export default useVerification;
