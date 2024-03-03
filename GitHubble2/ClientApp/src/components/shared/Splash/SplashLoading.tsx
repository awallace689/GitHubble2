import Container from "@mui/material/Container";
import CircularProgress from "@mui/material/CircularProgress";
import { alpha } from "@mui/material";

const SplashLoading = () => (
  <>
    <Container
      data-testid="splash-loading"
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
        height: "338px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
      })}
    >
      <CircularProgress />
    </Container>
  </>
);

export default SplashLoading;
