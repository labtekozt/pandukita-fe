import { useContext, useEffect, useState, useCallback } from "react";
import { SocketContext } from "../store";

const useChat = (roomId) => {
  const { socketRef, state } = useContext(SocketContext);

  const [messages, setMessages] = useState([]);
  const [lastMessageRoom, setLastMessageRoom] = useState({});
  const [userTyping, setUserTyping] = useState(null);
  const [rooms, setRooms] = useState({});

  const onTyping = useCallback(
    (data) => {
      if (data.typing) {
        socketRef.current.emit("user-typing", data.chatRoomId);
      } else {
        socketRef.current.emit("user-stop-typing", data.chatRoomId);
      }
    },
    [socketRef.current]
  );

  const sendMessage = useCallback(
    (data) => {
      if (!data.message) return;
      socketRef.current.emit("private-message", data);
    },
    [socketRef.current]
  );

  const handleReceiveMessage = useCallback(
    (message) => {
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
    },
    [socketRef.current]
  );

  const handleReceiveTyping = useCallback(
    (data) => {
      setUserTyping(data);
    },
    [socketRef.current]
  );

  const handleReceiveRooms = useCallback(
    (rooms) => {
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
    },
    [socketRef.current]
  );

  const handleReceiveGetMessage = useCallback(
    (data) => {
      setMessages(data);
    },
    [socketRef.current]
  );

  useEffect(() => {
    // for get rooms
    if (!state.isConnect) return;
    if (!socketRef.current) return;
    if (!socketRef.current.connected) return;

    if (JSON.stringify(rooms) === "{}") socketRef.current.emit("open-chat");
    if (roomId) socketRef.current.emit("get-message", roomId);

    socketRef.current.on("private-message", handleReceiveMessage);

    socketRef.current.on("get-message", handleReceiveGetMessage);
    socketRef.current.on("user-typing", handleReceiveTyping);

    socketRef.current.on("user-stop-typing", () => {
      setUserTyping(null);
    });

    socketRef.current.on("rooms", handleReceiveRooms);

    // if socket connected, emit open-chat

    return () => {
      socketRef.current.off("rooms");
      socketRef.current.off("get-message");
      socketRef.current.off("private-message");
      socketRef.current.off("user-typing");
      socketRef.current.off("user-stop-typing");
      socketRef.current.off("rooms");
    };
  }, [state.isConnect, roomId]);

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
