import { Component } from 'solid-js';

type ImageDisplayProps = {
  url: string;
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
  const url = () => new URL(props.url);

  return (
    <a class="my-2 inline-block" href={props.url} target="_blank" rel="noopener noreferrer">
      <img
        class="inline-block max-h-64 max-w-full rounded object-contain shadow"
        src={fixUrl(url())}
        alt={props.url}
      />
    </a>
  );
};

export default ImageDisplay;
