import { useContext } from "react";
import { AppContext } from "./AppContextProvider";

const useAppContext = () => {
  const { user, setUser } = useContext(AppContext);
  return { user, setUser };
};

export default useAppContext;
