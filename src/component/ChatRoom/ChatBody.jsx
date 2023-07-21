import { useEffect } from "react";
import LoadingOverlayComponent from "../LoadingOverlay";

const ChatBody = ({ loading, state, message, userTyping }) => {
  // auto scroll to bottom
  useEffect(() => {
    if (message.length === 0) return;
    // get last message
    const lastMessage = message[message.length - 1];
    // if the last message is from the not current user, don't scroll
    if (lastMessage?.postedByUser?.username !== state.user?.username) return;
    const chatBody = document.querySelector(".message__container");
    chatBody.scrollTop = chatBody.scrollHeight;
  }, [message]);

  return (
    <>
      {/*This shows the loading spinner*/}
      {loading && <LoadingOverlayComponent />}
      {message?.length === 0 && !loading && (
        <div className="no__message">
          <p>No messages yet</p>
        </div>
      )}
      {message?.length > 0 && (
        <div className="message__container">
          {message?.map((msg, index) => (
            <div className="message__chats" key={index}>
              <p className="sender__name">
                `
                {msg?.postedByUser?.username === state.user?.username
                  ? "You"
                  : msg?.postedByUser?.username}
                `
              </p>
              <div
                className={`${
                  msg?.postedByUser?.username === state.user?.username
                    ? "message__sender"
                    : "message__recipient"
                }`}
              >
                <p>{msg?.message}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      {/*This is triggered when a user is typing*/}
      {userTyping && (
        <div className="message__status">
          <p>{userTyping} is typing...</p>
        </div>
      )}
    </>
  );
};

export default ChatBody;
