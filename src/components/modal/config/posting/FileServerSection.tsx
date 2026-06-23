import { createSignal, For, type JSX, Show } from 'solid-js';

import XMark from 'heroicons/24/outline/x-mark.svg';

import Section from '@/components/modal/config/Section';
import useConfig from '@/core/useConfig';
import { useTranslation } from '@/i18n/useTranslation';
import { defaultFileServers, type FileServerDefinition } from '@/utils/imageUpload';
import { HttpUrlRegex } from '@/utils/regex';

type FileServerDefinitionCustom = FileServerDefinition & { custom?: boolean };

const FileServerSection = () => {
  const i18n = useTranslation();

  const { config, setFileServer, addCustomFileServer, removeCustomFileServer } = useConfig();

  const [urlInput, setUrlInput] = createSignal('');
  const [typeInput, setTypeInput] = createSignal<FileServerDefinition['type']>('nip96');

  const handleSubmit: JSX.EventHandler<HTMLFormElement, SubmitEvent> = (ev) => {
    ev.preventDefault();

    addCustomFileServer({
      type: typeInput(),
      name: urlInput(),
      serverUrl: urlInput(),
    });

    ev.currentTarget.reset();
    setTypeInput('nip96');
  };

  const servers = (): FileServerDefinitionCustom[] => [
    ...defaultFileServers.map((server) => ({ ...server, custom: false })),
    ...config().customFileServers.map((server) => ({ ...server, custom: true })),
  ];

  return (
    <Section title={i18n.t('config.posting.fileServer')}>
      <div class="scrollbar mt-2 flex flex-col divide-y divide-border overflow-y-auto rounded-md border border-border">
        <For each={servers()}>
          {(server) => {
            const isDefault = () => server.name === config().fileServer.name;

            return (
              <div
                class="flex px-2 py-1 text-left text-fg"
                classList={{
                  'bg-primary': isDefault(),
                  'text-primary-fg': isDefault(),
                  'text-fg': !isDefault(),
                }}
              >
                <button
                  type="button"
                  class="flex flex-1 items-center gap-2 text-start"
                  onClick={() => setFileServer(server)}
                >
                  <span class="flex-1">{server.name}</span>
                  <span
                    class="rounded-sm border border-current px-1 text-xs opacity-70"
                    classList={{ 'text-primary-fg': isDefault() }}
                  >
                    {server.type === 'blossom' ? 'Blossom' : 'NIP-96'}
                  </span>
                </button>
                <Show when={server.custom}>
                  <button type="button" onClick={() => removeCustomFileServer(server.name)}>
                    <span class="inline-block size-4">
                      <XMark />
                    </span>
                  </button>
                </Show>
              </div>
            );
          }}
        </For>
      </div>
      <form class="mt-2 flex gap-2" onSubmit={handleSubmit}>
        <select
          class="rounded-md border border-border bg-bg ring-border focus:border-border focus:ring-primary"
          name="type"
          value={typeInput()}
          onChange={(ev) => setTypeInput(ev.currentTarget.value as FileServerDefinition['type'])}
        >
          <option value="nip96">NIP-96</option>
          <option value="blossom">Blossom</option>
        </select>
        <input
          class="flex-1 rounded-md border border-border bg-bg ring-border placeholder:text-fg-secondary focus:border-border focus:ring-primary"
          type="text"
          name="url"
          placeholder="https://..."
          value={urlInput()}
          pattern={HttpUrlRegex}
          onChange={(ev) => setUrlInput(ev.currentTarget.value)}
        />
        <button type="submit" class="rounded-sm bg-primary p-2 font-bold text-primary-fg">
          {i18n.t('config.posting.addCustomFileServer')}
        </button>
      </form>
    </Section>
  );
};

export default FileServerSection;
