import { Route, Switch, HashRouter } from 'react-router-dom';
import * as React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import EnvironmentLayout from './layout/EnvironmentLayout';

const HooksPage = React.lazy(() => import('./pages/Hooks/HooksPage'));
const UseStatePage = React.lazy(() => import('./pages/useState/UseStatePage'));
const UseEffectPage = React.lazy(
  () => import('./pages/useEffect/UseEffectPage'),
);
const UseCallbackPage = React.lazy(
  () => import('./pages/useCallback/UseCallbackPage'),
);
const UseMemoPage = React.lazy(() => import('./pages/useMemo/UseMemoPage'));
const CustomHooksPage = React.lazy(
  () => import('./pages/customHooks/CustomHooksPage'),
);
const ErrorPage = React.lazy(() => import('./pages/Error/ErrorPage'));

const Routes = () => (
  <HashRouter>
    <Switch>
      <EnvironmentLayout>
        <React.Suspense fallback={<CircularProgress />}>
          <Switch>
            <Route exact path="/" component={HooksPage} />
            <Route exact path="/useState" component={UseStatePage} />
            <Route exact path="/useEffect" component={UseEffectPage} />
            <Route exact path="/useCallback" component={UseCallbackPage} />
            <Route exact path="/useMemo" component={UseMemoPage} />
            <Route exact path="/customHooks" component={CustomHooksPage} />
            <Route path="*" component={ErrorPage} />
          </Switch>
        </React.Suspense>
      </EnvironmentLayout>
    </Switch>
  </HashRouter>
);

export default Routes;
