import { createEffect, createSignal, onCleanup } from 'solid-js';

import { Textcomplete } from '@textcomplete/core';
import { TextareaEditor } from '@textcomplete/textarea';

import useConfig, { CustomEmojiConfig } from '@/core/useConfig';

const useEmojiComplete = () => {
  const { searchEmojis } = useConfig();

  const [elementRef, setElementRef] = createSignal<HTMLTextAreaElement | undefined>();

  createEffect(() => {
    const el = elementRef();
    if (el == null) return;

    const editor = new TextareaEditor(el);
    const textcomplete = new Textcomplete(
      editor,
      [
        {
          id: 'customEmoji',
          match: /\B:(\w+)$/,
          search: (term, callback) => {
            callback(searchEmojis(term));
          },
          template: (config: CustomEmojiConfig) => {
            const e = (
              <div class="flex gap-1 border-b px-2 py-1">
                <img class="h-6 max-w-[3rem]" src={config.url} alt={config.shortcode} />
                <div>{config.shortcode}</div>
              </div>
            ) as HTMLElement;
            return e.outerHTML;
          },
          replace: (result: CustomEmojiConfig) => `:${result.shortcode}: `,
        },
      ],
      {
        dropdown: {
          className: 'bg-white shadow rounded',
          item: {
            className: 'cursor-pointer',
            activeClassName: 'bg-rose-100 cursor-pointer',
          },
        },
      },
    );

    onCleanup(() => {
      textcomplete.destroy();
    });
  });

  return { elementRef: setElementRef };
};

export default useEmojiComplete;
