type LoginProps = {
  username: string;
  password: string;
};

export async function login({
  username,
  password,
}: LoginProps): Promise<UserWithToken> {
  const url = `${import.meta.env.VITE_API_BASE_URL}/api/login`;
  const response: Response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });
  const data = await response.json();

  if (data.message) throw new Error(data.message);

  return data;
}
