import { useContext } from "react";
import { AppContext } from "./AppContextProvider";

const useAppContext = () => {
  const { user, setUser, login, isDarkTheme, setIsDarkTheme } =
    useContext(AppContext);

  return { user, setUser, login, isDarkTheme, setIsDarkTheme };
};

export default useAppContext;
