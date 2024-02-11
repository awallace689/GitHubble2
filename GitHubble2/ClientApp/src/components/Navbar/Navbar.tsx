import { Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import { PaletteOptions, useTheme } from "@mui/material/styles";

import logo from "../../media/favicon.png";

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

  return (
    <AppBar
      position="sticky"
      sx={[
        (theme) => ({
          backgroundColor:
            theme.palette.mode === "light"
              ? "secondary.main"
              : "background.paper",
          height: "80px",
          alignItems: "center",
          flexDirection: "row",
          p: 3,
          borderRadius: 0,
        }),
        theme.palette.mode === "light" && {
          color: "secondary.contrastText",
        },
      ]}
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
    </AppBar>
  );
};

export default Navbar;
