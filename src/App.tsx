import { useState } from "react";

import Navbar from "./components/Navbar/Navbar";

import CssBaseline from "@mui/material/CssBaseline";
import getTheme from "./mui-theme";
import { ThemeProvider, PaletteOptions } from "@mui/material/styles";

import { Outlet } from "react-router-dom";

import "./App.css";

const App = () => {
  const [paletteMode, setPaletteMode] =
    useState<PaletteOptions["mode"]>("light");

  return (
    <ThemeProvider theme={getTheme(paletteMode)}>
      <CssBaseline />
      <Navbar setPaletteMode={setPaletteMode} paletteMode={paletteMode}/>
      <Outlet />
    </ThemeProvider>
  );
};

export default App;
