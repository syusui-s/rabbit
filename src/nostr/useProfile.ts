import { createMemo } from 'solid-js';

import {
  createQuery,
  useQueryClient,
  type CreateQueryResult,
  QueryClient,
  createQueries,
} from '@tanstack/solid-query';
import { Event as NostrEvent } from 'nostr-tools/pure';

import { Profile, ProfileWithOtherProperties, safeParseProfile } from '@/nostr/event/Profile';
import { latestEventQuery } from '@/nostr/query';
import { BatchedEventsTask, ProfileTask } from '@/nostr/useBatchedEvents';

export type UseProfileProps = {
  pubkey: string;
};

export type UseProfile = {
  profile: () => ProfileWithOtherProperties | null;
  pubkey: () => string | undefined;
  event: () => NostrEvent | null | undefined;
  lud06: () => string | undefined;
  lud16: () => string | undefined;
  isZapConfigured: () => boolean;
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

const genQueryKey = (props: UseProfileProps | null) => ['useProfile', props] as const;

const buildMethod = ({
  props,
  query,
  queryClient,
}: {
  props: () => UseProfileProps | null;
  query: CreateQueryResult<NostrEvent | null>;
  queryClient: QueryClient;
}): UseProfile => {
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

  const invalidateProfile = (): Promise<void> =>
    queryClient.invalidateQueries({ queryKey: genQueryKey(props()) });

  return {
    profile,
    pubkey: () => props()?.pubkey,
    lud06,
    lud16,
    event,
    isZapConfigured,
    invalidateProfile,
    query,
  };
};

const queryOptions = ({
  props,
  queryClient,
}: {
  props: () => UseProfileProps | null;
  queryClient: QueryClient;
}) => ({
  queryKey: genQueryKey(props()),
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
});

const useProfile = (propsProvider: () => UseProfileProps | null): UseProfile => {
  const queryClient = useQueryClient();
  const props = createMemo(propsProvider);
  const query = createQuery(() => queryOptions({ props, queryClient }));

  return buildMethod({ props, query, queryClient });
};

export const useProfiles = (propsProvider: () => UseProfilesProps) => {
  const queryClient = useQueryClient();
  const props = createMemo(propsProvider);

  const queries = createQueries(() => ({
    queries: props().pubkeys.map((pubkey) =>
      queryOptions({
        props: () => ({ pubkey }),
        queryClient,
      }),
    ),
  }));

  const profiles = createMemo((): UseProfile[] =>
    queries.map((query, i) =>
      buildMethod({
        props: () => ({ pubkey: props().pubkeys[i] }),
        query,
        queryClient,
      }),
    ),
  );

  const searchProfiles = (query: string) =>
    profiles().filter(
      (profile) =>
        profile.profile()?.name?.includes(query) ||
        profile.profile()?.display_name?.includes(query) ||
        profile.profile()?.nip05?.includes(query),
    );

  return {
    profiles,
    searchProfiles,
    queries,
  };
};

export default useProfile;
