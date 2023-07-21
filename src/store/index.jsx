import { createContext, useReducer } from "react";

import reducer from "./reducer";
import getCredentials, { getUser } from "../helpers/getCredentials";

const initialState = {
  login: (await getCredentials()) === null ? false : true,
  user: (await getCredentials()) === null ? {} : await getUser(),
  jwt: (await getCredentials()) === null ? null : await getCredentials(),
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
