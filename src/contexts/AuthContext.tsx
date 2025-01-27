import React, { useEffect, useState } from 'react';
import { createContext, useContext } from 'react';
import { enqueueSnackbar } from 'notistack';
import { useLoading } from './LoadContext';
import { useKeycloak } from '@react-keycloak/web';
import { useResource } from './ResourceContext';
import { OnboardingDTO, UserDTO } from '../api/BaseClient';
import { AuthenticationLevels } from '../Pages';

interface AuthContextType {
  authLevel: AuthenticationLevels;
  user?: UserDTO;
  logout: () => void;
  onboarding: (onboarding: OnboardingDTO) => Promise<UserDTO | undefined>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { keycloak, initialized } = useKeycloak();
  const { loading, setLoading } = useLoading();
  const { ready, getSelf, onboard, self, clearSelf } = useResource();
  const [authLevel, setAuthLevel] = useState<AuthenticationLevels>(
    AuthenticationLevels.NOT_LOGGED_IN
  );

  const logoutFunc = () => {
    clearSelf();
    keycloak?.logout();
  };

  const onboarding = async (onboarding: OnboardingDTO) => {
    if (loading) return;
    try {
      setLoading(true);

      const onboardedUser = await onboard(onboarding);

      enqueueSnackbar('Success: Registered!', {
        variant: 'success',
      });
      return onboardedUser;
    } catch (error) {
      if (error instanceof Error) {
        enqueueSnackbar(error.message, {
          variant: 'error',
        });
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (initialized && keycloak.authenticated && self === undefined && ready) {
      getSelf()
        .then((e) => {
          if (e === undefined) {
            setAuthLevel(AuthenticationLevels.NO_DATA_PROVIDED);
          } else {
            setAuthLevel(
              e.onboarded === true
                ? AuthenticationLevels.LOGGED_IN
                : AuthenticationLevels.NO_DATA_PROVIDED
            );
          }
        })
        .catch(() => {
          setAuthLevel(AuthenticationLevels.NO_DATA_PROVIDED);
        });
    }
  }, [keycloak, initialized, ready]);

  useEffect(() => {
    if (self) {
      if (self.onboarded) {
        setAuthLevel(AuthenticationLevels.LOGGED_IN);
      } else {
        setAuthLevel(AuthenticationLevels.NO_DATA_PROVIDED);
      }
    } else if (keycloak.authenticated) {
      setAuthLevel(AuthenticationLevels.NO_DATA_PROVIDED);
    } else {
      setAuthLevel(AuthenticationLevels.NOT_LOGGED_IN);
    }
  }, [self]);

  const value: AuthContextType = {
    authLevel,
    user: self,
    logout: logoutFunc,
    onboarding,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
