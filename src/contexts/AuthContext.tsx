import React, { useEffect, useState } from 'react';
import { createContext, useContext } from 'react';
import { useCookies } from 'react-cookie';

interface AuthContextType {
  authLevel: number;
  setAuth: (auth: number) => void;
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

  useEffect(() => {
    if (cookies.auth !== authLevel) {
      setCookie('auth', authLevel);
    }
  }, [authLevel]);

  const value: AuthContextType = {
    authLevel,
    setAuth: setAuthlevel,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
