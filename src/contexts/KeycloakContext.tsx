import { ReactKeycloakProvider } from '@react-keycloak/web';
import Keycloak from 'keycloak-js';

import {
  AuthClientEvent,
  AuthClientError,
} from '@react-keycloak/core/lib/types';
import { createContext, useContext, useState } from 'react';

type AuthContextWrapperType = {
  events: AuthClientEvent[];
  error?: AuthClientError;
};

const initialState: AuthContextWrapperType = {
  events: [],
};

export const AuthContextWrapper = createContext(initialState);

export const useKeycloakStatus = () => {
  const context = useContext(AuthContextWrapper);
  if (!context) {
    throw new Error(
      'useKeycloakStatus must be used within a AuthContextWrapperProvider'
    );
  }
  return context;
};

export const AuthContextWrapperProvider = ({
  initOptions,
  authClient,
  children,
}: {
  initOptions?: { [paramName: string]: any } | undefined;
  authClient: Keycloak;
  children: React.ReactNode;
}) => {
  const [events, setEvents] = useState<AuthClientEvent[]>([]);
  const [error, setError] = useState<AuthClientError | undefined>(undefined);

  const handleEvent = (
    event: AuthClientEvent,
    error: AuthClientError | undefined
  ) => {
    setEvents([...events, event]);
    if (error) {
      setError(error);
      console.log(error);
    }
  };
  return (
    <AuthContextWrapper.Provider value={{ events, error }}>
      <ReactKeycloakProvider
        authClient={authClient}
        onEvent={handleEvent}
        initOptions={initOptions}
      >
        {children}
      </ReactKeycloakProvider>
    </AuthContextWrapper.Provider>
  );
};
