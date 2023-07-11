import { createContext, useReducer } from "react";
import reducer from "./reducers";

const initialState = {
  distination: "",
  activity: "",
  date: "",
  time: "",
  // when use this initial state, make sure to use this format
  // timeStart: "00:00",
  // timeEnd: "00:00",
timeStart: "00:00",
  timeEnd: "00:00",
};

export const PlanContext = createContext(initialState);

export const PlanProvaider = ({ children }) => {
  const [plan, handleChange] = useReducer(reducer, initialState);
 
  return (
    <PlanContext.Provider value={{ plan, handleChange }}>
      {children}
    </PlanContext.Provider>
  );
};
