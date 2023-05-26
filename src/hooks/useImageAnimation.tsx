import { createSignal, onMount, children } from 'solid-js';

export type UseImageAnimationProps = {
  initialPlaying?: boolean;
};

const drawImageToCanvas = (image: HTMLImageElement, canvas: HTMLCanvasElement) => {
  // eslint-disable-next-line no-param-reassign
  canvas.width = image.width;
  // eslint-disable-next-line no-param-reassign
  canvas.height = image.height;
  canvas
    .getContext('2d')
    ?.drawImage(
      image,
      0,
      0,
      image.naturalWidth,
      image.naturalHeight,
      0,
      0,
      image.width,
      image.height,
    );
};

const useImageAnimation = (props: UseImageAnimationProps) => {
  let canvasRef: HTMLCanvasElement | undefined;
  let imageRef: HTMLImageElement | undefined;

  const [playing, setPlaying] = createSignal(props?.initialPlaying ?? false);

  const play = () => setPlaying(true);

  const canvas = children(() => (
    <canvas
      ref={canvasRef}
      class="inline-block"
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
  ));

  const stop = () => {
    if (canvasRef == null || imageRef == null) return;

    drawImageToCanvas(imageRef, canvasRef);
    imageRef.style.display = 'none';

    setPlaying(false);
  };

  onMount(() => {
    if (props?.initialPlaying === false) {
      stop();
    }
  });

  return {
    imageRef: (el: HTMLImageElement) => {
      imageRef = el;
    },
    play,
    stop,
    canvas,
  };
};

export default useImageAnimation;
