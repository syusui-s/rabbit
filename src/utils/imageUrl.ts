export const isImageUrl = (url: URL): boolean => {
  if (url.pathname.match(/\.(jpeg|jpg|png|gif|webp)$/i)) return true;

  return false;
};

export const fixUrl = (url: URL): URL => {
  // Imgur
  if (url.host === 'i.imgur.com' || url.host === 'imgur.com') {
    const match = url.pathname.match(/^\/([a-zA-Z0-9]+)\.(jpg|jpeg|png|gif)/);
    if (match != null) {
      const result = new URL(url);
      const imageId = match[1];
      result.host = 'i.imgur.com';
      result.pathname = `${imageId}l.webp`;
      return result;
    }
    return url;
  }

  // Gyazo
  if (url.host === 'i.gyazo.com') {
    const result = new URL(url);
    result.host = 'thumb.gyazo.com';
    result.pathname = `/thumb/640_w${url.pathname}`;
    return result;
  }

  return url;
};
