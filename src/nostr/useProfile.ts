import { createMemo } from 'solid-js';

import { createQuery, useQueryClient, type CreateQueryResult } from '@tanstack/solid-query';
import { Event as NostrEvent } from 'nostr-tools';

import { Profile, ProfileWithOtherProperties, safeParseProfile } from '@/nostr/event/Profile';
import { latestEventQuery } from '@/nostr/query';
import { BatchedEventsTask, ProfileTask } from '@/nostr/useBatchedEvents';

export type UseProfileProps = {
  pubkey: string;
};

export type UseProfile = {
  profile: () => ProfileWithOtherProperties | null;
  event: () => NostrEvent | null | undefined;
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
    latestEventQuery({
      taskProvider: ([, currentProps]) => {
        if (currentProps == null) return null;
        const { pubkey } = currentProps;
        return new BatchedEventsTask<ProfileTask>({ type: 'Profile', pubkey });
      },
      queryClient,
    }),
    {
      // Profiles are updated occasionally, so a short staleTime is used here.
      // cacheTime is long so that the user see profiles instantly.
      staleTime: 5 * 60 * 1000, // 5 min
      cacheTime: 24 * 60 * 60 * 1000, // 1 day
      refetchInterval: 5 * 60 * 1000, // 5 min
      refetchOnWindowFocus: false,
    },
  );

  const event = () => query.data;

  const profile = createMemo((): Profile | null => {
    if (query.data == null) return null;
    const { content } = query.data;
    return safeParseProfile(content);
  });

  const invalidateProfile = (): Promise<void> => queryClient.invalidateQueries(genQueryKey());

  return { profile, event, invalidateProfile, query };
};

export default useProfile;
