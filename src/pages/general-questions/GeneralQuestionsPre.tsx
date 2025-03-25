import { Button, Stack, Typography, ThemeProvider } from '@mui/material';
//import React from 'react';
import theme from '../../components/Theme';
import { useLanguage } from '../../contexts/LanguageContext';
import { useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { AuthenticationLevels } from '../../Pages';

export default function GeneralQuestions() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { authLevel } = useAuth();

  useEffect(() => {
    if (authLevel >= AuthenticationLevels.LOGGED_IN) {
      navigate('/');
    } else if (authLevel < AuthenticationLevels.NO_DATA_PROVIDED) {
      navigate('/login');
    }
  }, [authLevel]);

  return (
    <ThemeProvider theme={theme}>
      <Stack
        direction="column"
        alignItems="start"
        padding="0 8vw 0 8vw"
        maxWidth="1000px"
        margin="auto"
      >
        <Typography
          variant="h4"
          alignSelf="start"
          color="hsla(196, 85%, 46%, 1)"
        >
          {t('important-information')}
        </Typography>
        <Typography variant="body1" marginTop="0.7rem">
          {t('important-information-content-1')}
        </Typography>
        <Typography
          variant="body1"
          marginTop="0.7rem"
          bgcolor="#00a3e050"
          padding="5px"
        >
          {t('important-information-content-2')}
        </Typography>
        <Typography variant="h5" marginTop="0.7rem">
          {t('how-to-use-the-app')}
        </Typography>
        <Typography variant="body1" marginTop="0.7rem">
          {t('important-information-content-3')}
        </Typography>
        <Typography variant="body1" marginTop="0.7rem">
          {t('important-information-content-4')}
        </Typography>
        <Typography variant="body1" marginTop="0.7rem">
          {t('important-information-content-5')}
        </Typography>
        <Typography variant="body1" marginTop="0.7rem">
          {t('important-information-content-6')}
        </Typography>

        <Stack marginTop="4vh" marginBottom="4vh" width="100%">
          <Button
            onClick={() => {
              navigate('/general-questions');
            }}
            variant="contained"
            sx={{
              fontSize: '1.3rem',
              width: '90%',
              height: '6vh',
              margin: 'auto',
              bgcolor: 'hsla(200, 100%, 26%, 1)',
              borderRadius: '8px',
              '&:hover': {
                backgroundColor: 'hsla(200, 100%, 16%, 1)',
              },
            }}
          >
            {t('next')}
          </Button>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}
