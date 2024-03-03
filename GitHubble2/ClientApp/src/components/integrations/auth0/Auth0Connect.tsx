import MuiLink from "@mui/material/Link";
import { useAuth0 } from "@auth0/auth0-react";

import styles from "./Auth0Connect.module.css";
import Splash from "../../shared/Splash/Splash";

const Auth0Connect = () => {
  const {loginWithRedirect} = useAuth0();

  const header = (
    <>
      Welcome to <span id={styles["githubble-bold"]}>GitHubble</span>!
    </>
  );

  const body = (
    <>
      <MuiLink
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onClick={() => loginWithRedirect()}
        className={styles["mui-button-link-align-fix"]}
        component="button"
        underline="hover"
        rel="noreferrer"
        sx={{ fontWeight: 900 }}
      >
        Sign in
      </MuiLink>{" "}
      with{" "}
      <MuiLink
        href="https://auth0.com"
        underline="hover"
        target="_blank"
        rel="noreferrer"
        sx={{ fontWeight: 900 }}
      >
        Auth0
      </MuiLink>{" "}
      to begin.
    </>
  );

  const additionalInfo = (
    <>
      Connecting will redirect you GitHub's secure sign-in page. Upon
      connecting, you will be able to access the rest of the website!
    </>
  );

  return (
    <Splash header={header} body={body} additionalInfo={additionalInfo} />
  );
};

export default Auth0Connect;
