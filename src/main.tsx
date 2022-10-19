import React from 'react'
import {App} from './App'
import ReactDOM from 'react-dom/client'

import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
