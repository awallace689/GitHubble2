import { Routes, Route, Navigate } from "react-router-dom";

import App from "./App";
import SignIn from "./components/pages/SignIn/SignIn";
import NotFound from "./components/pages/NotFound/NotFound";
import Auth0Connect from "./components/integrations/auth0/Auth0Connect";
import GitHubConnect from "./components/integrations/github/GitHubConnect";

const routeNames = Object.freeze({
  base: "/",
  signIn: {
    base: "signin",
    github: "github",
  },
});

const routes = (
  <Routes>
    <Route path={routeNames.base} element={<App />}>
      <Route
        index
        element={<Navigate to={routeNames.signIn.base} replace />}
      />
      <Route path={routeNames.signIn.base} element={<SignIn />}>
        <Route index element={<Auth0Connect />} />
        <Route path={routeNames.signIn.github} element={<GitHubConnect />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);

export { routes, routeNames };
