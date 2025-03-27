import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';
import { useBaseAPIContext } from './BaseAPIContext';
import {
  ErrorResponse,
  OnboardingDTO,
  SprintDTO,
  UserDTO,
} from '../api/BaseClient';

interface ResourceContextType {
  ready: boolean;
  self: UserDTO | undefined;
  clearSelf: () => void;
  getSelf: () => Promise<UserDTO | undefined>;
  onboard: (onboarding: OnboardingDTO) => Promise<UserDTO | undefined>;
  updateUser: (user: UserDTO) => Promise<UserDTO | undefined>;
  getSprints: () => Promise<SprintDTO[] | undefined>;
  getLatestSprint: () => Promise<SprintDTO | undefined>;
  getLatestActiveSprint: () => Promise<SprintDTO | undefined>;
  createSprint: (newSprint: SprintDTO) => Promise<SprintDTO | undefined>;
  updateSprint: (
    id: number,
    updatedSprint: SprintDTO
  ) => Promise<SprintDTO | undefined>;
  stopSprint: (id: number) => Promise<boolean | undefined>;
  completeSprintActivity: (
    id: number,
    parentSprintID: number,
    value?: boolean
  ) => Promise<boolean | undefined>;
  completeSprintActivityWithoutUpdatingCache: (
    id: number,
    value?: boolean
  ) => Promise<boolean | undefined>;
  deleteSprint: (id: number) => Promise<boolean | undefined>;
}

interface Cached<T> {
  data: T;
  expiry: Date;
}

const ResourceContext = createContext<ResourceContextType | undefined>(
  undefined
);

export const useResource = (): ResourceContextType => {
  const context = useContext(ResourceContext);
  if (!context) {
    throw new Error(
      'useResource must be used within a ResourceContextProvider'
    );
  }
  return context;
};

interface ResourceContextProviderProps {
  children: ReactNode;
}

export const ResourceProvider: React.FC<ResourceContextProviderProps> = ({
  children,
}) => {
  const { api, apiToken } = useBaseAPIContext();
  const [ready, setReady] = useState<boolean>(false);
  const [self, setSelf] = useState<UserDTO | undefined>(undefined);
  const [userCache, setUserCache] = useState<Map<string, Cached<UserDTO>>>(
    new Map()
  );
  const [sprintCache, setSprintCache] = useState<
    Map<string, Cached<SprintDTO[]>>
  >(new Map());

  useEffect(() => {
    if (apiToken !== undefined) {
      setReady(true);
    } else if (ready) {
      setReady(false);
    }
  }, [apiToken]);

  const getSelf = async (): Promise<UserDTO | undefined> => {
    const cached = userCache.get('__self__');
    if (cached && cached.expiry > new Date()) {
      return cached.data;
    }

    if (!api) {
      throw new Error('API client is unavailable');
    }
    try {
      const resp = await api.user.selfList();
      if (!resp.ok) {
        const msg = (await resp.json()) as ErrorResponse;
        throw new Error(msg.message || 'Could not get self');
      }
      const user = (await resp.json()) as UserDTO | undefined;

      if (user === undefined) {
        return undefined;
      }

      const expiry = new Date();
      expiry.setMinutes(expiry.getMinutes() + 10); // Cache for 10 minutes

      setSelf(user);
      setUserCache((prev) => {
        const updated = new Map(prev);
        updated.set('__self__', { data: user, expiry });
        return updated;
      });

      return user;
    } catch (error) {
      if (error instanceof Error)
        throw new Error(error.message || 'Could not get self');
    }
  };

  const onboard = async (
    onboarding: OnboardingDTO
  ): Promise<UserDTO | undefined> => {
    if (!api) {
      throw new Error('API client is unavailable');
    }
    try {
      const resp = await api.user.onboardingCreate(onboarding);
      if (!resp.ok) {
        const msg = (await resp.json()) as ErrorResponse;
        throw new Error(msg.message || 'Could not onboard user');
      }
      const user = (await resp.json()) as UserDTO | undefined;

      if (user === undefined) {
        return undefined;
      }

      const expiry = new Date();
      expiry.setMinutes(expiry.getMinutes() + 10); // Cache for 10 minutes

      setSelf(user);
      setUserCache((prev) => {
        const updated = new Map(prev);
        updated.set('__self__', { data: user, expiry });
        return updated;
      });

      return user;
    } catch (error) {
      if (error instanceof Error)
        throw new Error(error.message || 'Could not onboard user');
    }
  };

  const updateUser = async (user: UserDTO): Promise<UserDTO | undefined> => {
    if (!api) {
      throw new Error('API client is unavailable');
    }
    if (!user.id) {
      throw new Error('User ID missing');
    }

    try {
      const resp = await api.user.userUpdate(user.id, user);
      if (!resp.ok) {
        const msg = (await resp.json()) as ErrorResponse;
        throw new Error(msg.message || 'Could not onboard user');
      }
      const user2 = (await resp.json()) as UserDTO | undefined;

      if (user2 === undefined) {
        return undefined;
      }

      const expiry = new Date();
      expiry.setMinutes(expiry.getMinutes() + 10); // Cache for 10 minutes

      setSelf(user2);
      setUserCache((prev) => {
        const updated = new Map(prev);
        updated.set('__self__', { data: user2, expiry });
        return updated;
      });

      return user2;
    } catch (error) {
      if (error instanceof Error)
        throw new Error(error.message || 'Could not update user');
    }

    return user;
  };

  const getSprints = async (): Promise<SprintDTO[] | undefined> => {
    const cached = sprintCache.get('__self__');
    if (cached && cached.expiry > new Date()) {
      return cached.data;
    }

    if (!api) {
      throw new Error('API client is unavailable');
    }
    try {
      const resp = await api.sprint.sprintList();
      if (!resp.ok) {
        const msg = (await resp.json()) as ErrorResponse;
        throw new Error(msg.message || 'Could not get sprints');
      }
      const sprints = (await resp.json()) as SprintDTO[];
      const expiry = new Date();
      expiry.setMinutes(expiry.getMinutes() + 10); // Cache for 10 minutes

      setSprintCache((prev) => {
        const updated = new Map(prev);
        updated.set('__self__', { data: sprints, expiry });
        return updated;
      });

      return sprints;
    } catch (error) {
      if (error instanceof Error)
        throw new Error(error.message || 'Could not get sprints');
    }
  };

  const getLatestSprint = async (): Promise<SprintDTO | undefined> => {
    const cached = sprintCache.get('__latest__');
    if (cached && cached.expiry > new Date() && cached.data.length === 1) {
      return cached.data[0];
    }

    if (!api) {
      throw new Error('API client is unavailable');
    }
    try {
      const resp = await api.sprint.latestList();
      if (!resp.ok) {
        const msg = (await resp.json()) as ErrorResponse;
        throw new Error(msg.message || 'Could not get latest sprint');
      }
      const latest = (await resp.json()) as SprintDTO | undefined;

      if (latest === undefined) {
        return undefined;
      }

      const expiry = new Date();
      expiry.setMinutes(expiry.getMinutes() + 1); // Cache for 1 minute

      setSprintCache((prev) => {
        const updated = new Map(prev);
        updated.set('__latest__', { data: [latest], expiry });
        return updated;
      });

      return latest;
    } catch (error) {
      if (error instanceof Error)
        throw new Error(error.message || 'Could not get latest sprint');
    }
  };

  const getLatestActiveSprint = async (): Promise<SprintDTO | undefined> => {
    const cached = sprintCache.get('__latest+active__');
    if (cached && cached.expiry > new Date() && cached.data.length === 1) {
      return cached.data[0];
    }

    if (!api) {
      throw new Error('API client is unavailable');
    }
    try {
      const resp = await api.sprint.latestList({ active: true });
      const latest = (await resp.json()) as SprintDTO | undefined;

      if (latest === undefined) {
        return undefined;
      }

      const expiry = new Date();
      expiry.setMinutes(expiry.getMinutes() + 1); // Cache for 1 minute

      setSprintCache((prev) => {
        const updated = new Map(prev);
        updated.set('__latest+active__', { data: [latest], expiry });
        return updated;
      });

      return latest;
    } catch (error) {
      if (error instanceof Error)
        throw new Error(error.message || 'Could not get latest active sprint');
    }
  };

  const createSprint = async (
    newSprint: SprintDTO
  ): Promise<SprintDTO | undefined> => {
    if (!api) {
      throw new Error('API client is unavailable');
    }
    try {
      const resp = await api.sprint.sprintCreate(newSprint);
      if (!resp.ok) {
        const msg = (await resp.json()) as ErrorResponse;
        throw new Error(msg.message || 'Could not create sprint');
      }
      const addedSprint = (await resp.json()) as SprintDTO;

      setSprintCache((prev) => {
        const updatedCache = new Map(prev);
        const sprints = updatedCache.get('__self__')?.data ?? [];
        updatedCache.set('__self__', {
          data: [...sprints, addedSprint],
          expiry: new Date(Date.now() + 10 * 60000), // Cache for 10 minutes
        });

        return updatedCache;
      });

      return addedSprint;
    } catch (error) {
      if (error instanceof Error)
        throw new Error(error.message || 'Could not create sprint');
    }
  };

  const updateSprint = async (
    id: number,
    updatedSprint: SprintDTO
  ): Promise<SprintDTO | undefined> => {
    if (!api) {
      throw new Error('API client is unavailable');
    }
    try {
      const resp = await api.sprint.sprintUpdate(id, updatedSprint);
      if (!resp.ok) {
        const msg = (await resp.json()) as ErrorResponse;
        throw new Error(msg.message || 'Could not update sprint');
      }
      const updated = (await resp.json()) as SprintDTO;

      setSprintCache((prev) => {
        const updatedCache = new Map(prev);
        updatedCache.set(id + '', {
          data: [updated],
          expiry: new Date(Date.now() + 10 * 60000),
        }); // Cache for 10 minutes
        return updatedCache;
      });

      return updated;
    } catch (error) {
      if (error instanceof Error)
        throw new Error(error.message || 'Could not update sprint');
    }
  };

  const stopSprint = async (id: number): Promise<boolean | undefined> => {
    if (!api) {
      throw new Error('API client is unavailable');
    }
    try {
      const resp = await api.sprint.stopUpdate(id);
      if (!resp.ok) {
        const msg = (await resp.json()) as ErrorResponse;
        throw new Error(msg.message || 'Could not stop sprint');
      }

      setSprintCache((prev) => {
        const updatedCache = new Map(prev);
        updatedCache.delete(id + '');
        return updatedCache;
      });

      return true;
    } catch (error) {
      if (error instanceof Error)
        throw new Error(error.message || 'Could not stop sprint');
    }
  };

  const completeSprintActivity = async (
    id: number,
    parentSprintID: number,
    value?: boolean
  ): Promise<boolean | undefined> => {
    if (!api) {
      throw new Error('API client is unavailable');
    }
    try {
      const resp = await api.sprintActivity.doneUpdate(id, { value });
      if (!resp.ok) {
        const msg = (await resp.json()) as ErrorResponse;
        throw new Error(msg.message || 'Could not set sprintActivity as done');
      }

      setSprintCache((prev) => {
        const updatedCache = new Map(prev);
        updatedCache.delete(parentSprintID + '');
        return updatedCache;
      });

      return true;
    } catch (error) {
      if (error instanceof Error)
        throw new Error(
          error.message || 'Could not set sprintActivity as done'
        );
    }
  };

  const completeSprintActivityWithoutUpdatingCache = async (
    id: number,
    value?: boolean
  ): Promise<boolean | undefined> => {
    if (!api) {
      throw new Error('API client is unavailable');
    }
    try {
      const resp = await api.sprintActivity.doneUpdate(id, { value });
      if (!resp.ok) {
        const msg = (await resp.json()) as ErrorResponse;
        throw new Error(msg.message || 'Could not set sprintActivity as done');
      }

      return true;
    } catch (error) {
      if (error instanceof Error)
        throw new Error(
          error.message || 'Could not set sprintActivity as done'
        );
    }
  };

  const deleteSprint = async (id: number): Promise<boolean | undefined> => {
    if (!api) {
      throw new Error('API client is unavailable');
    }
    try {
      const resp = await api.sprint.sprintDelete(id);
      if (resp.status !== 204) {
        throw new Error('Failed to delete sprint');
      }

      setSprintCache((prev) => {
        const updatedCache = new Map(prev);

        const latest = prev.get('__latest__')?.data;
        if (latest && latest.length === 1 && latest[0].id === id) {
          updatedCache.delete('__latest__');
        }

        const owned = prev.get('__self__')?.data;
        if (owned) {
          const updatedOwned = owned.filter((sprint) => sprint.id !== id);
          if (updatedOwned.length > 0) {
            updatedCache.set('__self__', {
              data: updatedOwned,
              expiry: new Date(Date.now() + 10 * 60000),
            });
          } else {
            updatedCache.delete('__self__');
          }
        }

        updatedCache.delete(id + '');

        return updatedCache;
      });

      return true;
    } catch (error) {
      if (error instanceof Error)
        throw new Error(error.message || 'Could not delete sprint');
    }
  };

  return (
    <ResourceContext.Provider
      value={{
        ready,
        self,
        clearSelf: () => setSelf(undefined),
        getSelf,
        onboard,
        updateUser,
        getSprints,
        getLatestSprint,
        getLatestActiveSprint,
        createSprint,
        updateSprint,
        stopSprint,
        completeSprintActivity,
        completeSprintActivityWithoutUpdatingCache,
        deleteSprint,
      }}
    >
      {children}
    </ResourceContext.Provider>
  );
};
