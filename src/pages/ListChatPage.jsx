import { useContext, useState } from "react";
import useChat from "../hooks/useChat";
import ChatList from "../component/ChatList";
import { GlobalContext } from "../store";
import ChatPage from "../component/ChatPage";
import { useLocation } from "react-router-dom";

function ListChat() {
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

  console.log(rooms);
  if (roomId) {
    return (
      <ChatPage
        planner={rooms[roomId].planner}
        name={rooms[roomId].name}
        message={messages}
        handleRoomId={handleRoomId}
        sendMessage={sendMessage}
        onTyping={onTyping}
        roomId={roomId}
        userTyping={userTyping}
        username={state.user?.username}
      />
    );
  }

  return (
    <ChatList
      rooms={rooms}
      lastMessageRoom={lastMessageRoom}
      handleRoomId={handleRoomId}
    />
  );
}

export default ListChat;
