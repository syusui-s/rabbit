// const commands = ['openPostForm'] as const;
// type Commands = (typeof commands)[number];

import { createMemo, createEffect } from 'solid-js';

type Shortcut = { key: string; command: string };

const defaultShortcut: Shortcut[] = [
  { key: 'n', command: 'openPostForm' },
  { key: 'h', command: 'moveToPrevColumn' },
  { key: 'j', command: 'moveToNextItem' },
  { key: 'k', command: 'moveToPrevItem' },
  { key: 'l', command: 'moveToNextColumn' },
  { key: 'ArrowLeft', command: 'moveToPrevColumn' },
  { key: 'ArrowDown', command: 'moveToNextItem' },
  { key: 'ArrowUp', command: 'moveToPrevItem' },
  { key: 'ArrowRight', command: 'moveToNextColumn' },
  { key: 'f', command: 'like' },
  { key: 't', command: 'repost' },
  { key: 'r', command: 'openReplyForm' },
  { key: '?', command: 'openHelp' },
  { key: 'Enter', command: 'openItemDetail' },
  { key: 'Backspace', command: 'closeItemDetail' },
];

type UseShortcutKeysProps = {
  shortcuts?: Shortcut[];
  onShortcut: (shortcut: Shortcut) => void;
};

const createShortcutsMap = (shortcuts: Shortcut[]) => {
  const map = new Map<string, Shortcut>();
  shortcuts.forEach((shortcut) => {
    map.set(shortcut.key, shortcut);
  });
  return map;
};

const useShortcutKeys = ({ shortcuts = defaultShortcut, onShortcut }: UseShortcutKeysProps) => {
  const shortcutsMap = createShortcutsMap(shortcuts);

  createEffect(() => {
    const handleKeydown: JSX.EventHandler<Window, KeyboardEvent> = (ev) => {
      console.log(ev);
      if (ev.type !== 'keydown') return;
      if (ev.target instanceof HTMLTextAreaElement || ev.target instanceof HTMLInputElement) return;

      const shortcut = shortcutsMap.get(ev.key);

      if (shortcut == null) return;

      onShortcut(shortcut);
    };

    window.addEventListener('keydown', handleKeydown);

    return () => window.removeEventListener('keydown', handleKeydown);
  });
};

export default useShortcutKeys;
