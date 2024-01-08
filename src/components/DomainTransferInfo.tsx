import { createSignal, Show, type Component, type JSX } from 'solid-js';

import XMark from 'heroicons/24/outline/x-mark.svg';

import SafeLink from '@/components/utils/SafeLink';
import { useTranslation } from '@/i18n/useTranslation';

const isPermittedDomain = (url: URL | Location) =>
  url.host === 'rabbit.syusui.net' || url.host.startsWith('localhost');

const DomainTransferInfo: Component<{ children: JSX.Element }> = (props) => {
  const i18n = useTranslation();
  const [showContent, setShowContent] = createSignal(false);

  return (
    <Show
      when={isPermittedDomain(window.location) || showContent()}
      fallback={
        <div class="flex h-svh w-screen shrink-0 flex-col items-center justify-center border-b border-border bg-bg-tertiary text-fg">
          <h3 class="text-2xl font-bold">{i18n()('domainTransfer.announcementHead')}</h3>
          <div>{i18n()('domainTransfer.announcementDescription')}</div>
          <SafeLink class="text-lg text-link underline" href="https://rabbit.syusui.net/" />
          <SafeLink
            class="mt-4 text-sm text-link underline"
            href="https://scrapbox.io/nostr/Rabbit#659be5fa1246d700005facb8"
          >
            {i18n()('domainTransfer.howToMigrateSettings')}
          </SafeLink>
          <button
            type="button"
            class="mt-4 flex items-center text-fg-secondary"
            onClick={() => setShowContent(true)}
          >
            <span class="inline-block h-5 w-5">
              <XMark />
            </span>
            {i18n()('domainTransfer.close')}
          </button>
        </div>
      }
    >
      {props.children}
    </Show>
  );
};

export default DomainTransferInfo;
