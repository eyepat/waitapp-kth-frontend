import { BrowserRouter } from 'react-router-dom';
import { Routes } from './auth/Routes';
import { LanguageProvider } from './contexts/LanguageContext';
import { AuthProvider } from './contexts/AuthContext';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <AuthProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Routes />
          </LocalizationProvider>
        </AuthProvider>
      </LanguageProvider>
    </BrowserRouter>
  );
}
