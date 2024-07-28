interface User {
  user_id?: number;
  name: string;
  password?: string;
  date_of_birth?: string;
  height?: number;
  weight?: string;
  waist_size?: string;
  blood_pressure?: number;
  ablation_date?: string;
  current_sprint_Id?: number;
}

interface UserWithToken extends User {
  token?: string;
  authLevel?: number;
}
