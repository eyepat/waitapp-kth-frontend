import { Stack, ThemeProvider, Typography } from '@mui/material';
import moon from '../../assets/sprint/moon.svg';
import { useLanguage } from '../../contexts/LanguageContext';
import { Svg } from '../../utils/Icons';
import theme from '../../components/Theme';

export default function Sprint() {
  const { t } = useLanguage();
  return (
    <ThemeProvider theme={theme}>
      <Stack marginBottom="20%" alignItems="center">
        <Typography variant="h4" marginBottom="1rem" alignSelf="center">
          {t('sprint')}
        </Typography>
        <Svg
          src={moon}
          style={{
            position: 'absolute',
            top: '45%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
