import { createMemo, observable } from 'solid-js';

import {
  createQuery,
  useQueryClient,
  type CreateQueryResult,
  QueryClient,
} from '@tanstack/solid-query';
import { Event as NostrEvent } from 'nostr-tools';

import { Profile, ProfileWithOtherProperties, safeParseProfile } from '@/nostr/event/Profile';
import { exec, pickLatestEvent } from '@/nostr/useBatchedEvents';
import timeout from '@/utils/timeout';

export type UseProfileProps = {
  pubkey: string;
};

export type UseProfile = {
  profile: () => ProfileWithOtherProperties | null;
  invalidateProfile: () => Promise<void>;
  query: CreateQueryResult<NostrEvent | null>;
};

export type UseProfilesProps = {
  pubkeys: string[];
};

export type UseProfiles = {
  profiles: () => Record<string, ProfileWithOtherProperties>;
  queries: CreateQueryResult<NostrEvent | null>[];
};

type UseProfileQueryKey = readonly ['useProfile', UseProfileProps | null];

const queryOptions = {
  // Profiles are updated occasionally, so a short staleTime is used here.
  // cacheTime is long so that the user see profiles instantly.
  staleTime: 5 * 60 * 1000, // 5 min
  cacheTime: 24 * 60 * 60 * 1000, // 1 day
  refetchInterval: 5 * 60 * 1000, // 5 min
};

const getProfile = ({
  queryKey,
  signal,
  queryClient,
}: {
  queryKey: UseProfileQueryKey;
  signal?: AbortSignal;
  queryClient: QueryClient;
}): Promise<NostrEvent | null> => {
  const [, currentProps] = queryKey;
  if (currentProps == null) return Promise.resolve(null);

  const { pubkey } = currentProps;

  const promise = exec({ type: 'Profile', pubkey }, signal).then((batchedEvents) => {
    const latestEvent = () => {
      const latest = pickLatestEvent(batchedEvents().events);
      if (latest == null) throw new Error(`profile not found: ${pubkey}`);
      return latest;
    };
    observable(batchedEvents).subscribe(() => {
      try {
        queryClient.setQueryData(queryKey, latestEvent());
      } catch (err) {
        console.error('error occurred while updating profile cache: ', err);
      }
    });
    return latestEvent();
  });
  // TODO timeoutと同時にsignalでキャンセルするようにしたい
  return timeout(15000, `useProfile: ${pubkey}`)(promise);
};

export const useProfile = (propsProvider: () => UseProfileProps | null): UseProfile => {
  const queryClient = useQueryClient();
  const props = createMemo(propsProvider);
  const genQueryKey = createMemo((): UseProfileQueryKey => ['useProfile', props()] as const);

  const query = createQuery(
    genQueryKey,
    ({ queryKey, signal }) => getProfile({ queryKey, signal, queryClient }),
    queryOptions,
  );

  const profile = createMemo((): Profile | null => {
    if (query.data == null) return null;
    const { content } = query.data;
    return safeParseProfile(content);
  });

  const invalidateProfile = (): Promise<void> => queryClient.invalidateQueries(genQueryKey());

  return { profile, invalidateProfile, query };
};

export default useProfile;
