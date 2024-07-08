import { Stack, ThemeProvider, Typography } from '@mui/material';
import theme from '../../components/Theme';
import NavTab from '../../components/TabMenu/NavTab';
import NavTabs from '../../components/TabMenu/NavTabs';
import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

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
    return <Typography>Overwiev</Typography>;
  };
  const renderFavouriteContent = () => {
    return <Typography>Favourite</Typography>;
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
