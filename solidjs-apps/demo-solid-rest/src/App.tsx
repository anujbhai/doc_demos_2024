import type { Component } from 'solid-js'

import logo from './logo.svg'
import styles from './App.module.css'
import Navbar from './components/Navbar'

const App: Component = (props: Component) => {
  return (
    <div>
      <h1>Heading</h1>

      <div>
        <Navbar />
      </div>

      {props.children}
    </div>
  );
};

export default App;
