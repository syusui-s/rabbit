import { Component, JSX, Show, createSignal } from 'solid-js';

import EllipsisVertical from 'heroicons/24/outline/ellipsis-vertical.svg';

export type BasicColumnHeaderProps = {
  name: string;
  icon?: JSX.Element;
  settings: () => JSX.Element;
  onClose?: () => void;
};

const BasicColumnHeader: Component<BasicColumnHeaderProps> = (props) => {
  const [isSettingsOpened, setIsSettingOpened] = createSignal(false);

  const toggleSettingsOpened = () => setIsSettingOpened((current) => !current);

  return (
    <div class="flex flex-col">
      <div class="flex h-8 items-center gap-1 px-2">
        <h2 class="flex min-w-0 flex-1 items-center gap-1">
          <Show when={props.icon} keyed>
            {(icon) => <span class="inline-block h-4 w-4 shrink-0 text-fg-secondary">{icon}</span>}
          </Show>
          <span class="truncate">{props.name}</span>
        </h2>
        <button class="flex h-full place-items-center" onClick={() => toggleSettingsOpened()}>
          <span class="inline-block h-4 w-4">
            <EllipsisVertical />
          </span>
        </button>
      </div>
      <Show when={isSettingsOpened()}>{props.settings()}</Show>
    </div>
  );
};

export default BasicColumnHeader;
