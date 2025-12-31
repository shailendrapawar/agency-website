import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RootOutlet from './RootOutlet'
// import App from './App.jsx'
import ThemeProvider from './contexts/theme/ThemeProvider'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <RootOutlet />
    </ThemeProvider>
  </StrictMode>,
)
