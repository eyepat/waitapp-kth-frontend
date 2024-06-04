import { BrowserRouter } from 'react-router-dom';
import { Routes } from './auth/Routes';
import { LanguageProvider } from './contexts/LanguageContext';
import { AuthProvider } from './contexts/AuthContext';

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </LanguageProvider>
    </BrowserRouter>
  );
}
