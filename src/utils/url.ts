export const isImageUrl = (urlString: string): boolean => {
  try {
    const url = new URL(urlString);
    return /\.(jpeg|jpg|png|gif|webp|avif|apng|svg)$/i.test(url.pathname);
  } catch {
    return false;
  }
};

export const isVideoUrl = (urlString: string): boolean => {
  try {
    const url = new URL(urlString);
    return /\.(mpg|mpeg|mp4|avi|mov|webm|ogv)$/i.test(url.pathname);
  } catch {
    return false;
  }
};

/**
 * Generate a URL of thumbnail for a given URL.
 */
export const thumbnailUrl = (urlString: string): string => {
  try {
    const url = new URL(urlString);
    // Imgur
    if (url.host === 'i.imgur.com' || url.host === 'imgur.com') {
      const match = url.pathname.match(/^\/([a-zA-Z0-9]+)\.(jpg|jpeg|png|gif)/);
      if (match != null) {
        const result = new URL(url);
        const imageId = match[1];
        result.host = 'i.imgur.com';
        result.pathname = `${imageId}l.webp`;
        return result.toString();
      }
      return url.toString();
    }

    // Gyazo
    if (url.host === 'i.gyazo.com') {
      const result = new URL(url);
      result.host = 'thumb.gyazo.com';
      result.pathname = `/thumb/640_w${url.pathname}`;
      return result.toString();
    }

    return url.toString();
  } catch {
    return urlString;
  }
};

export const isTwitterUrl = (urlString: string): boolean => {
  try {
    const url = new URL(urlString);
    return url.protocol === 'https:' && (url.host === 'twitter.com' || url.host === 'x.com');
  } catch {
    return false;
  }
};

export const isYoutubeVideoUrl = (urlString: string): boolean => {
  try {
    const url = new URL(urlString);
    return (
      (url.protocol === 'https:' &&
        url.host === 'www.youtube.com' &&
        url.pathname === '/watch' &&
        url.searchParams.get('v') != null) ||
      (url.protocol === 'https:' && url.host === 'youtu.be' && url.pathname.lastIndexOf('/') === 0)
    );
  } catch {
    return false;
  }
};
