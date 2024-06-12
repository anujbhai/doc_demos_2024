import type { Component, JSX } from 'solid-js'

// import logo from './logo.svg'
// import styles from './App.module.css'
import Navbar from './components/Navbar'

const App: Component = (props: JSX.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div class="flex flex-col h-full min-h-screen">
      <Navbar />

      <main class="px-8 py-4 flex-1 flex flex-col h-full">
        {props.children}
      </main>
    </div>
  )
}

export default App
