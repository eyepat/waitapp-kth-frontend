import { useMediaQuery } from '@mui/material';
import { createContext, useContext } from 'react';

interface DeviceContextType {
  isOnDesktop: boolean;
}

const DeviceContext = createContext<DeviceContextType | undefined>(undefined);

export const useDevice = () => {
  const context = useContext(DeviceContext);
  if (!context) {
    throw new Error('useContext must be used within a DeviceProvider');
  }
  return context;
};

export const DeviceContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const isOnDesktop = useMediaQuery('(min-width:960px)');

  return (
    <DeviceContext.Provider value={{ isOnDesktop }}>
      {children}
    </DeviceContext.Provider>
  );
};
