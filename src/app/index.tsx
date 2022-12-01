import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';
import { Layout } from 'components/Layout';
import { UIProvider } from 'app/UIProvider';
import { Routes } from 'constants/routes';
import { lazy } from 'react';

const Home = lazy(() =>
  import('pages/Home').then((module) => ({
    default: module.Home,
  }))
);

const Login = lazy(() =>
  import('pages/Login').then((module) => ({
    default: module.Login,
  }))
);

const SignUp = lazy(() =>
  import('pages/SignUp').then((module) => ({
    default: module.SignUp,
  }))
);

export const App = () => (
  <UIProvider>
    <BrowserRouter>
      <Switch>
        <Route path={Routes.HOME} element={<Layout children={<Home />} />} />

        <Route path={Routes.LOGIN} element={<Layout children={<Login />} />} />

        <Route
          path={Routes.SIGN_UP}
          element={<Layout children={<SignUp />} />}
        />
      </Switch>
    </BrowserRouter>
  </UIProvider>
);
