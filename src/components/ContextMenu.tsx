import { createSignal, onCleanup, createEffect, For, type Component, type JSX } from 'solid-js';

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
    <li class="border-b hover:bg-stone-200">
      <button class="w-full px-4 py-1 text-start" onClick={handleClick}>
        {props.item.content()}
      </button>
    </li>
  );
};

const ContextMenu: Component<ContextMenuProps> = (props) => {
  let menuRef: HTMLUListElement | undefined;

  const [isOpen, setIsOpen] = createSignal(false);

  const handleClickOutside = (ev: MouseEvent) => {
    const target = ev.target as HTMLElement;
    if (target != null && !menuRef?.contains(target)) {
      setIsOpen(false);
    }
  };
  const addClickOutsideHandler = () => {
    document.addEventListener('mousedown', handleClickOutside);
  };
  const removeClickOutsideHandler = () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  const handleClick: JSX.EventHandler<HTMLButtonElement, MouseEvent> = (ev) => {
    if (menuRef == null) return;

    const buttonRect = ev.currentTarget.getBoundingClientRect();
    // const menuRect = menuRef.getBoundingClientRect();
    menuRef.style.left = `${buttonRect.left - buttonRect.width}px`;
    menuRef.style.top = `${buttonRect.top + buttonRect.height}px`;

    open();
  };

  createEffect(() => {
    if (isOpen()) {
      addClickOutsideHandler();
    } else {
      removeClickOutsideHandler();
    }
  });

  onCleanup(() => removeClickOutsideHandler());

  return (
    <div>
      <button onClick={handleClick}>{props.children}</button>
      <ul
        ref={menuRef}
        class="absolute z-20 min-w-[48px] rounded border bg-white shadow-md"
        classList={{ hidden: !isOpen(), block: isOpen() }}
      >
        <For each={props.menu.filter((e) => e.when == null || e.when())}>
          {(item: MenuItem) => <MenuItemDisplay item={item} onClose={close} />}
        </For>
      </ul>
    </div>
  );
};

export default ContextMenu;
