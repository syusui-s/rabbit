import { createEffect, onCleanup, lazy, type Component } from 'solid-js';

import { Routes, Route } from '@solidjs/router';
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister';
import { persistQueryClient } from '@tanstack/query-persist-client-core';
import { QueryClient, QueryClientProvider } from '@tanstack/solid-query';
import { get as getItem, set as setItem, del as removeItem } from 'idb-keyval';

import i18nextInstance from '@/i18n/i18n';
import { I18NextProvider } from '@/i18n/useTranslation';

const Home = lazy(() => import('@/pages/Home'));
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

    // TODO remove this in the future
    if (window.localStorage != null) {
      window.localStorage.removeItem('REACT_QUERY_OFFLINE_CACHE');
    }

    onCleanup(() => unsubscribe());
  });

  return (
    <I18NextProvider i18next={i18next}>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/hello" element={<Hello />} />
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </QueryClientProvider>
    </I18NextProvider>
  );
};

export default App;
