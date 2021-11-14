import { useIsMounted } from "hooks";

const { createContext, useState } = require("react");

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const { isMounted } = useIsMounted();
  const login = (credentials) => {
    try {
      isMounted.current && setUser(credentials);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AppContext.Provider value={{ user, setUser, login }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
