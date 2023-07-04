const reducer = (state, action) => {
  let py = action.payload;
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        login: true,
      };

    case "LOGOUT":
      return {
        ...state,
        login: false,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "SET_LOADING_FALSE":
      return {
        ...state,
        loading: false,
      };

    case "SHOW_TOAST":
      return {
        ...state,
        toast: { ...py, show: true },
      };
    case "HIDE_TOAST":
      return {
        ...state,
        toast: {
          message: "",
          show: false,
        },
      };
    case "SET_USER":
      return {
        ...state,
        user: py,
      };
    case "REMOVE_USER":
      return {
        ...state,
        user: {},
      };

    default:
      return state;
  }
};
export default reducer;
