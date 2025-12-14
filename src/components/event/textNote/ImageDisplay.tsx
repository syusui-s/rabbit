import { type Component } from 'solid-js';

import MediaDisplay from '@/components/event/textNote/MediaDisplay';
import SafeLink from '@/components/utils/SafeLink';
import { useTranslation } from '@/i18n/useTranslation';
import { thumbnailUrl } from '@/utils/url';

type ImageDisplayProps = {
  url: string;
  initialHidden: boolean;
};

const ImageDisplay: Component<ImageDisplayProps> = (props) => {
  const i18n = useTranslation();

  return (
    <MediaDisplay
      initialHidden={props.initialHidden}
      placeholder={
        <div class="aspect-video max-w-full">
          <SafeLink class="text-link underline" href={props.url} />
        </div>
      }
      fallback={<SafeLink class="text-link underline" href={props.url} />}
      showButtonText={i18n.t('post.showImage')}
    >
      {(mediaProps) => (
        <SafeLink class="my-2 block" href={props.url}>
          <img
            class="max-h-64 max-w-full rounded object-contain shadow hover:shadow-md"
            src={thumbnailUrl(props.url)}
            alt={props.url}
            onError={mediaProps.error}
          />
        </SafeLink>
      )}
    </MediaDisplay>
  );
};

export default ImageDisplay;
