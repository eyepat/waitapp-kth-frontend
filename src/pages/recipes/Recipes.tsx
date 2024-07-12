import { Stack, ThemeProvider, Typography } from '@mui/material';
import theme from '../../components/Theme';
import NavTab from '../../components/TabMenu/NavTab';
import NavTabs from '../../components/TabMenu/NavTabs';
import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

import placeHolderImg from '../../assets/reciplePlaceHolderImg/placeHolderFood.png';
import RecipeCard from '../../components/Cards/RecipeCard';

export default function Recipes() {
  const [value, setValue] = useState(0);
  const { t } = useLanguage();
  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const renderContent = () => {
    switch (value) {
      case 0:
        return renderOverviewContent();
      case 1:
        return renderFavouriteContent();
      default:
        return null;
    }
  };

  const renderOverviewContent = () => {
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
        <RecipeCard
          img={placeHolderImg}
          title={'Place Holder Recipe Name'}
          onClick={() => console.log('clicked!')}
        />
      </Stack>
    );
  };
  const renderFavouriteContent = () => {
    return (
      <Stack marginTop="25px" spacing={2}>
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
