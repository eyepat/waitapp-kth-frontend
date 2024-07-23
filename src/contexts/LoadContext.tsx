import { keyframes } from '@emotion/react';
import { styled } from '@mui/system';
import React, { SetStateAction, useState } from 'react';
import { createContext, useContext } from 'react';

interface LoadingContextType {
  loading: boolean;
  setLoading: React.Dispatch<SetStateAction<boolean>>;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};

export const LoadingProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [loading, setLoading] = useState<boolean>(false);

  const value: LoadingContextType = {
    loading,
    setLoading,
  };

  const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  `;

  const LoaderContainer = styled('div')({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 999,
  });

  const Spinner = styled('div')({
    border: '16px solid #f3f3f3',
    borderTop: '16px solid #3498db',
    borderRadius: '50%',
    width: '120px',
    height: '120px',
    animation: `${spin} 2s linear infinite`,
  });

  const Loader = () => {
    return (
      <LoaderContainer>
        <Spinner />
      </LoaderContainer>
    );
  };

  return (
    <LoadingContext.Provider value={value}>
      <>
        {loading && <Loader />}
        {children}
      </>
    </LoadingContext.Provider>
  );
};
