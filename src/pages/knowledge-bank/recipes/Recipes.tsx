import { Stack, ThemeProvider, Typography, Pagination } from '@mui/material';
import theme from '../../../components/Theme';
import NavTab from '../../../components/TabMenu/NavTab';
import NavTabs from '../../../components/TabMenu/NavTabs';
import { useEffect, useState } from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';
import placeHolderImg from '../../../assets/reciplePlaceHolderImg/placeHolderFood.png';
import RecipeCard from '../../../components/Cards/RecipeCard';
import { useRecipeContext } from '../../../contexts/MetricsContext';
import { RecipeDTO } from '../../../api/BaseClient';
import Page from '../../../types/Page2';

export default function Recipes() {
  const [value, setValue] = useState(0);
  const { t } = useLanguage();
  const [page, setPage] = useState(1);
  const [recipes, setRecipes] = useState<Page<RecipeDTO> | undefined>(
    undefined
  );
  const { getPage } = useRecipeContext();

  useEffect(() => {
    getPage(page).then((r) => setRecipes(r));
  }, [page, getPage]); // Added getPage as a dependency

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const RenderOverviewContent = () => (
    <Stack marginTop="25px" spacing={1}>
      <Typography variant="subtitle1">
        {t('title-recommended-today')}
      </Typography>
      <RecipeCard
        img={placeHolderImg}
        title={'Place Holder Recipe Name'}
        onClick={() => console.log('clicked!')}
      />
      <Typography variant="subtitle1">
        {t('title-all-saved-recipes')}
      </Typography>
      {recipes?.content.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          img={recipe.imageURL || ''}
          title={recipe.title || ''}
          onClick={() => {
            if (recipe.URL) window.location.href = recipe.URL;
          }}
        />
      ))}
      <Pagination
        count={recipes?.totalPages || 1} // Ensuring a valid count
        page={recipes?.page || 1} // Avoid undefined issues
        onChange={handlePageChange}
        color="primary"
        sx={{ alignSelf: 'center', marginTop: '20px' }}
      />
    </Stack>
  );

  return (
    <ThemeProvider theme={theme}>
      <Stack marginBottom="20%" alignItems="center">
        <Typography variant="h4" marginBottom="1rem" alignSelf="center">
          {t('recipes')}
        </Typography>
        <Stack width={'90%'} paddingTop={'10px'}>
          <NavTabs
            value={value}
            onChange={(_, newValue) => setValue(newValue)}
            centered
          >
            <NavTab label={t('overview')} />
            <NavTab label={t('favourite')} />
          </NavTabs>
          {value === 0 && <RenderOverviewContent />}
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}
