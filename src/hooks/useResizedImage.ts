import type { Accessor } from 'solid-js';
import { createSignal, createEffect } from 'solid-js';

export type UseResizedImageProps = {
  imageUrl: Accessor<string | undefined>;
  width: number;
  height: number;
  encoderOption?: number;
};

const useResizedImage = ({
  imageUrl,
  width,
  height,
  encoderOption,
}: UseResizedImageProps): Accessor<string | undefined> => {
  const [resizedImage, setResizedImage] = createSignal<string | undefined>(undefined);

  createEffect(() => {
    const sourceUrl = imageUrl();

    if (sourceUrl == null) return;

    const img = document.createElement('img');
    img.addEventListener('load', () => {
      const ratio = img.naturalWidth / img.naturalHeight;
      const rw = height * ratio;
      const rh = width / ratio;
      const dw = Math.min(rw, width);
      const dh = Math.min(rh, height);

      const canvas = document.createElement('canvas');
      canvas.height = dh;
      canvas.width = dw;

      const ctx = canvas.getContext('2d');

      if (ctx == null) throw new Error('failed to obtain context');

      ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, dw, dh);

      const dataUrl = canvas.toDataURL('image/jpeg', encoderOption);

      setResizedImage(dataUrl);
    });
    img.src = sourceUrl;
  });

  return resizedImage;
};

export default useResizedImage;
