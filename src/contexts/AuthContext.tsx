import React, { useState } from 'react';
import { createContext, useContext } from 'react';

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
  const [authLevel, setAuthlevel] = useState<number>(0);

  const value: AuthContextType = {
    authLevel,
    setAuth: setAuthlevel,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
