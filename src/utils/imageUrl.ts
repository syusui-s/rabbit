export const isImageUrl = (urlString: string): boolean => {
  try {
    const url = new URL(urlString);
    return /\.(jpeg|jpg|png|gif|webp)$/i.test(url.pathname);
  } catch {
    return false;
  }
};

export const fixUrl = (urlString: string): string => {
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
