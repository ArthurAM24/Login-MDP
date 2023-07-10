import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Login } from './auth/login/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Login></Login>
  </React.StrictMode>,
)
