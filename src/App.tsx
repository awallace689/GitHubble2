import { useState } from "react";
import { ThemeProvider, PaletteOptions } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import getTheme from './mui-theme'
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';

import Page from "./components/Page/Page";
import "./App.css";

function App() {
  const [mode] = useState<PaletteOptions["mode"]>("light");

  return (
    <ThemeProvider theme={getTheme(mode)}>
      <CssBaseline />
      <AppBar position='sticky'>
        <Typography
          variant="h4"
          sx={{
            backgroundColor: 'secondary.main',
            color: 'secondary.contrastText',
            fontWeight: 'bold'
          }}>
          GitHubble
        </Typography>
      </AppBar>
      <Page>
        <p>whaddup</p>
      </Page>
    </ThemeProvider>
  );
}

export default App;
