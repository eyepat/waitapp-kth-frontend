import { useEffect } from 'react';
import { useKeycloak } from '@react-keycloak/web';
import { useNavigate } from 'react-router-dom';
import { CircularProgress, Stack } from '@mui/material';
import { useAuth } from '../../contexts/AuthContext';
import { AuthenticationLevels } from '../../Pages';

export default function KCLogin() {
  const { keycloak, initialized } = useKeycloak();
  const { authLevel } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (initialized && !keycloak.authenticated) {
      keycloak.login();
    } else if (initialized) {
      switch (authLevel) {
        case (AuthenticationLevels.HIGHER_AUTH_LEVEL,
        AuthenticationLevels.LOGGED_IN):
          navigate('/');
          break;
        case AuthenticationLevels.NO_DATA_PROVIDED:
          navigate('/general-questions');
          break;
        default:
          break;
      }
    }
  }, [initialized, keycloak, authLevel]);
  return (
    <Stack alignItems="center" justifyContent="center" height="100vh">
      <CircularProgress />
    </Stack>
  );
}
