import { useState } from "react";
import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, PaletteOptions } from "@mui/material/styles";

import getTheme from "./mui-theme";
import Navbar from "./components/shared/Navbar/Navbar";

const App = () => {
  const [paletteMode, setPaletteMode] =
    useState<PaletteOptions["mode"]>("light");
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={getTheme(paletteMode)}>
        <CssBaseline />
        <Navbar setPaletteMode={setPaletteMode} paletteMode={paletteMode} />
        <Outlet />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
