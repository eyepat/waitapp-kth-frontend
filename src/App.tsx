import { BrowserRouter } from 'react-router-dom';
import { Routes } from './auth/Routes';
import { LanguageProvider } from './contexts/LanguageContext';
import { AuthProvider } from './contexts/AuthContext';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DeviceContextProvider } from './contexts/DeviceContext';
import { SnackbarProvider, closeSnackbar } from 'notistack';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import StackNotification from './components/Notifications/StackNotification';

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <AuthProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DeviceContextProvider>
              <SnackbarProvider
                maxSnack={5}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                autoHideDuration={3000}
                dense
                preventDuplicate
                Components={{
                  error: StackNotification,
                  info: StackNotification,
                  success: StackNotification,
                  warning: StackNotification,
                  default: StackNotification,
                }}
                action={(snack) => (
                  <IconButton
                    color="inherit"
                    onClick={() => closeSnackbar(snack)}
                  >
                    <CloseIcon fontSize="medium" />
                  </IconButton>
                )}
              >
                <Routes />
              </SnackbarProvider>
            </DeviceContextProvider>
          </LocalizationProvider>
        </AuthProvider>
      </LanguageProvider>
    </BrowserRouter>
  );
}
