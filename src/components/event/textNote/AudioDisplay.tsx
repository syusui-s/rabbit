import { type Component, createSignal, Show } from 'solid-js';

import LazyLoad from '@/components/utils/LazyLoad';
import SafeLink from '@/components/utils/SafeLink';
import { useTranslation } from '@/i18n/useTranslation';

type AudioDisplayProps = {
  url: string;
  initialHidden: boolean;
};

const AudioDisplay: Component<AudioDisplayProps> = (props) => {
  const i18n = useTranslation();
  const [hidden, setHidden] = createSignal(props.initialHidden);

  return (
    <Show
      when={!hidden()}
      fallback={
        <button
          class="rounded bg-bg-tertiary p-3 text-xs text-fg-secondary hover:shadow"
          onClick={() => setHidden(false)}
        >
          {i18n.t('post.showAudio')}
        </button>
      }
    >
      <LazyLoad fallback={<div class="max-w-full" />}>
        {() => (
          <SafeLink class="my-2 block" href={props.url}>
            {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
            <audio src={props.url} controls>
              <a href={props.url}>{i18n.t('post.download')}</a>
            </audio>
          </SafeLink>
        )}
      </LazyLoad>
    </Show>
  );
};

export default AudioDisplay;
