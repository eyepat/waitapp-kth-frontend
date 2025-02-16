import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { keycloak } from './config/keycloak.ts';
import { AuthContextWrapperProvider } from './contexts/KeycloakContext.tsx';

createRoot(document.getElementById('root')!).render(
  <AuthContextWrapperProvider
    authClient={keycloak}
    initOptions={{
      checkLoginIframe: true,
      onLoad: 'check-sso',
    }}
  >
    <StrictMode>
      <App />
    </StrictMode>
  </AuthContextWrapperProvider>
);
