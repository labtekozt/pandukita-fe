import axios from "../../services/axios/index.js";
import { useContext, useState } from "react";
import validator from "../../helpers/validator/index.js";
import { getUser, setCredentials } from "../../helpers/setCredentials.js";
import { GlobalContext } from "../../store/index.jsx";

export default function useRegister() {
  const initialState = {
    loading: false,
    error: null,

    username: { value: "", error: null },
    email: { value: "", error: null },
    password: { value: "", error: null },
    password2: { value: "", error: null },
    phone: { value: "", error: null },
  };
  const [state, setState] = useState(initialState);
  const { dispatch } = useContext(GlobalContext);

  const validate = (data) => {
    const { username, email, password, password2, phone } = data;
    const usernameError = validator.usernameValidator(username);
    const emailError = validator.emailValidator(email);
    const passwordError = validator.passwordValidator(password);
    const password2Error = validator.ComparePassword(password2, password);
    const phoneError = validator.phoneValidator(phone);

    if (usernameError) {
      setState({
        ...state,
        error: usernameError,
        username: { value: username, error: usernameError },
      });
      return false;
    }
    if (emailError) {
      setState({
        ...state,
        error: emailError,
        email: { value: email, error: emailError },
      });
      return false;
    }
    if (passwordError) {
      setState({
        ...state,
        error: passwordError,
        password: { value: password, error: passwordError },
      });
      return false;
    }
    if (password2Error) {
      setState({
        ...state,
        error: password2Error,
        password2: { value: password2, error: password2Error },
      });
      return false;
    }
    if (phoneError) {
      setState({
        ...state,
        error: phoneError,
        phone: { value: phone, error: phoneError },
      });

      return false;
    }
    return true;
  };

  const register = async (data) => {
    try {
      // validate data here
      const isValid = validate(data);
      if (!isValid) return;
      await axios.post("/register", data);
      //   login request and set credentials
      dispatch({
        type: "SHOW_TOAST",
        payload: { message: "Register Success", type: "success" },
      });

      const loginResponse = await axios.post("/login", {
        email: data.email,
        password: data.password,
      });

      setState(initialState);
      setCredentials(loginResponse.data);
      dispatch({
        type: "SET_USER",
        payload: await getUser(),
      });
    } catch (error) {
      console.log(error);
      setState({ ...initialState, error: error.message });
    }
  };

  return { register, setState, ...state };
}
