import { createTheme } from "@mui/material/";
import { purple } from "@mui/material/colors";
const boxShadow = "#6a1b9a3d 0px 8px 16px 0px";
const CustomTheme = createTheme({
  palette: {
    primary: {
      main: purple[700],
    },
  },
  typography: {
    fontFamily: '"Raleway", sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          paddingBottom: "8px",
          paddingTop: "8px",
        },
        contained: {
          boxShadow,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          boxShadow,
        },
      },
    },
  },
});

export default CustomTheme;
