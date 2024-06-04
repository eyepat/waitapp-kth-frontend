import {
  Button,
  Divider,
  Input,
  Stack,
  Typography,
  styled,
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

export default function Login() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { authLevel, setAuth } = useAuth();

  useEffect(() => {
    if (authLevel > 0) {
      navigate('/');
    }
  }, [authLevel]);

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [usernameValid, setUsernameValid] = useState<boolean | null>(null);
  const [passwordValid, setPasswordValid] = useState<boolean | null>(null);

  const checkUsername = async (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    setUsername(value);
    setUsernameValid(value.length > 0 ? true : null);
  };
  const checkPassword = async (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordValid(value.length > 0 ? true : null);
  };
  const tempLoginDemo = () => {
    if (!usernameValid || !passwordValid) {
      alert('Invalid login credentials, demo text here');
      return;
    }
    setAuth(1);
    //navigate('/'); Handled in the useEffect above
  };

  const StyledInput = styled(Input)({
    margin: 'auto',
    borderRadius: '1rem',
    boxShadow: '0 2px 1rem rgba(0, 0, 0, 0.4)',
    padding: '0.2rem',
    '& .MuiInputBase-input': {
      paddingLeft: '1rem',
      width: '75%',
    },
    transition: 'width 0.5s',
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
      <Stack direction="column" spacing={2} alignItems="center">
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          sx={{ width: '60%', display: 'flex' }} // Set the width to 60% and make it a flex container
        >
          <StyledInput
            placeholder={t('username')}
            startAdornment={<PersonOutline sx={{ color: '#00A3E0' }} />}
            disableUnderline={true}
            endAdornment={
              <div
                style={{
                  minWidth: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
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
            }
            onBlur={checkUsername}
            defaultValue={username}
            inputMode="text"
            type="username"
            sx={{ width: '100%' }} // Set the width to 100%
          ></StyledInput>

          <StyledInput
            placeholder={t('password')}
            startAdornment={<LockOutlined sx={{ color: '#00A3E0' }} />}
            disableUnderline={true}
            endAdornment={
              <div
                style={{
                  minWidth: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
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
            }
            onBlur={checkPassword}
            defaultValue={password}
            inputMode="text"
            type="password"
            sx={{ width: '100%' }} // Set the width to 100%
          ></StyledInput>
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
            alert('not implemented');
          }}
        >
          <Typography>{t('or-register-here')}</Typography>
        </Button>
      </Stack>
    </Stack>
  );
}
