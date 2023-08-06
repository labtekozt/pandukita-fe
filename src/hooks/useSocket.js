import { useEffect, useRef, useCallback } from "react";
import SocketIo from "../utils/socket";
import getCredentials from "../helpers/getCredentials";

export default function useSocket({ state, dispatch }) {
  const socketRef = useRef(null);
  const jwt = state?.jwt?.access;

  const handleReceiveNotification = useCallback((data) => {
    dispatch({ type: "ADD_NOTIFICATION", payload: data });
  }, []);

  const handleReceiveOrderNotification = useCallback((data) => {
    dispatch({ type: "ADD_ORDER_NOTIFICATION", payload: data });
  }, []);

  useEffect(() => {
    if (!jwt) return;
    socketRef.current = SocketIo(jwt);
    if (!socketRef.current) return;
    socketRef.current.userId = state?.user?.id;
    socketRef.current.connect();
    socketRef.current.on("connect", () => {
      dispatch({ type: "SET_CONNECT" });
    });
    socketRef.current.on("disconnect", () => {
      dispatch({ type: "SET_DISCONNECT" });
    });

    socketRef.current.on("notification", handleReceiveNotification);
    socketRef.current.on("order-notification", handleReceiveOrderNotification);
    socketRef.current.on("wait-order", (data) => {
      dispatch({ type: "ADD_WAIT_ORDER", payload: data });
    });

    socketRef.current.on("connect_error", (err) => {
      if (err.message === "jwt expired") {
        const jwtNew = getCredentials();
        socketRef.current = SocketIo(jwtNew.access);
        if (jwtNew) {
          dispatch({ type: "SET_JWT", payload: jwtNew.access });
        }
        return;
      }
    });

    return () => {
      socketRef.current.disconnect();
      socketRef.current.removeAllListeners();

      dispatch({ type: "SET_DISCONNECT" });
    };
  }, [jwt]);

  return { socketRef };
}
