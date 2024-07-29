export async function register(user: User): Promise<UserWithToken> {
  delete user.ID;
  const url = `${import.meta.env.VITE_API_BASE_URL}/api/register`;
  const response: Response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  const data = await response.json();

  if (data.message) throw new Error(data.message);

  return data;
}

export async function registerInfo(
  id: number,
  user: User,
  token: string
): Promise<UserWithToken> {
  delete user.ID;
  const url = `${import.meta.env.VITE_API_BASE_URL}/api/register/${id}`;
  const response: Response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(user),
  });
  const data = await response.json();

  if (data.message) throw new Error(data.message);

  return data;
}
