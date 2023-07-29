import React, { useContext, useEffect, useState, useCallback } from "react";
import { Button } from "@kiwicom/orbit-components/lib/";
import { SocketContext } from "../../store";
import { IconCalendarEvent, IconMap, IconMapPin } from "@tabler/icons-react";
import { humanizeDate } from "../../helpers/dateTime";

function ModalConfirm() {
  const { socketRef, state, dispatch } = useContext(SocketContext);
  const [showModal, setShowModal] = useState(false);
  // make me a timer to show modal confirm for 1 minute
  const [timer, setTimer] = useState(0);
  // cancel order function callback
  const cancelOrder = useCallback(() => {
    setShowModal(false);
    dispatch({
      type: "HIDE_ORDER_NOTIFICATION",
    });
    socketRef?.current?.emit("decline-order-tg", {
      userId: state.orderNotification.from,
    });
    // clear timeout
    clearTimeout(timer);
  }, [
    state.orderNotification?.data?._id,
    state.orderNotification?.from,
    socketRef,
  ]);

  // create function to count down timer
  const countDown = () => {
    setTimer(timer - 1);
  };
  useEffect(() => {
    if (timer > 0) {
      setTimeout(() => {
        countDown();
      }, 1000);
    } else if (timer <= 0) {
      cancelOrder();
    }
    // clear timeout
    return () => clearTimeout(timer);
  }, [timer]);

  useEffect(() => {
    if (
      state.orderNotification?.show &&
      state.orderNotification?.title !== ""
    ) {
      showModalComfirm();
    }
    return () => null;
  }, [
    state.orderNotification?.show,
    state.orderNotification?.title,
    state.isConnect,
  ]);

  const showModalComfirm = () => {
    setShowModal(true);
    setTimer(60);
  };

  const acceptOrder = useCallback(() => {
    setShowModal(false);
    socketRef?.current?.emit("comfirm-order-tg", {
      plannerId: state.orderNotification.data?._id,
      userId: state.orderNotification.from,
    });
    console.log("accept order");
    dispatch({
      type: "HIDE_ORDER_NOTIFICATION",
    });

    // clear timeout
    clearTimeout(timer);
  }, [
    state.orderNotification?.data?._id,
    state.orderNotification?.from,
    socketRef,
  ]);

  const data = state.orderNotification?.data;
  return (
    <>
      {showModal && data && (
        // create modal that cover all screen
        // screen base on orbit component & container in main.css
        // write css with tailwind css
        // component containt SummaryPlanner & 2 button accept & decline order
        // website only mobile compatilbe max-width 768px
        <div className="fixed z-50 inset-0 ">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            {/* overlay background */}
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            {/* content */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            {/* modal */}
            <div
              className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6 lg-max-w[430px] sm:pb-4 sm:pt-4 sm:rounded-lg" // eslint-disable-line max-len
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
              style={{ width: "100%", minWidth: "320px" }}
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                {/* header */}
                <div className="">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-lg leading-6 font-medium text-gray-900"
                      id="modal-headline"
                    >
                      {state.orderNotification?.title}
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        {state.orderNotification?.body}
                      </p>
                    </div>
                  </div>
                </div>
                {/* body */}
                <div className="mt-5">
                  <div className="flex flex-col">
                    <div className="flex flex-row items-center">
                      <IconCalendarEvent size={24} />
                      <span className="ml-2 text-sm text-gray-500">
                        {humanizeDate(data?.startDate)}
                        {humanizeDate(data?.startDate) !==
                          humanizeDate(data?.endDate) && (
                          <> - {humanizeDate(data?.endDate)}</>
                        )}
                      </span>
                    </div>
                    <div className="flex flex-row items-center mt-2">
                      <IconMap size={24} />
                      <span className="ml-2 text-sm text-gray-500">
                        {data?.city}, Indonesia
                      </span>
                    </div>
                    <div className="flex flex-row items-center mt-2">
                      <IconMapPin size={24} />
                      <span className="ml-2 text-sm text-gray-500">
                        {data?.plan?.length <= 0 && (
                          <div>
                            <p>Rencana kosong</p>
                          </div>
                        )}
                        <div className="text-sm ml-2">
                          {data?.plan?.length > 0 &&
                            data?.plan.map((item, i) => (
                              <li key={i}>{item.distination.name}</li>
                            ))}
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* footer */}
              <div className="flex flex-col">
                <Button
                  type="primary"
                  fullWidth="true"
                  onClick={acceptOrder}
                  centered={true}
                >
                  Terima pesanan {timer}
                </Button>
                <Button
                  type="criticalSubtle"
                  fullWidth="true"
                  submit={true}
                  centered={true}
                  onClick={cancelOrder}
                  className="mt-2"
                >
                  Tolak pesanan
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ModalConfirm;
