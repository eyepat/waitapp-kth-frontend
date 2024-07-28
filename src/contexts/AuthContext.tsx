import React, { useEffect, useState } from 'react';
import { createContext, useContext } from 'react';
import { useCookies } from 'react-cookie';
import { login, loginWithToken } from '../api/login';
import { enqueueSnackbar } from 'notistack';
import { register, registerInfo } from '../api/register';
import { useLoading } from './LoadContext';
import { putUser } from '../api/user';

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

  const loginFunc = async (username: string, password: string) => {
    if (loading) return;
    try {
      setLoading(true);
      const user: UserWithToken = await login({ username, password });

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

  const updateUserFunc = async (updatedUser: User) => {
    if (loading) return;
    try {
      setLoading(true);
      updatedUser.userIdPk = user?.userIdPk;
      const updatedUserData: UserWithToken = await putUser(updatedUser);
      setUser(updatedUserData);
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
    if (user != undefined) {
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
