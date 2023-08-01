import { useCallback, useContext, useEffect, useState } from "react";
import { Button } from "@kiwicom/orbit-components/lib/";
import { SocketContext } from "../../store";

function ModalWaitOrder() {
  const { socketRef, state, dispatch } = useContext(SocketContext);
  const [showModal, setShowModal] = useState(false);
  // make me a timer to show modal confirm for 1 minute
  const [timer, setTimer] = useState(null);

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
      setShowModal(false);
      dispatch({
        type: "HIDE_WAIT_ORDER",
      });
    }
    // clear timeout
    return () => clearTimeout(timer);
  }, [timer]);

  useEffect(() => {
    if (state.waitOrder.show && state.waitOrder.title !== "") {
      showModalComfirm();
      setTimer(60);
    }
    return () => null;
  }, [state.waitOrder.show, state.waitOrder.title, state.isConnect]);

  const showModalComfirm = () => {
    setShowModal(true);
    setTimer(60);
  };

  const hideModalComfirm = () => {
    setShowModal(false);
    setTimer(0);
  };

  const data = useCallback(() => {
    return state?.waitOrder;
  }, [state.waitOrder?.title, state.waitOrder?.body, state.waitOrder?.show]);

  return (
    <>
      {showModal && data()?.title && (
        // create modal that cover all screen
        // screen base on orbit component & container in main.css
        // write css with tailwind css
        //  component only contain data title[for name modal], body[description], data.accept[true/false/undefined]
        // if data.accept === true show tourGuide accept & if data.accept === false show tourGuide decline message
        // if data.accept === undefined show loading with timer 60 sec
        // website only mobile compatilbe max-width 768px
        //
        // 1. create modal that cover all screen
        // 2. client cant click outside modal to close modal only click button
        // 3. data.accept determine what to show in modal body

        <div
          className="fixed z-50 inset-0 "
          style={{
            zIndex: "9999",
            maxHeight: "100vh",
            maxWidth: "100vw",
            opacity: "1",
            backgroundColor: "rgba(0, 0, 0, 0.1)",
          }}
        >
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            {/* <!-- background modal --> */}
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            {/* <!-- This element is to trick the browser into centering the modal contents. --> */}
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
            &#8203;
            {/* <!-- modal --> */}
            {/* cover all screen maxWitdh 720px */}
            <div
              className="inline-block align-bottom bg-white rounded-lg text-left shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-720px sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
              style={{
                maxWidth: "460px",
                width: "100%",
                height: "100%",
                zIndex: "9999",
              }}
            >
              {/* <!-- modal header --> */}
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  {/* <!-- modal title --> */}
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-lg leading-6 font-medium text-gray-900"
                      id="modal-headline"
                    >
                      {data().title}
                    </h3>
                    {/* <!-- modal body --> */}
                    <div className="mt-2">
                      <p className="text-sm leading-5 text-gray-500">
                        {data().body}
                      </p>
                      {/* show timer  */}
                      {timer > 0 && (
                        <p className="text-sm leading-5 text-gray-500">
                          {timer}
                        </p>
                      )}
                      {/* show accept or decline button */}
                      {data().accept !== undefined && (
                        <div className="mt-4">
                          <Button
                            onClick={() => {
                              hideModalComfirm();
                              dispatch({
                                type: "HIDE_WAIT_ORDER",
                              });
                              // reset timer
                              setTimer(0);
                              // return to planner/$id
                              window.location.href = `/`;
                            }}
                            className="mr-2"
                            type="secondary"
                            size="small"
                            fullWidth
                            centered
                          >
                            Close
                          </Button>
                        </div>
                      )}
                      {data().accept === false && (
                        <div className="mt-4">
                          <Button
                            onClick={() => {
                              hideModalComfirm();
                              dispatch({
                                type: "HIDE_WAIT_ORDER",
                              });
                              // reset timer
                              setTimer(0);
                              // reaload page and set state with id of tour
                              window.location.reload();
                            }}
                            className="mr-2"
                            type="secondary"
                            size="small"
                            fullWidth
                            centered
                          >
                            Get New Tour
                          </Button>
                        </div>
                      )}
                      {data().accept === true && (
                        <div className="mt-4">
                          <Button
                            onClick={() => {
                              hideModalComfirm();
                              dispatch({
                                type: "HIDE_WAIT_ORDER",
                              });
                              // reset timer
                              setTimer(0);
                              // set to chat page;
                              window.location.href = `/chat`;
                            }}
                            className="mr-2"
                            type="secondary"
                            size="small"
                            fullWidth
                            centered
                          >
                            Go to Chat
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ModalWaitOrder;
