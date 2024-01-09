import { createMemo } from 'solid-js';

import { createQuery } from '@tanstack/solid-query';
import { type Event as NostrEvent } from 'nostr-tools';

import isValidId from '@/nostr/event/isValidId';
import { fetchLnurlEndpoint, verifyZapReceipt, type LnurlEndpoint } from '@/nostr/zap';

export type UseLnurlPayRequestMetadataProps = {
  lnurlPayUrl: string;
};

const useLnurlEndpoint = (propsProvider: () => UseLnurlPayRequestMetadataProps | null) => {
  const props = createMemo(propsProvider);

  const query = createQuery(() => ({
    queryKey: ['useLnurlEndpoint', props()] as const,
    queryFn: ({ queryKey }) => {
      const [, params] = queryKey;
      if (params == null) return undefined;
      return fetchLnurlEndpoint(params.lnurlPayUrl);
    },
    staleTime: 5 * 60 * 1000, // 5 min
    gcTime: 3 * 24 * 60 * 60 * 1000, // 3 days
  }));

  const endpoint = (): LnurlEndpoint | null => {
    const { data } = query;
    if (data == null || ('status' in data && data.status === 'ERROR')) return null;
    return data as LnurlEndpoint;
  };

  const allowsNostr = () => {
    const data = endpoint();
    if (data == null) return false;
    return !!data.allowsNostr && data.nostrPubkey != null && isValidId(data.nostrPubkey);
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
    allowsNostr,
    isZapReceiptVerified,
    query,
  };
};

export default useLnurlEndpoint;
