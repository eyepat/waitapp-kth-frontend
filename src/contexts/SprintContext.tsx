import { createContext, useContext, useState, useEffect } from 'react';
import { useSnackbar } from 'notistack';
import { useLoading } from './LoadContext';
import { createNewSprint, putSprint, getSprint } from '../api/sprint';
import { useAuth } from './AuthContext';

interface SprintContextType {
  sprint?: Sprint;
  createSprintAndUpdateUser: (sprint: Sprint) => void;
  updateSprint: (sprint: Sprint) => void;
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
  const [currentSprint, setCurrentSprint] = useState<Sprint | undefined>(undefined);
  const { loading, setLoading } = useLoading();
  const { enqueueSnackbar } = useSnackbar();
  const { user, token } = useAuth();

  useEffect(() => {
    if (user?.currentSprintID) {
      getSprint(user.currentSprintID).then((sprint) => {
        setCurrentSprint(sprint);
      });
    }
  }, [user]);

  const createSprintAndUpdateUser = async (sprint: Sprint) => {
    if (loading || sprint?.userID == undefined || token == undefined) return;
    try {
      setLoading(true);
      const newSprint: Sprint = await createNewSprint(sprint, token);
      setCurrentSprint(newSprint);
      if (user) {
        user.currentSprintID = newSprint.ID;
      }
    } catch (error) {
      if (error instanceof Error)
        enqueueSnackbar(error.message, {
          variant: 'error',
        });
    } finally {
      setLoading(false);
    }
  };

  const updateSprintFunc = async (sprint: Sprint) => {
    if (loading || sprint?.userID == undefined) return;
    try {
      setLoading(true);
      const newSprint: Sprint = await putSprint(sprint);
      setCurrentSprint(newSprint);
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
    sprint: currentSprint,
    updateSprint: updateSprintFunc,
    createSprintAndUpdateUser: createSprintAndUpdateUser,
  };

  return (
    <SprintContext.Provider value={value}>{children}</SprintContext.Provider>
  );
};
