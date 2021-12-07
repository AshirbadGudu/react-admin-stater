import { ThemeProvider } from "@mui/material";
import { Loader } from "components/core";
import { useAppContext } from "contexts";
import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "routers";
import useCustomTheme from "theme";
const App = () => {
  const { user } = useAppContext();
  const { theme } = useCustomTheme();
  return (
    <Suspense fallback={<Loader />}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          {user?.email ? <PrivateRoutes /> : <PublicRoutes />}
        </BrowserRouter>
      </ThemeProvider>
    </Suspense>
  );
};

export default App;
