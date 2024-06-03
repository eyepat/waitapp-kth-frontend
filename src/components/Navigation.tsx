import { NavLink } from 'react-router-dom';
import { Page } from '../types/page';
import { pages } from '../Pages';
import { Stack, Typography, styled } from '@mui/material';

export interface NavigationProps {
  authLevel: number;
}

export function Navigation({ authLevel }: NavigationProps) {
  const NavigationBar = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    gap: '20vw',
    position: 'fixed',
    bottom: '0',
    left: '0',
    width: '100%',
    minHeight: '8vh',
    backgroundColor: 'white',
    zIndex: '1000',
    'nav-link': {
      color: 'inherit',
    },
    '.active': {
      color: '#00A3E0',
    },
  });

  return (
    <NavigationBar>
      {pages.map(
        (page: Page) =>
          page.isMenu &&
          page.permissionLevel <= authLevel && (
            <NavLink
              className="nav-link"
              to={page.to}
              style={{ textDecoration: 'none' }}
            >
              <Stack direction="column" alignItems="center">
                {page.icon && page.icon({})}
                <Typography>{page.label}</Typography>
              </Stack>
            </NavLink>
          )
      )}
    </NavigationBar>
  );
}
