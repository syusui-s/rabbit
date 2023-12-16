import { Component, JSX, Switch, Match, createEffect, Show } from 'solid-js';

import LazyLoad from '@/components/utils/LazyLoad';
import SafeLink from '@/components/utils/SafeLink';
import useConfig from '@/core/useConfig';
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

const TwitterEmbed: Component<{ class?: string; href: string }> = (props) => {
  let twitterRef: HTMLQuoteElement | undefined;

  createEffect(() => {
    if (isTwitterUrl(props.href)) {
      window.twttr?.widgets?.load(twitterRef);
    }
  });

  return (
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
  );
};

const OgpEmbed: Component<{ class?: string; url: string }> = (props) => {
  const { ogp } = useOgp(() => ({
    url: props.url,
  }));

  return (
    <Show when={ogp()} fallback={<SafeLink class={props.class} href={props.url} />} keyed>
      {(ogpProps) => (
        <SafeLink href={props.url}>
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
    </Show>
  );
};

const PreviewedLink: Component<PreviewdLinkProps> = (props) => {
  const { config } = useConfig();

  return (
    <Switch fallback={<SafeLink class={props.class} href={props.href} />}>
      <Match when={config().embedding.twitter && isTwitterUrl(props.href)}>
        <LazyLoad>{() => <TwitterEmbed class={props.class} href={props.href} />}</LazyLoad>
      </Match>
      <Match when={config().embedding.youtube && parseYouTubeVideoUrl(props.href)} keyed>
        {({ videoId }) => (
          <LazyLoad
            fallback={
              <div class="aspect-video max-w-full">
                <SafeLink href={props.href} />
              </div>
            }
          >
            {() => (
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
          </LazyLoad>
        )}
      </Match>
      <Match when={config().embedding.ogp}>
        <LazyLoad>{() => <OgpEmbed class={props.class} url={props.href} />}</LazyLoad>
      </Match>
    </Switch>
  );
};

export default PreviewedLink;
