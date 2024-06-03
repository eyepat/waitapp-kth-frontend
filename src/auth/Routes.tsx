import { Routes as RRoutes, Route } from 'react-router-dom';
import { pages } from '../Pages';
import { Page } from '../types/page';
import NotFound from '../pages/NotFound';
import Header from '../components/Header';
import { Navigation } from '../components/Navigation';

export interface RoutesProps {
  authLevel: number;
}

export function Routes({ authLevel }: RoutesProps) {
  return (
    <RRoutes>
      {pages.map(
        (page: Page) =>
          page.component &&
          page.permissionLevel <= authLevel && (
            <Route
              path={page.path ? page.path : page.to}
              Component={() => (
                <>
                  {page.showHeader && <Header />}
                  {page.component && <page.component />}
                  {page.showBottomNav && <Navigation authLevel={authLevel} />}
                </>
              )}
            />
          )
      )}
      <Route path={'*'} Component={NotFound} />
    </RRoutes>
  );
}
