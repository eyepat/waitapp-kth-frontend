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
  const data = await response.json();

  if (data.message) throw new Error(data.message);

  return data;
}

export async function postUser(user: User): Promise<User> {
  delete user.ID;
  const url = `${import.meta.env.VITE_API_BASE_URL}/api/users`;
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

export async function putUser(user: User): Promise<User> {
  if (user.ID === undefined) throw new Error('user is missing userID');
  const url = `${import.meta.env.VITE_API_BASE_URL}/api/users/${user.ID}`;
  const response: Response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  const data = await response.json();

  if (data.message) throw new Error(data.message);

  return data;
}

export async function deleteUser(user: User): Promise<User> {
  if (user.ID === undefined) throw new Error('user is missing userID');
  const url = `${import.meta.env.VITE_API_BASE_URL}/api/users/${user.ID}`;
  const response: Response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  const data = await response.json();

  if (data.message) throw new Error(data.message);

  return data;
}
