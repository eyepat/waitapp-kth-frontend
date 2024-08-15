interface User {
  id?: number;
  email: string;
  password?: string;
  fullName?: string;
  birthDate?: string;
  gender?: string;
  ablationDate?: string;
}

interface UserWithToken extends User {
  token?: string;
  authLevel?: number;
}
