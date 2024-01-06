import { Component, Show, createMemo } from 'solid-js';

import { createQuery } from '@tanstack/solid-query';
import Bolt from 'heroicons/24/solid/bolt.svg';
import { type Event as NostrEvent } from 'nostr-tools/pure';

import EventDisplayById from '@/components/event/EventDisplayById';
import UserDisplayName from '@/components/UserDisplayName';
import useConfig from '@/core/useConfig';
import useModalState from '@/hooks/useModalState';
import { useTranslation } from '@/i18n/useTranslation';
import { zapReceipt } from '@/nostr/event';
import useProfile from '@/nostr/useProfile';
import { fetchLnurlPayRequestMetadata, getLnurlPayRequestUrl, verifyZapReceipt } from '@/nostr/zap';
import ensureNonNull from '@/utils/ensureNonNull';
import { formatSiPrefix } from '@/utils/siPrefix';

export type ZapReceiptProps = {
  event: NostrEvent;
};

const ZapReceipt: Component<ZapReceiptProps> = (props) => {
  const i18n = useTranslation();
  const { shouldMuteEvent } = useConfig();
  const { showProfile } = useModalState();

  const event = createMemo(() => zapReceipt(props.event));

  const { profile: senderProfile } = useProfile(() => ({
    pubkey: event().senderPubkey(),
  }));

  const { profile: recipientProfile, query: recipientProfileQuery } = useProfile(() =>
    ensureNonNull([event().zappedPubkey()])(([pubkey]) => ({
      pubkey,
    })),
  );

  const lnurlQuery = createQuery(() => ({
    queryKey: ['fetchLnurlPayRequestMetadata', recipientProfile()] as const,
    queryFn: ({ queryKey }) => {
      const [, params] = queryKey;
      if (params == null) return undefined;
      return fetchLnurlPayRequestMetadata(params);
    },
    staleTime: 5 * 60 * 1000, // 5 min
    gcTime: 3 * 24 * 60 * 60 * 1000, // 3 days
  }));

  const verified = () => {
    const profile = recipientProfile();
    const rawProfile = recipientProfileQuery.data;
    const lnurlMetadata = lnurlQuery.data;
    if (profile == null || rawProfile == null || lnurlMetadata == null) return false;
    if (!(!!lnurlMetadata.allowsNostr && lnurlMetadata.nostrPubkey != null)) return false;

    const lnurlPayUrl = getLnurlPayRequestUrl(profile);
    if (lnurlPayUrl == null) return null;

    const lnurlProviderPubkey = lnurlMetadata.nostrPubkey;

    const result = verifyZapReceipt({
      zapReceipt: event().rawEvent,
      lnurlPayUrl,
      lnurlProviderPubkey,
    });
    console.log('result', result);

    return result.success;
  };

  return (
    <Show when={!shouldMuteEvent(props.event) && verified()}>
      <div class="flex items-center gap-1 text-sm">
        <div class="flex w-6 flex-col items-center">
          <div class="h-4 w-4 shrink-0 text-amber-500" aria-hidden="true">
            <Bolt />
          </div>
          <div class="mt-[-2px] shrink-0 text-xs">{formatSiPrefix(event().amountSats())}</div>
        </div>
        <div class="notification-user flex gap-1 overflow-hidden">
          <div class="author-icon h-5 w-5 shrink-0 overflow-hidden rounded">
            <Show when={senderProfile()?.picture != null}>
              <img
                src={senderProfile()?.picture}
                alt="icon"
                // TODO autofit
                class="h-full w-full object-cover"
              />
            </Show>
          </div>
          <div class="flex min-w-0 flex-1 overflow-hidden">
            <button
              class="select-text truncate font-bold hover:text-link hover:underline"
              onClick={() => showProfile(event().senderPubkey())}
            >
              <UserDisplayName pubkey={event().senderPubkey()} />
            </button>
            <span class="shrink-0">{i18n()('notification.zapped')}</span>
          </div>
        </div>
      </div>
      <Show when={event().description().content.length > 0}>
        <div class="ml-7 whitespace-pre-wrap break-all rounded border border-border px-1 text-sm">
          {event().description().content}
        </div>
      </Show>
      <div class="notification-event py-1">
        <Show when={event().zappedEventId() != null}>
          <EventDisplayById eventId={event().zappedEventId()} />
        </Show>
      </div>
    </Show>
  );
};

export default ZapReceipt;
