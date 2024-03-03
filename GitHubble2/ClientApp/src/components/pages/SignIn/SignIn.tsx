import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { Outlet, useLocation, useNavigate } from "react-router-dom";

import Page from "../../shared/Page/Page";
import SplashLoading from "../../shared/Splash/SplashLoading";
import { routeNames } from "../../../routes";

const SignIn = () => {
  const { isLoading, isAuthenticated } = useAuth0();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const githubRoute =
    routeNames.base + routeNames.signIn.base + "/" + routeNames.signIn.github;
  const auth0Route = routeNames.base + routeNames.signIn.base;

  useEffect(() => {
    if (isAuthenticated && pathname !== githubRoute) {
      navigate(githubRoute);
      return;
    } else if (!isLoading && !isAuthenticated && pathname === githubRoute) {
      navigate(auth0Route);
      return;
    }
  }, [githubRoute, navigate, pathname, isAuthenticated, auth0Route, isLoading]);

  return <Page>{isLoading ? <SplashLoading /> : <Outlet />}</Page>;
};

export default SignIn;
