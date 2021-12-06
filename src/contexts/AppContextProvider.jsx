import { useMediaQuery } from "@mui/material";
import { useIsMounted } from "hooks";

const { createContext, useState, useEffect } = require("react");

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const { isMounted } = useIsMounted();
  const login = (credentials) => {
    try {
      isMounted.current && setUser(credentials);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    isMounted.current && setIsDarkTheme(prefersDarkMode);
  }, [prefersDarkMode, isMounted]);

  return (
    <AppContext.Provider
      value={{ user, setUser, login, isDarkTheme, setIsDarkTheme }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
