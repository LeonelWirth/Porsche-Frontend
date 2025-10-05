import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#111111" },
    secondary: { main: "#1976d2" },
    background: { default: "#fafafa" }
  },
  shape: { borderRadius: 12 },
  components: {
    MuiButton: {
      defaultProps: { variant: "contained" },
      styleOverrides: { root: { textTransform: "none", borderRadius: 12 } }
    },
    MuiCard: { styleOverrides: { root: { borderRadius: 16 } } },
    MuiContainer: { defaultProps: { maxWidth: "lg" } }
  },
  typography: {
    fontFamily: [
      "Inter",
      "system-ui",
      "-apple-system",
      "Segoe UI",
      "Roboto",
      "Helvetica",
      "Arial",
      "sans-serif"
    ].join(",")
  }
});

export default theme;
