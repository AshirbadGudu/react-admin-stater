import { Loader } from "components/core";
import { useAppContext } from "contexts";
import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "routers";

const App = () => {
  const { user } = useAppContext();

  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        {user?.email ? <PrivateRoutes /> : <PublicRoutes />}
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
