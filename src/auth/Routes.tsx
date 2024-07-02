import { Navigate, Routes as RRoutes, Route } from 'react-router-dom';
import { pages } from '../Pages';
import { Page } from '../types/page';
import NotFound from '../pages/NotFound';
import Header from '../components/Headers/Header';
import { Navigation } from '../components/Navigation';
import { useAuth } from '../contexts/AuthContext';

export function Routes() {
  const { authLevel } = useAuth();
  return (
    <RRoutes>
      {pages.map((page: Page) =>
        page.component && page.permissionLevel <= authLevel ? (
          <Route
            path={page.path ? page.path : page.to}
            Component={() => (
              <>
                {page.header != undefined && (
                  <Header showExpandedHeader={page.header.expanded != undefined ? page.header.expanded : false} />
                )}
                {page.component && (
                  <div
                    style={{
                      maxWidth: '1000px',
                      margin: 'auto',
                    }}
                  >
                    <page.component />
                  </div>
                )}
                {page.showBottomNav && <Navigation authLevel={authLevel} />}
              </>
            )}
          />
        ) : (
          <Route
            path={page.path ? page.path : page.to}
            Component={() => <Navigate to="/login" />}
          />
        )
      )}
      <Route path={'*'} Component={NotFound} />
    </RRoutes>
  );
}
