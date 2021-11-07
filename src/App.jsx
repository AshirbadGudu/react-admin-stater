import { BrowserRouter } from "react-router-dom";
import { PublicRoutes } from "routers";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <PublicRoutes />
      </BrowserRouter>
    </>
  );
};

export default App;
