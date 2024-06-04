import { Stack, Typography } from '@mui/material';
import { useLanguage } from '../../contexts/LanguageContext';

export default function Settings() {
  const { t } = useLanguage();
  return (
    <Stack
      direction="column"
      alignItems="start"
      padding="0 8vw 0 8vw"
      maxWidth="1000px"
      margin="auto"
    >
      <Typography variant="h5" marginBottom="1rem" alignSelf="center">
        {t('settings')}
      </Typography>
    </Stack>
  );
}
