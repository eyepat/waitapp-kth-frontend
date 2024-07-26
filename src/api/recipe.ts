import { Recipe } from '../types/recipe';

export async function getRecipes(): Promise<Recipe[]> {
  const url = `${import.meta.env.VITE_API_BASE_URL}/api/recipe`;
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
