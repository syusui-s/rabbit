import { createSignal, Show } from 'solid-js';
import type { Component } from 'solid-js';
import MagnifyingGlass from 'heroicons/24/solid/magnifying-glass.svg';
import PencilSquare from 'heroicons/24/solid/pencil-square.svg';

type SideBarProps = {
  postForm: () => JSX.Element;
};

const SideBar: Component<SideBarProps> = (props) => {
  const [formOpened, setFormOpened] = createSignal(false);

  return (
    <div class="flex shrink-0 flex-row border-r bg-sidebar-bg">
      <div class="flex w-14 flex-auto flex-col items-center gap-3 border-r py-5">
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
      <Show when={formOpened()}>{() => props.postForm()}</Show>
    </div>
  );
};

export default SideBar;
