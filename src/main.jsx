import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RootOutlet from './RootOutlet'
// import App from './App.jsx'
import ThemeProvider from './contexts/theme/ThemeProvider'
import ScrollProvider from './contexts/scroll/ScrollProvider'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <ScrollProvider>
        <RootOutlet />
      </ScrollProvider>
    </ThemeProvider>
  </StrictMode>,
)
