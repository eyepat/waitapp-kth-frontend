import { Navigate, Routes as RRoutes, Route } from 'react-router-dom';
import { AuthenticationLevels, pages } from '../Pages';
import { Page } from '../types/page';
import NotFound from '../pages/NotFound';
import Header from '../components/Headers/Header';
import { Navigation } from '../components/Navigation';
import { useAuth } from '../contexts/AuthContext';
import { useLoading } from '../contexts/LoadContext';

export function Routes() {
  const { user, token } = useAuth();
  const authLevel = () => {
    return user?.authLevel != undefined
      ? user.authLevel
      : AuthenticationLevels.NOT_LOGGED_IN;
  };
  const { loading } = useLoading();
  const isLoadingIn = (user === undefined && token !== undefined) || loading;
  return (
    <RRoutes>
      {pages.map((page: Page) =>
        (Array.isArray(page.to) ? page.to : [page.to]).map((to) =>
          page.component &&
          (page.permissionLevel <= authLevel() || isLoadingIn) ? (
            <Route
              key={to}
              path={page.path ? page.path : to + (page.tabs ? '/:tab?' : '')}
              Component={() => (
                <>
                  {page.header != undefined && (
                    <Header
                      expanded={
                        page.header.expanded != undefined
                          ? page.header.expanded
                          : false
                      }
                      transparent={page.header.transparent}
                      settings={page.header.settings}
                      help={page.header.help}
                      tabsParent={to}
                    />
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
                  {page.showBottomNav && <Navigation />}
                </>
              )}
            />
          ) : (
            <Route
              path={page.path ? page.path : to}
              Component={() => <Navigate to="/login" />}
            />
          )
        )
      )}
      {!loading && <Route path={'*'} Component={NotFound} />}
    </RRoutes>
  );
}
