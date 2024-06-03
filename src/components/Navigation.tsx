import { NavLink } from 'react-router-dom';
import { Page } from '../types/page';
import { pages } from '../Pages';

export interface NavigationProps {
  authLevel: number;
}

export function Navigation({ authLevel }: NavigationProps) {
  return (
    <>
      {pages.map(
        (page: Page) =>
          page.isMenu &&
          page.permissionLevel <= authLevel && (
            <NavLink className="nav-link" to={page.to}>
              {page.label}
            </NavLink>
          )
      )}
    </>
  );
}
