import { createContext, useContext } from "react";
import useApi from "../hooks/useApi";
const APIContext = createContext(null);
export default function APIContextProvider({ children }) {
  const api = useApi();
  return <APIContext.Provider value={api}>{children}</APIContext.Provider>;
}

export const useApiContextHook = () => {
  const context = useContext(APIContext);
  if (!context)
    throw new Error("ApiContext must be wrapped inside API Context Provider");
  return context;
};
