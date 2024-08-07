export async function getSprints(): Promise<Sprint[]> {
  const url = `${import.meta.env.VITE_API_BASE_URL}/api/sprints`;
  const response: Response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  if (data.message) throw new Error(data.message);

  return data;
}

export async function getAllSprintsByUserID(userID: number): Promise<Sprint[]> {
  const url = `${import.meta.env.VITE_API_BASE_URL}/api/sprints/user/${userID}`;
  const response: Response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  if (data.message) throw new Error(data.message);

  return data;
}

export async function createNewSprint(
  sprint: Sprint,
  token: string
): Promise<Sprint> {
  const url = `${import.meta.env.VITE_API_BASE_URL}/api/sprints`;
  const response: Response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(sprint),
  });
  const data = await response.json();

  if (data.message) throw new Error(data.message);

  return data;
}

export async function getSprint(token: string): Promise<Sprint> {
  const url = `${import.meta.env.VITE_API_BASE_URL}/api/sprints/latest`;
  const response: Response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();

  if (data.message) throw new Error(data.message);

  return data;
}

export async function postSprint(sprint: Sprint): Promise<Sprint> {
  const url = `${import.meta.env.VITE_API_BASE_URL}/api/sprints`;
  const response: Response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(sprint),
  });
  const data = await response.json();

  if (data.message) throw new Error(data.message);

  return data;
}

export async function putSprint(sprint: Sprint): Promise<Sprint> {
  if (sprint.ID === undefined) throw new Error('sprint is missing ID');
  const url = `${import.meta.env.VITE_API_BASE_URL}/api/sprints/${sprint.ID}`;
  const response: Response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(sprint),
  });
  const data = await response.json();

  if (data.message) throw new Error(data.message);

  return data;
}

export async function deleteSprint(sprint: Sprint): Promise<Sprint> {
  if (sprint.ID === undefined) throw new Error('sprint is missing ID');
  const url = `${import.meta.env.VITE_API_BASE_URL}/api/sprints/${sprint.ID}`;
  const response: Response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  if (data.message) throw new Error(data.message);

  return data;
}
