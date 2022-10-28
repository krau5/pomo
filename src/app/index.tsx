import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';
import { Layout } from 'components/Layout';
import { Home } from 'pages/Home';
import { Login } from 'pages/Login';
import { SignUp } from 'pages/SignUp';
import { AppProvider } from 'app/AppProvider';
import { UIProvider } from 'app/UIProvider';
import { Routes } from 'constants/routes';

export const App = () => (
  <UIProvider>
    <AppProvider>
      <BrowserRouter>
        <Switch>
          <Route
            path={Routes.HOME}
            element={<Layout children={<Home />} />}
          />

          <Route
            path={Routes.LOGIN}
            element={<Layout children={<Login />} />}
          />

          <Route
            path={Routes.SIGN_UP}
            element={<Layout children={<SignUp />} />}
          />
        </Switch>
      </BrowserRouter>
    </AppProvider>
  </UIProvider>
);
