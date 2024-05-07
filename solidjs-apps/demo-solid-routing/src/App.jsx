import styles from './App.module.css';
import Nav from './layout/Nav';

function App(props) {
  return (
    <div>
      <h1>Hello SolidJS</h1>
      <Nav />
      {props.children}
    </div>
  );
}

export default App;
