import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header/Header.tsx';
import App from './pages/Home/Home.tsx';
import Footer from './components/footer/Footer.tsx';
import './styles/main.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Header/>
      <App/>
      <Footer/>
    </Router>
  </StrictMode>
);
