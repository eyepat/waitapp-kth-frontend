export type Recipe = {
  recipe_id: number;
  base_url: string;
  url_variable: string;
  title: string;
  description: string;
  image: string;
  cooking_time: number;
  meal_type: 'MIDDAG' | 'LUNCH' | 'BREAKFAST' | 'SNACK' | 'OTHER'; // Adjust "OTHER" if needed
  lunch: boolean;
  dinner: boolean;
  breakfast: boolean;
  snack: boolean;
  fall_food: boolean;
  summer_food: boolean;
  winter_food: boolean;
  hot_food: boolean;
  christmas_food: boolean;
  family_food: boolean;
  vegetarian: boolean;
  fish: boolean;
  meat: boolean;
  favorite: boolean;
};
