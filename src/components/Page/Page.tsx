import { ReactNode } from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";

type PageProps = {
  children: ReactNode;
};

const Page = (props: PageProps) => (
  <Container>
    <Paper
      elevation={2}
      sx={(theme) => ({
        my: 4,
        [theme.breakpoints.up("md")]: {
          p: 5,
        },
        [theme.breakpoints.down("md")]: {
          p: 4,
        },
      })}
    >
      {props.children}
    </Paper>
  </Container>
);

export default Page;
