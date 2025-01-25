import { createQuery } from '@tanstack/solid-query';

const directAccessHosts = ['www3.nhk.or.jp'];

export type OgpContent = {
  url: string;
  title: string;
  description: string;
  image: string;
};

export const getCharset = (source: ArrayBuffer): string | null => {
  // https://www.w3.org/International/questions/qa-html-encoding-declarations.ja
  const content = new TextDecoder('US-ASCII').decode(source.slice(0, 1024));

  const metaCharsetMatch = content.match(/<meta\s+charset="([-A-Za-z0-9_]+)"/i);
  if (metaCharsetMatch != null) {
    return metaCharsetMatch[1].toLowerCase();
  }

  const metaContentTypeMatch = content.match(
    /<meta\s+http-equiv="Content-Type"\s*content="text\/html;\s*charset=([-A-Za-z0-9_]+)"/i,
  );
  if (metaContentTypeMatch != null) {
    return metaContentTypeMatch[1].toLowerCase();
  }

  return null;
};

// https://developer.mozilla.org/en-US/docs/Web/API/TextDecoder/decode
const supportedEncodings = new Set(['utf-8', 'shift_jis', 'shift-jis', 'euc-jp', 'iso-2022-jp']);

export const fixEncoding = (source: ArrayBuffer): string => {
  try {
    const charset = getCharset(source) ?? 'utf-8';
    if (!supportedEncodings.has(charset)) {
      throw new Error(`Unsupported encodings: ${charset}`);
    }
    const decoder = new TextDecoder(charset);
    return decoder.decode(source);
  } catch (e) {
    throw new Error('Failed to convert charset', { cause: e });
  }
};

export const parseOgpFromDOM = (doc: Document, urlString: string): OgpContent | null => {
  const props: { [property: string]: string } = {};

  Array.from(doc.head.querySelectorAll('meta')).forEach((m) => {
    const property = m.getAttribute('property') || m.getAttribute('name');
    const content = m.getAttribute('content');
    if (property != null && content != null) {
      props[property] = content;
    }
  });

  // Required
  const image = props['og:image'] || props['twitter:image'];
  const title = props['og:title'] || props['twitter:title'];
  const url = props['og:url'] || urlString;
  // Optional
  const description = props['og:description'] || props['twitter:description'] || '';

  if (image && title && url) {
    return { title, description, image, url } satisfies OgpContent;
  }
  return null;
};

export const parseOgp = (text: string, urlString: string): OgpContent | null => {
  const doc = new DOMParser().parseFromString(text, 'text/html');
  return parseOgpFromDOM(doc, urlString);
};

export const isOgpUrl = (urlString: string): boolean => {
  const url = new URL(urlString);
  return url.protocol === 'https:';
};

export const shouldAccessDirectly = (urlString: string): boolean => {
  const url = new URL(urlString);
  return directAccessHosts.includes(url.hostname);
};

export const buildUrl = (urlString: string): string => {
  if (shouldAccessDirectly(urlString)) return urlString;
  const url = new URL('https://corsproxy.io/');
  url.search = new URLSearchParams({ url: urlString }).toString();
  return url.toString();
};

export const fetchOgpContent = async (urlString: string): Promise<OgpContent | null> => {
  try {
    if (!isOgpUrl(urlString)) return null;

    const url = buildUrl(urlString);

    const res = await fetch(url, {
      mode: 'cors',
      headers: { Accept: 'text/html' },
      credentials: 'omit',
    });
    const arrayBuffer = await res.arrayBuffer();
    const encodedContent = fixEncoding(arrayBuffer);
    return parseOgp(encodedContent, urlString);
  } catch (err) {
    console.error(`failed to fetch ogp for ${urlString}`, err);
    return null;
  }
};

export type UseOgpProps = {
  url: string;
};

export const useOgp = (propsProvider: () => UseOgpProps) => {
  const genQueryKey = () => ['useOgp', propsProvider().url] as const;

  const query = createQuery(() => ({
    queryKey: genQueryKey(),
    queryFn: ({ queryKey: [, url] }) => fetchOgpContent(url),
    staleTime: 4 * 60 * 60 * 1000, // 4 hour
    gcTime: 4 * 60 * 60 * 1000, // 4 hour
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  }));

  const ogp = () => query.data;

  return { query, ogp };
};
