import { Component, createEffect, createSignal, Show } from 'solid-js';
import { fixUrl } from '@/utils/imageUrl';
import SafeLink from '../utils/SafeLink';

type ImageDisplayProps = {
  url: string;
  initialHidden: boolean;
};

const ImageDisplay: Component<ImageDisplayProps> = (props) => {
  const [hidden, setHidden] = createSignal(props.initialHidden);

  return (
    <Show
      when={!hidden()}
      fallback={
        <button
          class="rounded bg-stone-300 p-3 text-xs text-stone-600 hover:shadow"
          onClick={() => setHidden(false)}
        >
          画像を展開する
        </button>
      }
    >
      <SafeLink class="my-2 block" href={props.url}>
        <img
          class="inline-block max-h-64 max-w-full rounded object-contain shadow hover:shadow-md"
          src={fixUrl(props.url)}
          alt={props.url}
        />
      </SafeLink>
    </Show>
  );
};

export default ImageDisplay;
