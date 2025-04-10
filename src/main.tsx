import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import { AppCounter } from './AppCounter.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppCounter   />
  </StrictMode>,
)
