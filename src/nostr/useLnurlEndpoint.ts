import { createMemo } from 'solid-js';

import { createQuery, type UseQueryResult } from '@tanstack/solid-query';
import { type Event as NostrEvent } from 'nostr-tools/pure';

import isValidId from '@/nostr/event/isValidId';
import { type LnurlError } from '@/nostr/zap/common';
import fetchLnurlEndpoint, { type LnurlEndpoint } from '@/nostr/zap/fetchLnurlEndpoint';
import verifyZapReceipt from '@/nostr/zap/verifyZapReceipt';

export type UseLnurlEndpointProps = {
  lnurlPayUrl: string;
};

export type UseLnurlEndpoint = {
  endpoint: () => LnurlEndpoint | null;
  error: () => LnurlError | null;
  lnurlPayUrl: () => string | undefined;
  allowsNostr: () => boolean;
  commentAllowed: () => number;
  isZapReceiptVerified: (event: NostrEvent) => boolean;
  query: UseQueryResult<LnurlEndpoint | LnurlError | undefined>;
};

const useLnurlEndpoint = (propsProvider: () => UseLnurlEndpointProps | null): UseLnurlEndpoint => {
  const props = createMemo(propsProvider);

  const query = createQuery(() => ({
    queryKey: ['useLnurlEndpoint', props()] as const,
    queryFn: ({ queryKey }) => {
      const [, params] = queryKey;
      if (params == null) return undefined;
      return fetchLnurlEndpoint(params.lnurlPayUrl);
    },
    enabled: props() != null,
    staleTime: 5 * 60 * 1000, // 5 min
    gcTime: 3 * 24 * 60 * 60 * 1000, // 3 days
  }));

  const endpoint = (): LnurlEndpoint | null => {
    const { data } = query;
    if (data == null || ('status' in data && data.status === 'ERROR')) return null;
    return data as LnurlEndpoint;
  };

  const error = (): LnurlError | null => {
    const { data } = query;
    if (data == null || !('status' in data) || data.status !== 'ERROR') return null;
    return data;
  };

  const allowsNostr = () => {
    const data = endpoint();
    if (data == null) return false;
    return !!data.allowsNostr && data.nostrPubkey != null && isValidId(data.nostrPubkey);
  };

  const commentAllowed = (): number => {
    const data = endpoint();
    if (data == null) return 0;
    if (data.commentAllowed == null) return 0;
    return data.commentAllowed;
  };

  const verifyReceipt = (zapReceipt: NostrEvent) => {
    const lnurlPayUrl = props()?.lnurlPayUrl;
    if (lnurlPayUrl == null) {
      return { success: false, reason: 'lnurlPayUrl is null' };
    }

    const data = endpoint();
    if (data == null) {
      return { success: false, reason: 'metadata is not fetched' };
    }
    if (!allowsNostr()) {
      return { success: false, reason: 'nostr is not allowed' };
    }

    const lnurlProviderPubkey = data.nostrPubkey;
    if (lnurlProviderPubkey == null) {
      return { success: false, reason: 'nostrPubkey is null' };
    }

    return verifyZapReceipt({
      zapReceipt,
      lnurlPayUrl,
      lnurlProviderPubkey,
    });
  };

  const isZapReceiptVerified = (zapReceipt: NostrEvent) => verifyReceipt(zapReceipt).success;

  return {
    endpoint,
    error,
    lnurlPayUrl: () => props()?.lnurlPayUrl,
    allowsNostr,
    commentAllowed,
    isZapReceiptVerified,
    query,
  };
};

export default useLnurlEndpoint;
