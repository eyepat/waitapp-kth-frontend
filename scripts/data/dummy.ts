export interface Metric {
  userID: number;
  sprintID: number | null;
  timeStamp: string;
  value: any;
}
export interface BloodPressure extends Metric {
  value: string;
}
export interface WaistSize extends Metric {
  value: number;
}
export interface Weight extends Metric {
  value: number;
}
export interface Height extends Metric {
  value: number;
}
export interface User {
  id?: number;
  email: string;
  password?: string;
  fullName?: string;
  birthDate?: string;
  gender?: string;
  ablationDate?: string;
}
export interface Sprint {
  id?: number;
  type: string;
  startDate: string;
  endDate: string;
  completed: boolean;
  level: string;
  score: number | null;
  userID: number;
}
export interface MetricW extends Metric {
  type:
    | 'height'
    | 'weight'
    | 'blood-pressure'
    | 'waist-size'
    | 'rapa'
    | 'steps';
}
export interface SprintW {
  sprint: Sprint;
  measurements: MetricW[];
}

export interface UserWithToken extends User {
  token?: string;
  authLevel?: number;
}
export interface Dummy {
  user: User;
  bp: BloodPressure;
  ws: WaistSize;
  weight: Weight;
  height: Height;
  sprints: SprintW[];
}

const startDate = '2023-08-15T11:26:47.950207';

export const peter: Dummy = {
  user: {
    fullName: 'Peter Exempel',
    password: 'petertest',
    email: 'peter@exempel.se',
    birthDate: '1951-12-01',
    gender: 'MALE',
  },
  bp: {
    userID: 0,
    timeStamp: startDate,
    sprintID: null,
    value: '145/95',
  },
  ws: {
    userID: 0,
    timeStamp: startDate,
    sprintID: null,
    value: 102,
  },
  weight: {
    userID: 0,
    timeStamp: startDate,
    sprintID: null,
    value: 122,
  },
  height: {
    userID: 0,
    timeStamp: startDate,
    sprintID: null,
    value: 188,
  },
  sprints: [],
};

export const laila: Dummy = {
  user: {
    fullName: 'Laila Exempel',
    password: 'lailatest',
    email: 'laila@exempel.se',
    birthDate: '1965-12-01',
    gender: 'FEMALE',
  },
  bp: {
    userID: 0,
    timeStamp: startDate,
    sprintID: null,
    value: '140/90',
  },
  ws: {
    userID: 0,
    timeStamp: startDate,
    sprintID: null,
    value: 98,
  },
  weight: {
    userID: 0,
    timeStamp: startDate,
    sprintID: null,
    value: 84,
  },
  height: {
    userID: 0,
    timeStamp: startDate,
    sprintID: null,
    value: 162,
  },
  sprints: [],
};
