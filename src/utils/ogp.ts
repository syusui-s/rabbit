import { createQuery } from '@tanstack/solid-query';

export type OgpContent = {
  url: string;
  title: string;
  description: string;
  image: string;
};

export const parseOgpFromDOM = (doc: HTMLDocument): OgpContent | null => {
  const props: { [property: string]: string } = {};

  Array.from(doc.head.querySelectorAll('meta')).forEach((m) => {
    const property = m.getAttribute('property');
    const content = m.getAttribute('content');
    if (property != null && content != null) {
      props[property] = content;
    }
  });

  if (
    props['og:image'] != null &&
    props['og:title'] != null &&
    props['og:description'] != null &&
    props['og:url']
  ) {
    return {
      title: props['og:title'],
      description: props['og:description'],
      image: props['og:image'],
      url: props['og:url'],
    } satisfies OgpContent;
  }
  return null;
};

export const parseOgp = (text: string): OgpContent | null => {
  const doc = new DOMParser().parseFromString(text, 'text/html');
  return parseOgpFromDOM(doc);
};

export const isOgpUrl = (urlString: string): boolean => {
  const allowList = ['www3.nhk.or.jp'];
  const url = new URL(urlString);
  return allowList.includes(url.host);
};

export const fetchOgpContent = async (urlString: string): Promise<OgpContent | null> => {
  if (!isOgpUrl(urlString)) return null;

  const res = await fetch(urlString, { headers: { Accept: 'text/html' } });
  const text = await res.text();
  return parseOgp(text);
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
