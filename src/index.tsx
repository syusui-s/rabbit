/* @refresh reload */
import { Router, hashIntegration } from '@solidjs/router';
import { render } from 'solid-js/web';

import '@/index.css';
import App from '@/App';

render(
  () => (
    <Router source={hashIntegration()}>
      <App />
    </Router>
  ),
  document.getElementById('root') as HTMLElement,
);
