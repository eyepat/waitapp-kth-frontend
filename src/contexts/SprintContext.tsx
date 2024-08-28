import { createContext, useContext, useState, useEffect } from 'react';
import { useSnackbar } from 'notistack';
import { useLoading } from './LoadContext';
import {
  createNewSprint,
  putSprint,
  getSprint,
  getAllSprintsByUserID,
} from '../api/sprint';
import { useAuth } from './AuthContext';
import { AuthenticationLevels } from '../Pages';
import { useLanguage } from './LanguageContext';
import dayjs from 'dayjs';

interface SprintContextType {
  sprint?: Sprint;
  sprints?: Sprint[];
  createSprintAndUpdateUser: (sprint: Sprint) => void;
  updateSprint: (sprint: Sprint) => void;
  completeSprint: () => void;
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
  const [currentSprint, setCurrentSprint] = useState<Sprint | undefined>(
    undefined
  );
  const [sprints, setSprints] = useState<Sprint[] | undefined>(undefined);
  const { loading, setLoading } = useLoading();
  const { enqueueSnackbar } = useSnackbar();
  const { user, token } = useAuth();
  const { t } = useLanguage();

  useEffect(() => {
    if (
      token != undefined &&
      user?.authLevel != undefined &&
      user?.authLevel >= AuthenticationLevels.LOGGED_IN &&
      user?.id != undefined
    ) {
      getSprint({ token, active: true })
        .then((sprint) => {
          setCurrentSprint(sprint);
        })
        .catch((_) => {});
      getAllSprintsByUserID(user.id).then((sprints) => {
        setSprints(sprints);
      });
    }
  }, [user, token]);

  const createSprintAndUpdateUser = async (sprint: Sprint) => {
    if (loading || sprint?.userID == undefined || token == undefined) return;
    try {
      setLoading(true);
      const newSprint: Sprint = await createNewSprint(sprint, token);
      setCurrentSprint(newSprint);

      enqueueSnackbar(t('success-post'), {
        variant: 'success',
      });
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
      const newSprint: Sprint = await putSprint(sprint, token ?? '');
      setCurrentSprint(newSprint);

      enqueueSnackbar(t('success-put'), {
        variant: 'success',
      });
    } catch (error) {
      if (error instanceof Error)
        enqueueSnackbar(error.message, {
          variant: 'error',
        });
    } finally {
      setLoading(false);
    }
  };

  const completeSprintFunc = async () => {
    if (loading || currentSprint?.userID == undefined) return;
    try {
      setLoading(true);
      const newSprint: Sprint = {
        ...currentSprint,
        completed: true,
        endDate: dayjs().toISOString(),
      };
      await putSprint(newSprint, token ?? '');
      setCurrentSprint(undefined);

      enqueueSnackbar(t('success-completed-sprint'), {
        variant: 'success',
      });
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
    sprints: sprints,
    updateSprint: updateSprintFunc,
    createSprintAndUpdateUser: createSprintAndUpdateUser,
    completeSprint: completeSprintFunc,
  };

  return (
    <SprintContext.Provider value={value}>{children}</SprintContext.Provider>
  );
};
