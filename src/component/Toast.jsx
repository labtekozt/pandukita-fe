/* eslint-disable react-hooks/exhaustive-deps */
import  { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../store";

const Toast = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const [showToast, setShowToast] = useState(false);
  useEffect(() => {
    if (state.toast.show && state.toast.message) {
      showToastMessage();
    }
    return () => null;
  }, [state.toast.message]);

  const showToastMessage = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
      dispatch({
        type: "HIDE_TOAST",
        payload: { message: "", show: false },
      });
    }, 3000);
  };

  return (
    <>
      {showToast && (
        <div
          className="toast"
          style={{
            // create animated
            animation: "fadeIn ease-in 0.3s, fadeOut ease-out 0.3s 2.5s",
            // create position
            // center position
            left: "50%",
            transform: "translateX(-50%)",
            // top position
            // create animation delay
            animationDelay: "0.3s, 2.5s",
            // create animation iteration
            animationIterationCount: 1,
            // create animation direction
            position: "fixed",
            top: "20px",
            width: "75%",
            // create box shadow
            boxShadow: "0 0 10px rgba(0,0,0,0.3)",

            zIndex: 1,
            backgroundColor:
              state.toast.type === "success" ? "#4caf50" : "#f44336",
            color: "#fff",
            padding: "16px",
            borderRadius: "8px",
            fontSize: "16px",
            textAlign: "center",
          }}
        >
          {state.toast.message && state.toast.message}
        </div>
      )}
    </>
  );
};

export default Toast;
