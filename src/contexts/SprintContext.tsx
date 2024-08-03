import { createContext, useContext } from 'react';
import { useSnackbar } from 'notistack';
import { useLoading } from './LoadContext';
import { createSprintAndReturnUser } from '../api/sprint';
import { useAuth } from './AuthContext';

interface SprintContextType {
  sprint?: Sprint;
  createSprint: (sprint: Sprint) => Promise<UserWithToken | undefined>;
}

const SprintContext = createContext<SprintContextType | undefined>(undefined);

export const useSprintContext = () => {
  const context = useContext(SprintContext);
  if (!context) {
    throw new Error('useSprintContext must be used within a SprintProvider');
  }
  return context;
};

export const SprintProvider = ({ children }: { children: React.ReactNode }) => {
  const { loading, setLoading } = useLoading();
  const { enqueueSnackbar } = useSnackbar();
  const { token, updateUser } = useAuth();

  const createSprint = async (sprint: Sprint) => {
    if (loading || sprint?.userID == undefined || token == undefined) return;
    try {
      setLoading(true);
      const user: User = await createSprintAndReturnUser(sprint, token);
      const userWithToken: UserWithToken | undefined = await updateUser(user);
      return userWithToken;
    } catch (error) {
      if (error instanceof Error)
        enqueueSnackbar(error.message, {
          variant: 'error',
        });
    } finally {
      setLoading(false);
    }
  };

  const value: SprintContextType = {
    createSprint: createSprint,
  };

  return (
    <SprintContext.Provider value={value}>{children}</SprintContext.Provider>
  );
};
