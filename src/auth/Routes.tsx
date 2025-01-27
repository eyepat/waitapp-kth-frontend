import { Navigate, Routes as RRoutes, Route } from 'react-router-dom';
import { AuthenticationLevels, pages } from '../Pages';
import { Page } from '../types/page';
import NotFound from '../pages/NotFound';
import Header from '../components/Headers/Header';
import { Navigation } from '../components/Navigation';
import { useAuth } from '../contexts/AuthContext';
import { useLoading } from '../contexts/LoadContext';
import { useKeycloak } from '@react-keycloak/web';
import { useKeycloakStatus } from '../contexts/KeycloakContext';
import Error from '../pages/Error';

export function Routes() {
  const { authLevel, user } = useAuth();
  const { keycloak, initialized } = useKeycloak();
  const { loading } = useLoading();
  const { error } = useKeycloakStatus();
  const isLoadingIn =
    !initialized ||
    (user === undefined &&
      authLevel === AuthenticationLevels.NOT_LOGGED_IN &&
      keycloak.authenticated) ||
    loading;

  return (
    <RRoutes>
      {pages.map((page: Page) =>
        (Array.isArray(page.to) ? page.to : [page.to]).map((to) =>
          page.component &&
          (page.permissionLevel <= authLevel || isLoadingIn) ? (
            <Route
              key={to}
              path={page.path ? page.path : to + (page.tabs ? '/:tab?' : '')}
              Component={() => (
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: page.backgroundColor,
                  }}
                >
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
                </div>
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
      {error && <Route path="*" Component={() => <Error error={error} />} />}
      {!loading && <Route path={'*'} Component={NotFound} />}
    </RRoutes>
  );
}
