import { NavLink, useMatch } from 'react-router-dom';
import { Page } from '../types/page';
import { AuthenticationLevels, pages } from '../Pages';
import { Stack, Typography, styled } from '@mui/material';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';

export function Navigation() {
  const { t } = useLanguage();
  const { user } = useAuth();
  const authLevel = () => {
    return user?.authLevel != undefined
      ? user.authLevel
      : AuthenticationLevels.NOT_LOGGED_IN;
  };

  const NavigationBar = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    gap: '20vw',
    position: 'fixed',
    bottom: '0',
    left: '0',
    width: '100%',
    paddingTop: '2vh',
    minHeight: '8vh',
    backgroundColor: 'white',
    zIndex: '1000',
    color: 'black',
    '.nav-link': {
      color: 'inherit',
    },
    '.active': {
      color: '#00A3E0',
    },
  });

  return (
    <NavigationBar>
      {pages.map((page: Page) =>
        (Array.isArray(page.to) ? page.to : [page.to]).map(
          (to) =>
            page.isMenu &&
            page.permissionLevel <= authLevel() && (
              <NavLink
                key={to}
                className={`nav-link ${useMatch(to + '/*') ? 'active' : ''}`}
                to={to + (page.tabs ? '/' + page.defaultTab : '')}
                style={{ textDecoration: 'none' }}
              >
                <Stack
                  direction="column"
                  alignItems="center"
                  sx={{ color: 'inherit' }}
                >
                  {page.icon && page.icon({})}
                  {page.label && <Typography>{t(page.label)}</Typography>}
                </Stack>
              </NavLink>
            )
        )
      )}
    </NavigationBar>
  );
}
