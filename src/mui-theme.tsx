import { createTheme, PaletteOptions } from "@mui/material/styles";

const getTheme = (mode: PaletteOptions["mode"]) =>
  createTheme({
    spacing: [0, 2, 3, 5, 8],
    palette: {
      mode: mode,
      primary: {
        main: "#1976d2",
      },
      secondary: {
        main: mode === "light" ? "#bdcfe1" : "#86B0D6",
        contrastText: 'rgba(0, 0, 0, 0.87)'
      },
      background: {
        default: "#476299",
        paper: mode === "light" ? "#fff9f2" : "#1E1E1D",
      },
    },
  });

export default getTheme;
