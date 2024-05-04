import { createMemo, createSignal, type Component } from 'solid-js';

import styles from './App.module.css';

function Counter() {
  const [count, setCount] = createSignal(0)
  const squared = createMemo(() => count() ** 2)

  return (
    <>
      <p>{ count() }</p>
      <p>{ squared() }</p>
    </>
  )
}

const App: Component = () => {
  return (
    <div class={styles.App}>
      Solid hello world!

      <Counter />
    </div>
  );
};

export default App;
