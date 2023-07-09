import React, { createContext, useReducer } from "react";

import reducer from "./reducer";
import getCredentials, { getUser } from "../helpers/setCredentials";

const initialState = {
  login: (await getCredentials()) === null ? false : true,
  user: (await getCredentials()) === null ? {} : await getUser(),
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
  console.log(state);
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
