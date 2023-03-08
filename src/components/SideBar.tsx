import { createSignal, Show, type JSX, Component } from 'solid-js';
import MagnifyingGlass from 'heroicons/24/solid/magnifying-glass.svg';
import PencilSquare from 'heroicons/24/solid/pencil-square.svg';

import NotePostForm from '@/components/NotePostForm';

import useConfig from '@/nostr/useConfig';
import useCommands from '@/nostr/useCommands';
import usePubkey from '@/nostr/usePubkey';
import { useHandleCommand } from '@/hooks/useCommandBus';

const SideBar: Component = () => {
  let formTextAreaRef: HTMLTextAreaElement | undefined;
  const [config] = useConfig();
  const getPubkey = usePubkey();
  const commands = useCommands();

  const [formOpened, setFormOpened] = createSignal(false);

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
      <div class="flex w-14 flex-auto flex-col items-center gap-3 border-r border-rose-200 py-5">
        <button
          class={`h-9 w-9 rounded-full border border-primary bg-primary p-2 text-2xl font-bold text-white`}
          onClick={() => setFormOpened((current) => !current)}
        >
          <PencilSquare />
        </button>
        <button class="h-9 w-9 rounded-full border border-primary p-2 text-2xl font-bold text-primary">
          <MagnifyingGlass />
        </button>
        {/* <div>column 1</div> */}
        {/* <div>column 2</div> */}
      </div>
      <Show when={formOpened()}>
        <NotePostForm ref={formTextAreaRef} onPost={handlePost} onClose={closeForm} />
      </Show>
    </div>
  );
};

export default SideBar;
