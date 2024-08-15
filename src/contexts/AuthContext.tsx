import React, { useEffect, useState } from 'react';
import { createContext, useContext } from 'react';
import { useCookies } from 'react-cookie';
import { login, loginWithToken } from '../api/login';
import { enqueueSnackbar } from 'notistack';
import { register, registerInfo } from '../api/register';
import { useLoading } from './LoadContext';
import { putUser } from '../api/user';
import { RegisterInfo } from '../types/registerInfo';

interface AuthContextType {
  token?: string;
  user?: UserWithToken;
  login: (
    email: string,
    password: string
  ) => Promise<UserWithToken | undefined>;
  logout: () => void;
  register: (userToRegister: User) => Promise<UserWithToken | undefined>;
  registerInfo: (
    userToRegister: RegisterInfo
  ) => Promise<UserWithToken | undefined>;
  updateUser: (updatedUser: User) => Promise<UserWithToken | undefined>;
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
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const [token, setToken] = useState<string | undefined>(
    () => cookies.token || undefined
  );

  const { loading, setLoading } = useLoading();
  const [user, setUser] = useState<UserWithToken | undefined>(undefined);

  const logoutFunc = () => {
    setUser(undefined);
    setToken(undefined);
    removeCookie('token', { path: '/' });
  };

  const loginFunc = async (email: string, password: string) => {
    if (loading) return;
    try {
      setLoading(true);
      const user: UserWithToken = await login({ email, password });

      setToken(user.token);
      setUser(user);
      return user;
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

  const loginWithTokenFunc = async (tokenToUse: string) => {
    if (loading) return;
    try {
      setLoading(true);
      const user: UserWithToken = await loginWithToken({ token: tokenToUse });

      setToken(user.token);
      setUser(user);

      return user;
    } catch (error) {
      if (error instanceof Error) {
        enqueueSnackbar(error.message, {
          variant: 'error',
        });
        if (error?.message === 'invalid-token') {
          logoutFunc();
        }
      }
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
      if (error instanceof Error) {
        enqueueSnackbar(error.message, {
          variant: 'error',
        });
        if (error?.message === 'invalid-token') {
          logoutFunc();
        }
      }
    } finally {
      setLoading(false);
    }
  };

  const registerInfoFunc = async (userToRegister: RegisterInfo) => {
    if (loading || user?.id == undefined || token == undefined) return;
    try {
      setLoading(true);
      const registeredUser: UserWithToken = await registerInfo(
        user?.id,
        userToRegister,
        token
      );
      setUser(registeredUser);

      enqueueSnackbar('success-register', {
        variant: 'success',
      });
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

  const updateUserFunc = async (updatedUser: User) => {
    if (loading) return;
    if (token == undefined) {
      enqueueSnackbar('no-token', {
        variant: 'error',
      });
    }
    try {
      setLoading(true);
      updatedUser.id = user?.id;
      const updatedUserData: UserWithToken = await putUser(updatedUser, token);
      setUser(updatedUserData);

      enqueueSnackbar('success-put', {
        variant: 'success',
      });

      return updatedUserData;
    } catch (error) {
      if (error instanceof Error) {
        enqueueSnackbar(error.message, {
          variant: 'error',
        });
        if (error?.message === 'invalid-token') {
          logoutFunc();
        }
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user != undefined && token != user?.token) {
      setToken(user?.token);
    }
  }, [user]);

  useEffect(() => {
    if (token == '0') {
      setToken(undefined);
    } else if (cookies.token !== token && token != undefined) {
      setCookie('token', token);
    } else if (user == undefined && token != undefined) {
      loginWithTokenFunc(token);
    }
  }, [token]);

  const value: AuthContextType = {
    token: token,
    user: user,
    login: loginFunc,
    logout: logoutFunc,
    register: registerFunc,
    registerInfo: registerInfoFunc,
    updateUser: updateUserFunc,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
