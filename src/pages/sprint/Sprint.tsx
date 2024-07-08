import { Stack, ThemeProvider, Typography, Button, Box } from '@mui/material';
import moon from '../../assets/sprint/moon.svg';
import { useLanguage } from '../../contexts/LanguageContext';
import { Svg } from '../../utils/Icons';
import theme from '../../components/Theme';
import { useNavigate } from 'react-router-dom';

export default function Sprint() {
  const { t } = useLanguage();
  const navigate = useNavigate();
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
        <Box
          position="absolute"
          bottom="0"
          marginBottom="50px"
          width="43vh"
          borderTop="1px solid black"
          borderRadius="20px 20px 0 0"
          padding="1rem"
          textAlign="center"
          bgcolor="white"
        >
          {/*ToDo Fix backgrund color, Remove visual border, Make button wider */}
          <Typography variant="h6" marginBottom="1rem" alignSelf="center">
            {t('no-aktive-sprint')}
          </Typography>
          <Typography variant="body1" marginBottom="1rem" alignSelf="center">
            {t('no-aktive-sprint-yet')}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate('/sprint-choice')}
          >
            {t('choose-new-sprint')}
          </Button>
        </Box>
      </Stack>
    </ThemeProvider>
  );
}
