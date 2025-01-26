import { createContext, useContext, useState, useEffect } from 'react';
import { useSnackbar } from 'notistack';
import { useLoading } from './LoadContext';
import { useAuth } from './AuthContext';
import { AuthenticationLevels } from '../Pages';
import { useLanguage } from './LanguageContext';
import dayjs from 'dayjs';
import { useResource } from './ResourceContext';
import { SprintDTO } from '../api/BaseClient';

interface SprintContextType {
  sprint?: SprintDTO;
  sprints?: SprintDTO[];
  createSprintAndUpdateUser: (sprint: SprintDTO) => void;
  updateSprint: (sprint: SprintDTO) => void;
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
  const [currentSprint, setCurrentSprint] = useState<SprintDTO | undefined>(
    undefined
  );
  const [sprints, setSprints] = useState<SprintDTO[] | undefined>(undefined);
  const { loading, setLoading } = useLoading();
  const { enqueueSnackbar } = useSnackbar();
  const { authLevel } = useAuth();
  const { t } = useLanguage();
  const {
    ready,
    getLatestActiveSprint,
    getSprints,
    createSprint,
    updateSprint,
  } = useResource();

  useEffect(() => {
    if (authLevel >= AuthenticationLevels.LOGGED_IN && ready) {
      getLatestActiveSprint()
        .then((sprint) => {
          setCurrentSprint(sprint);
        })
        .catch((_) => {});
      getSprints().then((sprints) => {
        setSprints(sprints);
      });
    }
  }, [authLevel, ready]);

  const createSprintAndUpdateUser = async (sprint: SprintDTO) => {
    if (loading || sprint?.userID == undefined) return;
    try {
      setLoading(true);
      const newSprint = await createSprint(sprint);
      if (newSprint !== undefined) {
        setCurrentSprint(newSprint);

        enqueueSnackbar(t('success-post'), {
          variant: 'success',
        });
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

  const updateSprintFunc = async (sprint: SprintDTO) => {
    if ((loading || sprint?.userID == undefined, sprint.id === undefined))
      return;
    try {
      setLoading(true);
      const newSprint = await updateSprint(sprint.id!, sprint);
      if (newSprint !== undefined) {
        setCurrentSprint(newSprint);

        enqueueSnackbar(t('success-put'), {
          variant: 'success',
        });
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

  const completeSprintFunc = async () => {
    if (loading || currentSprint?.userID == undefined) return;
    try {
      setLoading(true);
      const newSprint: SprintDTO = {
        ...currentSprint,
        completed: true,
        endDate: dayjs().toISOString(),
      };
      await updateSprint(newSprint.id!, newSprint);
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
