import { Component, JSX, Switch, Match, createEffect } from 'solid-js';

import SafeLink from '@/components/utils/SafeLink';
import { useOgp } from '@/utils/ogp';
import { isTwitterUrl, parseYouTubeVideoUrl } from '@/utils/url';

type PreviewdLinkProps = {
  class?: string;
  href: string;
  children?: JSX.Element;
};

const twitterUrl = (urlString: string): string => {
  try {
    const url = new URL(urlString);
    url.host = 'twitter.com';
    return url.href;
  } catch {
    return urlString;
  }
};

const youtubeUrl = (videoId: string): string => {
  const iframeUrl = new URL(`https://www.youtube.com/embed/`);
  iframeUrl.pathname += videoId;
  iframeUrl.searchParams.set('origin', window.location.origin);
  return iframeUrl.href;
};

const PreviewedLink: Component<PreviewdLinkProps> = (props) => {
  let twitterRef: HTMLQuoteElement | undefined;

  const { ogp } = useOgp(() => ({
    url: props.href,
  }));

  createEffect(() => {
    if (isTwitterUrl(props.href)) {
      window.twttr?.widgets?.load(twitterRef);
    }
  });

  return (
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
      <Match when={parseYouTubeVideoUrl(props.href)} keyed>
        {({ videoId }) => (
          <div class="my-2 aspect-video w-full">
            <iframe
              loading="lazy"
              title="YouTube"
              class="my-2 h-full w-full"
              src={youtubeUrl(videoId)}
              allowfullscreen
            />
          </div>
        )}
      </Match>
      <Match when={ogp()} keyed>
        {(ogpProps) => (
          <SafeLink href={props.href}>
            <div class="my-2 rounded-lg border transition-colors hover:bg-slate-100">
              <img
                alt={ogpProps.title}
                class="max-w-full rounded-t-lg object-contain shadow"
                src={ogpProps.image}
              />
              <div class="mb-1 p-1">
                <div class="text-xs text-slate-500">{new URL(ogpProps.url).host}</div>
                <div class="text-sm">{ogpProps.title}</div>
                <div class="text-xs text-slate-500">{ogpProps.description}</div>
              </div>
            </div>
          </SafeLink>
        )}
      </Match>
    </Switch>
  );
};

export default PreviewedLink;
