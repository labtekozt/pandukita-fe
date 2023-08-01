import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../store";
import { humanizeTime } from "../../helpers/dateTime";

function Notif() {
  const { state, dispatch } = useContext(GlobalContext);
  const [showNotif, setShowNotif] = useState(false);
  // get current url path
  const currentPath = window.location.pathname;

  const handleShowNotif = () => {
    setShowNotif(true);
    setTimeout(() => {
      setShowNotif(false);
      dispatch({
        type: "HIDE_NOTIFICATION",
      });
    }, 3000);
  };

  const handleHideNotif = () => {
    setShowNotif(false);
    dispatch({
      type: "HIDE_NOTIFICATION",
    });
  };

  useEffect(() => {
    if (
      state.notification.show &&
      state.notification.body !== "" &&
      currentPath !== "/chat"
    ) {
      handleShowNotif();
    }
    return () => null;
  }, [state.notification.body]);

  return (
    <>
      {showNotif && (
        <div className="flex absolute align-item-center mt-4 px-2 z-50 flex-col place-items-center">
          <div className="flex bg-white flex-row notif shadow shadow-lg shadow-lg rounded-md overflow-hidden">
            <div className="flex w-2 bg-[green]"></div>
            <div className="flex-1 pt-2 pb-2 pl-2 mr-[100px]">
              <p className="text-sm text-[#4d4d4d] flex">
                {state.notification?.title}
              </p>
              <h1 className="text-sm text-gray-600 mt-2">
                {state.notification?.body} at{" "}
                {humanizeTime(state.notification?.data?.time)}
              </h1>
              <p className="text-gray-400 text-xs md:text-sm font-light">
                {state.notification?.data?.message}
              </p>
            </div>
            <div
              onClick={() => handleHideNotif()}
              className="cursor-pointer border-gray-100 p-3 flex place-items-top"
            >
              <p className="text-gray-400 font-bold text-xs">X</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Notif;
