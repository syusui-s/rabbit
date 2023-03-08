// const commands = ['openPostForm'] as const;
// type Commands = (typeof commands)[number];

import { onMount, onCleanup, type JSX } from 'solid-js';
import throttle from 'lodash/throttle';

import { useRequestCommand, type Command } from '@/hooks/useCommandBus';

type Shortcut = { key: string; command: Command };

const defaultShortcut: Shortcut[] = [
  { key: 'n', command: { command: 'openPostForm' } },
  { key: 'h', command: { command: 'moveToPrevColumn' } },
  { key: 'j', command: { command: 'moveToNextItem' } },
  { key: 'k', command: { command: 'moveToPrevItem' } },
  { key: 'l', command: { command: 'moveToNextColumn' } },
  { key: '1', command: { command: 'moveToColumn', columnIndex: 1 } },
  { key: '2', command: { command: 'moveToColumn', columnIndex: 2 } },
  { key: '3', command: { command: 'moveToColumn', columnIndex: 3 } },
  { key: '4', command: { command: 'moveToColumn', columnIndex: 4 } },
  { key: '5', command: { command: 'moveToColumn', columnIndex: 5 } },
  { key: '6', command: { command: 'moveToColumn', columnIndex: 6 } },
  { key: '7', command: { command: 'moveToColumn', columnIndex: 7 } },
  { key: '8', command: { command: 'moveToColumn', columnIndex: 8 } },
  { key: '9', command: { command: 'moveToColumn', columnIndex: 9 } },
  { key: '0', command: { command: 'moveToLastColumn' } },
  { key: 'ArrowLeft', command: { command: 'moveToPrevColumn' } },
  { key: 'ArrowDown', command: { command: 'moveToNextItem' } },
  { key: 'ArrowUp', command: { command: 'moveToPrevItem' } },
  { key: 'ArrowRight', command: { command: 'moveToNextColumn' } },
  { key: 'f', command: { command: 'like' } },
  { key: 't', command: { command: 'repost' } },
  { key: 'r', command: { command: 'openReplyForm' } },
  { key: '?', command: { command: 'openHelp' } },
  { key: 'Enter', command: { command: 'openItemDetail' } },
  { key: 'Backspace', command: { command: 'closeItemDetail' } },
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

  onMount(() => {
    const handleKeydown = throttle((ev: KeyboardEvent) => {
      if (ev.type !== 'keydown') return;
      if (ev.target instanceof HTMLTextAreaElement || ev.target instanceof HTMLInputElement) return;

      const shortcut = shortcutsMap.get(ev.key);

      if (shortcut == null) return;

      onShortcut(shortcut);
    }, 50);

    window.addEventListener('keydown', handleKeydown);

    onCleanup(() => {
      window.removeEventListener('keydown', handleKeydown);
    });
  });
};

export const useMountShortcutKeys = () => {
  const request = useRequestCommand();

  useShortcutKeys({
    onShortcut: (shortcut) => {
      request(shortcut.command).then(
        () => console.debug(`shortcut key '${shortcut.key}' was processed successfully`),
        (err) => console.error(err),
      );
    },
  });
};

export default useShortcutKeys;
