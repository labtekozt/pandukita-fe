import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../store";

const ProtectedRoute = () => {
  const { state } = useContext(GlobalContext);
  console.log(!state.login);
  if (!state.login) {
    return <Navigate to={"/login"} />;
  }
  return <Outlet />;
};

export const ProtectedLoginRoute = () => {
  const { state } = useContext(GlobalContext);
  if (state.login) {
    return <Navigate to={"/"} />;
  }
  return <Outlet />;
};

export const NonLoginRoute = () => <Outlet />;

export default ProtectedRoute;
