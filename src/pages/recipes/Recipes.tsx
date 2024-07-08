import {
  Box,
  Button,
  Card,
  CardHeader,
  Stack,
  ThemeProvider,
  Typography,
} from '@mui/material';
import theme from '../../components/Theme';
import NavTab from '../../components/TabMenu/NavTab';
import NavTabs from '../../components/TabMenu/NavTabs';
import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { BigArrow } from '../../utils/Icons';

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
      /*sett fixed width in evry box in the stack... Should fix scaling problems   */
      <Stack marginTop="25px">
        <Typography variant="body1">{t('title-recomended-today')}</Typography>
        <Button disableRipple>
          <Card sx={{ borderRadius: '12px' }}>
            <Stack direction="row" alignItems="center" spacing={4}>
              <Box
                height="100px"
                width="200px"
                borderRight="2px solid black"
              ></Box>
              <Typography variant="body1" fontWeight="bold" textAlign="justify">
                {t('placeholder-recomended-recipe')}
              </Typography>
              <Box sx={{ fontSize: '48px', paddingRight: '20px' }}>
                <BigArrow />
              </Box>
            </Stack>
          </Card>
        </Button>
        <Typography variant="body1">{t('title-all-saved-recipes')}</Typography>
        <Button disableRipple>
          <Card sx={{ borderRadius: '12px' }}>
            <Stack direction="row" alignItems="center" spacing={4}>
              <Box
                height="100px"
                width="200px"
                borderRight="2px solid black"
              ></Box>
              <Typography variant="body1" fontWeight="bold" textAlign="justify">
                {t('placeholder-saved-racipe')}
              </Typography>
              <Box sx={{ fontSize: '48px', paddingRight: '20px' }}>
                <BigArrow />
              </Box>
            </Stack>
          </Card>
        </Button>
      </Stack>
    );
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
