import { createTheme } from "@mui/material/";
import { purple } from "@mui/material/colors";
const boxShadow = "#6a1b9a3d 0px 8px 16px 0px";
const Theme = {
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
};

const CustomTheme = createTheme({
  ...Theme,
  components: {
    ...Theme.components,
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff",
          color: "#000",
        },
      },
    },
  },
});
const CustomDarkTheme = createTheme({
  ...Theme,
  palette: {
    ...Theme.palette,
    mode: "dark",
  },
});

export { CustomTheme, CustomDarkTheme };
