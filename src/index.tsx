/* @refresh reload */
import { render } from 'solid-js/web';
import { Router } from '@solidjs/router';

import './index.css';
import App from './App';

render(
  () => (
    <Router base={import.meta.env.BASE_URL}>
      <App />
    </Router>
  ),
  document.getElementById('root') as HTMLElement,
);
