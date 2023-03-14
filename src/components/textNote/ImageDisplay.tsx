import { Component, createSignal, Show } from 'solid-js';
import { ContentWarning } from '@/core/event';

type ImageDisplayProps = {
  url: string;
  contentWarning: ContentWarning;
};

const fixUrl = (url: URL): string => {
  const result = new URL(url);
  if (url.host === 'i.imgur.com') {
    const match = url.pathname.match(/^\/([a-zA-Z0-9]+)\.(jpg|jpeg|png|gif)/);
    if (match != null) {
      const imageId = match[1];
      result.pathname = `${imageId}l.webp`;
    }
  } else if (url.host === 'i.gyazo.com') {
    result.host = 'thumb.gyazo.com';
    result.pathname = `/thumb/640_w${url.pathname}`;
  }
  return result.toString();
};

const ImageDisplay: Component<ImageDisplayProps> = (props) => {
  const [hidden, setHidden] = createSignal(props.contentWarning.contentWarning);
  const url = () => new URL(props.url);

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
      <a class="my-2 block" href={props.url} target="_blank" rel="noopener noreferrer">
        <img
          class="inline-block max-h-64 max-w-full rounded object-contain shadow hover:shadow-md"
          src={fixUrl(url())}
          alt={props.url}
        />
      </a>
    </Show>
  );
};

export default ImageDisplay;
