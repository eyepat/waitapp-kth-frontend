// TODO: Implement Authorization token on the backend
export async function getUsers(/*token: string*/): Promise<User[]> {
  const url = `${import.meta.env.VITE_API_BASE_URL}/api/users`;
  const response: Response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      /*Authorization: `Bearer ${token}`,*/
    },
  });
  if (!response.ok) throw response;
  const data = await response.json();

  if (data.message) throw new Error(data.message);

  return data;
}

// TODO: Implement Authorization token on the backend
export async function getUser(
  userID: number /*, token: string*/
): Promise<User> {
  const url = `${import.meta.env.VITE_API_BASE_URL}/api/users/${userID}`;
  const response: Response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      /*Authorization: `Bearer ${token}`,*/
    },
  });
  if (!response.ok) throw response;
  const data = await response.json();

  if (data.message) throw new Error(data.message);

  return data;
}

export async function postUser(user: User): Promise<User> {
  delete user.id;
  const url = `${import.meta.env.VITE_API_BASE_URL}/api/users`;
  const response: Response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  if (!response.ok) throw response;
  const data = await response.json();

  if (data.message) throw new Error(data.message);

  return data;
}

export async function putUser(
  user: User,
  token: string | undefined
): Promise<User> {
  if (user.id === undefined) throw new Error('user is missing userID');
  if (token === undefined) throw new Error('no-token');
  const url = `${import.meta.env.VITE_API_BASE_URL}/api/users/${user.id}`;
  const response: Response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(user),
  });
  if (!response.ok) throw response;
  const data = await response.json();

  if (data.message) throw new Error(data.message);

  return data;
}

export async function deleteUser(user: User): Promise<User> {
  if (user.id === undefined) throw new Error('user is missing userID');
  const url = `${import.meta.env.VITE_API_BASE_URL}/api/users/${user.id}`;
  const response: Response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) throw response;
  const data = await response.json();

  if (data.message) throw new Error(data.message);

  return data;
}
