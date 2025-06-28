import { createMemo } from 'solid-js';

import { createQuery, type CreateQueryResult } from '@tanstack/solid-query';
import { z } from 'zod';

import isValidId from '@/nostr/event/isValidId';
import ensureSchema from '@/utils/ensureSchema';

const RelayInfoLimitationSchema = z.object({
  max_message_length: z.optional(z.number()),
  max_subscriptions: z.optional(z.number()),
  max_filters: z.optional(z.number()),
  max_limit: z.optional(z.number()),
  max_subid_length: z.optional(z.number()),
  max_event_tags: z.optional(z.number()),
  max_content_length: z.optional(z.number()),
  min_pow_difficulty: z.optional(z.number()),
  auth_required: z.optional(z.boolean()),
  payment_required: z.optional(z.boolean()),
  restricted_writes: z.optional(z.boolean()),
  created_at_lower_limit: z.optional(z.number()),
  created_at_upper_limit: z.optional(z.number()),
});

const RelayInfoRetentionSchema = z.array(
  z.object({
    kinds: z.array(z.union([z.number(), z.array(z.number())])),
    time: z.nullable(z.number()),
  }),
);

const RelayInfoFeeSchema = z.object({
  amount: z.number(),
  unit: z.string(),
  period: z.optional(z.number()),
  kinds: z.optional(z.array(z.number())),
});

const RelayInfoFeesSchema = z.object({
  admission: z.optional(z.array(RelayInfoFeeSchema)),
  subscription: z.optional(z.array(RelayInfoFeeSchema)),
  publication: z.optional(z.array(RelayInfoFeeSchema)),
});

export const RelayInfoSchema = z.object({
  name: z.optional(z.string()),
  description: z.optional(z.string()),
  pubkey: z.optional(z.string().refine(isValidId)),
  contact: z.optional(z.string()),
  supported_nips: z.optional(z.array(z.number())),
  software: z.optional(z.string()),
  version: z.optional(z.string()),
  // Icon
  icon: z.optional(z.string().url()),
  // Server limitation
  limitation: z.optional(RelayInfoLimitationSchema),
  // Event retention
  retention: z.optional(RelayInfoRetentionSchema),
  // Content Limitation
  relay_countries: z.optional(z.array(z.string())),
  // Community Preferences
  language_tags: z.optional(z.array(z.string())),
  tags: z.optional(z.array(z.string())),
  posting_policy: z.optional(z.string().url()),
  // Pay to relay
  payments_url: z.optional(z.string().url()),
  fees: z.optional(RelayInfoFeesSchema),
});

export type RelayInfo = z.infer<typeof RelayInfoSchema>;

const buildRelayInfoUrlFromRelayUrl = (relayUrl: string): URL => {
  const url = new URL(relayUrl);
  if (url.protocol === 'wss:') {
    url.protocol = 'https';
  } else if (url.protocol === 'ws:') {
    url.protocol = 'http';
  } else {
    throw new Error('unexpected protocol');
  }

  return url;
};

export const fetchRelayInfo = async (relayUrl: string): Promise<RelayInfo> => {
  const relayInfoUrl = buildRelayInfoUrlFromRelayUrl(relayUrl);

  const res = await fetch(relayInfoUrl, {
    headers: {
      Accept: 'application/nostr+json',
    },
    mode: 'cors',
  });

  if (res.status !== 200) {
    throw new Error('failed to fetch relay info: status was not 200');
  }

  const body = await res.json();
  if (!ensureSchema(RelayInfoSchema)(body)) {
    throw new Error('failed to fetch relay info: unexpected form of data');
  }

  return body;
};

export type UseRelayInfoProps = {
  relayUrl: string;
};

export type UseRelayInfo = {
  relayInfo: () => RelayInfo | undefined;
  query: CreateQueryResult<RelayInfo | undefined>;
};

const useRelayInfo = (propsProvider: () => UseRelayInfoProps): UseRelayInfo => {
  const props = createMemo(propsProvider);

  const query = createQuery(() => ({
    queryKey: ['useRelayInfo', props()] as const,
    queryFn: ({ queryKey }) => {
      const [, params] = queryKey;
      if (params == null) return undefined;
      return fetchRelayInfo(params.relayUrl);
    },
    enabled: props() != null,
    staleTime: 5 * 60 * 1000, // 5 min
    gcTime: 90 * 24 * 60 * 60 * 1000, // 90 days (in case the server is unavailable)
  }));

  return {
    relayInfo: () => query.data,
    query,
  };
};

export default useRelayInfo;
