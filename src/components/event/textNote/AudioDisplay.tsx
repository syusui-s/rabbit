import { type Component } from 'solid-js';

import MediaDisplay from '@/components/event/textNote/MediaDisplay';
import SafeLink from '@/components/utils/SafeLink';
import { useTranslation } from '@/i18n/useTranslation';

type AudioDisplayProps = {
  url: string;
  initialHidden: boolean;
};

const AudioDisplay: Component<AudioDisplayProps> = (props) => {
  const i18n = useTranslation();

  return (
    <MediaDisplay
      initialHidden={props.initialHidden}
      placeholder={
        <div class="max-w-full">
          <SafeLink class="text-link underline" href={props.url} />
        </div>
      }
      fallback={<SafeLink class="text-link underline" href={props.url} />}
      showButtonText={i18n.t('post.showAudio')}
    >
      {(mediaProps) => (
        // eslint-disable-next-line jsx-a11y/media-has-caption
        <audio src={props.url} controls onError={mediaProps.error}>
          <a href={props.url}>{i18n.t('post.download')}</a>
        </audio>
      )}
    </MediaDisplay>
  );
};

export default AudioDisplay;
