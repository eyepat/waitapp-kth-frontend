interface Sprint {
  id?: number;
  type: string;
  startDate: string;
  endDate: string;
  isCompleted: boolean;
  level: string;
  score: number | null;
  userID: number;
}
