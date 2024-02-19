import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import { CircularProgress } from "@mui/material";

import { PaletteOptions, useTheme } from "@mui/material/styles";
import logo from "../../../media/favicon.png";
import styles from "./Navbar.module.css";

type NavbarProps = {
  setPaletteMode: React.Dispatch<React.SetStateAction<PaletteOptions["mode"]>>;
  paletteMode: PaletteOptions["mode"];
};

const Navbar = (props: NavbarProps) => {
  const onPaletteModeChanged = (
    _: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => props.setPaletteMode(checked ? "dark" : "light");

  const theme = useTheme();
  const { isAuthenticated, isLoading, loginWithRedirect, logout } = useAuth0();
  const [showLogin, setShowLogin] = useState<boolean>(false);

  useEffect(() => {
    if (!isAuthenticated) {
      setShowLogin(true);
      return;
    }
    setShowLogin(false);
  }, [isAuthenticated, isLoading]);

  const loginLogout = (
    <>
      {showLogin ? (
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        <Button onClick={() => loginWithRedirect()}>Sign In</Button>
      ) : (
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        <Button onClick={() => logout()}>Log Out</Button>
      )}
    </>
  );

  return (
    <AppBar
      role="navigation"
      aria-label="navigation bar"
      position="sticky"
      sx={[
        (theme) => ({
          backgroundColor:
            theme.palette.mode === "light"
              ? "secondary.main"
              : "background.paper",
          height: "80px",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
          p: 3,
          borderRadius: 0,
        }),
        theme.palette.mode === "light" && {
          color: "secondary.contrastText",
        },
      ]}
    >
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Link id={styles.logo} to={"/signin"}>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Box
              data-testid="navbar-brand-logo"
              component="img"
              src={logo}
              sx={{
                backgroundColor: "background.default",
                height: "100%",
                borderRadius: 1,
              }}
            ></Box>
            <Typography
              data-testid="navbar-brand-text"
              variant="h4"
              component="span"
              sx={{
                fontWeight: 900,
                ml: 4,
              }}
            >
              GitHubble
            </Typography>
          </Box>
        </Link>
        <Switch defaultChecked={false} onChange={onPaletteModeChanged} />
      </Box>
      {isLoading ? <CircularProgress /> : loginLogout}
    </AppBar>
  );
};

export default Navbar;
