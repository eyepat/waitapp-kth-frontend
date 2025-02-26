import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';
import { useBaseAPIContext } from './BaseAPIContext';
import {
  OnboardingDTO,
  SprintDTO,
  UserDTO,
  BloodPressureDTO,
} from '../api/BaseClient';

interface ResourceContextType {
  ready: boolean;
  self: UserDTO | undefined;
  clearSelf: () => void;
  getSelf: () => Promise<UserDTO | undefined>;
  onboard: (onboarding: OnboardingDTO) => Promise<UserDTO | undefined>;
  getSprints: () => Promise<SprintDTO[]>;
  getLatestSprint: () => Promise<SprintDTO | undefined>;
  getLatestActiveSprint: () => Promise<SprintDTO | undefined>;
  createSprint: (newSprint: SprintDTO) => Promise<SprintDTO | undefined>;
  updateSprint: (
    id: number,
    updatedSprint: SprintDTO
  ) => Promise<SprintDTO | undefined>;
  deleteSprint: (id: number) => Promise<boolean>;
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

    const resp = await api.user.selfList();
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
  };

  const onboard = async (
    onboarding: OnboardingDTO
  ): Promise<UserDTO | undefined> => {
    if (!api) {
      throw new Error('API client is unavailable');
    }

    const resp = await api.user.onboardingCreate(onboarding);
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
  };

  const getSprints = async (): Promise<SprintDTO[]> => {
    const cached = sprintCache.get('__self__');
    if (cached && cached.expiry > new Date()) {
      return cached.data;
    }

    if (!api) {
      throw new Error('API client is unavailable');
    }

    const resp = await api.sprint.sprintList();
    const sprints = (await resp.json()) as SprintDTO[];
    const expiry = new Date();
    expiry.setMinutes(expiry.getMinutes() + 10); // Cache for 10 minutes

    setSprintCache((prev) => {
      const updated = new Map(prev);
      updated.set('__self__', { data: sprints, expiry });
      return updated;
    });

    return sprints;
  };

  const getLatestSprint = async (): Promise<SprintDTO | undefined> => {
    const cached = sprintCache.get('__latest__');
    if (cached && cached.expiry > new Date() && cached.data.length === 1) {
      return cached.data[0];
    }

    if (!api) {
      throw new Error('API client is unavailable');
    }

    const resp = await api.sprint.latestList();
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
  };

  const getLatestActiveSprint = async (): Promise<SprintDTO | undefined> => {
    const cached = sprintCache.get('__latest+active__');
    if (cached && cached.expiry > new Date() && cached.data.length === 1) {
      return cached.data[0];
    }

    if (!api) {
      throw new Error('API client is unavailable');
    }

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
  };

  const createSprint = async (
    newSprint: SprintDTO
  ): Promise<SprintDTO | undefined> => {
    if (!api) {
      throw new Error('API client is unavailable');
    }

    const resp = await api.sprint.sprintCreate(newSprint);
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
  };

  const updateSprint = async (
    id: number,
    updatedSprint: SprintDTO
  ): Promise<SprintDTO | undefined> => {
    if (!api) {
      throw new Error('API client is unavailable');
    }

    const resp = await api.sprint.sprintUpdate(id, updatedSprint);
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
  };

  const deleteSprint = async (id: number): Promise<boolean> => {
    if (!api) {
      throw new Error('API client is unavailable');
    }

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
  };

  // @ts-ignore temp unused
  const addBloodPressure = async (value: BloodPressureDTO) => {
    if (!api) {
      throw new Error('API client is unavailable');
    }

    const resp = await api.metrics.bloodpressureCreate(value);
    if (resp.status !== 201) {
      throw new Error('Failed to create bloodpressure');
    }
  };

  // @ts-ignore temp unused
  const getBloodPressurePaginated = async (query: {
    page?: number;
    search?: string;
    size?: number;
  }) => {
    if (!api) {
      throw new Error('API client is unavailable');
    }

    const resp = await api.metrics.bloodpressurePaginatedList(query);
    if (resp.status !== 200) {
      throw new Error('Failed to get bloodpressure');
    }
    return await resp.json(); // Todo check type
  };

  // @ts-ignore temp unused
  const getBloodPressure = async () => {
    if (!api) {
      throw new Error('API client is unavailable');
    }

    const resp = await api.metrics.bloodpressureList();
    if (resp.status !== 200) {
      throw new Error('Failed to get bloodpressure');
    }
    return await resp.json();
  };

  // @ts-ignore temp unused
  const getLatestBloodPressure = async () => {
    if (!api) {
      throw new Error('API client is unavailable');
    }

    const resp = await api.metrics.bloodpressureLatestList();
    if (resp.status !== 200) {
      throw new Error('Failed to get latest bloodpressure');
    }
    return await resp.json();
  };

  return (
    <ResourceContext.Provider
      value={{
        ready,
        self,
        clearSelf: () => setSelf(undefined),
        getSelf,
        onboard,
        getSprints,
        getLatestSprint,
        getLatestActiveSprint,
        createSprint,
        updateSprint,
        deleteSprint,
      }}
    >
      {children}
    </ResourceContext.Provider>
  );
};
