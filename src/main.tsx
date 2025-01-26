import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import { keycloak } from './config/keycloak.ts';

createRoot(document.getElementById('root')!).render(
  <ReactKeycloakProvider
    authClient={keycloak}
    initOptions={{
      checkLoginIframe: true,
      onLoad: 'check-sso',
    }}
  >
    <StrictMode>
      <App />
    </StrictMode>
  </ReactKeycloakProvider>
);
