import {
  Button,
  InputAdornment,
  IconButton,
  Input,
  Stack,
  Typography,
  styled,
} from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { ClosedEye, Mail, OpenEye } from '../../utils/Icons';

export default function Register() {
  const { t } = useLanguage();
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
      alert('Invalid registration details, please correct the errors.');
      return;
    }
    // Handle registration logic here
    navigate('/login');
  };

  const StyledInput = styled(Input)({
    margin: 'auto',
    borderRadius: '0.5rem',
    boxShadow: '0 2px 1rem rgba(0, 0, 0, 0.1)',
    padding: '0.5rem',
    '& .MuiInputBase-input': {
      paddingLeft: '1rem',
      width: '100%',
    },
  });

  return (
    <Stack
      sx={{
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        height: '80%',
        width: '90%',
        margin: 'auto',
        mt: '10vh',
        alignItems: 'center', // Center items horizontally
      }}
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

      <Button
        variant="contained"
        sx={{
          width: '100%',
          padding: '0.75rem',
          backgroundColor: '#0A74DA',
          color: 'white',
          mt: 3, // Increased margin between inputs and button
        }}
        onClick={handleRegister}
      >
        {t('next')}
      </Button>

      <Typography variant="body2" sx={{ mt: 2 }}>
        {t('have-account')}
      </Typography>

      <Button
        variant="outlined"
        sx={{
          width: '100%',
          padding: '0.75rem',
          mt: 1,
          borderColor: '#0A74DA',
          color: '#0A74DA',
        }}
        onClick={() => {
          navigate('/login');
        }}
      >
        {t('login')}
      </Button>
    </Stack>
  );
}
