import { Stack, ThemeProvider, Typography } from '@mui/material';
import theme from '../../components/Theme';
import { useLanguage } from '../../contexts/LanguageContext';
import TextCard from '../../components/Cards/TextCard';
import { useNavigate } from 'react-router-dom';

export default function Forms() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <Stack
        direction="column"
        alignItems="start"
        margin="auto"
        marginBottom="13vh"
        spacing={2}
        width="80%"
      >
        <Typography variant="h4" marginBottom="1rem" alignSelf="center">
          {t('forms')}
        </Typography>
        <Typography
          variant="h6"
          marginBottom="1rem"
          alignSelf="center"
          textAlign="center"
        >
          {t('complete-these-for-more-accurate-experience')}
        </Typography>
        <TextCard
          title={t('rapa') + ' (RAPA)'}
          text={''}
          onClick={() => navigate('/settings/forms/rapa')}
        />
        <TextCard title={t('forms') + ' 1'} text={''} />
        <TextCard title={t('forms') + ' 2'} text={''} />
        <TextCard title={t('forms') + ' 3'} text={''} />
      </Stack>
    </ThemeProvider>
  );
}
