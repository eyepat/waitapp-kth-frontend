interface SprintContextType {
  token?: string;
  user?: UserWithToken;
  createSprint: (currentUser: User) => Promise<Sprint | undefined>;
}
