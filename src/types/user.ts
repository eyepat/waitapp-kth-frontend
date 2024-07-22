interface User {
  userIdPk?: number;
  name: string;
  password: string;
  dateOfBirth: string;
  height: number;
  weight: string;
  waistSize: string;
  bloodPressure: number;
  ablationDate: string;
  currentSprintId: number;
}

interface UserWithToken extends User {
  token?: string;
  authLevel?: number;
}
