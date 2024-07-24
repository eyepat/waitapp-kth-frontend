import {
  Button,
  Divider,
  Stack,
  ThemeProvider,
  Typography,
} from '@mui/material';
import { Svg } from '../../utils/Icons';
import ki from '../../assets/logo/ki.svg';
import { useLanguage } from '../../contexts/LanguageContext';
import {
  CheckCircle,
  Error,
  LockOutlined,
  PersonOutline,
} from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import theme from '../../components/Theme';

import { enqueueSnackbar } from 'notistack';
import { AuthenticationLevels } from '../../Pages';

export default function Login() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { user, login } = useAuth();
  const authLevel = () => {
    return user?.authLevel != undefined
      ? user.authLevel
      : AuthenticationLevels.NOT_LOGGED_IN;
  };
  useEffect(() => {
    if (authLevel() >= AuthenticationLevels.LOGGED_IN) {
      navigate('/');
    } else if (authLevel() == AuthenticationLevels.NO_DATA_PROVIDED) {
      navigate('/general-questions');
    }
  }, [authLevel, navigate]);

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [usernameValid, setUsernameValid] = useState<boolean | null>(null);
  const [passwordValid, setPasswordValid] = useState<boolean | null>(null);

  const tempLoginDemo = () => {
    if (!usernameValid || !passwordValid) {
      enqueueSnackbar('invalid-login-details', {
        variant: 'error',
      });
      return;
    }
    login(username, password);
  };

  const updateUsername: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    setUsername(e.target.value);
  };

  const updatePassword: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setUsernameValid(
      emailRegex.test(username) ? true : username.length > 0 ? false : null
    );
  }, [username]);

  useEffect(() => {
    setPasswordValid(password.length > 0 ? true : null);
  }, [password]);

  return (
    <ThemeProvider theme={theme}>
      <Stack
        direction="column"
        sx={{
          justifyContent: 'center',
          display: 'flex',
          height: '80%',
          width: '90%',
          margin: 'auto',
          mt: '15vh',
        }}
      >
        <Stack direction="column" spacing={1} justifyContent="center">
          <Svg
            src={ki}
            style={{
              maxWidth: '50vw',
              maxHeight: '45vh',
              width: '50%',
              margin: 'auto',
            }}
          />
          <Typography align="center" variant="h3">
            {t('login')}
          </Typography>
        </Stack>
        <div style={{ padding: '2vh' }}></div>
        <Stack>
          <Stack direction="column" spacing={2} alignItems="center">
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={2}
              sx={{ width: '60%', display: 'flex' }}
            >
              <div
                style={{
                  background: 'white',
                  boxShadow: '1px 4px 7px -1px rgba(0, 0, 0, 0.25)',
                  borderRadius: '16px',
                  minHeight: '1.75rem',
                  padding: '0.2rem',
                  display: 'flex',
                  flex: 'row',
                  justifyContent: 'space-apart',
                  alignItems: 'center',
                  gap: '0.6rem',
                  transition: 'width 0.5s',
                  width: '100%',
                }}
              >
                <PersonOutline sx={{ color: '#00A3E0' }} />
                <input
                  onChange={updateUsername}
                  style={{
                    outline: 'none',
                    border: 'none',
                    background: 'none',
                    width: '90%',
                  }}
                  type={'email'}
                  value={username}
                  placeholder={t('username')}
                ></input>
                {usernameValid !== false ? (
                  <CheckCircle
                    sx={
                      usernameValid
                        ? { color: 'green' }
                        : { visibility: 'hidden' }
                    }
                  />
                ) : (
                  <Error sx={{ color: 'red' }} />
                )}
              </div>
              <div
                style={{
                  background: 'white',
                  boxShadow: '1px 4px 7px -1px rgba(0, 0, 0, 0.25)',
                  borderRadius: '16px',
                  minHeight: '1.75rem',
                  padding: '0.2rem',
                  display: 'flex',
                  flex: 'row',
                  justifyContent: 'space-apart',
                  alignItems: 'center',
                  gap: '0.6rem',
                  transition: 'width 0.5s',
                  width: '100%',
                }}
              >
                <LockOutlined sx={{ color: '#00A3E0' }} />
                <input
                  onChange={updatePassword}
                  style={{
                    outline: 'none',
                    border: 'none',
                    background: 'none',
                    width: '90%',
                  }}
                  type={'password'}
                  value={password}
                  placeholder={t('password')}
                ></input>
                {passwordValid !== false ? (
                  <CheckCircle
                    sx={
                      passwordValid
                        ? { color: 'green' }
                        : { visibility: 'hidden' }
                    }
                  />
                ) : (
                  <Error sx={{ color: 'red' }} />
                )}
              </div>
            </Stack>
            <Button
              variant="contained"
              sx={{ width: '60%', padding: '0.5rem' }}
              onClick={tempLoginDemo}
            >
              {t('log-in')}
            </Button>
          </Stack>
          <Divider color="black" sx={{ mt: '5vh' }} />
          <Stack direction="column">
            <Button
              sx={{ mt: '1vh' }}
              onClick={() => {
                navigate('/register');
              }}
            >
              <Typography>{t('or-register-here')}</Typography>
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}
