import axiosApiInstance from "../axios/axiosApi";
import { removeCookie } from "../../helpers/cookies";
import getCredentials from "../../helpers/getCredentials";

export async function logout(dispatch) {
  try {
    const refresh = await getCredentials();
    await axiosApiInstance.post("/logout", { refresh: refresh.refresh });
    dispatch({ type: "LOGOUT" });
    dispatch({
      type: "SHOW_TOAST",
      payload: { message: "Logout Successfully", type: "success" },
    });
    removeCookie("keys");
    return true;
  } catch (error) {
    dispatch({
      type: "SHOW_TOAST",
      payload: { message: "Logout Failed", type: "error" },
    });
    return false;
  }
}
