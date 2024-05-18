/* @refresh reload */
import { render } from 'solid-js/web';
import { Route } from '@solidjs/router';

import './index.css';
import App from './App';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(() => (
  <HashRouterRouter root={App}>
    <Route path="/" component={() => <div>Home Component</div>}></Route>
    <Route path="/about" component={() => <div>About Component</div>}></Route>
  </HashRouterRouter>
), root!);
