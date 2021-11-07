import { useAppContext } from "contexts";
import { BrowserRouter } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "routers";

const App = () => {
  const { user } = useAppContext();

  return (
    <>
      <BrowserRouter>
        {user ? <PrivateRoutes /> : <PublicRoutes />}
      </BrowserRouter>
    </>
  );
};

export default App;
