import { createContext, useReducer } from "react";

import reducer from "./reducer";
import getCredentials, { getUser } from "../helpers/getCredentials";

const initialState = {
  login: (async ()=>await getCredentials())() === null ? false : true,
  user: (async ()=>await getCredentials())() === null ? {} : (async ()=>await getUser())(),
  loading: false,
  toast: {
    show: false,
    message: "",
    type: "success",
  },
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
