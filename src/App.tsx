import { BrowserRouter } from 'react-router-dom';
import { Routes } from './auth/Routes';
import { LanguageProvider } from './contexts/LanguageContext';
import { AuthProvider } from './contexts/AuthContext';
import { SprintProvider } from './contexts/SprintContext';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DeviceContextProvider } from './contexts/DeviceContext';
import { SnackbarProvider, closeSnackbar } from 'notistack';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import StackNotification from './components/Notifications/StackNotification';

// Preload images
import { preloadImages } from './utils/preload';
import alcoholImage from './assets/backgrounds/alcoholBackground.jpg';
import foodImage from './assets/backgrounds/foodBackground.jpg';
import physicalImage from './assets/backgrounds/physicalBackground.jpg';
import alcoholPreview from './assets/sprintchoice/alcohol.svg';
import foodPreview from './assets/sprintchoice/food.svg';
import physicalPreview from './assets/sprintchoice/physact.svg';
import moonImage from './assets/sprint/moon.svg';
import kiLogo from './assets/logo/ki.svg';
import whiteKiLogo from './assets/logo/whiteKi.svg';
import underConstruction from './assets/popup/under-construction.svg';
import { LoadingProvider } from './contexts/LoadContext';
import BloodPressureTest from './assets/tests/bloodpressure.svg';
import 'dayjs/locale/en-gb';
import { ResourceProvider } from './contexts/ResourceContext';
import { BaseAPIContextProvider } from './contexts/BaseAPIContext';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  BloodPressureProvider,
  HeightProvider,
  RAPAProvider,
  StepsProvider,
  WaistSizeProvider,
  WeightProvider,
} from './contexts/MetricsContext';

export default function App() {
  preloadImages([
    alcoholImage,
    foodImage,
    physicalImage,
    alcoholPreview,
    foodPreview,
    physicalPreview,
    moonImage,
    kiLogo,
    whiteKiLogo,
    BloodPressureTest,
    underConstruction,
  ]);
  return (
    <BrowserRouter>
      <LanguageProvider>
        <LoadingProvider>
          <LocalizationProvider
            adapterLocale="en-gb"
            dateAdapter={AdapterDayjs}
          >
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
                <BaseAPIContextProvider>
                  <ResourceProvider>
                    <BloodPressureProvider>
                      <HeightProvider>
                        <WeightProvider>
                          <WaistSizeProvider>
                            <RAPAProvider>
                              <StepsProvider>
                                <AuthProvider>
                                  <SprintProvider>
                                    <Routes />
                                  </SprintProvider>
                                </AuthProvider>
                              </StepsProvider>
                            </RAPAProvider>
                          </WaistSizeProvider>
                        </WeightProvider>
                      </HeightProvider>
                    </BloodPressureProvider>
                  </ResourceProvider>
                </BaseAPIContextProvider>
              </SnackbarProvider>
            </DeviceContextProvider>
          </LocalizationProvider>
        </LoadingProvider>
      </LanguageProvider>
    </BrowserRouter>
  );
}
