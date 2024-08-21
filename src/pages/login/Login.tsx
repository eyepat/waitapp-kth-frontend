import {
  Button,
  Divider,
  Stack,
  ThemeProvider,
  Typography,
} from '@mui/material';
import { ClosedEye, OpenEye, Svg } from '../../utils/Icons';
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
import { useDevice } from '../../contexts/DeviceContext';

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

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [emailValid, setEmailValid] = useState<boolean | null>(null);
  const [passwordValid, setPasswordValid] = useState<boolean | null>(null);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const { isOnDesktop } = useDevice();

  const tempLoginDemo = () => {
    if (!emailValid || !passwordValid) {
      enqueueSnackbar('invalid-login-details', {
        variant: 'error',
      });
      return;
    }
    login(email, password);
  };

  const updateEmail: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailValid(
      emailRegex.test(email) ? true : email.length > 0 ? false : null
    );
  }, [email]);

  useEffect(() => {
    setPasswordValid(password.length > 0 ? true : null);
  }, [password]);

  return (
    <ThemeProvider theme={theme}>
      <Stack
        direction={isOnDesktop ? 'row' : 'column'}
        sx={{
          height: '100vh',
          width: isOnDesktop ? '100vw' : '100%',
          position: isOnDesktop ? 'absolute' : '',
          top: 0,
          left: 0,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {isOnDesktop && (
          <Stack
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `url(${ki})`,
              backgroundSize: 'cover',
              zIndex: -2,
            }}
          />
        )}
        <Stack
          direction="column"
          sx={{
            justifyContent: 'center',
            position: isOnDesktop ? 'absolute' : 'inherit',
            right: 0,
            padding: isOnDesktop ? '2rem' : 0,
            display: 'flex',
            height: isOnDesktop ? '80%' : '80%',
            width: isOnDesktop ? '40%' : '90%',
            margin: 'auto',
            mt: isOnDesktop ? 0 : '15vh',
            borderRadius: isOnDesktop ? '5rem 0 0 5rem' : '',
            backgroundColor: isOnDesktop ? 'white' : 'inherit',
            boxShadow: isOnDesktop ? '0px 0px 15px rgba(0,0,0,0.1)' : 'none',
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
                display: isOnDesktop ? 'none' : 'inherit',
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
                sx={{ width: '100%', display: 'flex' }}
              >
                <div
                  style={{
                    background: 'white',
                    boxShadow: '1px 4px 7px -1px rgba(0, 0, 0, 0.25)',
                    borderRadius: '16px',
                    minHeight: '1.75rem',
                    padding: '0.2rem',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '0.6rem',
                    transition: 'width 0.5s',
                    width: '100%',
                    maxWidth: isOnDesktop ? '20vw' : '50vw',
                  }}
                >
                  <PersonOutline sx={{ color: '#00A3E0' }} />
                  <input
                    onChange={updateEmail}
                    style={{
                      outline: 'none',
                      border: 'none',
                      background: 'none',
                      width: '90%',
                    }}
                    type={'email'}
                    value={email}
                    placeholder={t('username')}
                  />
                  {emailValid !== false ? (
                    <CheckCircle
                      sx={
                        emailValid
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
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '0.6rem',
                    transition: 'width 0.5s',
                    width: '100%',
                    maxWidth: isOnDesktop ? '20vw' : '50vw',
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
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    placeholder={t('password')}
                  />
                  <>
                    {password.length > 0 ? (
                      showPassword ? (
                        <Button
                          onClick={() => setShowPassword(false)}
                          sx={{
                            width: 20,
                            height: 20,
                            padding: 0,
                            margin: 0,
                            minWidth: 20,
                          }}
                        >
                          <ClosedEye />
                        </Button>
                      ) : (
                        <Button
                          onClick={() => setShowPassword(true)}
                          sx={{
                            width: 20,
                            height: 20,
                            padding: 0,
                            margin: 0,
                            minWidth: 20,
                          }}
                        >
                          <OpenEye />
                        </Button>
                      )
                    ) : (
                      ''
                    )}
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
                  </>
                </div>
              </Stack>
              <Button
                variant="contained"
                sx={{
                  width: '60%',
                  padding: '0.5rem',
                  maxWidth: isOnDesktop ? '20vw' : '50vw',
                }}
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
      </Stack>
    </ThemeProvider>
  );
}
