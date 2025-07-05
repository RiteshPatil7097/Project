import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import A1 from './A1.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
