import React, { useEffect, useState } from 'react';
import { createContext, useContext } from 'react';
import { useCookies } from 'react-cookie';
import { login } from '../api/login';
import { enqueueSnackbar } from 'notistack';

interface AuthContextType {
  authLevel: number;
  setAuth: (auth: number) => void;
  user?: UserWithToken;
  login: (
    username: string,
    password: string
  ) => Promise<UserWithToken | undefined>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [cookies, setCookie] = useCookies(['auth']); // Todo: Use tokens with something like keycloak later
  const [authLevel, setAuthlevel] = useState<number>(() => cookies.auth || 0);
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<UserWithToken | undefined>(undefined);

  const loginFunc = async (username: string, password: string) => {
    if (loading) return;
    try {
      setLoading(true);
      const user: UserWithToken = await login({ username, password });
      if (user.authLevel) {
        setAuthlevel(user.authLevel);
      }
      setUser(user);
      return user;
    } catch (error) {
      if (error instanceof Error)
        enqueueSnackbar(error.message, {
          variant: 'error',
        });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (cookies.auth !== authLevel) {
      setCookie('auth', authLevel);
    }
  }, [authLevel]);

  const value: AuthContextType = {
    authLevel,
    setAuth: setAuthlevel,
    user: user,
    login: loginFunc,
    logout: () => {
      setAuthlevel(0);
    },
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
