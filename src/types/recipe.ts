export type Recipe = {
  ID: number;
  baseURL: string;
  URLPath: string;
  title: string;
  description: string;
  image: string;
  cookingTimeMinutes: number;
  mealType: 'MIDDAG' | 'LUNCH' | 'BREAKFAST' | 'SNACK' | 'OTHER'; // Adjust "OTHER" if needed
  isLunch: boolean;
  isDinner: boolean;
  isBreakfast: boolean;
  isSnack: boolean;
  isFallFood: boolean;
  isSummerFood: boolean;
  isWinterFood: boolean;
  isHotFood: boolean;
  isChristmasFood: boolean;
  isFamilyFood: boolean;
  isVegitarian: boolean;
  isFish: boolean;
  isMeat: boolean;
  isFavorite: boolean;
};
