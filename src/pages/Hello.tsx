import { createSignal, onMount, For, Switch, Match, type Component } from 'solid-js';

import { useNavigate } from '@solidjs/router';
import ArrowTopRightOnSquare from 'heroicons/24/outline/arrow-top-right-on-square.svg';
import { UAParser } from 'ua-parser-js';

import SafeLink from '@/components/utils/SafeLink';
import usePersistStatus from '@/hooks/usePersistStatus';
import { useTranslation } from '@/i18n/useTranslation';
import resolveAsset from '@/utils/resolveAsset';

type SignerStatus = 'checking' | 'available' | 'unavailable';

const Browsers = ['pc-chrome', 'pc-firefox', 'ios', 'android'] as const;

type Browser = (typeof Browsers)[number];

type ExtensionDefinition = {
  name: string;
  url: string;
  browsers: Browser[];
  guides: {
    title: string;
    url: string;
    lang: 'ja' | 'en';
  }[];
};

const BrowserToString: Record<Browser, string> = {
  'pc-chrome': 'Chrome',
  'pc-firefox': 'Firefox',
  ios: 'iOS',
  android: 'Android',
};

const browserAsString = (browser: Browser) => BrowserToString[browser];

const Extensions: ExtensionDefinition[] = [
  {
    name: 'nos2x',
    url: 'https://chrome.google.com/webstore/detail/nos2x/kpgefcfmnafjgpblomihpgmejjdanjjp',
    browsers: ['pc-chrome', 'android'],
    guides: [
      {
        title: 'nos2xのセットアップと使い方',
        url: 'https://scrapbox.io/nostr/nos2x%E3%81%AE%E3%82%BB%E3%83%83%E3%83%88%E3%82%A2%E3%83%83%E3%83%97%E3%81%A8%E4%BD%BF%E3%81%84%E6%96%B9',
        lang: 'ja',
      },
    ],
  },
  {
    name: 'nos2x-fox',
    browsers: ['pc-firefox', 'android'],
    url: 'https://addons.mozilla.org/firefox/addon/nos2x-fox/',
    guides: [
      {
        title: 'nos2x-foxのセットアップと使い方',
        url: 'https://scrapbox.io/nostr/nos2x-fox%E3%81%AE%E3%82%BB%E3%83%83%E3%83%88%E3%82%A2%E3%83%83%E3%83%97%E3%81%A8%E4%BD%BF%E3%81%84%E6%96%B9',
        lang: 'ja',
      },
    ],
  },
  {
    name: 'nostore',
    browsers: ['ios'],
    url: 'https://apps.apple.com/jp/app/nostore/id1666553677',
    guides: [
      {
        title: 'nostore(iOS Safari用NIP-07拡張機能)のセットアップ',
        url: 'https://scrapbox.io/nostr/nostore(iOS_Safari%E7%94%A8NIP-07%E6%8B%A1%E5%BC%B5%E6%A9%9F%E8%83%BD)%E3%81%AE%E3%82%BB%E3%83%83%E3%83%88%E3%82%A2%E3%83%83%E3%83%97',
        lang: 'ja',
      },
    ],
  },
];

const useSignerStatus = () => {
  const [signerStatus, setSignerStatus] = createSignal<SignerStatus>('checking');

  const checkStatus = () => {
    if (window.nostr != null) {
      setSignerStatus('available');
    } else {
      setSignerStatus('unavailable');
    }
  };

  onMount(() => {
    let count = 0;
    const intervalId = setInterval(() => {
      checkStatus();
      if (count >= 10) clearInterval(intervalId);
      count += 1;
    }, 1000);
  });

  return signerStatus;
};

const getBrowsers = () => {
  const parsed = UAParser(window.navigator.userAgent);
  const result = new Set<Browser>();
  if (parsed.os.name === 'Android') result.add('android');
  if (parsed.os.name === 'iOS') result.add('ios');
  if (
    (parsed.device.type === undefined || parsed.device.type === 'console') &&
    (parsed.browser.name === 'Chromium' ||
      parsed.browser.name === 'Chrome' ||
      parsed.browser.name === 'Vivaldi' ||
      parsed.browser.name === 'Brave')
  )
    result.add('pc-chrome');
  if (parsed.browser.name === 'Firefox') result.add('pc-firefox');
  return result;
};

const ExtensionList = () => {
  const [selectedBrowsers, setSelectedBrowsers] = createSignal(getBrowsers());
  const toggleBrowser = (browser: Browser) =>
    setSelectedBrowsers((current) => {
      const newSet = new Set(current);
      if (!newSet.has(browser)) newSet.add(browser);
      else newSet.delete(browser);
      return newSet;
    });

  const extensions = (): ExtensionDefinition[] => {
    const browsers = selectedBrowsers();
    if (browsers.size === 0) return Extensions;
    return Extensions.filter((extension) =>
      extension.browsers.some((browser) => browsers.has(browser)),
    );
  };

  return (
    <div>
      <div class="pt-2">
        <ul class="flex gap-1">
          <For each={Browsers}>
            {(browser) => (
              <li>
                <button
                  class="rounded-xl border px-2 text-sm"
                  classList={{
                    'border-fg': selectedBrowsers().has(browser),
                    'font-bold': selectedBrowsers().has(browser),
                    'text-fg': selectedBrowsers().has(browser),
                    'border-border': !selectedBrowsers().has(browser),
                    'font-normal': !selectedBrowsers().has(browser),
                    'text-fg-secondary': !selectedBrowsers().has(browser),
                  }}
                  type="button"
                  onClick={() => toggleBrowser(browser)}
                >
                  {browserAsString(browser)}
                </button>
              </li>
            )}
          </For>
        </ul>
      </div>
      <div>
        <For each={extensions()}>
          {(extension) => (
            <div class="my-2 flex items-center rounded-lg border border-border p-2">
              <div class="flex-1">
                <SafeLink
                  class="font-bold hover:text-fg-secondary hover:underline"
                  href={extension.url}
                >
                  <h3>{extension.name}</h3>
                </SafeLink>
                <div class="flex items-center">
                  <ul class="flex items-center gap-1 text-xs">
                    <For each={extension.guides}>
                      {(guide) => (
                        <li class="text-link underline">
                          <SafeLink href={guide.url}>{guide.title}</SafeLink>
                        </li>
                      )}
                    </For>
                  </ul>
                </div>
                <ul class="flex gap-1 pt-1 text-xs">
                  <For each={extension.browsers}>
                    {(browser) => (
                      <li class="rounded-lg border border-border px-1 text-fg-secondary">
                        {browserAsString(browser)}
                      </li>
                    )}
                  </For>
                </ul>
              </div>
              <div class="shrink-0" aria-hidden="true">
                <SafeLink class="font-bold text-fg-secondary" href={extension.url}>
                  <span class="ms-1 inline-block size-16 p-5">
                    <ArrowTopRightOnSquare />
                  </span>
                </SafeLink>
              </div>
            </div>
          )}
        </For>
      </div>
    </div>
  );
};

const Hello: Component = () => {
  const i18n = useTranslation();
  const signerStatus = useSignerStatus();
  const navigate = useNavigate();
  const { persistStatus, loggedIn } = usePersistStatus();

  const handleLogin = () => {
    loggedIn();
    navigate('/');
  };

  onMount(() => {
    if (persistStatus().loggedIn) {
      navigate('/');
    }
  });

  return (
    <div class="mx-auto flex max-w-[640px] flex-col items-center p-4 text-fg">
      <div class="flex flex-col items-center gap-4 rounded p-4">
        <img src={resolveAsset('images/rabbit_256.png')} width="96" alt="logo" height="96" />
        <h1 class="text-5xl font-black text-primary">Rabbit</h1>
        <div>Rabbit is a Web client for Nostr.</div>
      </div>
      <div class="rounded-md p-8 shadow-md">
        <Switch>
          <Match when={signerStatus() === 'checking'}>
            <p>{i18n()('hello.signerChecking')}</p>
          </Match>
          <Match when={signerStatus() === 'unavailable'}>
            <h2 class="font-bold">{i18n()('hello.signerUnavailable')}</h2>
            <p>{i18n()('hello.signerUnavailableMessage')}</p>
            <ExtensionList />
            <div class="flex flex-col items-center gap-2">
              <p class="text-sm">{i18n()('hello.reloadAfterInstall')}</p>
              <button
                class="rounded bg-primary px-4 py-2 text-sm font-bold text-primary-fg hover:bg-primary-hover"
                onClick={() => window.location.reload()}
              >
                {i18n()('hello.reload')}
              </button>
            </div>
          </Match>
          <Match when={signerStatus() === 'available'}>
            <button
              class="rounded bg-primary p-4 text-lg font-bold text-primary-fg hover:shadow-md"
              onClick={handleLogin}
            >
              {i18n()('hello.loginWithSigner')}
            </button>
          </Match>
        </Switch>
      </div>
    </div>
  );
};

export default Hello;
