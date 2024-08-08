import { Stack, ThemeProvider, Typography } from '@mui/material';
import theme from '../../../components/Theme';
import NavTab from '../../../components/TabMenu/NavTab';
import NavTabs from '../../../components/TabMenu/NavTabs';
import { useEffect, useMemo, useState } from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';

import placeHolderImg from '../../../assets/reciplePlaceHolderImg/placeHolderFood.png';
import RecipeCard from '../../../components/Cards/RecipeCard';
import { Recipe } from '../../../types/recipe';
import { enqueueSnackbar } from 'notistack';
import { getRecipes } from '../../../api/recipe';

export default function Recipes() {
  const [value, setValue] = useState(0);
  const { t } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<boolean>(false);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      if (!loading) {
        try {
          setLoading(true);
          const data = await getRecipes();
          setRecipes(data);
        } catch (error) {
          console.error(error);
          setError(true);
          if (error instanceof Error) {
            enqueueSnackbar(error.message, {
              variant: 'error',
            });
          }
        } finally {
          setLoading(false);
        }
      }
    };
    if (!loading && recipes.length === 0 && !error) {
      fetchRecipes();
    }
  }, [loading, recipes.length]);

  const OverviewContent = useMemo(
    () =>
      ({ recipes }: { recipes: Recipe[] }) => {
        return (
          <Stack marginTop="25px" spacing={1}>
            <Typography variant="subtitle1">
              {t('title-recomended-today')}
            </Typography>
            <RecipeCard
              img={placeHolderImg}
              title={'Place Holder Recipe Name'}
              onClick={() => console.log('clicked!')}
            />
            <Typography variant="subtitle1">
              {t('title-all-saved-recipes')}
            </Typography>
            {recipes.map((recipe) => (
              <RecipeCard
                img={recipe.imageURL}
                title={recipe.title}
                onClick={() => (window.location.href = recipe.url)}
              />
            ))}
          </Stack>
        );
      },
    [recipes]
  );

  const RenderOverviewContent = () => OverviewContent({ recipes });

  const renderContent = () => {
    switch (value) {
      case 0:
        return <RenderOverviewContent />;
      case 1:
        return renderFavouriteContent();
      default:
        return null;
    }
  };

  const renderFavouriteContent = () => {
    return (
      <Stack marginTop="25px" spacing={2}>
        <Typography variant="subtitle1">{t('favourite-recipes')}</Typography>
        <RecipeCard
          img={placeHolderImg}
          title={'Place Holder Recipe Name'}
          onClick={() => console.log('clicked!')}
        />
        <RecipeCard
          img={placeHolderImg}
          title={'Place Holder Recipe Name'}
          onClick={() => console.log('clicked!')}
        />
        <RecipeCard
          img={placeHolderImg}
          title={'Place Holder Recipe Name'}
          onClick={() => console.log('clicked!')}
        />
        <RecipeCard
          img={placeHolderImg}
          title={'Place Holder Recipe Name'}
          onClick={() => console.log('clicked!')}
        />
        <RecipeCard
          img={placeHolderImg}
          title={'Place Holder Recipe Name'}
          onClick={() => console.log('clicked!')}
        />
      </Stack>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <Stack marginBottom="20%" alignItems="center">
        <Typography variant="h4" marginBottom="1rem" alignSelf="center">
          {t('recipes')}
        </Typography>
        <Stack width={'90%'} paddingTop={'10px'}>
          <NavTabs value={value} onChange={handleChange} centered>
            <NavTab label={t('overview')} />
            <NavTab label={t('favourite')} />
          </NavTabs>
          {renderContent()}
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}
