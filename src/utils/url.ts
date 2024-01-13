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

export const isWebSocketUrl = (urlString: string): boolean => {
  try {
    const url = new URL(urlString);
    return /^wss?:$/.test(url.protocol);
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
      const match = url.pathname.match(/^\/([a-zA-Z0-9]+)\.(jpeg|jpg|png|gif|webp|avif|apng)/);
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
      result.pathname = `/thumb/640${url.pathname}`;
      return result.toString();
    }

    // nostr.build
    // https://github.com/nostrbuild/nostr.build/blob/main/api/v2/routes_upload.php
    if (
      url.host === 'nostr.build' ||
      url.host === 'image.nostr.build' ||
      url.host === 'cdn.nostr.build'
    ) {
      const result = new URL(url);
      result.host = 'nostr.build';
      // profile pic (PFP)
      if (url.pathname.startsWith('/i/p/')) return urlString;

      if (url.pathname.startsWith('/i/')) {
        result.pathname = `/responsive/240p${url.pathname}`;
      } else if (url.pathname.match(/^\/[0-9a-zA-Z]+\.(jpeg|jpg|png|gif|webp|avif|apng)$/)) {
        result.pathname = `/responsive/240p/i${url.pathname}`;
      } else {
        return urlString;
      }
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

type YouTubeVideo = {
  videoId: string;
};

const YouTubeHosts = ['www.youtube.com', 'm.youtube.com', 'youtube.com'];
export const parseYouTubeVideoUrl = (urlString: string): YouTubeVideo | null => {
  try {
    const url = new URL(urlString);
    if (url.protocol !== 'https:') return null;

    if (YouTubeHosts.includes(url.host)) {
      if (url.pathname === '/watch') {
        const videoId = url.searchParams.get('v');
        if (videoId != null) {
          return { videoId };
        }
      }
      if (url.pathname.startsWith('/shorts/')) {
        const match = url.pathname.match(/^\/shorts\/([0-9a-zA-Z_-]*)$/);
        if (match) {
          return { videoId: match[1] };
        }
      }
    }

    if (url.host === 'youtu.be' && url.pathname.lastIndexOf('/') === 0) {
      return { videoId: url.pathname };
    }

    return null;
  } catch {
    return null;
  }
};
