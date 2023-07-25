import { createContext, useReducer } from "react";

import reducer from "./reducer";
import getCredentials, { getUser } from "../helpers/getCredentials";
import useSocket from "../hooks/useSocket";

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
  notification: {
    type: "",
    title: "",
    body: "",
    show: false,
    data: {},
  },
  isConnect: false,
};

export const GlobalContext = createContext(initialState);
export const SocketContext = createContext(null);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { socketRef } = useSocket({ state, dispatch });
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      <SocketContext.Provider value={{ socketRef, state }}>
        {children}
      </SocketContext.Provider>
    </GlobalContext.Provider>
  );
};
