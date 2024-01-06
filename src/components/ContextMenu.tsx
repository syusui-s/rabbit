import { For, type Component, type JSX } from 'solid-js';

import Popup, { PopupRef } from '@/components/utils/Popup';

export type MenuItem = {
  content: () => JSX.Element;
  when?: () => boolean;
  onSelect?: () => void;
};

export type ContextMenuProps = {
  menu: MenuItem[];
  children: JSX.Element;
};

export type MenuItemDisplayProps = {
  item: MenuItem;
  onClose: () => void;
};

const MenuItemDisplay: Component<MenuItemDisplayProps> = (props) => {
  const handleClick = () => {
    props.item?.onSelect?.();
    props.onClose();
  };

  return (
    <li class="border-b border-border hover:bg-bg-tertiary">
      <button class="w-full px-4 py-1 text-start" onClick={handleClick}>
        {props.item.content()}
      </button>
    </li>
  );
};

const ContextMenu: Component<ContextMenuProps> = (props) => {
  let popupRef: PopupRef | undefined;

  const close = () => popupRef?.close();

  return (
    <Popup
      ref={(e) => {
        popupRef = e;
      }}
      button={props.children}
      position="bottom"
    >
      <ul class="min-w-[96px] rounded border border-border bg-bg shadow-md">
        <For each={props.menu.filter((e) => e.when == null || e.when())}>
          {(item: MenuItem) => <MenuItemDisplay item={item} onClose={close} />}
        </For>
      </ul>
    </Popup>
  );
};

export default ContextMenu;
