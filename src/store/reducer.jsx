const reducer = (state, action) => {
  let py = action.payload;
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        jwt: py.jwt,
        user: py.user,
        login: true,
      };

    case "LOGOUT":
      return {
        ...state,
        jwt: null,
        user: {},
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
    case "ADD_NOTIFICATION":
      return {
        ...state,
        notification: {
          ...state.notification,
          ...py,
          show: true,
        },
      };
    case "HIDE_NOTIFICATION":
      return {
        ...state,
        notification: {
          ...state.notification,
          show: false,
        },
      };
    case "SET_CONNECT":
      return {
        ...state,
        isConnect: true,
      };
    case "SET_DISCONNECT":
      return {
        ...state,
        isConnect: false,
      };

    default:
      return state;
  }
};
export default reducer;
