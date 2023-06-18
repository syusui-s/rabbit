import { createMemo, observable } from 'solid-js';

import {
  createQuery,
  useQueryClient,
  type CreateQueryResult,
  QueryClient,
} from '@tanstack/solid-query';
import { Event as NostrEvent } from 'nostr-tools';

import { Profile, ProfileWithOtherProperties, safeParseProfile } from '@/nostr/event/Profile';
import { BatchedEventsTask, pickLatestEvent, registerTask } from '@/nostr/useBatchedEvents';
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

const useProfile = (propsProvider: () => UseProfileProps | null): UseProfile => {
  const queryClient = useQueryClient();
  const props = createMemo(propsProvider);
  const genQueryKey = createMemo((): UseProfileQueryKey => ['useProfile', props()] as const);

  const query = createQuery(
    genQueryKey,
    ({ queryKey, signal }) => {
      const [, currentProps] = queryKey;
      if (currentProps == null) return null;
      const { pubkey } = currentProps;
      const task = new BatchedEventsTask({ type: 'Profile', pubkey });
      const promise = task.firstEventPromise().catch(() => {
        throw new Error(`profile not found: ${pubkey}`);
      });
      task.onUpdate((events) => {
        const latest = pickLatestEvent(events);
        queryClient.setQueryData(queryKey, latest);
      });
      registerTask({ task, signal });
      return timeout(3000, `useProfile: ${pubkey}`)(promise);
    },
    {
      // Profiles are updated occasionally, so a short staleTime is used here.
      // cacheTime is long so that the user see profiles instantly.
      staleTime: 5 * 60 * 1000, // 5 min
      cacheTime: 24 * 60 * 60 * 1000, // 1 day
      refetchInterval: 5 * 60 * 1000, // 5 min
      refetchOnWindowFocus: false,
    },
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
