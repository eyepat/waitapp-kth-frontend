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

  useEffect(() => {
    const api = new Api({
      baseUrl: import.meta.env.VITE_API_BASE_URL,
      securityWorker: (_) => {
        if (!token) {
          console.error('Token is missing in securityWorker');
          return undefined;
        }
        console.log('token in securityworker: ', token);
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
      value={{ api, setApi, apiToken: token, setApiToken: setToken }}
    >
      {children}
    </BaseAPIContext.Provider>
  );
};
