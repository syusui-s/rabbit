import { Component, createSignal, Show } from 'solid-js';

import { fixUrl } from '@/utils/imageUrl';

import SafeLink from '../utils/SafeLink';

type ImageDisplayProps = {
  url: string;
  initialHidden: boolean;
};

const ImageDisplay: Component<ImageDisplayProps> = (props) => {
  let imageRef: HTMLImageElement | undefined;
  let canvasRef: HTMLCanvasElement | undefined;

  const [hidden, setHidden] = createSignal(props.initialHidden);
  const [playing, setPlaying] = createSignal(true);

  // const isGIF = () => props.url.match(/\.gif/i);

  const play = () => {
    setPlaying(true);
  };

  /*
  const stop = () => {
    if (canvasRef == null || imageRef == null) return;
    canvasRef.width = imageRef.width;
    canvasRef.height = imageRef.height;
    canvasRef
      .getContext('2d')
      ?.drawImage(
        imageRef,
        0,
        0,
        imageRef.naturalWidth,
        imageRef.naturalHeight,
        0,
        0,
        imageRef.width,
        imageRef.height,
      );
    setPlaying(false);
  };
  */

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
          ref={imageRef}
          class="max-h-64 max-w-full rounded object-contain shadow hover:shadow-md"
          classList={{
            'inline-block': playing(),
            hidden: !playing(),
          }}
          src={playing() ? fixUrl(props.url) : undefined}
          alt={props.url}
        />
        <canvas
          ref={canvasRef}
          class="inline-block max-h-64 max-w-full rounded object-contain shadow hover:shadow-md"
          classList={{
            'w-0': playing(),
            'h-0': playing(),
            'w-auto': !playing(),
            'h-auto': !playing(),
          }}
          onClick={(ev) => {
            ev.preventDefault();
            play();
          }}
        />
      </SafeLink>
      {/*
      <Show when={isGIF()}>
        <button
          class=""
          onClick={() => {
            if (playing()) stop();
            else play();
          }}
        >
          <Show when={!playing()} fallback="⏸">
            ▶
          </Show>
        </button>
      </Show>
      */}
    </Show>
  );
};

export default ImageDisplay;
