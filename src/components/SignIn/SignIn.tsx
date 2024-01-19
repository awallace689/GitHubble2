import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import MuiLink from "@mui/material/Link";
import { alpha } from "@mui/material";

import Page from "../Page/Page";

import { oauthUrl } from "../../secrets";
import styles from "./SignIn.module.css";

const SignIn = () => {
  return (
    <Page>
      <Container
        disableGutters
        component="main"
        sx={(theme) => ({
          backgroundColor: alpha(theme.palette.secondary.main, 0.5),
          [theme.breakpoints.up("md")]: {
            py: "100px",
            px: "50px",
          },
          [theme.breakpoints.down("md")]: {
            py: "50px",
            px: 5,
          },
        })}
      >
        <Typography variant="h3" sx={{ mb: "40px" }}>
          Welcome to <span id={styles["githubble-bold"]}>GitHubble</span>
        </Typography>
        <Typography variant="h4" component="p">
          <MuiLink
            href={oauthUrl}
            underline="hover"
            sx={{ fontWeight: 900 }}
          >
            Connect
          </MuiLink>{" "}
          to{" "}
          <MuiLink
            href="https://www.github.com"
            underline="hover"
            target="_blank"
            rel="noreferrer"
            sx={{ fontWeight: 900 }}
          >
            GitHub
          </MuiLink>{" "}
          to begin.
        </Typography>
      </Container>
      <Divider sx={{ my: 5 }} />
      <Typography sx={{ fontStyle: "italic" }}>
        Connecting will redirect you GitHub's secure sign-in page. Upon
        connecting, you will be able to access the rest of the website!
      </Typography>
    </Page>
  );
};

export default SignIn;
