interface User {
  ID?: number;
  name?: string;
  email: string;
  password?: string;
  dateOfBirth?: string;
  height?: number;
  weight?: number;
  waistSize?: number;
  bloodPressure?: string;
  ablationDate?: string;
  currentSprintID?: number;
}

interface UserWithToken extends User {
  token?: string;
  authLevel?: number;
}
