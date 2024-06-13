import { Stack, Typography } from '@mui/material';
import { useLanguage } from '../../contexts/LanguageContext';

export default function BloodPressureTest() {
  const { t } = useLanguage();
  return (
    <Stack marginBottom="20%" alignItems="center">
      <Typography variant="h4" marginBottom="1rem" alignSelf="center">
        {t('blood-pressure-test')}
      </Typography>
      <Typography width={'80%'} textAlign="justify">
        {t('about-blood-pressure')}
      </Typography>
    </Stack>
  );
}
