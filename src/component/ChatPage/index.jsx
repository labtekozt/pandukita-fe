import { useEffect, useState } from "react";
import { TextLink, Button } from "@kiwicom/orbit-components/lib/";
import Card from "@kiwicom/orbit-components/lib/Card";
import {
  IconArrowNarrowLeft,
  IconCalendarEvent,
  IconMap,
  IconMapPin,
  IconSend,
} from "@tabler/icons-react";
import MessageComponent from "./MessageComponent";
import { humanizeDate } from "../../helpers/dateTime";

function ChatPage({
  message,
  userTyping,
  sendMessage,
  roomId,
  onTyping,
  handleRoomId,
  username,
  name,
  planner,
}) {
  const [messageType, setMessageType] = useState("");
  const [show, toggleShow] = useState(true);

  useEffect(() => {
    if (message.length === 0) return;
    // get last message

    const chatBody = document.querySelector("#messages");
    chatBody.scrollTop = chatBody.scrollHeight;
  }, [message]);

  const handleOnEnter = (e) => {
    if (e.key === "Enter") {
      if (messageType.trim() == "") return;
      handleSendMessage(messageType);
      setMessageType("");
    } else {
      const data = {
        typing: true,
        chatRoomId: roomId,
      };
      onTyping(data);
      setTimeout(timeoutFunction, 1000);
    }
  };
  const handleOnClick = () => {
    if (messageType.trim() == "") return;
    handleSendMessage(messageType);
    setMessageType("");
  };

  const handleSendMessage = (message) => {
    const data = {
      message,
      chatRoomId: roomId,
    };
    sendMessage(data);
  };

  const timeoutFunction = () => {
    const data = {
      typing: false,
      chatRoomId: roomId,
    };
    onTyping(data);
  };

  return (
    <div className="containerWisata">
      <div className="p-2 z-50 shadow-sm sticky top-0 bg-white">
        <div className="flex ">
          <div className="grow h-6">
            <div
              className="hover:pointer-cursor"
              onClick={() => handleRoomId(null)}
            >
              <IconArrowNarrowLeft color="black" />
            </div>
          </div>
          <div className="grow-0"> {name} </div>
          <div className="grow h-1"></div>
          <div
            className="mr-2 mt-[-7px] cursor-pointer font-bold"
            style={{ fontSize: "20px" }}
            onClick={() => toggleShow(!show)}
          >
            {show ? ". . ." : ". . ."}
          </div>
        </div>
        {userTyping && (
          <div
            className="font-grey"
            style={{
              display: "flex",

              justifyItems: "center",
              justifySelf: "center",
              justifyContent: "center",
            }}
          >
            {userTyping} is typing....{" "}
          </div>
        )}
      </div>
      <div className="mt-3">
        <div>
          <div className="flex-1 bg-white sm:p-3 justify-between flex flex-col h-screen">
            {show && (
              <div className="m-5 mt-1">
                <div className="flex items-center mb-1">
                  <span className="text-xl text-rent mt-[-10px]">
                    Rangkuman Perjalanan
                  </span>
                  <div className="grow"></div>
                  <div className="flex relative mr-0 mb-3 mt-1">
                    <Button
                      size="small"
                      type="primary"
                      href={`/planner/${planner._id}`}
                    >
                      <span className="pl-5">Lihat Planner </span>
                    </Button>
                    <span className="ml-2 mt-1 absolute">
                      <IconMap width={19} color="white" />
                    </span>
                  </div>
                </div>
                <div className="bg-[#eeeeee] rounded-md mb-5">
                  <Card>
                    <div
                      style={{ color: "black", fontSize: "13px" }}
                      className="p-3"
                    >
                      <div className="flex">
                        <p className="mt-0.5">
                          <IconMap size={20} />
                        </p>
                        <span className="ml-2 font-bold text-black text-xl">
                          {planner.name}
                        </span>
                      </div>
                      <div className="flex mt-3">
                        <p className="mt-0.5">
                          <IconCalendarEvent size={20} />
                        </p>
                        <span className="ml-2 text-md mt-0.5">
                          {humanizeDate(planner.startDate)}
                          {humanizeDate(planner.startDate) !==
                            humanizeDate(planner.endDate) && (
                            <> - {humanizeDate(planner.endDate)}</>
                          )}
                        </span>
                      </div>
                      <div className="flex mt-3">
                        <p className="mt-0.5">
                          <IconMapPin size={20} />
                        </p>
                        <span className="ml-2 text-md mt-0.5">
                          {planner.city}
                        </span>
                      </div>
                    </div>
                  </Card>
                </div>
                <div className="border-b border-[#D1D1D1]"></div>
              </div>
            )}
            <div
              id="messages"
              className="flex pb-[100px] flex-col space-y-4 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
            >
              {message?.length === 0 && (
                <div className="no__message">
                  <p>No messages yet</p>
                </div>
              )}
              {message?.map((item, i) => (
                <MessageComponent
                  key={i}
                  message={item?.message}
                  isCurrentUser={item?.postedByUser?.username === username}
                />
              ))}
            </div>

            <div className="fixed navbar-chat border-t-2 border-[#D1D1D1] mt-5 sm:mb-0">
              <div className="relative flex m-2">
                <input
                  type="text"
                  placeholder="Kirim Pesan"
                  value={messageType}
                  onChange={(e) => setMessageType(e.target.value)}
                  onKeyPress={handleOnEnter}
                  className="w-full input-chat focus:outline-none focus:placeholder-gray text-gray-600 placeholder-gray-600 pl-3 bg-light border-solid border-gray-200 rounded-full py-3"
                />
                <div className="absolute right-0 items-center inset-y-0 sm:flex">
                  <button
                    type="button"
                    onClick={handleOnClick}
                    className="mr-2 icon-chat inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out hover:bg-[#D1D1D1] focus:outline-none"
                  >
                    <IconSend />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
