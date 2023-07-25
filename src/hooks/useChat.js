import { useContext, useEffect, useState } from "react";
import { SocketContext } from "../store";

const useChat = (roomId) => {
  const { socketRef, state } = useContext(SocketContext);

  const [messages, setMessages] = useState([]);
  const [lastMessageRoom, setLastMessageRoom] = useState({});
  const [userTyping, setUserTyping] = useState(null);
  const [rooms, setRooms] = useState({});

  const onTyping = (data) => {
    if (data.typing) {
      socketRef.current.emit("user-typing", data.chatRoomId);
    } else {
      socketRef.current.emit("user-stop-typing", data.chatRoomId);
    }
  };

  const sendMessage = (data) => {
    if (!data.message) return;
    socketRef.current.emit("private-message", data);
  };
  useEffect(() => {
    // for get rooms

    if (!state.isConnect) return;
    if (!socketRef.current) return;
    if (!socketRef.current.connected) return;

    socketRef.current.emit("open-chat");
    socketRef.current.on("rooms", (rooms) => {
      const lastMessage = {};
      const roomsM = {};
      rooms.forEach((room) => {
        roomsM[room._id] = room;
        lastMessage[room._id] = {
          roomId: room._id,
          message: room.lastMessage,
          time: room.time,
          profile: room.profile,
        };
      });

      setLastMessageRoom(lastMessage);
      setRooms(roomsM);
    });
    socketRef.current.on("private-message", (message) => {
      setMessages((prev) => {
        return [...prev, message];
      });
      setLastMessageRoom((prev) => ({
        ...prev,
        [message?.chatRoomId]: {
          roomId: message?.chatRoomId,
          message: message?.message,
          time: message?.createdAt,
          profile: message?.profile,
        },
      }));
    });
    // if socket connected, emit open-chat

    return () => {
      socketRef.current.off("rooms");
    };
  }, [state.isConnect]);

  useEffect(() => {
    if (!roomId) return;
    if (!socketRef.current) return;
    // emit roomId to server get-message

    socketRef.current.emit("get-message", roomId);
    socketRef.current.on("get-message", (data) => {
      setMessages(data);
    });
    socketRef.current.on("user-typing", (data) => {
      setUserTyping(data);
    });

    socketRef.current.on("user-stop-typing", () => {
      setUserTyping(null);
    });

    return () => {
      socketRef.current.off("get-message");
      socketRef.current.off("private-message");
      socketRef.current.off("user-typing");
      socketRef.current.off("user-stop-typing");
      socketRef.current.off("rooms");
    };
  }, [roomId]);

  return {
    sendMessage,
    socketRef: socketRef.current,
    rooms,
    lastMessageRoom,
    setLastMessageRoom,
    messages,
    userTyping,
    onTyping,
  };
};

export default useChat;
