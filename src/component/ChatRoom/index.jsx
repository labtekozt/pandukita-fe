import { useContext, useState } from "react";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";
import "./chatroom.css";
import useChat from "../../hooks/useChat";
import { GlobalContext } from "../../store";
import ChatBar from "./ChatBar";
const ChatPage = () => {
  const { state } = useContext(GlobalContext);
  const [roomId, setRoomId] = useState(null);

  const handleRoomId = (id) => {
    setRoomId(id);
  };

  const {
    sendMessage,
    rooms,
    lastMessageRoom,
    messages,
    userTyping,
    onTyping,
  } = useChat(roomId);

  return (
    <div className="chat flex">
      <ChatBar
        rooms={rooms}
        handleRoomId={handleRoomId}
        lastMessageRoom={lastMessageRoom}
      />
      <div className="chat__main flex-3">
        {roomId ? (
          <>
            <ChatBody
              message={messages}
              loading={false}
              state={state}
              userTyping={userTyping}
            />
            <ChatFooter
              sendMessage={sendMessage}
              onTyping={onTyping}
              roomId={roomId}
            />
          </>
        ) : (
          <div className="chat__body">
            <div className="chat__body__empty">
              <h1>Choose a room to start chatting</h1>
              <img
                src="https://cdn.dribbble.com/users/1078347/screenshots/2799560/empty_state.gif"
                alt=""
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatPage;
