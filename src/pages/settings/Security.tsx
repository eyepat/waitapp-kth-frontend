import {
  Stack,
  ThemeProvider,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from '@mui/material';
import theme from '../../components/Theme';
import { useLanguage } from '../../contexts/LanguageContext';

export default function Security() {
  const { t } = useLanguage();

  return (
    <ThemeProvider theme={theme}>
      <Stack
        direction="column"
        alignItems="start"
        margin="auto"
        marginBottom="13vh"
        spacing={3}
      >
        <Typography variant="h4" marginBottom="1rem" alignSelf="center">
          {t('profile')}
        </Typography>
        <Card sx={{ width: '100%' }}>
          <CardHeader
            sx={{ marginBottom: '-25px' }}
            title={
              <Typography variant="h6" fontWeight="bold">
                {t('personal-information')}
              </Typography>
            }
          />
          <CardContent>{t('insecure-page-disclaimer')}</CardContent>
        </Card>
      </Stack>
    </ThemeProvider>
  );
}
