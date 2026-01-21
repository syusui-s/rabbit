import { createSignal, batch, For, Show, type JSX } from 'solid-js';

import XMark from 'heroicons/24/outline/x-mark.svg';

import Section from '@/components/modal/config/Section';
import RelayInfoModal from '@/components/modal/RelayInfoModal';
import useConfig from '@/core/useConfig';
import { useTranslation } from '@/i18n/useTranslation';
import usePool from '@/nostr/usePool';
import useRelayInfo from '@/nostr/useRelayInfo';
import { RelayUrlRegex } from '@/utils/regex';

const RelayConfig = () => {
  const i18n = useTranslation();
  const { config, addRelay, removeRelay } = useConfig();
  const pool = usePool();

  const [relayUrlInput, setRelayUrlInput] = createSignal<string>('');

  const [modalState, setModalState] = createSignal<{ type: 'RelayInfo'; relayUrl: string } | null>(
    null,
  );

  const closeModal = () => setModalState(null);

  const handleClickAddRelay: JSX.EventHandler<HTMLFormElement, Event> = (ev) => {
    ev.preventDefault();
    if (relayUrlInput().length === 0) return;
    addRelay(relayUrlInput());
    setRelayUrlInput('');
  };

  const importFromNIP07 = async () => {
    if (window.nostr == null) return;

    const importedRelays = Object.entries((await window.nostr?.getRelays?.()) ?? []);
    const relayUrls = importedRelays.map(([relayUrl]) => relayUrl).join('\n');

    if (importedRelays.length === 0) {
      window.alert(i18n.t('config.relays.notConfigured'));
      return;
    }

    if (!window.confirm(`${i18n.t('config.relays.askImport')}\n\n${relayUrls}`)) {
      return;
    }

    const lastCount = config().relayUrls.length;
    batch(() => {
      importedRelays.forEach(([relayUrl]) => {
        addRelay(relayUrl);
      });
    });
    const currentCount = config().relayUrls.length;
    const importedCount = currentCount - lastCount;
    window.alert(i18n.t('config.relays.imported', { count: importedCount }));
  };

  return (
    <>
      <Section title={i18n.t('config.relays.relays')}>
        <p class="py-1">
          {i18n.t('config.relays.numOfRelays', { count: config().relayUrls.length })}
        </p>
        <form class="flex gap-2" onSubmit={handleClickAddRelay}>
          <input
            class="flex-1 rounded-md border border-border bg-bg ring-border placeholder:text-fg-secondary focus:border-border focus:ring-primary"
            type="text"
            name="relayUrl"
            placeholder="wss://..."
            value={relayUrlInput()}
            pattern={RelayUrlRegex}
            onChange={(ev) => setRelayUrlInput(ev.currentTarget.value)}
          />
          <button type="submit" class="rounded-sm bg-primary p-2 font-bold text-primary-fg">
            {i18n.t('config.relays.addRelay')}
          </button>
        </form>
        <ul class="mt-2 divide-y divide-border rounded-sm border border-border">
          <For each={config().relayUrls}>
            {(relayUrl: string) => {
              const { relayInfo } = useRelayInfo(() => ({ relayUrl }));
              const connected = () => pool().getRelay(relayUrl)?.connected ?? false;

              return (
                <li class="flex">
                  <button
                    class="flex flex-1 items-center truncate rounded-sm py-1 text-start hover:bg-bg-tertiary"
                    onClick={() => setModalState({ type: 'RelayInfo', relayUrl })}
                  >
                    <div class="shrink-0 px-2">
                      <span
                        class="inline-block size-2 rounded-full"
                        classList={{
                          'bg-rose-500': !connected(),
                          'bg-green-500': connected(),
                        }}
                        aria-label=""
                      />
                    </div>
                    <div class="min-w-0 flex-1">
                      <div class="truncate">{relayInfo()?.name ?? relayUrl}</div>
                      <div class="truncate text-xs text-fg-secondary">{relayUrl}</div>
                    </div>
                  </button>
                  <button
                    class="flex shrink-0 items-center justify-center ps-4 pe-6"
                    onClick={() => removeRelay(relayUrl)}
                  >
                    <span class="size-3">
                      <XMark />
                    </span>
                  </button>
                </li>
              );
            }}
          </For>
        </ul>
      </Section>
      <Section title={i18n.t('config.relays.importRelays')}>
        <button
          type="button"
          class="rounded-sm bg-primary p-2 font-bold text-primary-fg"
          onClick={() => {
            importFromNIP07().catch((err) => {
              console.error('failed to import relays', err);
              window.alert(i18n.t('config.relays.failedToImport'));
            });
          }}
        >
          {i18n.t('config.relays.importFromExtension')}
        </button>
      </Section>
      <Show when={modalState()} keyed>
        {(state) => (
          <Show when={state.type === 'RelayInfo'}>
            <RelayInfoModal relayUrl={state.relayUrl} onClose={() => closeModal()} />
          </Show>
        )}
      </Show>
    </>
  );
};

export default RelayConfig;
