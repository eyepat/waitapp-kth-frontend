interface Sprint {
  ID?: number;
  type: string;
  startDate: string;
  endDate: string;
  isCompleted: boolean;
  level: number;
  score: number | null;
  userID: number;
}
