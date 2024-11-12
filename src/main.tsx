import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages/Home/Home.tsx'
import Header from './components/header/Header.tsx'
import './styles/main.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <App />
  </StrictMode>,
)
