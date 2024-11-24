import { createSignal, Show, type JSX } from 'solid-js';

import ChevronDown from 'heroicons/24/outline/chevron-down.svg';
import ChevronUp from 'heroicons/24/outline/chevron-up.svg';

const Section = (props: { title: string; initialOpened?: boolean; children: JSX.Element }) => {
  const [opened, setOpened] = createSignal(props.initialOpened ?? true);
  const toggleOpened = () => setOpened((current) => !current);

  return (
    <div class="mb-2 rounded border border-border shadow hover:shadow-md">
      <h3 class="text-lg font-bold">
        <button
          type="button"
          class="flex w-full items-center p-2 text-start"
          onClick={() => toggleOpened()}
        >
          <span class="flex-1 hover:text-fg-secondary">{props.title}</span>
          <span class="inline-block size-4 shrink-0 text-fg">
            <Show when={opened()} fallback={<ChevronDown />}>
              <ChevronUp />
            </Show>
          </span>
        </button>
      </h3>
      <Show when={opened()}>
        <div class="border-t border-border p-2">{props.children}</div>
      </Show>
    </div>
  );
};

export default Section;
