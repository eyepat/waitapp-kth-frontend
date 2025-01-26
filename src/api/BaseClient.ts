/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface BloodPressureDTO {
  /** @format int64 */
  id?: number;
  owner?: UUID;
  /** @format int64 */
  userID: number;
  /** @format int64 */
  sprintID: number;
  timestamp: LocalDateTime;
  value?: string;
}

export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  NONE_BINARY = 'NONE_BINARY',
  OTHER = 'OTHER',
}

export interface HeightDTO {
  /** @format int64 */
  id?: number;
  owner?: UUID;
  /** @format int64 */
  userID: number;
  /** @format int64 */
  sprintID: number;
  timestamp: LocalDateTime;
  /** @format int32 */
  value?: number;
}

export enum Level {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  NORMAL = 'NORMAL',
  INTENSE = 'INTENSE',
}

/** @format date */
export type LocalDate = string;

/** @format date-time */
export type LocalDateTime = string;

export interface OnboardingDTO {
  /** @format int64 */
  id?: number;
  owner?: UUID;
  email?: string;
  fullName?: string;
  BirthDate?: LocalDate;
  gender?: Gender;
  ablationDate?: LocalDate;
  /** @format int32 */
  height?: number;
  /** @format double */
  weight?: number;
  /** @format int32 */
  waistSize?: number;
  bloodPressure?: string;
  birthDate?: LocalDate;
}

export interface RAPADTO {
  /** @format int64 */
  id?: number;
  owner?: UUID;
  /** @format int64 */
  userID: number;
  /** @format int64 */
  sprintID: number;
  timestamp: LocalDateTime;
  /** @format int32 */
  value?: number;
}

export interface SprintDTO {
  /** @format int64 */
  id?: number;
  owner?: UUID;
  sprintType: SprintType;
  startDate?: LocalDate;
  endDate?: LocalDate;
  completed?: boolean;
  level?: Level;
  /** @format float */
  score?: number;
  /** @format int64 */
  userID: number;
}

export enum SprintType {
  FOOD = 'FOOD',
  ALCOHOL = 'ALCOHOL',
  PHYSICAL = 'PHYSICAL',
}

export interface StepsDTO {
  /** @format int64 */
  id?: number;
  owner?: UUID;
  /** @format int64 */
  userID: number;
  /** @format int64 */
  sprintID: number;
  timestamp: LocalDateTime;
  /** @format int32 */
  value?: number;
}

/**
 * @format uuid
 * @pattern [a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}
 */
export type UUID = string;

export interface UserDTO {
  /** @format int64 */
  id?: number;
  owner?: UUID;
  email: string;
  fullName: string;
  birthDate: LocalDate;
  gender?: Gender;
  ablationDate?: LocalDate;
  onboarded?: boolean;
}

export interface WaistSizeDTO {
  /** @format int64 */
  id?: number;
  owner?: UUID;
  /** @format int64 */
  userID: number;
  /** @format int64 */
  sprintID: number;
  timestamp: LocalDateTime;
  /** @format int32 */
  value?: number;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, 'body' | 'bodyUsed'>;

export interface FullRequestParams extends Omit<RequestInit, 'body'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<
  FullRequestParams,
  'body' | 'method' | 'query' | 'path'
>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, 'baseUrl' | 'cancelToken' | 'signal'>;
  securityWorker?: (
    securityData: SecurityDataType | null
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown>
  extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain',
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = '';
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) =>
    fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: 'same-origin',
    headers: {},
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === 'number' ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join('&');
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter(
      (key) => 'undefined' !== typeof query[key]
    );
    return keys
      .map((key) =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key)
      )
      .join('&');
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : '';
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === 'object' || typeof input === 'string')
        ? JSON.stringify(input)
        : input,
    [ContentType.Text]: (input: any) =>
      input !== null && typeof input !== 'string'
        ? JSON.stringify(input)
        : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === 'object' && property !== null
              ? JSON.stringify(property)
              : `${property}`
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(
    params1: RequestParams,
    params2?: RequestParams
  ): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (
    cancelToken: CancelToken
  ): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(
      `${baseUrl || this.baseUrl || ''}${path}${queryString ? `?${queryString}` : ''}`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData
            ? { 'Content-Type': type }
            : {}),
        },
        signal:
          (cancelToken
            ? this.createAbortSignal(cancelToken)
            : requestParams.signal) || null,
        body:
          typeof body === 'undefined' || body === null
            ? null
            : payloadFormatter(body),
      }
    ).then(async (response) => {
      const r = response.clone() as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title backend API
 * @version 1.0.0-SNAPSHOT
 */
export class Api<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  healthz = {
    /**
     * No description
     *
     * @tags Health Check Controller
     * @name HealthzList
     * @summary Health Check
     * @request GET:/healthz
     */
    healthzList: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/healthz`,
        method: 'GET',
        ...params,
      }),
  };
  metrics = {
    /**
     * No description
     *
     * @tags Blood Pressure Controller
     * @name BloodpressureList
     * @summary Get All
     * @request GET:/metrics/bloodpressure
     * @secure
     */
    bloodpressureList: (params: RequestParams = {}) =>
      this.request<BloodPressureDTO[], any>({
        path: `/metrics/bloodpressure`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Blood Pressure Controller
     * @name BloodpressureCreate
     * @summary Create
     * @request POST:/metrics/bloodpressure
     * @secure
     */
    bloodpressureCreate: (data: BloodPressureDTO, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/metrics/bloodpressure`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Blood Pressure Controller
     * @name BloodpressureByIdDetail
     * @summary Get By Id
     * @request GET:/metrics/bloodpressure/byId/{id}
     * @secure
     */
    bloodpressureByIdDetail: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/metrics/bloodpressure/byId/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Blood Pressure Controller
     * @name BloodpressureLatestList
     * @summary Latest
     * @request GET:/metrics/bloodpressure/latest
     * @secure
     */
    bloodpressureLatestList: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/metrics/bloodpressure/latest`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Blood Pressure Controller
     * @name BloodpressureUpdate
     * @summary Update
     * @request PUT:/metrics/bloodpressure/{id}
     * @secure
     */
    bloodpressureUpdate: (
      id: number,
      data: BloodPressureDTO,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/metrics/bloodpressure/${id}`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Blood Pressure Controller
     * @name BloodpressureDelete
     * @summary Delete
     * @request DELETE:/metrics/bloodpressure/{id}
     * @secure
     */
    bloodpressureDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/metrics/bloodpressure/${id}`,
        method: 'DELETE',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Height Controller
     * @name HeightList
     * @summary Get All
     * @request GET:/metrics/height
     * @secure
     */
    heightList: (params: RequestParams = {}) =>
      this.request<HeightDTO[], any>({
        path: `/metrics/height`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Height Controller
     * @name HeightCreate
     * @summary Create
     * @request POST:/metrics/height
     * @secure
     */
    heightCreate: (data: HeightDTO, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/metrics/height`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Height Controller
     * @name HeightByIdDetail
     * @summary Get By Id
     * @request GET:/metrics/height/byId/{id}
     * @secure
     */
    heightByIdDetail: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/metrics/height/byId/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Height Controller
     * @name HeightLatestList
     * @summary Latest
     * @request GET:/metrics/height/latest
     * @secure
     */
    heightLatestList: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/metrics/height/latest`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Height Controller
     * @name HeightUpdate
     * @summary Update
     * @request PUT:/metrics/height/{id}
     * @secure
     */
    heightUpdate: (id: number, data: HeightDTO, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/metrics/height/${id}`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Height Controller
     * @name HeightDelete
     * @summary Delete
     * @request DELETE:/metrics/height/{id}
     * @secure
     */
    heightDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/metrics/height/${id}`,
        method: 'DELETE',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags RAPA Controller
     * @name RapaList
     * @summary Get All
     * @request GET:/metrics/rapa
     * @secure
     */
    rapaList: (params: RequestParams = {}) =>
      this.request<RAPADTO[], any>({
        path: `/metrics/rapa`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags RAPA Controller
     * @name RapaCreate
     * @summary Create
     * @request POST:/metrics/rapa
     * @secure
     */
    rapaCreate: (data: RAPADTO, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/metrics/rapa`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags RAPA Controller
     * @name RapaByIdDetail
     * @summary Get By Id
     * @request GET:/metrics/rapa/byId/{id}
     * @secure
     */
    rapaByIdDetail: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/metrics/rapa/byId/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags RAPA Controller
     * @name RapaLatestList
     * @summary Latest
     * @request GET:/metrics/rapa/latest
     * @secure
     */
    rapaLatestList: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/metrics/rapa/latest`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags RAPA Controller
     * @name RapaUpdate
     * @summary Update
     * @request PUT:/metrics/rapa/{id}
     * @secure
     */
    rapaUpdate: (id: number, data: RAPADTO, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/metrics/rapa/${id}`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags RAPA Controller
     * @name RapaDelete
     * @summary Delete
     * @request DELETE:/metrics/rapa/{id}
     * @secure
     */
    rapaDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/metrics/rapa/${id}`,
        method: 'DELETE',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Steps Controller
     * @name StepsList
     * @summary Get All
     * @request GET:/metrics/steps
     * @secure
     */
    stepsList: (params: RequestParams = {}) =>
      this.request<StepsDTO[], any>({
        path: `/metrics/steps`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Steps Controller
     * @name StepsCreate
     * @summary Create
     * @request POST:/metrics/steps
     * @secure
     */
    stepsCreate: (data: StepsDTO, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/metrics/steps`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Steps Controller
     * @name StepsByIdDetail
     * @summary Get By Id
     * @request GET:/metrics/steps/byId/{id}
     * @secure
     */
    stepsByIdDetail: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/metrics/steps/byId/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Steps Controller
     * @name StepsLatestList
     * @summary Latest
     * @request GET:/metrics/steps/latest
     * @secure
     */
    stepsLatestList: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/metrics/steps/latest`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Steps Controller
     * @name StepsUpdate
     * @summary Update
     * @request PUT:/metrics/steps/{id}
     * @secure
     */
    stepsUpdate: (id: number, data: StepsDTO, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/metrics/steps/${id}`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Steps Controller
     * @name StepsDelete
     * @summary Delete
     * @request DELETE:/metrics/steps/{id}
     * @secure
     */
    stepsDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/metrics/steps/${id}`,
        method: 'DELETE',
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  sprint = {
    /**
     * No description
     *
     * @tags Sprint Controller
     * @name SprintList
     * @summary Get All
     * @request GET:/sprint
     * @secure
     */
    sprintList: (params: RequestParams = {}) =>
      this.request<SprintDTO[], any>({
        path: `/sprint`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Sprint Controller
     * @name SprintCreate
     * @summary Create
     * @request POST:/sprint
     * @secure
     */
    sprintCreate: (data: SprintDTO, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/sprint`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Sprint Controller
     * @name ByIdDetail
     * @summary Get By Id
     * @request GET:/sprint/byId/{id}
     * @secure
     */
    byIdDetail: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/sprint/byId/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Sprint Controller
     * @name LatestList
     * @summary Latest
     * @request GET:/sprint/latest
     * @secure
     */
    latestList: (
      query?: {
        /** filter by active */
        active?: boolean;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, void>({
        path: `/sprint/latest`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Sprint Controller
     * @name SprintUpdate
     * @summary Update
     * @request PUT:/sprint/{id}
     * @secure
     */
    sprintUpdate: (id: number, data: SprintDTO, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/sprint/${id}`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Sprint Controller
     * @name SprintDelete
     * @summary Delete
     * @request DELETE:/sprint/{id}
     * @secure
     */
    sprintDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/sprint/${id}`,
        method: 'DELETE',
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  user = {
    /**
     * No description
     *
     * @tags User Controller
     * @name UserList
     * @summary Get All
     * @request GET:/user
     * @secure
     */
    userList: (params: RequestParams = {}) =>
      this.request<UserDTO[], any>({
        path: `/user`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags User Controller
     * @name UserCreate
     * @summary Create
     * @request POST:/user
     * @secure
     */
    userCreate: (data: UserDTO, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/user`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags User Controller
     * @name ByIdDetail
     * @summary Get By Id
     * @request GET:/user/byId/{id}
     * @secure
     */
    byIdDetail: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/user/byId/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Creates a new user onboarding process
     *
     * @tags User Controller
     * @name OnboardingCreate
     * @summary Onboard a new user
     * @request POST:/user/onboarding
     * @secure
     */
    onboardingCreate: (data: OnboardingDTO, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/user/onboarding`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get the user associated with you
     *
     * @tags User Controller
     * @name SelfList
     * @summary Get self
     * @request GET:/user/self
     * @secure
     */
    selfList: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/user/self`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags User Controller
     * @name UserUpdate
     * @summary Update
     * @request PUT:/user/{id}
     * @secure
     */
    userUpdate: (id: number, data: UserDTO, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/user/${id}`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags User Controller
     * @name UserDelete
     * @summary Delete
     * @request DELETE:/user/{id}
     * @secure
     */
    userDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/user/${id}`,
        method: 'DELETE',
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  waistsize = {
    /**
     * No description
     *
     * @tags Waist Size Controller
     * @name WaistsizeList
     * @summary Get All
     * @request GET:/waistsize
     * @secure
     */
    waistsizeList: (params: RequestParams = {}) =>
      this.request<WaistSizeDTO[], any>({
        path: `/waistsize`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Waist Size Controller
     * @name WaistsizeCreate
     * @summary Create
     * @request POST:/waistsize
     * @secure
     */
    waistsizeCreate: (data: WaistSizeDTO, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/waistsize`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Waist Size Controller
     * @name ByIdDetail
     * @summary Get By Id
     * @request GET:/waistsize/byId/{id}
     * @secure
     */
    byIdDetail: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/waistsize/byId/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Waist Size Controller
     * @name LatestList
     * @summary Latest
     * @request GET:/waistsize/latest
     * @secure
     */
    latestList: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/waistsize/latest`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Waist Size Controller
     * @name WaistsizeUpdate
     * @summary Update
     * @request PUT:/waistsize/{id}
     * @secure
     */
    waistsizeUpdate: (
      id: number,
      data: WaistSizeDTO,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/waistsize/${id}`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Waist Size Controller
     * @name WaistsizeDelete
     * @summary Delete
     * @request DELETE:/waistsize/{id}
     * @secure
     */
    waistsizeDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/waistsize/${id}`,
        method: 'DELETE',
        secure: true,
        format: 'json',
        ...params,
      }),
  };
}
