import { useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, PaletteOptions } from "@mui/material/styles";

import getTheme from "./mui-theme";

const App = () => {
  const [paletteMode, setPaletteMode] =
    useState<PaletteOptions["mode"]>("light");

  return (
    <ThemeProvider theme={getTheme(paletteMode)}>
      <CssBaseline />
      <Navbar setPaletteMode={setPaletteMode} paletteMode={paletteMode} />
      <Outlet />
    </ThemeProvider>
  );
};

export default App;
