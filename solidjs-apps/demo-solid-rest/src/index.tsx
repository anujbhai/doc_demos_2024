/* @refresh reload */
import { render } from 'solid-js/web';
import { HashRouter, Route } from '@solidjs/router';

import './index.css';
import App from './App';
import Home from './pages/Home';
import About from './pages/About';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(() => (
  <HashRouter root={App}>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
  </HashRouter>
), root!);
