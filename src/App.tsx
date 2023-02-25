import type { Component } from 'solid-js';
import { Routes, Route } from '@solidjs/router';
import { QueryClient, QueryClientProvider } from '@tanstack/solid-query';
// import { persistQueryClient } from '@tanstack/solid-query-persist-client';
// import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';

import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';

const queryClient = new QueryClient({});

// const localStoragePersister = createSyncStoragePersister({ storage: window.localStorage });

// persistQueryClient({
//   queryClient,
//   persister: localStoragePersister,
// });

const App: Component = () => (
  <QueryClientProvider client={queryClient}>
    <Routes>
      <Route path="/" element={() => <Home />} />
      <Route path="/*" element={() => <NotFound />} />
    </Routes>
  </QueryClientProvider>
);

export default App;
