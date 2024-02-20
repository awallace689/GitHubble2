import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

import { routes, routeNames } from "./routes";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENTID}
      authorizationParams={{
        redirect_uri:
          window.location.origin + routeNames.base + routeNames.signIn.base,
      }}
      skipRedirectCallback={
        window.location.pathname ===
          routeNames.base +
          routeNames.signIn.base +
          "/" +
          routeNames.signIn.github
      }
    >
      <BrowserRouter>{routes}</BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
);
