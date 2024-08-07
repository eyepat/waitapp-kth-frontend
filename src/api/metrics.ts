export async function getMetricsByType(
  type:
    | 'height'
    | 'weight'
    | 'blood-pressure'
    | 'waist-size'
    | 'rapa'
    | 'steps',
  token: string
): Promise<Metric[]> {
  const url = `${import.meta.env.VITE_API_BASE_URL}/api/metrics/${type}`;
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

export async function addMesurement(
  type:
    | 'height'
    | 'weight'
    | 'blood-pressure'
    | 'waist-size'
    | 'rapa'
    | 'steps',
  token: string,
  metric: Metric
): Promise<Metric> {
  const url = `${import.meta.env.VITE_API_BASE_URL}/api/metrics/${type}`;
  const response: Response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(metric),
  });
  const data = await response.json();

  if (data.message) throw new Error(data.message);

  return data;
}
