interface Sprint {
  ID?: number;
  userID: number;
  type: string;
  startDate: string;
  endDate: string;
  isCompleted: boolean;
  level: number;
  score: number | null;
}
