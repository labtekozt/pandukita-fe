import { useContext, useState } from "react";
import { getUser, setCredentials } from "../../helpers/setCredentials";
import { axiosAuth } from "../../services/axios/index";
import validator from "../../helpers/validator";
import { GlobalContext } from "../../store";

export default function useLogin() {
  const initialState = {
    loading: false,
    error: null,
    data: {
      email: { value: "", error: null },
      password: { value: "", error: null },
    },
  };
  const { dispatch } = useContext(GlobalContext);
  const [state, setState] = useState(initialState);

  const validate = (data) => {
    const { email, password } = data;
    const emailError = validator.emailValidator(email);
    const passwordError = validator.passwordValidator(password);

    if (emailError || passwordError) {
      dispatch({
        type: "SHOW_TOAST",
        payload: { message: emailError || passwordError, type: "error" },
      });
      setState({
        ...state,
        data: {
          ...state.data,
          email: { value: email, error: emailError },
          password: { value: password, error: passwordError },
        },
      });
      return false;
    }
    return true;
  };

  const login = async (email, password) => {
    try {
      // validate data here
      const isValid = validate({ email, password });
      if (!isValid) return;
      const response = await axiosAuth.post("/login", { email, password });

      setCredentials(response.data);

      dispatch({
        type: "LOGIN",
      });
      dispatch({
        type: "SHOW_TOAST",
        payload: { message: "Login Successfully", type: "success" },
      });
      dispatch({
        type: "SET_USER",
        payload: await getUser(),
      });

      setState(initialState);
    } catch (error) {
      dispatch({
        type: "SHOW_TOAST",
        payload: { message: "Login Failed", type: "error" },
      });
      setState({ loading: false, error: error, data: null });
    }
  };

  return { login, setState, ...state };
}
