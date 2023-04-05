import { createSignal, onCleanup, createEffect, For, type Component, type JSX } from 'solid-js';

export type MenuItem = {
  content: () => JSX.Element;
  onSelect?: () => void;
};

export type ContextMenuProps = {
  menu: MenuItem[];
  children: JSX.Element;
};

export type MenuDisplayProps = {
  menu: MenuItem[];
  onClose: () => void;
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
      <button class="px-4 py-1" onClick={handleClick}>
        {props.item.content()}
      </button>
    </li>
  );
};

const MenuDisplay: Component<MenuDisplayProps> = (props) => {
  return (
    <ul>
      <For each={props.menu}>
        {(item) => <MenuItemDisplay item={item} onClose={props.onClose} />}
      </For>
    </ul>
  );
};

const ContextMenu: Component<ContextMenuProps> = (props) => {
  let menuRef: HTMLDivElement | undefined;

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

  const handleClick: JSX.EventHandler<HTMLButtonElement, MouseEvent> = (ev) => {
    if (menuRef == null) return;

    const buttonRect = ev.target.getBoundingClientRect();
    menuRef.style.left = `${buttonRect.left}px`;
    menuRef.style.top = `${buttonRect.top + buttonRect.height}px`;

    setIsOpen(true);
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
      <div
        ref={menuRef}
        class="absolute z-20 min-w-[48px] rounded border bg-white shadow-md"
        classList={{ hidden: !isOpen(), block: isOpen() }}
      >
        <MenuDisplay menu={props.menu} onClose={() => setIsOpen(false)} />
      </div>
    </div>
  );
};

export default ContextMenu;
