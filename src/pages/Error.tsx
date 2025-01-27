import { Box, Typography, Button, Alert } from '@mui/material';
import { useLanguage } from '../contexts/LanguageContext';

import { AuthClientError } from '@react-keycloak/core/lib/types';

interface ErrorProps {
  error: AuthClientError;
}

export default function Error({ error }: ErrorProps) {
  const { t } = useLanguage();

  let errorMessage = '';
  if (typeof error === 'string') {
    errorMessage = error;
  } else if (Array.isArray(error)) {
    errorMessage = error.join(', ');
  } else if (error && error.error && error.error_description) {
    errorMessage = `${error.error}: ${error.error_description}`;
  } else {
    errorMessage = t('err-unknown-error'); // fallback if the error structure is unknown
  }

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column',
        textAlign: 'center',
        padding: 2,
        backgroundColor: '#f4f6f8',
      }}
    >
      <Alert severity="error" sx={{ marginBottom: 3 }}>
        <Typography variant="h4" component="h1" color="error">
          {t('err-something-went-wrong')}
        </Typography>
        <Typography variant="body1" sx={{ marginTop: 1 }}>
          {errorMessage}
        </Typography>
      </Alert>
      <Button
        variant="contained"
        color="primary"
        onClick={handleGoBack}
        sx={{ marginTop: 3 }}
      >
        {t('err-go-back')}
      </Button>
    </Box>
  );
}
