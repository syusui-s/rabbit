import { createSignal, createEffect, Show, type JSX, Component } from 'solid-js';

import Cog6Tooth from 'heroicons/24/outline/cog-6-tooth.svg';
import Plus from 'heroicons/24/outline/plus.svg';
import MagnifyingGlass from 'heroicons/24/solid/magnifying-glass.svg';
import PencilSquare from 'heroicons/24/solid/pencil-square.svg';

import Config from '@/components/modal/Config';
import NotePostForm from '@/components/NotePostForm';
import usePopup, { type UsePopup } from '@/components/utils/usePopup';
import { createSearchColumn } from '@/core/column';
import useConfig from '@/core/useConfig';
import { useHandleCommand, useRequestCommand } from '@/hooks/useCommandBus';
import useModalState from '@/hooks/useModalState';
import resolveAsset from '@/utils/resolveAsset';

const SearchButton = () => {
  let inputRef: HTMLInputElement | undefined;

  const { saveColumn } = useConfig();
  const request = useRequestCommand();
  const [query, setQuery] = createSignal('');

  let popup: UsePopup;

  const handleSearchSubmit: JSX.EventHandler<HTMLFormElement, SubmitEvent> = (ev) => {
    ev.preventDefault();

    saveColumn(createSearchColumn({ query: query() }));
    request({ command: 'moveToLastColumn' }).catch((err) => console.error(err));
    popup.close();
    setQuery('');
  };

  popup = usePopup(() => ({
    popup: (
      <form
        class="flex w-72 items-center gap-1 rounded-md border border-border bg-bg p-4 shadow-md"
        onSubmit={handleSearchSubmit}
      >
        <input
          ref={inputRef}
          class="h-8 w-full rounded border border-border bg-bg focus:border-primary focus:ring-border"
          type="text"
          value={query()}
          onChange={(ev) => setQuery(ev.currentTarget.value)}
        />
        <button class="h-8 w-8 rounded bg-primary p-1 text-primary-fg" type="submit">
          <MagnifyingGlass />
        </button>
      </form>
    ),
    position: 'right',
  }));

  return (
    <>
      <button
        ref={popup.targetRef}
        class="w-full py-1"
        type="button"
        onClick={() => {
          popup.open();
          inputRef?.focus();
        }}
      >
        <span class="inline-block h-9 w-9 rounded-full border border-primary p-2 text-2xl font-bold text-primary hover:border-primary-hover hover:text-primary-hover">
          <MagnifyingGlass />
        </span>
      </button>
      {popup.popup()}
    </>
  );
};

const SideBar: Component = () => {
  let textAreaRef: HTMLTextAreaElement | undefined;

  const { showAddColumn, showAbout } = useModalState();
  const { config, getColorTheme } = useConfig();

  const [formOpened, setFormOpened] = createSignal(false);
  const [configOpened, setConfigOpened] = createSignal(false);

  const focusTextArea = () => {
    textAreaRef?.focus();
    textAreaRef?.click();
    textAreaRef?.setSelectionRange(0, 0);
  };
  const openForm = () => setFormOpened(true);
  const closeForm = () => setFormOpened(false);
  const toggleForm = () => setFormOpened((current) => !current);

  createEffect(() => {
    if (formOpened() && textAreaRef != null) {
      setTimeout(() => focusTextArea(), 100);
    }
  });

  useHandleCommand(() => ({
    commandType: 'openPostForm',
    handler: () => {
      openForm();
    },
  }));

  return (
    <div class="flex shrink-0 flex-row bg-r-sidebar">
      <div class="flex w-14 flex-auto flex-col items-center gap-3 border-r border-border pt-4">
        <div class="flex w-full flex-col items-center">
          <button class="w-full py-1" type="button" onClick={() => toggleForm()}>
            <span class="inline-block h-9 w-9 rounded-full border border-primary bg-primary p-2 text-2xl text-primary-fg hover:border-primary-hover hover:bg-primary-hover">
              <PencilSquare />
            </span>
          </button>
          <SearchButton />
        </div>
        <div class="grow" />
        <div class="flex w-full flex-col items-center gap-2 pb-2">
          <button
            class="flex w-full flex-col items-center py-1 text-primary hover:text-primary-hover"
            onClick={() => showAddColumn()}
          >
            <span class="inline-block h-6 w-6">
              <Plus />
            </span>
          </button>
          <button
            class="flex w-full flex-col items-center py-1 text-primary hover:text-primary-hover"
            onClick={() => setConfigOpened((current) => !current)}
          >
            <span class="h-6 w-6">
              <Cog6Tooth />
            </span>
          </button>
          <button class="flex w-full flex-col items-center" onClick={() => showAbout()}>
            <img
              class="h-8 w-8"
              src={resolveAsset(getColorTheme().rabbitIconPath)}
              alt="About rabbit"
            />
          </button>
        </div>
      </div>
      <div
        class="border-r border-border"
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
