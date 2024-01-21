import { createEffect, onCleanup } from 'solid-js';

import useConfig from '@/core/useConfig';

const useColorTheme = (el: HTMLElement) => {
  const { getColorTheme } = useConfig();

  createEffect(() => {
    const colorTheme = getColorTheme();

    const { className } = colorTheme;
    if (className != null) {
      el.classList.add(className);

      onCleanup(() => {
        el.classList.remove(className);
      });
    }
  });
};

export default useColorTheme;
