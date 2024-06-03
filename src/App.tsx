import { BrowserRouter } from 'react-router-dom';
import { Routes } from './auth/Routes';
import { Navigation } from './components/Navigation';
import { LanguageProvider } from './contexts/LanguageContext';

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <Routes authLevel={9} />
        <Navigation authLevel={9} />
      </LanguageProvider>
    </BrowserRouter>
  );
}
