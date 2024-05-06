import { createSignal, type Component } from 'solid-js';

import styles from './App.module.css';

function Counter() {
  const [count, setCount] = createSignal(0)

  function handleCount() {
    setCount(count() + 1)
  }

  return (
    <>
      <p>Count: { count() }</p>

      <button onClick={handleCount}>Inc</button>
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
