import { createSignal, onMount, Switch, Match, type Component } from 'solid-js';

import { useNavigate } from '@solidjs/router';

import SignerExtensions from '@/components/SignerExtensions';
import SafeLink from '@/components/utils/SafeLink';
import usePersistStatus from '@/hooks/usePersistStatus';
import { useTranslation } from '@/i18n/useTranslation';
import resolveAsset from '@/utils/resolveAsset';

type SignerStatus = 'checking' | 'available' | 'unavailable';

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
    <div class="mx-auto flex max-w-screen-sm flex-col items-center p-4 text-fg">
      <div class="flex flex-col items-center gap-4 rounded-sm p-4">
        <img src={resolveAsset('images/rabbit_256.png')} width="96" alt="logo" height="96" />
        <h1 class="text-5xl font-black text-primary">Rabbit</h1>
        <div>Rabbit is a Web client for Nostr.</div>
      </div>
      <div class="rounded-md p-8 shadow-md">
        <Switch>
          <Match when={signerStatus() === 'checking'}>
            <p>{i18n.t('hello.signerChecking')}</p>
          </Match>
          <Match when={signerStatus() === 'unavailable'}>
            <h2 class="font-bold">{i18n.t('hello.signerUnavailable')}</h2>
            <p>{i18n.t('hello.signerUnavailableMessage')}</p>
            <SignerExtensions />
            <div class="flex flex-col items-center gap-2">
              <p class="text-sm">{i18n.t('hello.reloadAfterInstall')}</p>
              <button
                class="rounded-sm border border-primary px-4 py-2 text-sm font-bold text-primary hover:text-primary-hover"
                onClick={() => window.location.reload()}
              >
                {i18n.t('hello.reload')}
              </button>
            </div>
          </Match>
          <Match when={signerStatus() === 'available'}>
            <button
              class="rounded-sm bg-primary p-4 text-lg font-bold text-primary-fg hover:shadow-md"
              onClick={handleLogin}
            >
              {i18n.t('hello.loginWithSigner')}
            </button>
          </Match>
        </Switch>
      </div>
      <p class="mt-4 text-xs text-fg-secondary">
        Copyright &copy; 2023, 2024{' '}
        <SafeLink class="underline hover:text-fg-tertiary" href="https://github.com/syusui-s/">
          Shusui Moyatani
        </SafeLink>{' '}
        and{' '}
        <SafeLink
          class="underline hover:text-fg-tertiary"
          href="https://github.com/syusui-s/rabbit/graphs/contributors"
        >
          Rabbit contributors
        </SafeLink>
      </p>
      <p class="mt-1 text-xs text-fg-secondary">
        <SafeLink
          class="underline hover:text-fg-tertiary"
          href="https://github.com/syusui-s/rabbit"
        >
          GitHub
        </SafeLink>
      </p>
    </div>
  );
};

export default Hello;
