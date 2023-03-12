import { createSignal, Show, type JSX, Component } from 'solid-js';
import MagnifyingGlass from 'heroicons/24/solid/magnifying-glass.svg';
import PencilSquare from 'heroicons/24/solid/pencil-square.svg';
import Cog6Tooth from 'heroicons/24/outline/cog-6-tooth.svg';

import NotePostForm from '@/components/NotePostForm';
import Config from '@/components/Config';

import useConfig from '@/nostr/useConfig';
import useCommands from '@/nostr/useCommands';
import usePubkey from '@/nostr/usePubkey';
import { useHandleCommand } from '@/hooks/useCommandBus';

const SideBar: Component = () => {
  let formTextAreaRef: HTMLTextAreaElement | undefined;
  const { config } = useConfig();
  const getPubkey = usePubkey();
  const commands = useCommands();

  const [formOpened, setFormOpened] = createSignal(false);
  const [configOpened, setConfigOpened] = createSignal(false);

  const openForm = () => {
    setFormOpened(true);
    setTimeout(() => {
      formTextAreaRef?.focus?.();
    }, 100);
  };
  const closeForm = () => {
    setFormOpened(false);
    formTextAreaRef?.blur?.();
  };

  const handlePost = ({ content }: { content: string }) => {
    const pubkey = getPubkey();
    if (pubkey == null) {
      console.error('pubkey is not available');
      return;
    }
    commands
      .publishTextNote({
        relayUrls: config().relayUrls,
        pubkey,
        content,
      })
      .then(() => {
        console.log('ok');
      })
      .catch((err) => {
        console.error('error', err);
      });
  };

  useHandleCommand(() => ({
    commandType: 'openPostForm',
    handler: (cmd) => {
      openForm();
    },
  }));

  return (
    <div class="flex shrink-0 flex-row border-r bg-sidebar-bg">
      <div class="flex w-14 flex-auto flex-col items-center gap-3 border-r border-rose-200 pt-5">
        <div class="flex flex-col items-center gap-3">
          <button
            class={`h-9 w-9 rounded-full border border-primary bg-primary p-2 text-2xl font-bold text-white`}
            onClick={() => setFormOpened((current) => !current)}
          >
            <PencilSquare />
          </button>
          {/*
          <button class="h-9 w-9 rounded-full border border-primary p-2 text-2xl font-bold text-primary">
            <MagnifyingGlass />
          </button>
          */}
          {/* <div>column 1</div> */}
          {/* <div>column 2</div> */}
        </div>
        <div class="grow" />
        <div>
          <button
            class="h-12 w-12 p-3 text-primary"
            onClick={() => setConfigOpened((current) => !current)}
          >
            <Cog6Tooth />
          </button>
        </div>
      </div>
      <Show when={formOpened()}>
        <NotePostForm ref={formTextAreaRef} onPost={handlePost} onClose={closeForm} />
      </Show>
      <Show when={configOpened()}>
        <Config onClose={() => setConfigOpened(false)} />
      </Show>
    </div>
  );
};

export default SideBar;
