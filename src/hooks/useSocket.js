import { useEffect, useRef } from "react";
import SocketIo from "../utils/socket";

export default function useSocket({ state, dispatch }) {
  const socketRef = useRef(null);
  const jwt = state?.jwt?.access;

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

    socketRef.current.on("notification", (data) => {
      dispatch({ type: "ADD_NOTIFICATION", payload: data });
      // hide notification after 30s and reject notification after 1min if not click on it
      setTimeout(() => {
        dispatch({ type: "HIDE_NOTIFICATION", payload: data });
      }, 30000);
    });

    return () => {
      socketRef.current.off("notification");
      socketRef.current.disconnect();
      dispatch({ type: "SET_DISCONNECT" });
    };
  }, [jwt]);

  return { socketRef };
}
