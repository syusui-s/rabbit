import type { Component } from 'solid-js';
import { Routes, Route } from '@solidjs/router';
import { QueryClient, QueryClientProvider } from '@tanstack/solid-query';

import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';
import AccountRecovery from '@/pages/AccountRecovery';

const queryClient = new QueryClient();

const App: Component = () => (
  <QueryClientProvider client={queryClient}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recovery" element={<AccountRecovery />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  </QueryClientProvider>
);

export default App;
