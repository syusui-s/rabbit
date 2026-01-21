import { createMemo } from 'solid-js';

import { createQuery, useQueryClient, type UseQueryResult } from '@tanstack/solid-query';
import { type Event as NostrEvent } from 'nostr-tools/pure';

import {
  type Profile,
  type ProfileWithOtherProperties,
  safeParseProfile,
} from '@/nostr/event/Profile';
import { latestEventQuery } from '@/nostr/query';
import { BatchedEventsTask, type ProfileTask } from '@/nostr/useBatchedEvents';

export type UseProfileProps = {
  pubkey: string;
};

export type UseProfile = {
  profile: () => ProfileWithOtherProperties | null;
  event: () => NostrEvent | null | undefined;
  lud06: () => string | undefined;
  lud16: () => string | undefined;
  isZapConfigured: () => boolean;
  query: UseQueryResult<NostrEvent | null>;
};

export type UseProfilesProps = {
  pubkeys: string[];
};

export type UseProfiles = {
  profiles: () => Record<string, ProfileWithOtherProperties>;
  queries: UseQueryResult<NostrEvent | null>[];
};

export const queryKeyUseProfile = (props: UseProfileProps | null) => ['useProfile', props] as const;

const useProfile = (propsProvider: () => UseProfileProps | null): UseProfile => {
  const queryClient = useQueryClient();
  const props = createMemo(propsProvider);
  const genQueryKey = createMemo(() => queryKeyUseProfile(props()));

  const query = createQuery(() => ({
    queryKey: genQueryKey(),
    queryFn: latestEventQuery<ReturnType<typeof genQueryKey>>({
      taskProvider: ([, currentProps]) => {
        if (currentProps == null) return null;
        const { pubkey } = currentProps;
        return new BatchedEventsTask<ProfileTask>({ type: 'Profile', pubkey });
      },
      queryClient,
    }),
    // Profiles are updated occasionally, so a short staleTime is used here.
    // gcTime is long so that the user see profiles instantly.
    staleTime: 5 * 60 * 1000, // 5 min
    gcTime: 3 * 24 * 60 * 60 * 1000, // 3 days
    refetchInterval: 5 * 60 * 1000, // 5 min
    refetchOnWindowFocus: false,
  }));

  const event = () => query.data;

  const profile = createMemo((): Profile | null => {
    if (query.data == null) return null;
    const { content } = query.data;
    return safeParseProfile(content);
  });

  const lud06 = (): string | undefined => {
    const p = profile();
    if (p == null || p.lud06 == null || p.lud06.length === 0) return undefined;
    return p.lud06;
  };

  const lud16 = (): string | undefined => {
    const p = profile();
    if (p == null || p.lud16 == null || p.lud16.length === 0) return undefined;
    return p.lud16;
  };

  const isZapConfigured = (): boolean => lud06() != null || lud16() != null;

  return { profile, lud06, lud16, event, isZapConfigured, query };
};

export default useProfile;
