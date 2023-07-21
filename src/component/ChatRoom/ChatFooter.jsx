import { useState } from "react";

const ChatFooter = ({ sendMessage, roomId, onTyping }) => {
  const [message, setMessage] = useState("");

  const handleOnEnter = (e) => {
    if (e.key === "Enter") {
      if (message.trim() == "") return;
      handleSendMessage(message);
      setMessage("");
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
    if (message.trim() == "") return;
    handleSendMessage(message);
    setMessage("");
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
    <div className="chat__footer">
      <input
        type="text"
        placeholder="Write message"
        className="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={handleOnEnter}
      />
      <button className="sendBtn" onClick={handleOnClick}>
        SEND
      </button>
    </div>
  );
};

export default ChatFooter;
