import { createMemo, type Accessor } from 'solid-js';
import { createQuery, type CreateQueryResult } from '@tanstack/solid-query';
import { nip05, nip19 } from 'nostr-tools';

export type UseVerificationProps = {
  nip05: string;
};

export type UseVerification = {
  verification: Accessor<nip19.ProfilePointer | null>;
  query: CreateQueryResult<nip19.ProfilePointer | null>;
};

const useVerification = (propsProvider: () => UseVerificationProps | null): UseVerification => {
  const props = createMemo(propsProvider);
  const query = createQuery(
    () => ['useVerification', props()] as const,
    ({ queryKey, signal }) => {
      const [, currentProps] = queryKey;
      if (currentProps == null) return Promise.resolve(null);
      const { nip05: nip05string } = currentProps;
      return nip05.queryProfile(nip05string);
    },
    {
      staleTime: 30 * 60 * 1000, // 30 min
      cacheTime: 24 * 60 * 60 * 1000, // 24 hour
    },
  );

  const verification = () => query?.data ?? null;

  return { verification, query };
};

export default useVerification;
