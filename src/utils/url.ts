export const isAbsoluteUrl = (urlString: string): boolean => {
  try {
    const url = new URL(urlString); // Relative URL will cause a TypeError.
    return /^https?:$/.test(url.protocol);
  } catch {
    return false;
  }
};

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
    return /\.(mpg|mpeg|mp4|avi|mov|mkv|webm|ogv)$/i.test(url.pathname);
  } catch {
    return false;
  }
};

export const isAudioUrl = (urlString: string): boolean => {
  try {
    const url = new URL(urlString);
    return /\.(wav|mp3|flac|wma|m4a|aac|ogg|oga|opus)$/i.test(url.pathname);
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
export const thumbnailUrl = (
  urlString: string,
  size: 'icon' | 'thumbnail' = 'thumbnail',
): string => {
  try {
    const url = new URL(urlString);
    // Imgur
    if (url.host === 'i.imgur.com' || url.host === 'imgur.com') {
      const match = url.pathname.match(/^\/([a-zA-Z0-9]+)\.(jpeg|jpg|png|gif|webp|avif|apng)/);
      if (match != null) {
        const result = new URL(url);
        const imageId = match[1];
        const ext = match[2];
        result.host = 'i.imgur.com';
        if (size === 'icon') {
          result.pathname = `${imageId}s.${ext}`;
        } else if (size === 'thumbnail') {
          result.pathname = `${imageId}l.${ext}`;
        } else {
          // fallback
          return urlString;
        }
        return result.toString();
      }
      return url.toString();
    }

    // Gyazo
    if (url.host === 'i.gyazo.com') {
      const result = new URL(url);
      result.host = 'thumb.gyazo.com';
      if (size === 'icon') {
        result.pathname = `/thumb/160${url.pathname}`;
      } else if (size === 'thumbnail') {
        result.pathname = `/thumb/640${url.pathname}`;
      } else {
        // fallback
        return urlString;
      }
      return result.toString();
    }

    // nostr.build
    // https://github.com/nostrbuild/nostr.build/blob/main/SiteConfig.php#L71-L75
    // https://github.com/nostrbuild/nostr.build/blob/main/api/v2/routes_upload.php
    if (
      url.host === 'nostr.build' ||
      url.host === 'i.nostr.build' ||
      url.host === 'image.nostr.build' ||
      url.host === 'cdn.nostr.build'
    ) {
      // profile pic (PFP)
      if (url.pathname.startsWith('/i/p/')) return urlString;

      const result = new URL(url);
      if (url.pathname.startsWith('/i/')) {
        const withoutI = url.pathname.replace(/^\/i/, '');
        result.hostname = 'image.nostr.build';
        result.pathname = `/resp/240p${withoutI}`;
      } else if (url.pathname.match(/^\/[0-9a-zA-Z]+\.(jpeg|jpg|png|gif|webp|avif|apng)$/)) {
        result.pathname = `/resp/240p${url.pathname}`;
      } else {
        // fallback
        return urlString;
      }
      return result.toString();
    }

    // pbs.twimg.com
    // https://qiita.com/ma7ma7pipipi/items/713460b24710e0a46242
    if (url.host === 'pbs.twimg.com') {
      if (url.pathname.startsWith('/profile_images/')) {
        const result = new URL(url);
        result.pathname = url.pathname.replace(
          /(?:_(?:mini|normal|bigger|200x200|400x400))?\.(jpg|png)$/,
          '_normal.$1',
        );
        return result.toString();
      }
      if (url.pathname.startsWith('/media/')) {
        const result = new URL(url);
        result.searchParams.set('format', 'jpg');
        result.searchParams.set('name', 'small');
        return result.toString();
      }
      return urlString;
    }

    // media.discrodapp.net
    if (
      url.hostname === 'media.discordapp.net' &&
      url.pathname.match(/^\/attachments\/\d+\/\d+\/[a-z0-9]+\.(png|jpg|gif)/)
    ) {
      const result = new URL(url);
      result.searchParams.set('format', 'webp');
      if (size === 'icon') {
        result.searchParams.set('width', '100');
        result.searchParams.set('height', '100');
      } else if (size === 'thumbnail') {
        result.searchParams.set('width', '320');
        result.searchParams.set('height', '320');
      } else {
        return urlString;
      }
    }
    return url.toString();

    // Gravater
    // https://gravatar.com/userimage/ID/IMAGE_ID.jpeg
    if (url.host === 'gravatar.com' && url.pathname.startsWith('/userimage/')) {
      const result = new URL(url);
      url.searchParams.set('size', '128');
      return result.toString();
    }
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

export const softwareToGitHostUrl = (gitUrl: string): string | undefined => {
  const githubMatch = gitUrl.match(/^git\+https:\/\/github.com\/(\w+\/\w+)\.git$/);
  if (githubMatch != null) {
    const path = githubMatch[1];
    return `https://github.com/${path}`;
  }
  return undefined;
};
