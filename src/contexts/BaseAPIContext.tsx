import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import { Api } from '../api/BaseClient';
import { useKeycloak } from '@react-keycloak/web';

interface BaseAPIContextType {
  api: Api<any> | null;
  setApi: React.Dispatch<React.SetStateAction<Api<any> | null>>;
  apiToken: string | undefined;
  setApiToken: React.Dispatch<React.SetStateAction<string | undefined>>;
  backendUp: boolean | undefined;
  handleBackendHealthCheckRetry: () => void;
}

const BaseAPIContext = createContext<BaseAPIContextType | undefined>(undefined);

export const useBaseAPIContext = (): BaseAPIContextType => {
  const context = useContext(BaseAPIContext);
  if (!context) {
    throw new Error(
      'useBaseAPIContext must be used within a BaseAPIContextProvider'
    );
  }
  return context;
};

interface BaseAPIContextProviderProps {
  children: ReactNode;
}

export const BaseAPIContextProvider: React.FC<BaseAPIContextProviderProps> = ({
  children,
}) => {
  const [api, setApi] = useState<Api<any> | null>(null);
  const [token, setToken] = useState<string | undefined>(undefined);
  const { keycloak, initialized } = useKeycloak();
  const [backendUp, setBackendUp] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    if (!api) return;
    if (backendUp) return;

    const checkHealth = () => {
      api.healthz
        .healthzList()
        .then((e) => {
          setBackendUp(e.ok);
        })
        .catch(() => {
          setBackendUp(false);
        });
    };

    checkHealth(); // Initial check

    const interval = setInterval(checkHealth, 5000); // Run every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [api]);

  const handleBackendHealthCheckRetry = () => {
    setBackendUp(undefined); // Show loading state
    api?.healthz
      .healthzList()
      .then((e) => setBackendUp(e.ok))
      .catch(() => setBackendUp(false));
  };

  useEffect(() => {
    const api = new Api({
      baseUrl: import.meta.env.VITE_API_BASE_URL,
      securityWorker: (_) => {
        if (!token) {
          console.error('Token is missing in securityWorker');
          return undefined;
        }
        //console.log('token in securityworker: ', token);
        return {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    });
    setApi(api);
  }, [token]);

  useEffect(() => {
    if (initialized) setToken(keycloak.token);
  }, [keycloak.token, initialized]);

  return (
    <BaseAPIContext.Provider
      value={{
        api,
        setApi,
        apiToken: token,
        setApiToken: setToken,
        backendUp,
        handleBackendHealthCheckRetry,
      }}
    >
      {children}
    </BaseAPIContext.Provider>
  );
};
