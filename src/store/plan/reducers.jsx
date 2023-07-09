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
const reducer = (state, action) => {
  if (action.id === "RESET") {
    return initialState;
  }
  let { id, value } = action;
  return {
    ...state,
    [id]: value,
  };
};

export default reducer;
