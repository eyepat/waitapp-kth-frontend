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
import { CheckCircle, LockOutlined, PersonOutline } from '@mui/icons-material';
import { useEffect, useRef, useState } from 'react';

export default function Login() {
  const { t } = useLanguage();

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [usernameValid, setUsernameValid] = useState<boolean | null>(null);
  const [passwordValid, setPasswordValid] = useState<boolean | null>(null);
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (usernameRef.current && document.activeElement !== usernameRef.current) {
      usernameRef.current.focus();
    }
  }, [usernameRef]);

  useEffect(() => {
    if (passwordRef.current && document.activeElement !== passwordRef.current) {
      passwordRef.current.focus();
    }
  }, [passwordRef]);

  const checkUsername = async (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    //setUsername(value);
    setUsernameValid(value.length > 0 ? true : null);
  };
  const checkPassword = async (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    //setPassword(value);
    setPasswordValid(value.length > 0 ? true : null);
  };

  const StyledInput = styled(Input)({
    margin: 'auto',
    borderRadius: '1rem',
    border: '1px solid #ccc',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    '& .MuiInputBase-input': {
      paddingLeft: '1rem',
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
          spacing={1}
          justifyContent="center"
          alignItems="center"
        >
          <StyledInput
            placeholder={t('username')}
            startAdornment={<PersonOutline />}
            disableUnderline={true}
            endAdornment={
              <CheckCircle
                sx={usernameValid ? undefined : { display: 'none' }}
              />
            }
            onChange={(e) => checkUsername(e)}
            inputRef={usernameRef}
          ></StyledInput>
          <StyledInput
            placeholder={t('password')}
            startAdornment={<LockOutlined />}
            disableUnderline={true}
            endAdornment={
              <CheckCircle
                sx={passwordValid ? undefined : { display: 'none' }}
              />
            }
            onChange={checkPassword}
            inputRef={passwordRef}
          ></StyledInput>
        </Stack>
        <Button variant="contained" sx={{ width: '60%' }}>
          {t('log-in')}
        </Button>
      </Stack>
      <Divider sx={{ mt: '5vh' }} />
      <Stack direction="column">
        <Button sx={{ mt: '1vh' }}>{t('or-register-here')}</Button>
      </Stack>
    </Stack>
  );
}
