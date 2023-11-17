import { createTheme, PaletteOptions } from "@mui/material/styles";

const getTheme = (mode: PaletteOptions["mode"]) =>
  createTheme({
    spacing: [0, 2, 3, 5, 8, 16],
    palette: {
      mode: mode,
      primary: {
        main: mode === "light" ? "#1976d2" : "#02b0fa",
      },
      secondary: {
        main: mode === "light" ? "#bdcfe1" : "#bdcfe1", //"#86B0D6",
        contrastText: 'rgba(0, 0, 0, 0.87)'
      },
      background: {
        default: "#476299",
        paper: mode === "light" ? "#fff9f2" : "#1E1E1D",
      },
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: 8
          }
        }
      },
      MuiContainer: {
        styleOverrides: {
          root: {
            borderRadius: 8
          }
        }
      },
    }
  });

export default getTheme;
