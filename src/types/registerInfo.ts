export type RegisterInfo = {
  id?: number;
  email?: string;
  password?: string;
  fullName: string;
  gender: string;
  ablationDate: string | undefined;
  birthDate: string | undefined;
  height: number | undefined;
  weight: number | undefined;
  waistSize: number | undefined;
  bloodPressure: string | undefined;
};
