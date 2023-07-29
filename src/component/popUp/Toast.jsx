import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../store";

function Toast() {
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
        <div className="flex absolute align-item-center mt-4 px-2 z-50 flex-col place-items-center ">
          <div className="flex bg-white flex-row notif shadow shadow-lg shadow-lg rounded-md overflow-hidden">
            <div
              className="flex w-2 bg-[green]"
              style={{
                backgroundColor:
                  state.toast.type === "success" ? "#4caf50" : "#f44336",
              }}
            ></div>
            <div className="flex-1 pt-2 pb-2 pl-2 mr-[100px] ">
              <p
                className="text-gray-400 text-xs md:text-sm font-light"
                style={{
                  color: "#4d4d4d",
                  fontSize: "18px",
                  fontWeight: "400",
                  lineHeight: "16px",
                  textAlign: "center",
                  padding: "10px",
                  justifyContent: "center",
                  justifySelf: "center",
                }}
              >
                {state.toast.message && state.toast.message}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Toast;
