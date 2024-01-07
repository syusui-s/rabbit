import { createMemo, For, type Component, type JSX } from 'solid-js';

import usePopup, { type UsePopupProps } from '@/components/utils/usePopup';

export type MenuItem = {
  content: JSX.Element;
  when?: () => boolean;
  onSelect?: () => void;
};

export type UseContextMenuProps = Omit<UsePopupProps, 'popup'> & {
  menu: MenuItem[];
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
        {props.item.content}
      </button>
    </li>
  );
};

const useContextMenu = (propsProvider: () => UseContextMenuProps) => {
  const props = createMemo(propsProvider);

  const popup = usePopup(() => ({
    ...props(),
    popup: (
      <ul class="min-w-[96px] rounded border border-border bg-bg shadow-md">
        <For each={props().menu.filter((e) => e.when == null || e.when())}>
          {(item: MenuItem) => <MenuItemDisplay item={item} onClose={() => popup.close()} />}
        </For>
      </ul>
    ),
  }));

  return popup;
};

export default useContextMenu;
