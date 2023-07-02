import { Component, createSignal, Show } from 'solid-js';

import SafeLink from '@/components/utils/SafeLink';

type VideoDisplayProps = {
  url: string;
  initialHidden: boolean;
};

const VideoDisplay: Component<VideoDisplayProps> = (props) => {
  let videoRef: HTMLVideoElement | undefined;
  const [hidden, setHidden] = createSignal(props.initialHidden);

  return (
    <Show
      when={!hidden()}
      fallback={
        <button
          class="rounded bg-stone-300 p-3 text-xs text-stone-600 hover:shadow"
          onClick={() => setHidden(false)}
        >
          動画を表示する
        </button>
      }
    >
      <SafeLink class="my-2 block" href={props.url}>
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video
          ref={videoRef}
          class="max-h-64 max-w-full rounded-sm object-contain shadow"
          src={props.url}
          controls
        >
          <a href={props.url}>ダウンロード</a>
        </video>
      </SafeLink>
    </Show>
  );
};

export default VideoDisplay;
