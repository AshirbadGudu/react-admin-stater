import { useContext } from "react";
import { AppContext } from "./AppContextProvider";

const useAppContext = () => {
  const { user, setUser, login } = useContext(AppContext);

  return { user, setUser, login };
};

export default useAppContext;
