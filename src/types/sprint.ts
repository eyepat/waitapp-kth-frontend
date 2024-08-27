interface Sprint {
  id?: number;
  type: string;
  startDate: string;
  endDate: string;
  completed: boolean;
  level: string;
  score: number | null;
  userID: number;
}
