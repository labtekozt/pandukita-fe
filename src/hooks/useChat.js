import getCredentials from "../helpers/getCredentials";
import { GlobalContext } from "../store";
import SocketIo from "../utils/socket";
import { useContext, useEffect, useState, useRef } from "react";

const useChat = (roomId) => {
  const [messages, setMessages] = useState([]);
  const { state } = useContext(GlobalContext);
  const [jwt, setJwt] = useState(null);
  const socketRef = useRef(null);
  const [lastMessageRoom, setLastMessageRoom] = useState({});
  const [userTyping, setUserTyping] = useState(null);

  const [rooms, setRooms] = useState([]);
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
  async function getJwt() {
    try {
      const token = await getCredentials();
      setJwt(token.access);
    } catch (error) {
      setJwt(null);
    }
  }
  useEffect(() => {
    getJwt();
    if (!jwt) return;
    socketRef.current = SocketIo(jwt);
    if (!socketRef.current) return;

    socketRef.current.userId = state?.user?.id;
 
    socketRef.current.connect();

    socketRef.current.on("rooms", (rooms) => {
      setRooms(rooms);
      // get last message of room and set to lastMessage
      const lastMessage = {};
      rooms.forEach((room) => {
        lastMessage[room._id] = {
          roomId: room._id,
          message: room.lastMessage,
          time: room.time,
        };
      });
      setLastMessageRoom(lastMessage);
    });

    return () => {
      socketRef.current.off("rooms");
    };
  }, [jwt]);

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

    socketRef.current.on("user-stop-typing", (data) => {
      setUserTyping(null);
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
        },
      }));
    });
    return () => {
      socketRef.current.off("get-message");
      socketRef.current.off("private-message");
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
