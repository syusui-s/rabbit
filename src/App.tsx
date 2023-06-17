import { createEffect, onCleanup, lazy, type Component } from 'solid-js';

import { Routes, Route } from '@solidjs/router';
import { persistQueryClient } from '@tanstack/query-persist-client-core';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
import { QueryClient, QueryClientProvider } from '@tanstack/solid-query';

import i18nextInstance from '@/i18n/i18n';
import { I18NextProvider } from '@/i18n/useTranslation';

const Home = lazy(() => import('@/pages/Home'));
const Hello = lazy(() => import('@/pages/Hello'));
const NotFound = lazy(() => import('@/pages/NotFound'));

const queryClient = new QueryClient({});

const i18next = i18nextInstance();

const localStoragePersister = createSyncStoragePersister({
  storage: window.localStorage,
});

const App: Component = () => {
  createEffect(() => {
    const [unsubscribe] = persistQueryClient({
      queryClient,
      persister: localStoragePersister,
    });
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
