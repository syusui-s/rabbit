import { createSignal, Show, type JSX, Component } from 'solid-js';

import Cog6Tooth from 'heroicons/24/outline/cog-6-tooth.svg';
import Plus from 'heroicons/24/outline/plus.svg';
import MagnifyingGlass from 'heroicons/24/solid/magnifying-glass.svg';
import PencilSquare from 'heroicons/24/solid/pencil-square.svg';

import Config from '@/components/modal/Config';
import NotePostForm from '@/components/NotePostForm';
import useConfig from '@/core/useConfig';
import { useHandleCommand } from '@/hooks/useCommandBus';
import useModalState from '@/hooks/useModalState';
import resolveAsset from '@/utils/resolveAsset';

const SideBar: Component = () => {
  let textAreaRef: HTMLTextAreaElement | undefined;

  const { showAddColumn, showAbout } = useModalState();
  const { config } = useConfig();
  const [formOpened, setFormOpened] = createSignal(false);
  const [configOpened, setConfigOpened] = createSignal(false);

  const focusTextArea = () => {
    textAreaRef?.focus();
    textAreaRef?.click();
  };
  const openForm = () => setFormOpened(true);
  const closeForm = () => setFormOpened(false);
  const toggleForm = () => setFormOpened((current) => !current);

  useHandleCommand(() => ({
    commandType: 'openPostForm',
    handler: () => {
      openForm();
      if (textAreaRef != null) {
        setTimeout(() => focusTextArea(), 100);
      }
    },
  }));

  return (
    <div class="flex shrink-0 flex-row border-r bg-sidebar-bg">
      <div class="flex w-14 flex-auto flex-col items-center gap-3 border-r border-rose-200 pt-5">
        <div class="flex flex-col items-center gap-3">
          <button
            class="h-9 w-9 rounded-full border border-primary bg-primary p-2 text-2xl text-white"
            onClick={() => toggleForm()}
          >
            <PencilSquare />
          </button>
          {/*
          <button class="h-9 w-9 rounded-full border border-primary p-2 text-2xl font-bold text-primary">
            <MagnifyingGlass />
          </button>
          */}
        </div>
        <div class="grow" />
        <div class="flex flex-col items-center pb-2">
          <button
            class="h-10 w-12 rounded-full p-3 text-2xl text-primary"
            onClick={() => showAddColumn()}
          >
            <Plus />
          </button>
          <button
            class="h-10 w-12 p-3 text-primary"
            onClick={() => setConfigOpened((current) => !current)}
          >
            <Cog6Tooth />
          </button>
          <button class="pt-2" onClick={() => showAbout()}>
            <img
              class="h-8 w-8"
              src={resolveAsset('images/rabbit_app_256.png')}
              alt="About rabbit"
            />
          </button>
        </div>
      </div>
      <div
        classList={{
          static: formOpened() || config().keepOpenPostForm,
          hidden: !(formOpened() || config().keepOpenPostForm),
        }}
      >
        <NotePostForm
          textAreaRef={(el) => {
            textAreaRef = el;
          }}
          onClose={closeForm}
        />
      </div>
      <Show when={configOpened()}>
        <Config onClose={() => setConfigOpened(false)} />
      </Show>
    </div>
  );
};

export default SideBar;
