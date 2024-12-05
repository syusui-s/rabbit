import {
  createSignal,
  createEffect,
  batch,
  onMount,
  Show,
  Switch,
  Match,
  type Component,
  type JSX,
} from 'solid-js';

import { createMutation } from '@tanstack/solid-query';
import Bolt from 'heroicons/24/outline/bolt.svg';
import Check from 'heroicons/24/solid/check.svg';
import * as Kind from 'nostr-tools/kinds';
import { type Event as NostrEvent } from 'nostr-tools/pure';
import qrcode from 'qrcode';
import { requestProvider, type WebLNProvider } from 'webln';

// eslint-disable-next-line import/no-cycle
import EventDisplay from '@/components/event/EventDisplay';
import BasicModal from '@/components/modal/BasicModal';
import UserNameDisplay from '@/components/UserDisplayName';
import Copy from '@/components/utils/Copy';
import useConfig from '@/core/useConfig';
import { useTranslation } from '@/i18n/useTranslation';
import createZapRequest from '@/nostr/builder/createZapRequest';
import { genericEvent } from '@/nostr/event';
import ZapReceipt from '@/nostr/event/ZapReceipt';
import { signEvent } from '@/nostr/useCommands';
import useLnurlEndpoint from '@/nostr/useLnurlEndpoint';
import useProfile from '@/nostr/useProfile';
import usePubkey from '@/nostr/usePubkey';
import useSubscription from '@/nostr/useSubscription';
import fetchLnurlCallback, { type FetchLnurlCallbackParams } from '@/nostr/zap/fetchLnurlCallback';
import lud06ToLnurlPayUrl from '@/nostr/zap/lud06ToLnurlPayUrl';
import lud16ToLnurlPayUrl from '@/nostr/zap/lud16ToLnurlPayUrl';
import verifyInvoice from '@/nostr/zap/verifyInvoice';
import ensureNonNull from '@/utils/ensureNonNull';
import epoch from '@/utils/epoch';

type ZapTarget = { event: NostrEvent } | { pubkey: string };

export type ZapRequestModalProps = {
  zapTo: ZapTarget;
  // TODO zap to profile
  onClose: () => void;
};

type ZapDialogProps = {
  zapTo: ZapTarget;
  lnurlPayUrl?: string | null;
};

const getPubkey = (zapTo: ZapTarget): string => {
  if ('event' in zapTo) {
    return zapTo.event.pubkey;
  }
  if ('pubkey' in zapTo) {
    return zapTo.pubkey;
  }
  throw new Error('unexpected ZapTarget');
};

const getEvent = (zapTo: ZapTarget): NostrEvent | undefined =>
  'event' in zapTo ? zapTo.event : undefined;

const useWebLN = () => {
  const [provider, setProvider] = createSignal<WebLNProvider | undefined>();
  const [status, setStatus] = createSignal<'available' | 'unavailable' | 'checking'>('checking');

  onMount(() => {
    requestProvider()
      .then((webln) => {
        batch(() => {
          setProvider(webln);
          setStatus('available');
        });
      })
      .catch((err) => {
        console.warn('failed to request provider', err);
        setStatus('unavailable');
      });
  });

  return { provider, status };
};

const QRCodeDisplay: Component<{ text: string }> = (props) => {
  let canvasRef: HTMLCanvasElement | undefined;
  const { getColorTheme } = useConfig();

  createEffect(() => {
    if (canvasRef == null) return;

    const currentTheme = getColorTheme();

    qrcode
      .toCanvas(canvasRef, props.text, {
        margin: 2,
        color: {
          dark: currentTheme.brightness === 'dark' ? '#ffffffff' : '#000000ff',
          light: '#00000000',
        },
      })
      .catch((e) => {
        console.error(e);
      });
  });

  return <canvas width="256" height="256" ref={canvasRef} />;
};

const InvoiceDisplay: Component<{
  invoice: string;
  recipientPubkey: string;
  lnurlPubkey?: string;
}> = (props) => {
  const i18n = useTranslation();
  const { config } = useConfig();
  const webln = useWebLN();

  const lightingInvoiceWithSchema = () => `lightning:${props.invoice}`;

  const { events } = useSubscription(() =>
    ensureNonNull([props.lnurlPubkey] as const)(([lnurlPubkey]) => ({
      relayUrls: config().relayUrls,
      filters: [
        {
          kinds: [Kind.Zap],
          authors: lnurlPubkey != null ? [lnurlPubkey] : undefined,
          '#p': [props.recipientPubkey],
          since: epoch(),
        },
      ],
      continuous: true,
    })),
  );

  const zapped = () =>
    events().find((ev) => new ZapReceipt(ev).bolt11().paymentRequest === props.invoice);

  const handleClickWebLN = () => {
    const provider = webln.provider();
    if (provider == null) return;

    provider
      .sendPayment(props.invoice)
      .then(() => {
        window.alert('success');
      })
      .catch((err) => {
        const message = err instanceof Error ? `:${err.message}` : '';
        window.alert(`failed to send zap: ${message}`);
      });
  };

  return (
    <Show
      when={!zapped()}
      fallback={
        <div class="flex flex-col items-center gap-4 py-8">
          <span class="inline-block size-28 rounded-full border-4 border-primary p-4 text-primary">
            <Check />
          </span>
          <div class="text-secondary text-xl">{i18n.t('zap.completed')}</div>
        </div>
      }
    >
      <div class="flex flex-col items-center gap-4">
        <div class="p-8">
          <QRCodeDisplay text={lightingInvoiceWithSchema()} />
        </div>
        <div class="flex items-center gap-2 ps-5">
          <textarea
            class="h-12 w-80 flex-1 select-all whitespace-pre-wrap break-all rounded-md border border-border bg-bg font-mono text-sm ring-border placeholder:text-fg-secondary focus:border-border focus:ring-primary"
            value={props.invoice}
            readonly
          />
          <Copy class="size-5 hover:text-primary" text={props.invoice} />
        </div>
        <a
          class="inline-block rounded bg-primary p-4 font-bold text-primary-fg hover:bg-primary-hover"
          href={lightingInvoiceWithSchema()}
        >
          {i18n.t('zap.sendViaWallet')}
        </a>
        <Show when={webln.status() === 'available'}>
          <button
            type="button"
            class="inline-block rounded bg-primary p-4 font-bold text-primary-fg hover:bg-primary-hover"
            onClick={handleClickWebLN}
          >
            {i18n.t('zap.sendViaWebLN')}
          </button>
        </Show>
      </div>
    </Show>
  );
};

const ZapDialog: Component<ZapDialogProps> = (props) => {
  const i18n = useTranslation();
  const pubkey = usePubkey();
  const { config } = useConfig();

  const [amountSats, setAmountSats] = createSignal<number>(1);
  const [comment, setComment] = createSignal<string>('');

  const { endpoint, error, allowsNostr, commentAllowed, query } = useLnurlEndpoint(() =>
    ensureNonNull([props.lnurlPayUrl])(([url]) => ({
      lnurlPayUrl: url,
    })),
  );

  const event = () => {
    const rawEvent = getEvent(props.zapTo);
    if (rawEvent == null) return undefined;
    return genericEvent(rawEvent);
  };

  const hasZapTag = () => {
    const ev = event();
    if (ev == null) return false;
    return ev.findTagsByName('zap').length > 0;
  };

  const lnurlPayUrlDomain = () => {
    if (props.lnurlPayUrl == null) return null;
    const url = new URL(props.lnurlPayUrl);
    return url.host;
  };

  const lnurlServiceIcon = () =>
    endpoint()?.decodedMetadata?.imageJPEG || endpoint()?.decodedMetadata?.imagePNG;

  const minSendableInSats = () => Math.ceil((endpoint()?.minSendable ?? 1) / 1000);
  const maxSendableInSats = () => Math.floor((endpoint()?.maxSendable ?? 1) / 1000);

  const getInvoice = async (): Promise<string | undefined> => {
    const p = pubkey();
    if (p == null) return undefined;

    const endpointData = endpoint();
    if (endpointData == null) return undefined;
    if (props.lnurlPayUrl == null) return undefined;

    if (amountSats() < minSendableInSats() || amountSats() > maxSendableInSats()) return undefined;

    const amountMilliSats = Math.floor(amountSats() * 1000).toString();
    const { callback } = endpointData;

    const callbackParams: FetchLnurlCallbackParams = {
      lnurlPayUrl: props.lnurlPayUrl,
      callback,
      amountMilliSats,
    };

    if (commentAllowed() > 0 && comment().length > 0 && comment().length <= commentAllowed()) {
      callbackParams.comment = comment();
    }

    if (allowsNostr()) {
      const unsignedEvent = createZapRequest({
        amountMilliSats,
        content: comment(),
        pubkey: p,
        recipientPubkey: getPubkey(props.zapTo),
        eventId: event()?.id,
        relays: config().relayUrls,
        lnurlPayUrl: props.lnurlPayUrl,
      });
      const zapRequest = await signEvent(unsignedEvent);
      callbackParams.zapRequest = zapRequest;
    }

    const callbackResponse = await fetchLnurlCallback(callbackParams);

    if (!('pr' in callbackResponse)) {
      throw new Error('failed to get invoice');
    }

    const invoice = callbackResponse.pr;

    verifyInvoice(invoice, { amountMilliSats });

    return invoice;
  };

  const getInvoiceMutation = createMutation(() => ({
    mutationKey: ['getInvoiceMutation', props.zapTo],
    mutationFn: () => getInvoice(),
  }));

  const handleSubmit: JSX.EventHandler<HTMLFormElement, Event> = (ev) => {
    ev.preventDefault();
    getInvoiceMutation.mutate();
  };

  return (
    <Switch>
      <Match when={query.isError}>
        {i18n.t('zap.fetchingLnUrlEndpointError')}: {query?.error?.message}
      </Match>
      <Match when={error()} keyed>
        {(err) => (
          <>
            {i18n.t('zap.lnUrlEndpointError')}: {err.reason}
          </>
        )}
      </Match>
      <Match when={query.isFetching}>{i18n.t('zap.fetchingLnUrlEndpoint')}</Match>
      <Match when={getInvoiceMutation.isPending}>{i18n.t('zap.fetchingLnUrlInvoice')}</Match>
      <Match when={getInvoiceMutation.isError}>
        {i18n.t('zap.fetchingLnUrlInvoiceError')}: {getInvoiceMutation?.error?.message}
      </Match>
      <Match when={getInvoiceMutation.isSuccess && getInvoiceMutation.data} keyed>
        {(invoice) => (
          <InvoiceDisplay
            invoice={invoice}
            recipientPubkey={getPubkey(props.zapTo)}
            lnurlPubkey={endpoint()?.nostrPubkey}
          />
        )}
      </Match>
      <Match when={query.isSuccess}>
        <div class="flex flex-col items-center">
          <Show when={!allowsNostr()}>
            <div class="pb-8 text-center">{i18n.t('zap.lnurlServiceDoesNotAllowNostr')}</div>
          </Show>
          <Show when={hasZapTag()}>
            <div class="pb-8 text-center">{i18n.t('zap.zapSplitIsNotSupported')}</div>
          </Show>
          <div class="flex flex-col items-center overflow-hidden rounded px-8 py-2 text-fg-secondary">
            <Show when={lnurlServiceIcon()} keyed>
              {(url) => (
                <img
                  class="max-h-64 w-64 rounded object-cover"
                  alt="LNURL service icon"
                  src={url}
                />
              )}
            </Show>
            <div class="font-bold">{lnurlPayUrlDomain()}</div>
            <div>{endpoint()?.decodedMetadata?.textPlain}</div>
            <div>{endpoint()?.decodedMetadata?.textLongDesc}</div>
          </div>
          <div class="w-96 rounded-lg border border-border p-2">
            <Switch>
              <Match when={'event' in props.zapTo && props.zapTo} keyed>
                {(zapTo) => <EventDisplay event={zapTo.event} actions={false} embedding={false} />}
              </Match>
              <Match when={'pubkey' in props.zapTo && props.zapTo} keyed>
                {(zapTo) => <UserNameDisplay pubkey={zapTo.pubkey} />}
              </Match>
            </Switch>
          </div>
          <form class="mt-4 flex w-64 flex-col items-center gap-1" onSubmit={handleSubmit}>
            <label class="flex w-full items-center gap-2">
              <input
                type="number"
                name="amountSats"
                class="min-w-0 flex-1 rounded-md border border-border bg-bg text-center text-3xl ring-border placeholder:text-fg-secondary focus:border-border focus:ring-primary"
                min={minSendableInSats()}
                max={maxSendableInSats()}
                required
                disabled={query.isPending}
                value={amountSats()}
                onChange={(ev) => setAmountSats(parseInt(ev.target.value, 10))}
              />
              <div class="text-center text-xl text-fg-secondary">sats</div>
            </label>
            <input
              type="text"
              name="comment"
              class="w-full rounded-md border border-border bg-bg ring-border placeholder:text-fg-secondary focus:border-border focus:ring-primary"
              maxLength={commentAllowed() > 0 ? commentAllowed() : 70}
              placeholder={i18n.t('zap.comment')}
              disabled={query.isPending}
              value={comment()}
              onChange={(ev) => setComment(ev.target.value)}
            />
            <button
              type="submit"
              class="flex w-full items-center justify-center rounded bg-primary py-4 text-primary-fg hover:bg-primary-hover"
              disabled={getInvoiceMutation.isPending}
            >
              <span class="inline-block size-6">
                <Bolt />
              </span>
            </button>
          </form>
        </div>
      </Match>
    </Switch>
  );
};

const ZapRequestModal: Component<ZapRequestModalProps> = (props) => {
  const i18n = useTranslation();

  const recipientPubkey = () => getPubkey(props.zapTo);

  const { lud06, lud16, isZapConfigured } = useProfile(() => ({
    pubkey: recipientPubkey(),
  }));

  const [lnurlSource, setLnurlSource] = createSignal<'lud06' | 'lud16' | undefined>();

  createEffect(() => {
    if (lud06() != null) setLnurlSource('lud06');
    else if (lud16() != null) setLnurlSource('lud16');
  });

  return (
    <BasicModal onClose={props.onClose}>
      <div class="px-8 py-12">
        <Show when={isZapConfigured()} fallback={i18n.t('zap.userDidNotConfigureZap')}>
          <Show when={lud06() != null && lud16() != null}>
            <div class="flex justify-center gap-3 pb-2">
              <button
                type="button"
                class="rounded border-2 border-primary p-2"
                classList={{
                  'bg-primary': lnurlSource() === 'lud06',
                  'text-primary-fg': lnurlSource() === 'lud06',
                  'bg-bg': lnurlSource() !== 'lud06',
                  'text-primary': lnurlSource() !== 'lud06',
                }}
                onClick={() => setLnurlSource('lud06')}
              >
                {i18n.t('zap.lud06')}
              </button>
              <button
                type="button"
                class="rounded border-2 border-primary p-2"
                classList={{
                  'bg-primary': lnurlSource() === 'lud16',
                  'text-primary-fg': lnurlSource() === 'lud16',
                  'bg-bg': lnurlSource() !== 'lud16',
                  'text-primary': lnurlSource() !== 'lud16',
                }}
                onClick={() => setLnurlSource('lud16')}
              >
                {i18n.t('zap.lud16')}
              </button>
            </div>
          </Show>
          <Show when={lnurlSource() === 'lud06' && lud06()} keyed>
            {(value) => <ZapDialog lnurlPayUrl={lud06ToLnurlPayUrl(value)} zapTo={props.zapTo} />}
          </Show>
          <Show when={lnurlSource() === 'lud16' && lud16()} keyed>
            {(value) => <ZapDialog lnurlPayUrl={lud16ToLnurlPayUrl(value)} zapTo={props.zapTo} />}
          </Show>
        </Show>
      </div>
    </BasicModal>
  );
};

export default ZapRequestModal;
