import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material";

const NotFound = () => (
  <Container disableGutters component="main">
    <Box alignItems="center" justifyContent="center" display="flex">
      <Typography
        variant="h1"
        component="i"
        sx={(theme) => ({
          color: alpha(theme.palette.background.paper, 0.8),
          fontWeight: 900,
          mt: "40px"
        })}
      >
        Not Found :(
      </Typography>
    </Box>
  </Container>
);

export default NotFound;
