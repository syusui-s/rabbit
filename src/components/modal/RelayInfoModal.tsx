import { type Component, Show, For, createSignal } from 'solid-js';

import BasicModal from '@/components/modal/BasicModal';
import UserDisplayName from '@/components/UserDisplayName';
import SafeLink from '@/components/utils/SafeLink';
import useModalState from '@/hooks/useModalState';
import { useTranslation } from '@/i18n/useTranslation';
import useRelayInfo from '@/nostr/useRelayInfo';
import { softwareToGitHostUrl } from '@/utils/url';

export type RelayInfoModalProps = {
  relayUrl: string;
  onClose: () => void;
};

const buildNIPLink = (nip: number) => {
  const filename = nip.toString(10).padStart(2, '0');
  return `https://github.com/nostr-protocol/nips/blob/master/${filename}.md`;
};

const RelayInfoModal: Component<RelayInfoModalProps> = (props) => {
  const i18n = useTranslation();
  const { relayInfo } = useRelayInfo(() => ({ relayUrl: props.relayUrl }));
  const [showRawInfo, setShowRawInfo] = createSignal(false);
  const toggleShowRawInfo = () => setShowRawInfo((current) => !current);

  const { showProfile } = useModalState();

  return (
    <BasicModal onClose={props.onClose}>
      <div class="divide-y divide-border">
        <div class="flex max-w-full items-center gap-4 p-4">
          <Show when={relayInfo()?.icon} keyed>
            {(pictureUrl) => (
              <div class="size-16 overflow-hidden rounded-lg shadow-md">
                <img src={pictureUrl} alt="icon of relay" class="size-full object-cover" />
              </div>
            )}
          </Show>
          <div class="min-w-0 flex-1">
            <h3 class="truncate text-2xl font-bold">{relayInfo()?.name ?? props.relayUrl}</h3>
            <div class="truncate text-sm">{props.relayUrl}</div>
          </div>
        </div>
        <Show when={relayInfo()?.description} keyed>
          <div class="scrollbar max-h-24 overflow-scroll px-4 py-2 break-words whitespace-pre-wrap">
            {relayInfo()?.description}
          </div>
        </Show>
        <div class="flex divide-x divide-border">
          <div class="flex-1 shrink-0 px-4 py-2">
            <div class="text-sm text-fg-secondary">{i18n.t('relayInfo.administrator')}</div>
            <Show
              when={relayInfo()?.pubkey}
              fallback={<div>{i18n.t('relayInfo.unknown')}</div>}
              keyed
            >
              {(pubkey) => (
                <div class="break-words whitespace-normal">
                  <button class="inline underline select-text" onClick={() => showProfile(pubkey)}>
                    <UserDisplayName pubkey={pubkey} />
                  </button>
                </div>
              )}
            </Show>
          </div>
          <div class="flex-1 shrink-0 px-4 py-2">
            <div class="text-sm text-fg-secondary">{i18n.t('relayInfo.contact')}</div>
            <Show
              when={relayInfo()?.contact}
              fallback={<div>{i18n.t('relayInfo.unknown')}</div>}
              keyed
            >
              {(contact) => (
                <div class="break-all whitespace-pre-wrap">
                  <SafeLink class="underline" href={contact}>
                    {contact}
                  </SafeLink>
                </div>
              )}
            </Show>
          </div>
        </div>
        <div class="flex divide-x divide-border">
          <div class="flex-1 shrink-0 px-4 py-2">
            <div class="text-sm text-fg-secondary">{i18n.t('relayInfo.software')}</div>
            <Show
              when={relayInfo()?.software}
              fallback={<div>{i18n.t('relayInfo.unknown')}</div>}
              keyed
            >
              {(software) => (
                <div class="break-all whitespace-pre-wrap">
                  <Show when={softwareToGitHostUrl(software)} fallback={software} keyed>
                    {(url) => <SafeLink class="underline" href={url} />}
                  </Show>
                </div>
              )}
            </Show>
          </div>
          <div class="flex-1 shrink-0 px-4 py-2">
            <div class="text-sm text-fg-secondary">{i18n.t('relayInfo.version')}</div>
            <Show
              when={relayInfo()?.version}
              fallback={<div>{i18n.t('relayInfo.unknown')}</div>}
              keyed
            >
              {(version) => <div class="break-all whitespace-pre-wrap">{version}</div>}
            </Show>
          </div>
        </div>
        <Show when={relayInfo()?.supported_nips} keyed>
          {(nips) => (
            <div class="flex-1 shrink-0 border-t border-border px-4 py-2">
              <div class="text-sm text-fg-secondary">{i18n.t('relayInfo.supportedNips')}</div>
              <div class="scrollbar flex w-full gap-1 overflow-x-scroll pt-1">
                <For each={nips}>
                  {(nip) => (
                    <SafeLink href={buildNIPLink(nip)}>
                      <span class="inline-block w-12 rounded-xl border border-border py-2 text-center hover:border-fg-tertiary hover:text-fg-secondary">
                        {nip}
                      </span>
                    </SafeLink>
                  )}
                </For>
              </div>
            </div>
          )}
        </Show>
        <div class="flex flex-col gap-2 p-4">
          <button
            class="rounded-lg border border-border bg-bg-tertiary/20 p-2 text-fg-secondary select-text hover:bg-bg-tertiary"
            onClick={toggleShowRawInfo}
          >
            {i18n.t('relayInfo.showJSON')}
          </button>
          <Show when={showRawInfo()}>
            <pre class="w-full overflow-scroll rounded-lg border border-border p-4">
              {JSON.stringify(relayInfo(), null, 2)}
            </pre>
          </Show>
        </div>
      </div>
    </BasicModal>
  );
};

export default RelayInfoModal;
