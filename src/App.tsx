import { createEffect, onCleanup, lazy, type Component } from 'solid-js';

import { HashRouter, Route } from '@solidjs/router';
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister';
import { persistQueryClient } from '@tanstack/query-persist-client-core';
import { QueryClient, QueryClientProvider } from '@tanstack/solid-query';
import { get as getItem, set as setItem, del as removeItem } from 'idb-keyval';

import DomainTransferInfo from '@/components/DomainTransferInfo';
import useColorTheme from '@/hooks/useColorTheme';
import i18nextInstance from '@/i18n/i18n';
import { I18NextProvider } from '@/i18n/useTranslation';

const Home = lazy(() => import('@/pages/Home'));
const Permalink = lazy(() => import('@/pages/Permalink'));
const Hello = lazy(() => import('@/pages/Hello'));
const NotFound = lazy(() => import('@/pages/NotFound'));

const queryClient = new QueryClient({});

const i18next = i18nextInstance();

const indexedDBPersister = createAsyncStoragePersister({
  storage: {
    getItem(key: string) {
      return getItem<string>(key).then((e) => e ?? null);
    },
    setItem(key: string, value: string) {
      return setItem(key, value);
    },
    removeItem(key: string) {
      return removeItem(key);
    },
  },
});

const App: Component = () => {
  createEffect(() => {
    const [unsubscribe] = persistQueryClient({
      queryClient,
      persister: indexedDBPersister,
    });

    onCleanup(() => unsubscribe());
  });

  useColorTheme(document.body);

  return (
    <I18NextProvider i18next={i18next}>
      <QueryClientProvider client={queryClient}>
        <DomainTransferInfo>
          <HashRouter>
            <Route path="/hello" component={() => <Hello />} />
            <Route path="/" component={() => <Home />} />
            <Route path="/:id" component={() => <Permalink />} />
            <Route path="/*" component={() => <NotFound />} />
          </HashRouter>
        </DomainTransferInfo>
      </QueryClientProvider>
    </I18NextProvider>
  );
};

export default App;
