import { createMemo, For, Switch, Match, type Component, type JSX } from 'solid-js';

import ChevronRight from 'heroicons/24/outline/chevron-right.svg';

import usePopup, { type UsePopupProps } from '@/components/utils/usePopup';

export type SelectableItem = {
  content: JSX.Element;
  when?: () => boolean;
  onSelect: () => void;
};

export type SubMenu = Omit<SelectableItem, 'type' | 'onSelect'> & {
  content: JSX.Element;
  items: (SelectableItem | SubMenu)[];
};

export type MenuItem = SelectableItem | SubMenu;

export type UseContextMenuProps = Omit<UsePopupProps, 'popup'> & {
  menu: (MenuItem | SubMenu)[];
};

export type SelectableItemDisplayProps = {
  item: SelectableItem;
  onClose: () => void;
};

export type SubMenuDisplayProps = {
  submenu: SubMenu;
  onClose: () => void;
};

const SelectableItemDisplay: Component<SelectableItemDisplayProps> = (props) => {
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

const SubMenuDisplay: Component<SubMenuDisplayProps> = (props) => {
  const contextMenuPopup = useContextMenu(() => ({
    menu: props.submenu.items,
    position: { x: 'right', y: 'bottom' },
  }));

  const handleClick = () => {
    contextMenuPopup.open();
  };

  return (
    <li ref={contextMenuPopup.targetRef} class="border-b border-border hover:bg-bg-tertiary">
      <button class="flex w-full items-center py-1 ps-4 pe-2 text-start" onClick={handleClick}>
        <span class="flex-1">{props.submenu.content}</span>
        <span class="inline-block size-4 shrink-0">
          <ChevronRight />
        </span>
      </button>
      {contextMenuPopup.popup()}
    </li>
  );
};

const ensureSelectableItem = (item: MenuItem): SelectableItem | null => {
  if ('onSelect' in item) return item;
  return null;
};

const ensureSubMenu = (item: MenuItem): SubMenu | null => {
  if ('items' in item) return item;
  return null;
};

const useContextMenu = (propsProvider: () => UseContextMenuProps) => {
  const props = createMemo(propsProvider);

  const popup = usePopup(() => ({
    ensureWidth: 300,
    position: { x: 'right', y: 'bottom' },
    ...props(),
    popup: (
      <ul class="min-w-[96px] rounded-sm border border-border bg-bg shadow-md">
        <For each={props().menu.filter((e) => e.when == null || e.when())}>
          {(item) => (
            <Switch>
              <Match when={ensureSelectableItem(item)} keyed>
                {(v) => <SelectableItemDisplay item={v} onClose={() => popup.close()} />}
              </Match>
              <Match when={ensureSubMenu(item)} keyed>
                {(v) => <SubMenuDisplay submenu={v} onClose={() => popup.close()} />}
              </Match>
            </Switch>
          )}
        </For>
      </ul>
    ),
  }));

  return popup;
};

export default useContextMenu;
