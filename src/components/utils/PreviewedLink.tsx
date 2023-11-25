import { Component, Show, JSX, createSignal, Switch, Match, createEffect, onMount } from 'solid-js';

import SafeLink from '@/components/utils/SafeLink';
import { isTwitterUrl, isYoutubeVideoUrl } from '@/utils/url';

type SafeLinkProps = {
  class?: string;
  href: string;
  children?: JSX.Element;
};

type OgpContents = {
  url: URL | null;
  title: string;
  description: string;
  image: URL | null;
};

const twitterUrl = (urlString: string): string => {
  try {
    const url = new URL(urlString);
    url.host = 'twitter.com';
    return url.href;
  } catch {
    return '';
  }
};

const youtubeUrl = (urlString: string): string => {
  try {
    const originalUrl = new URL(urlString);
    const iframeUrl = new URL('https://www.youtube.com/embed');
    if (originalUrl.host === 'youtu.be') {
      iframeUrl.pathname += originalUrl.pathname;
    } else {
      iframeUrl.pathname += `/${originalUrl.searchParams.get('v')}`;
    }
    iframeUrl.searchParams.set('origin', window.location.origin);
    return iframeUrl.href;
  } catch {
    return '';
  }
};

const fetchOgpContents = async (url: URL): Promise<OgpContents | null> => {
  const whiteList = ['www3.nhk.or.jp'];
  if (whiteList.includes(url.host)) {
    const res = await fetch(url, { headers: { Accept: 'text/html' } });
    const text = await res.text();
    const el = new DOMParser().parseFromString(text, 'text/html');
    const ogs: { [index: string]: string } = {};
    Array.from(el.head.querySelectorAll('meta'))
      .filter((v) => v.getAttribute('property') != null && v.getAttribute('content') != null)
      .forEach((v) => {
        const property = v.getAttribute('property');
        const content = v.getAttribute('content');
        if (property != null && content != null) {
          ogs[property] = content;
        }
      });

    if (ogs['og:image'] && ogs['og:title'] && ogs['og:description']) {
      const contents: OgpContents = {
        title: ogs['og:title'],
        description: ogs['og:description'],
        image: new URL(ogs['og:image']),
        url,
      };
      return contents;
    }
  }
  return null;
};

const PreviewedLink: Component<SafeLinkProps> = (props) => {
  let twitterRef: HTMLQuoteElement | undefined;

  const initialOgp: OgpContents = { title: '', description: '', image: null, url: null };
  const [getOgpContents, setOgpContents] = createSignal(initialOgp);

  const isSafe = () => {
    try {
      const url = new URL(props.href);
      return url.protocol === 'https:' || url.protocol === 'http:';
    } catch {
      return false;
    }
  };

  const updateOgpContents = async () => {
    const ogp = await fetchOgpContents(new URL(props.href));
    if (ogp != null) {
      setOgpContents(ogp);
    }
  };

  createEffect(() => {
    if (isTwitterUrl(props.href)) {
      window.twttr?.widgets?.load(twitterRef);
    }
  });

  onMount(() => {
    updateOgpContents()
      .then(() => {})
      .catch(() => {});
  });

  return (
    <Show when={isSafe()} fallback={props.href}>
      <Switch fallback={<SafeLink class={props.class} href={props.href} />}>
        <Match when={isTwitterUrl(props.href)}>
          <blockquote class="twitter-tweet" ref={twitterRef}>
            <a
              class={props.class}
              href={twitterUrl(props.href)}
              target="_blank"
              rel="noreferrer noopener"
            >
              {twitterUrl(props.href)}
            </a>
          </blockquote>
        </Match>
        <Match when={isYoutubeVideoUrl(props.href)}>
          <div class="my-2 aspect-video w-full">
            <iframe title="YouTube" class="h-full w-full" src={youtubeUrl(props.href)} />
          </div>
        </Match>
        <Match when={getOgpContents().url} keyed>
          <a href={props.href} target="_blank" rel="noreferrer noopener">
            <div class="rounded-lg border transition-colors hover:bg-slate-100">
              <img
                alt=""
                class="max-w-full rounded-t-lg object-contain shadow"
                src={getOgpContents().image?.href}
              />
              <div class="mb-1 p-1">
                <div class="text-xs text-slate-500">{getOgpContents().url?.host}</div>
                <div class="text-sm">{getOgpContents().title}</div>
                <div class="text-xs text-slate-500">{getOgpContents().description}</div>
              </div>
            </div>
          </a>
        </Match>
      </Switch>
    </Show>
  );
};

export default PreviewedLink;
