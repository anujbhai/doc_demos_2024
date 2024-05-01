import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import App from './App.tsx'
import './index.css'
import Login from './routes/Login.tsx'
import Dashboard from './routes/Dashboard.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Login />}></Route>
          <Route path="/app/dashboard" element={<Dashboard />}></Route>
          <Route
            path="*"
            element={
              <main>
                <p>There's nothing here!</p>
                <Link to="/">Back home!</Link>
              </main>
            }
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
