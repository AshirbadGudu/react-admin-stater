import { ThemeProvider } from "@mui/material";
import { Loader } from "components/core";
import { useAppContext } from "contexts";
import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "routers";
import { CustomTheme, CustomDarkTheme } from "theme";
const App = () => {
  const { user, isDarkTheme } = useAppContext();

  return (
    <Suspense fallback={<Loader />}>
      <ThemeProvider theme={isDarkTheme ? CustomDarkTheme : CustomTheme}>
        <BrowserRouter>
          {!user?.email ? <PrivateRoutes /> : <PublicRoutes />}
        </BrowserRouter>
      </ThemeProvider>
    </Suspense>
  );
};

export default App;
