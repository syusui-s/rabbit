import { Component, Show, createMemo } from 'solid-js';

import Bolt from 'heroicons/24/solid/bolt.svg';
import { type Event as NostrEvent } from 'nostr-tools/pure';

import EventDisplayById from '@/components/event/EventDisplayById';
import UserDisplayName from '@/components/UserDisplayName';
import useConfig from '@/core/useConfig';
import useModalState from '@/hooks/useModalState';
import { useTranslation } from '@/i18n/useTranslation';
import ZapReceipt from '@/nostr/event/ZapReceipt';
import useLnurlEndpoint from '@/nostr/useLnurlEndpoint';
import useProfile from '@/nostr/useProfile';
import lud06ToLnurlPayUrl from '@/nostr/zap/lud06ToLnurlPayUrl';
import lud16ToLnurlPayUrl from '@/nostr/zap/lud16ToLnurlPayUrl';
import ensureNonNull from '@/utils/ensureNonNull';
import { formatSiPrefix } from '@/utils/siPrefix';
import { thumbnailUrl } from '@/utils/url';

export type ZapReceiptProps = {
  event: NostrEvent;
};

const ZapReceiptDisplay: Component<ZapReceiptProps> = (props) => {
  const i18n = useTranslation();
  const { shouldMuteEvent } = useConfig();
  const { showProfile } = useModalState();

  const event = createMemo(() => new ZapReceipt(props.event));

  const { profile: senderProfile } = useProfile(() => ({
    pubkey: event().senderPubkey(),
  }));

  const { profile: recipientProfile } = useProfile(() =>
    ensureNonNull([event().zappedPubkey()])(([pubkey]) => ({ pubkey })),
  );

  const lnurlPayUrlLud06 = () => {
    const lud06 = recipientProfile()?.lud06;
    if (lud06 == null) return null;
    return lud06ToLnurlPayUrl(lud06);
  };

  const lnurlPayUrlLud16 = () => {
    const lud16 = recipientProfile()?.lud16;
    if (lud16 == null) return null;
    return lud16ToLnurlPayUrl(lud16);
  };

  const lnurlEndpointLud06 = useLnurlEndpoint(() =>
    ensureNonNull([lnurlPayUrlLud06()] as const)(([lnurlPayUrl]) => ({
      lnurlPayUrl,
    })),
  );

  const lnurlEndpointLud16 = useLnurlEndpoint(() =>
    ensureNonNull([lnurlPayUrlLud16()] as const)(([lnurlPayUrl]) => ({
      lnurlPayUrl,
    })),
  );

  const amountSi = () => {
    const amountSats = event().amountSats();
    if (amountSats == null) return null;
    return formatSiPrefix(amountSats);
  };

  const isZapReceiptVerified = () =>
    lnurlEndpointLud06.isZapReceiptVerified(props.event) ||
    lnurlEndpointLud16.isZapReceiptVerified(props.event);

  return (
    <Show when={!shouldMuteEvent(props.event) && isZapReceiptVerified()}>
      <div class="flex items-center gap-1 text-sm">
        <div class="flex w-6 flex-col items-center">
          <div class="size-4 shrink-0 text-amber-500" aria-hidden="true">
            <Bolt />
          </div>
          <div class="mt-[-2px] shrink-0 text-xs">{amountSi()}</div>
        </div>
        <div class="notification-user flex gap-1 overflow-hidden">
          <div class="author-icon size-5 shrink-0 overflow-hidden rounded">
            <Show when={senderProfile()?.picture} keyed>
              {(url) => (
                <img
                  src={thumbnailUrl(url, 'icon')}
                  alt="icon"
                  // TODO autofit
                  class="size-full object-cover"
                />
              )}
            </Show>
          </div>
          <div class="flex min-w-0 flex-1 overflow-hidden">
            <button
              class="select-text truncate font-bold hover:text-link hover:underline"
              onClick={() => showProfile(event().senderPubkey())}
            >
              <UserDisplayName pubkey={event().senderPubkey()} />
            </button>
            <span class="shrink-0">{i18n.t('notification.zapped')}</span>
          </div>
        </div>
      </div>
      <Show when={event().description().content.length > 0}>
        <div class="ml-7 whitespace-pre-wrap break-normal rounded border border-border px-1 text-sm">
          {event().description().content}
        </div>
      </Show>
      <Show when={event().zappedEventId() != null}>
        <div class="notification-event py-1">
          <EventDisplayById eventId={event().zappedEventId()} />
        </div>
      </Show>
    </Show>
  );
};

export default ZapReceiptDisplay;
