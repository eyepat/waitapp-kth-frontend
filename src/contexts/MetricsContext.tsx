import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';
import { useBaseAPIContext } from './BaseAPIContext';
import {
  Api,
  BloodPressureDTO,
  ErrorResponse,
  HeightDTO,
  HttpResponse,
  RAPADTO,
  StepsDTO,
  WaistSizeDTO,
  WeightDTO,
} from '../api/BaseClient';
// import { useAuth } from "./AuthContext";
import hash from '../utils/hash';
import { useKeycloak } from '@react-keycloak/web';
import Page from '../types/Page2';

interface MetricsContextType<T, Tpage> {
  loading: boolean;
  isLoaded: boolean;
  resources: T[] | undefined;
  resource: T | undefined;
  searchResult: Map<string, Cached<T[]>>;
  latest: T | undefined;
  getResources: () => Promise<T[]>;
  getResource: (id: number) => Promise<T | undefined>;
  getPage: (
    page: number,
    size?: number,
    query?: string
  ) => Promise<Tpage | undefined>;
  getLatest: () => Promise<T | undefined>;
  searchResources: (params: {
    personnummer?: string;
    patientId?: string;
  }) => Promise<T[] | undefined>;
  createResource: (newResource: T, query?: string) => Promise<T | undefined>;
  dropSearchCache: () => void;
}

interface Cached<T> {
  data: T;
  expiry: Date;
}

function createMetricsContext<T, Tpage>() {
  const Context = createContext<MetricsContextType<T, Tpage> | undefined>(
    undefined
  );

  const useMetricsContext = (): MetricsContextType<T, Tpage> => {
    const context = useContext(Context);
    if (!context) {
      throw new Error(
        'useMetricsContext must be used within a MetricsProvider'
      );
    }
    return context;
  };

  const createMetricsProvider = (apiCall: {
    list: (api: Api<any> | null) => Promise<HttpResponse<T[], any>> | undefined;
    detail: (
      api: Api<any> | null,
      id: number
    ) => Promise<HttpResponse<T, any>> | undefined;
    paginated?: (
      api: Api<any> | null,
      size?: number,
      page?: number,
      query?: string
    ) => Promise<HttpResponse<Tpage, any>> | undefined;
    search?: (
      api: Api<any> | null,
      params: { personnummer?: string; patientId?: string }
    ) => Promise<HttpResponse<T[], any>> | undefined;
    create?: (
      api: Api<any> | null,
      newResource: T,
      query?: string
    ) => Promise<HttpResponse<T, any>> | undefined;
    latest?: (
      api: Api<any> | null
    ) => Promise<HttpResponse<T, any>> | undefined;
  }) => {
    return function MetricsProvider({ children }: { children: ReactNode }) {
      const { api, apiToken } = useBaseAPIContext();
      const [latest, setLatest] = useState<T | undefined>(undefined);
      const [resources, setResources] = useState<T[] | undefined>(undefined);
      const [resource, setResource] = useState<T | undefined>(undefined);
      const [isLoaded, setIsLoaded] = useState<boolean>(false);
      const [fetchingResources, setFetchingResources] = useState<
        Promise<T[]> | undefined
      >(undefined);
      const [loading, setLoading] = useState<boolean>(false);
      const [pages, setPages] = useState<Map<string, Cached<Tpage>>>(new Map());
      const [searchResult, setSearchResult] = useState<
        Map<string, Cached<T[]>>
      >(new Map());
      const { keycloak, initialized } = useKeycloak();

      useEffect(() => {
        setIsLoaded(
          initialized &&
            api !== null &&
            apiToken !== undefined &&
            apiToken !== ''
        );
      }, [api, apiToken, initialized]);

      useEffect(() => {
        if (fetchingResources) {
          setLoading(true);
        } else {
          setLoading(false);
        }
      }, [fetchingResources]);

      const dropSearchCache = () => {
        setSearchResult(new Map());
      };

      const searchResources = async (params: {
        personnummer?: string;
        patientId?: string;
      }): Promise<T[] | undefined> => {
        if (!apiCall.search) return;
        try {
          if (!api) throw new Error('API is undefined');
          if (!keycloak.authenticated) throw new Error('Not signed in');
          if (!isLoaded) throw new Error('API not loaded yet');
          if (!apiCall.search) throw new Error('Search method not implemented');
          const query =
            params.personnummer != undefined
              ? params.personnummer
              : params.patientId;
          if (searchResult?.has(query!)) {
            const cachedSR = searchResult.get(query!);
            if (cachedSR?.expiry && cachedSR.expiry > new Date()) {
              console.log('Using cached Search result');
              return cachedSR.data;
            } else {
              searchResult?.delete(query!);
            }
          }

          setLoading(true);
          const response = await apiCall.search(api, params);
          const data = await response?.json();
          setSearchResult(
            searchResult?.set(query!, {
              data,
              expiry: new Date(Date.now() + 1000 * 60), // cache expires in 1m
            })
          );
          setLoading(false);
          return data;
        } catch (error) {
          if (error instanceof Response) {
            if (error.status === 401) {
              keycloak.updateToken();
            }
          }
          console.error('Error searching resources:', error);
          setLoading(false);
          return undefined;
        }
      };

      const getResources = async (): Promise<T[]> => {
        try {
          if (!api) throw new Error('API is undefined');
          if (!keycloak.authenticated) throw new Error('Not signed in');
          if (!isLoaded) throw new Error('API not loaded yet');
          if (fetchingResources) return fetchingResources;

          const fetchPromise = (async () => {
            const response = await apiCall.list(api);
            const data = await response?.json();

            setResources(data);
            return data;
          })();

          setFetchingResources(fetchingResources);
          const data = await fetchPromise;
          setResources(data);
          setFetchingResources(undefined);
          return data;
        } catch (error) {
          if (error instanceof Response) {
            if (error.status === 401) {
              keycloak.updateToken();
            }
          }
          console.error('Error fetching resources:', error);
          return [];
        }
      };

      const getResource = async (id: number): Promise<T | undefined> => {
        try {
          if (!api) throw new Error('API is undefined');
          if (!keycloak.authenticated) throw new Error('Not signed in');
          if (!isLoaded) throw new Error('API not loaded yet');
          const existingResource = resources?.find((res: any) => res.id === id);
          if (!existingResource) {
            const response = await apiCall.detail(api, id);
            const data = await response?.json();

            setResource(data);
            return data;
          } else {
            setResource(existingResource);
            return existingResource;
          }
        } catch (error) {
          if (error instanceof Response) {
            if (error.status === 401) {
              keycloak.updateToken();
            }
          }
          console.error('Error fetching resource:', error);
          return undefined;
        }
      };

      const createResource = async (
        newResource: T,
        query?: string
      ): Promise<T | undefined> => {
        try {
          if (!api) throw new Error('API is undefined');
          if (!keycloak.authenticated) throw new Error('Not signed in');
          if (!isLoaded) throw new Error('API not loaded yet');
          if (!apiCall.create) throw new Error('Create method not implemented');

          const data = await apiCall.create(api, newResource);
          if (!data) return undefined;
          const created = await data?.json();
          if (created) {
            setResources((prevResources) => [
              ...(prevResources ?? []),
              created,
            ]);
            setSearchResult(
              searchResult?.set(query || '__self__', {
                data: [created],
                expiry: new Date(Date.now() + 1000 * 60), // cache expires in 1m
              })
            );
          }
          return created;
        } catch (error) {
          if (error instanceof Response) {
            if (error.status === 401) {
              keycloak.updateToken();
            }
          }
          console.error('Error creating resource:', error);
          return undefined;
        }
      };

      const getPage = async (
        page?: number,
        size?: number,
        query?: string
      ): Promise<Tpage | undefined> => {
        try {
          if (!api) throw new Error('API is undefined');
          if (!keycloak.authenticated) throw new Error('Not signed in');
          if (!isLoaded) throw new Error('API not loaded yet');
          if (!apiCall.paginated)
            throw new Error('no paginated method specified for resource');
          const q = hash(page, size ?? 20, query ?? '');
          if (pages?.has(q)) {
            const cachedPage = pages.get(q);
            if (cachedPage?.expiry && cachedPage.expiry > new Date()) {
              console.log('Using cached page');
              return cachedPage.data;
            } else {
              pages.delete(q);
            }
          }
          const response = await apiCall.paginated(
            api,
            (size ?? 20) >= 0 ? (size ?? 20) : 20,
            page,
            query
          );
          const data = await response?.json();
          setPages(
            pages?.set(q, {
              data,
              expiry: new Date(Date.now() + 1000 * 60), // cache expires in 1m
            })
          );
          return data;
        } catch (error) {
          if (error instanceof Response) {
            if (error.status === 401) {
              keycloak.updateToken();
            }
          }
          console.error('Error fetching resource:', error);
          return undefined;
        }
      };

      const getLatest = async (): Promise<T | undefined> => {
        try {
          if (!api) throw new Error('API is undefined');
          if (!keycloak.authenticated) throw new Error('Not signed in');
          if (!isLoaded) throw new Error('API not loaded yet');
          if (!apiCall.latest)
            throw new Error('no latest method specified for resource');
          if (!latest) {
            const response = await apiCall.latest(api);
            const data = await response?.json();

            setLatest(data);
            return data;
          } else {
            return latest;
          }
        } catch (error) {
          if (error instanceof Response) {
            if (error.status === 401) {
              keycloak.updateToken();
            }
          }
          console.error('Error fetching resource:', error);
          return undefined;
        }
      };

      return (
        <Context.Provider
          value={{
            loading,
            isLoaded,
            resources,
            resource,
            searchResult,
            latest,
            getResources,
            getResource,
            getPage,
            getLatest,
            searchResources,
            createResource,
            dropSearchCache,
          }}
        >
          {children}
        </Context.Provider>
      );
    };
  };

  return { Context, useMetricsContext, createMetricsProvider };
}

/** IMPLS */

const BloodPressure = createMetricsContext<
  BloodPressureDTO,
  Page<BloodPressureDTO>
>();
export const BloodPressureProvider = BloodPressure.createMetricsProvider({
  list: (api) =>
    api?.metrics.bloodpressureList() as Promise<
      HttpResponse<BloodPressureDTO[], ErrorResponse>
    >,
  detail: (api, id: number) =>
    api?.metrics.bloodpressureByIdDetail(id) as Promise<
      HttpResponse<BloodPressureDTO, ErrorResponse>
    >,
  paginated: (api, size?: number, page?: number, search?: string) =>
    // @ts-ignore i dont orka med typer, dehär e rätt
    api?.metrics.bloodpressurePaginatedList({ page, search, size }) as Promise<
      HttpResponse<Page<BloodPressureDTO>, ErrorResponse>
    >,
  create: (api, newResource) =>
    api?.metrics.bloodpressureCreate(newResource) as Promise<
      HttpResponse<BloodPressureDTO, ErrorResponse>
    >,
  latest: (api) =>
    api?.metrics.bloodpressureLatestList() as Promise<
      HttpResponse<BloodPressureDTO, ErrorResponse>
    >,
});
export const useBloodPressureContext = BloodPressure.useMetricsContext;

const Height = createMetricsContext<HeightDTO, Page<HeightDTO>>();
export const HeightProvider = Height.createMetricsProvider({
  list: (api) =>
    api?.metrics.heightList() as Promise<
      HttpResponse<HeightDTO[], ErrorResponse>
    >,
  detail: (api, id: number) =>
    api?.metrics.heightByIdDetail(id) as Promise<
      HttpResponse<HeightDTO, ErrorResponse>
    >,
  paginated: (api, size?: number, page?: number, search?: string) =>
    // @ts-ignore i dont orka med typer, dehär e rätt
    api?.metrics.heightPaginatedList({ page, search, size }) as Promise<
      HttpResponse<Page<HeightDTO>, ErrorResponse>
    >,
  create: (api, newResource) =>
    api?.metrics.heightCreate(newResource) as Promise<
      HttpResponse<HeightDTO, ErrorResponse>
    >,
  latest: (api) =>
    api?.metrics.heightLatestList() as Promise<
      HttpResponse<HeightDTO, ErrorResponse>
    >,
});
export const useHeightContext = Height.useMetricsContext;

const RAPA = createMetricsContext<RAPADTO, Page<RAPADTO>>();
export const RAPAProvider = RAPA.createMetricsProvider({
  list: (api) =>
    api?.metrics.rapaList() as Promise<HttpResponse<RAPADTO[], ErrorResponse>>,
  detail: (api, id: number) =>
    api?.metrics.rapaByIdDetail(id) as Promise<
      HttpResponse<RAPADTO, ErrorResponse>
    >,
  paginated: (api, size?: number, page?: number, search?: string) =>
    // @ts-ignore i dont orka med typer, dehär e rätt
    api?.metrics.rapaPaginatedList({ page, search, size }) as Promise<
      HttpResponse<Page<RAPADTO>, ErrorResponse>
    >,
  create: (api, newResource) =>
    api?.metrics.rapaCreate(newResource) as Promise<
      HttpResponse<RAPADTO, ErrorResponse>
    >,
  latest: (api) =>
    api?.metrics.rapaLatestList() as Promise<
      HttpResponse<RAPADTO, ErrorResponse>
    >,
});
export const useRAPAContext = RAPA.useMetricsContext;

const Steps = createMetricsContext<StepsDTO, Page<StepsDTO>>();
export const StepsProvider = Steps.createMetricsProvider({
  list: (api) =>
    api?.metrics.rapaList() as Promise<HttpResponse<StepsDTO[], ErrorResponse>>,
  detail: (api, id: number) =>
    api?.metrics.stepsByIdDetail(id) as Promise<
      HttpResponse<StepsDTO, ErrorResponse>
    >,
  paginated: (api, size?: number, page?: number, search?: string) =>
    // @ts-ignore i dont orka med typer, dehär e rätt
    api?.metrics.stepsPaginatedList({ page, search, size }) as Promise<
      HttpResponse<Page<StepsDTO>, ErrorResponse>
    >,
  create: (api, newResource) =>
    api?.metrics.stepsCreate(newResource) as Promise<
      HttpResponse<StepsDTO, ErrorResponse>
    >,
  latest: (api) =>
    api?.metrics.stepsLatestList() as Promise<
      HttpResponse<StepsDTO, ErrorResponse>
    >,
});
export const useStepsContext = Steps.useMetricsContext;

const WaistSize = createMetricsContext<WaistSizeDTO, Page<WaistSizeDTO>>();
export const WaistSizeProvider = WaistSize.createMetricsProvider({
  list: (api) =>
    api?.metrics.waistsizeList() as Promise<
      HttpResponse<WaistSizeDTO[], ErrorResponse>
    >,
  detail: (api, id: number) =>
    api?.metrics.waistsizeByIdDetail(id) as Promise<
      HttpResponse<WaistSizeDTO, ErrorResponse>
    >,
  paginated: (api, size?: number, page?: number, search?: string) =>
    // @ts-ignore i dont orka med typer, dehär e rätt
    api?.metrics.waistsizePaginatedList({ page, search, size }) as Promise<
      HttpResponse<Page<WaistSizeDTO>, ErrorResponse>
    >,
  create: (api, newResource) =>
    api?.metrics.waistsizeCreate(newResource) as Promise<
      HttpResponse<WaistSizeDTO, ErrorResponse>
    >,
  latest: (api) =>
    api?.metrics.waistsizeLatestList() as Promise<
      HttpResponse<WaistSizeDTO, ErrorResponse>
    >,
});
export const useWaistSizeContext = WaistSize.useMetricsContext;

const Weight = createMetricsContext<WeightDTO, Page<WeightDTO>>();
export const WeightProvider = Weight.createMetricsProvider({
  list: (api) =>
    api?.metrics.weightList() as Promise<
      HttpResponse<WeightDTO[], ErrorResponse>
    >,
  detail: (api, id: number) =>
    api?.metrics.weightByIdDetail(id) as Promise<
      HttpResponse<WeightDTO, ErrorResponse>
    >,
  paginated: (api, size?: number, page?: number, search?: string) =>
    // @ts-ignore i dont orka med typer, dehär e rätt
    api?.metrics.weightPaginated({ page, search, size }) as Promise<
      HttpResponse<Page<WeightDTO>, ErrorResponse>
    >,
  create: (api, newResource) =>
    api?.metrics.weightCreate(newResource) as Promise<
      HttpResponse<WeightDTO, ErrorResponse>
    >,
  latest: (api) =>
    api?.metrics.weightLatestList() as Promise<
      HttpResponse<WeightDTO, ErrorResponse>
    >,
});
export const useWeightContext = Weight.useMetricsContext;
