import { useMediaQuery } from '@mui/material';
import { createContext, useContext, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

type ThemeContextType = {
  theme: string;
  setTheme: (theme: string) => void;
  toggleTheme: () => void;
};

const initialState: ThemeContextType = {
  theme: 'light',
  setTheme: () => {},
  toggleTheme: () => {},
};

export const ThemeContext = createContext(initialState);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [cookies, setCookie] = useCookies();

  const initial = useMediaQuery('(prefers-color-scheme: dark)')
    ? 'dark'
    : 'light';

  const [theme, setTheme] = useState(initial);

  const toggleTheme = () => {
    setTheme((prevtheme) => (prevtheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    setCookie('theme', theme);
  }, [theme]);

  useEffect(() => {
    if (cookies.theme) {
      setTheme(cookies.theme);
    }
  });

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
