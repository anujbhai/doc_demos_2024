import * as React from 'react' // eslint-disable-line
import * as ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render( // eslint-disable-line
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
