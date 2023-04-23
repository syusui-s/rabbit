import { createEffect, onCleanup, lazy, type Component } from 'solid-js';

import { Routes, Route } from '@solidjs/router';
import { persistQueryClient } from '@tanstack/query-persist-client-core';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
import { QueryClient, QueryClientProvider } from '@tanstack/solid-query';

const Home = lazy(() => import('@/pages/Home'));
const Hello = lazy(() => import('@/pages/Hello'));
const NotFound = lazy(() => import('@/pages/NotFound'));

const queryClient = new QueryClient({});

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
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/hello" element={() => <Hello />} />
        <Route path="/" element={() => <Home />} />
        <Route path="/*" element={() => <NotFound />} />
      </Routes>
    </QueryClientProvider>
  );
};

export default App;
