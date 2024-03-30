import './App.css'
import DemoUseCallback from './hooks/DemoUseCallback'
// import DemoUseMemo from './hooks/DemoUseMemo'
// import ParentChild from './components/ParentChild'

function App() {
  return (
    <div className='app'>
      <p>Hello app ...</p>

      {/* <ParentChild /> */}
      {/* <DemoUseMemo /> */}
      <DemoUseCallback />
    </div>
  )
}

export default App
