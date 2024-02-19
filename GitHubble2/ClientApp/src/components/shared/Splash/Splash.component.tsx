import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { alpha } from "@mui/material";

type SplashProps = {
  header: JSX.Element;
  body: JSX.Element;
  additionalInfo?: JSX.Element;
};

const Splash = (props: SplashProps) => (
  <>
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
        {props.header}
      </Typography>
      <Typography variant="h4" component="p">
        {props.body}
      </Typography>
    </Container>
    {props.additionalInfo ? (
      <>
        <Divider sx={{ my: 5 }} />
        <Typography component="i">{props.additionalInfo}</Typography>
      </>
    ) : null}
  </>
);

export default Splash;
