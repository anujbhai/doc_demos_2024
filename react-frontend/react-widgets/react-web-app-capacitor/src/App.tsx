import { Outlet } from 'react-router-dom'

import './App.css'

function App() {
  return (
    <>
      <div style={{margin: "1rem"}}>
        <h1>React Web to Native Mobile App with Capacitor.</h1>

        <Outlet></Outlet>
      </div>
    </>
  )
}

export default App
