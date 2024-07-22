import React, { useEffect, useState } from 'react';
import { createContext, useContext } from 'react';
import { useCookies } from 'react-cookie';
import { login, loginWithToken } from '../api/login';
import { enqueueSnackbar } from 'notistack';
import { register, registerInfo } from '../api/register';

interface AuthContextType {
  token?: string;
  user?: UserWithToken;
  login: (
    username: string,
    password: string
  ) => Promise<UserWithToken | undefined>;
  logout: () => void;
  register: (userToRegister: User) => Promise<UserWithToken | undefined>;
  registerInfo: (userToRegister: User) => Promise<UserWithToken | undefined>;
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
  const [cookies, setCookie] = useCookies(['token']); // Todo: Use tokens with something like keycloak later
  const [token, setToken] = useState<string | undefined>(
    () => cookies.token || 0
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<UserWithToken | undefined>(undefined);

  const loginFunc = async (username: string, password: string) => {
    if (loading) return;
    try {
      setLoading(true);
      const user: UserWithToken = await login({ username, password });

      setToken(user.token);
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

  const loginWithTokenFunc = async (tokenToUse: string) => {
    if (loading) return;
    try {
      setLoading(true);
      const user: UserWithToken = await loginWithToken({ token: tokenToUse });

      setToken(user.token);
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

  const registerFunc = async (userToRegister: User) => {
    if (loading) return;
    try {
      setLoading(true);
      const registeredUser: UserWithToken = await register(userToRegister);
      setUser(registeredUser);
      return registeredUser;
    } catch (error) {
      if (error instanceof Error)
        enqueueSnackbar(error.message, {
          variant: 'error',
        });
    } finally {
      setLoading(false);
    }
  };

  const registerInfoFunc = async (userToRegister: User) => {
    if (loading || user?.user_id == undefined || token == undefined) return;
    try {
      setLoading(true);
      const registeredUser: UserWithToken = await registerInfo(
        user?.user_id,
        userToRegister,
        token
      );
      setUser(registeredUser);
      return registeredUser;
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
    if (user != undefined) {
      setToken(user?.token);
    }
  }, [user]);

  useEffect(() => {
    if (cookies.token !== token && token != undefined) {
      setCookie('token', token);
    } else if (user == undefined && token != undefined) {
      loginWithTokenFunc(token);
    }
  }, [token]);

  const value: AuthContextType = {
    token: token,
    user: user,
    login: loginFunc,
    logout: () => {
      setUser(undefined);
    },
    register: registerFunc,
    registerInfo: registerInfoFunc,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
