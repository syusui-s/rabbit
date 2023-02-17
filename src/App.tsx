import type { Component } from 'solid-js';
import { Routes, Route } from '@solidjs/router';

import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';
import AccountRecovery from '@/pages/AccountRecovery';

const App: Component = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/recovery" element={<AccountRecovery />} />
    <Route path="/*" element={<NotFound />} />
  </Routes>
);

export default App;
