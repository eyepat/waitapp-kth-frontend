import {
  Button,
  InputAdornment,
  IconButton,
  Input,
  Stack,
  Typography,
  styled,
  ThemeProvider,
  Box,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { ClosedEye, Mail, OpenEye } from '../../utils/Icons';
import theme from '../../components/Theme';
import { enqueueSnackbar } from 'notistack';
import { useAuth } from '../../contexts/AuthContext';
import { AuthenticationLevels } from '../../Pages';

export default function Register() {
  const { t } = useLanguage();
  const { authLevel } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [emailValid, setEmailValid] = useState<boolean | null>(null);
  const [passwordValid, setPasswordValid] = useState<boolean | null>(null);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState<
    boolean | null
  >(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);

  useEffect(() => {
    if (authLevel === AuthenticationLevels.NO_DATA_PROVIDED) {
      navigate('/general-questions');
    }
  }, [authLevel]);

  const checkEmail = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    setEmail(value);
    setEmailValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? true : null);
  };

  const checkPassword = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordValid(value.length > 0 ? true : null);
  };

  const checkConfirmPassword = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    setConfirmPassword(value);
    setConfirmPasswordValid(value === password ? true : null);
  };

  const handleRegister = () => {
    if (!emailValid || !passwordValid || !confirmPasswordValid) {
      enqueueSnackbar('invalid-registration-details', {
        variant: 'error',
      });
      //alert('Invalid registration details, please correct the errors.');
      return;
    }
    /*register({
      email: email,
      password: password,
    });*/
    //navigate('/general-questions');
  };

  const StyledInput = styled(Input)({
    margin: 'auto',
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    boxShadow: '0 2px 1rem rgba(0, 0, 0, 0.1)',
    padding: '0.5rem',
    '& .MuiInputBase-input': {
      paddingLeft: '1rem',
      width: '100%',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Stack
        sx={{
          justifyContent: 'center',
          display: 'flex',
          flexDirection: 'column',
          height: '80%',
          mt: '5vh',
          alignItems: 'center',
        }}
        padding="0 8vw 0 8vw"
        maxWidth="1000px"
        margin="auto"
      >
        <Stack
          direction="column"
          spacing={1}
          alignItems="flex-start"
          sx={{ width: '100%', textAlign: 'center' }}
        >
          <Typography variant="h4" sx={{ color: '#00A3E0' }}>
            {t('register-account')}
          </Typography>
          <Typography variant="subtitle1" sx={{ mb: 2 }}>
            {t('input-details')}
          </Typography>

          <Typography variant="subtitle1">{t('your-email')}</Typography>
          <StyledInput
            placeholder={t('input-email')}
            endAdornment={
              <InputAdornment position="start">
                <Mail />
              </InputAdornment>
            }
            disableUnderline={true}
            onBlur={checkEmail}
            defaultValue={email}
            inputMode="email"
            type="email"
            sx={{ width: '100%', mb: 1 }}
          />

          <Typography variant="subtitle1">{t('password-input')}</Typography>
          <StyledInput
            placeholder={t('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword}>
                  {showPassword ? <ClosedEye /> : <OpenEye />}
                </IconButton>
              </InputAdornment>
            }
            disableUnderline={true}
            onBlur={checkPassword}
            defaultValue={password}
            inputMode="text"
            type={showPassword ? 'text' : 'password'}
            sx={{ width: '100%', mb: 1 }}
          />

          <Typography variant="subtitle1">{t('confirm-password')}</Typography>
          <StyledInput
            placeholder={t('confirm-password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowConfirmPassword}>
                  {showConfirmPassword ? <ClosedEye /> : <OpenEye />}
                </IconButton>
              </InputAdornment>
            }
            disableUnderline={true}
            onBlur={checkConfirmPassword}
            defaultValue={confirmPassword}
            inputMode="text"
            type={showConfirmPassword ? 'text' : 'password'}
            sx={{ width: '100%', mb: 2 }}
          />
        </Stack>
        <Box
          sx={{
            width: '80%',
            position: 'fixed',
            bottom: '6vh',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          <Button
            variant="contained"
            sx={{
              width: '100%',
              borderRadius: '8px',
              padding: '0.75rem',
              backgroundColor: '#hsla(200, 100%, 26%, 1)',
              color: 'white',
            }}
            onClick={handleRegister}
          >
            {t('next')}
          </Button>

          <Typography variant="body2" textAlign="center" sx={{ mt: 4 }}>
            {t('have-account')}
          </Typography>

          <Button
            variant="contained"
            sx={{
              width: '100%',
              borderRadius: '8px',
              padding: '0.75rem',
              mt: 1,
              backgroundColor: 'hsla(196, 59%, 81%, 1)',
              borderColor: 'hsla(196, 59%, 81%, 1)',
              color: 'hsla(200, 100%, 26%, 1)',
              '&:hover': {
                backgroundColor: 'hsla(196, 59%, 89%, 1)',
                borderColor: 'hsla(196, 59%, 91%, 1)',
              },
              '&:active': {
                backgroundColor: 'hsla(196, 59%, 91%, 1)',
                borderColor: 'hsla(196, 59%, 91%, 1)',
              },
            }}
            onClick={() => {
              navigate('/login');
            }}
          >
            {t('login')}
          </Button>
        </Box>
      </Stack>
    </ThemeProvider>
  );
}
