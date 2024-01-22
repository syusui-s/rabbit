import { Component, JSX, Switch, Match, createSignal, createEffect, Show } from 'solid-js';

import LazyLoad from '@/components/utils/LazyLoad';
import SafeLink from '@/components/utils/SafeLink';
import useConfig from '@/core/useConfig';
import { useTranslation } from '@/i18n/useTranslation';
import { useOgp, isOgpUrl } from '@/utils/ogp';
import { isTwitterUrl, parseYouTubeVideoUrl } from '@/utils/url';

type PreviewedLinkProps = {
  url: string;
  initialHidden: boolean;
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
  const iframeUrl = new URL(`https://www.youtube-nocookie.com/embed/`);
  iframeUrl.pathname += videoId;
  iframeUrl.searchParams.set('origin', window.location.origin);
  return iframeUrl.href;
};

const TwitterEmbed: Component<{ url: string }> = (props) => {
  let twitterRef: HTMLQuoteElement | undefined;

  const { getColorTheme } = useConfig();

  createEffect(() => {
    if (isTwitterUrl(props.url)) {
      window.twttr?.widgets?.load(twitterRef);
    }
  });

  const dataTheme = () => {
    const colorTheme = getColorTheme();
    if (colorTheme.brightness === 'dark') {
      return 'dark';
    }
    return 'light';
  };

  return (
    <blockquote ref={twitterRef} class="twitter-tweet" data-theme={dataTheme()}>
      <a
        class="text-link underline"
        href={twitterUrl(props.url)}
        target="_blank"
        rel="noreferrer noopener"
      >
        {twitterUrl(props.url)}
      </a>
    </blockquote>
  );
};

const OgpEmbed: Component<{ class?: string; url: string }> = (props) => {
  const { ogp } = useOgp(() => ({
    url: props.url,
  }));

  return (
    <Show when={ogp()} fallback={<SafeLink class="text-link underline" href={props.url} />} keyed>
      {(ogpProps) => (
        <SafeLink href={props.url}>
          <div class="my-2 rounded-lg border border-border transition-colors hover:bg-bg-tertiary">
            <img
              alt={ogpProps.title}
              class="max-w-full rounded-t-lg object-contain shadow"
              src={ogpProps.image}
            />
            <div class="mb-1 p-1">
              <div class="text-xs text-fg-secondary">{new URL(ogpProps.url).host}</div>
              <div class="text-sm">{ogpProps.title}</div>
              <div class="text-xs text-fg-secondary">{ogpProps.description}</div>
            </div>
          </div>
        </SafeLink>
      )}
    </Show>
  );
};

type ClickToShowProps = {
  initialHidden: boolean;
  url: string;
  children: JSX.Element;
};

const ClickToShow: Component<ClickToShowProps> = (props) => {
  const i18n = useTranslation();
  const [hidden, setHidden] = createSignal(props.initialHidden);

  return (
    <Show
      when={!hidden()}
      fallback={
        <div>
          <button
            class="flex flex-col items-center rounded bg-bg-tertiary p-3 text-xs text-fg-secondary hover:shadow"
            onClick={() => setHidden(false)}
          >
            {i18n.t('post.showPreview')}
          </button>
          <SafeLink class="text-link underline" href={props.url} />
        </div>
      }
    >
      {props.children}
    </Show>
  );
};

const PreviewedLink: Component<PreviewedLinkProps> = (props) => {
  const { config } = useConfig();

  return (
    <Switch fallback={<SafeLink class="text-link underline" href={props.url} />}>
      <Match when={config().embedding.twitter && isTwitterUrl(props.url)}>
        <ClickToShow url={props.url} initialHidden={props.initialHidden}>
          <TwitterEmbed url={props.url} />
        </ClickToShow>
      </Match>
      <Match when={config().embedding.youtube && parseYouTubeVideoUrl(props.url)} keyed>
        {({ videoId }) => (
          <ClickToShow url={props.url} initialHidden={props.initialHidden}>
            <LazyLoad
              fallback={
                <div class="aspect-video max-w-full">
                  <SafeLink href={props.url} />
                </div>
              }
            >
              {() => (
                <div class="my-2 aspect-video w-full">
                  <iframe
                    loading="lazy"
                    title="YouTube"
                    class="my-2 size-full"
                    src={youtubeUrl(videoId)}
                    allowfullscreen
                  />
                </div>
              )}
            </LazyLoad>
          </ClickToShow>
        )}
      </Match>
      <Match when={config().embedding.ogp && isOgpUrl(props.url)}>
        <ClickToShow url={props.url} initialHidden={props.initialHidden}>
          <LazyLoad>{() => <OgpEmbed url={props.url} />}</LazyLoad>
        </ClickToShow>
      </Match>
    </Switch>
  );
};

export default PreviewedLink;
