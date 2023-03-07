import { lazy, type Component } from 'solid-js';
import { Routes, Route } from '@solidjs/router';
import { QueryClient, QueryClientProvider } from '@tanstack/solid-query';
// import { persistQueryClient } from '@tanstack/solid-query-persist-client';
// import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';

const Home = lazy(() => import('@/pages/Home'));
const Hello = lazy(() => import('@/pages/Hello'));
const NotFound = lazy(() => import('@/pages/NotFound'));

const queryClient = new QueryClient({});

// const localStoragePersister = createSyncStoragePersister({ storage: window.localStorage });

// persistQueryClient({
//   queryClient,
//   persister: localStoragePersister,
// });

const App: Component = () => (
  <QueryClientProvider client={queryClient}>
    <Routes>
      <Route path="/hello" element={() => <Hello />} />
      <Route path="/" element={() => <Home />} />
      <Route path="/*" element={() => <NotFound />} />
    </Routes>
  </QueryClientProvider>
);

export default App;
