import { Component, createSignal, Show } from 'solid-js';

import SafeLink from '@/components/utils/SafeLink';
import { useTranslation } from '@/i18n/useTranslation';
import { thumbnailUrl } from '@/utils/url';

type ImageDisplayProps = {
  url: string;
  initialHidden: boolean;
};

const ImageDisplay: Component<ImageDisplayProps> = (props) => {
  let imageRef: HTMLImageElement | undefined;
  const i18n = useTranslation();
  const [hidden, setHidden] = createSignal(props.initialHidden);

  return (
    <Show
      when={!hidden()}
      fallback={
        <button
          class="rounded bg-stone-300 p-3 text-xs text-stone-600 hover:shadow"
          onClick={() => setHidden(false)}
        >
          {i18n()('post.showImage')}
        </button>
      }
    >
      <SafeLink class="my-2 block" href={props.url}>
        <img
          ref={imageRef}
          class="max-h-64 max-w-full rounded object-contain shadow hover:shadow-md"
          src={thumbnailUrl(props.url)}
          alt={props.url}
        />
      </SafeLink>
    </Show>
  );
};

export default ImageDisplay;
