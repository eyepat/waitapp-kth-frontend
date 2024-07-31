interface User {
  ID?: number;
  name: string;
  password?: string;
  date_of_birth?: string;
  height?: number;
  weight?: string;
  waistSize?: string;
  bloodPressure?: number;
  ablationDate?: string;
  currentSprintID?: number;
}

interface UserWithToken extends User {
  token?: string;
  authLevel?: number;
}
