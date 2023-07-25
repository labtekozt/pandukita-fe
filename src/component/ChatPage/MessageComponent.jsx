export default function MessageComponent({ message, isCurrentUser }) {
  return (
    <div className="chat-message">
      <div className={`flex items-end ${isCurrentUser && "justify-end"}`}>
        <div
          className={`flex flex-col space-y-2 text-md max-w-xs mx-2 ${
            isCurrentUser ? "order-1 items-end" : "order-2 items-start"
          } `}
        >
          <div>
            <span
              className="px-4 py-2 rounded-lg inline-block rounded-br-none text-white"
              style={{ background: "#00A388" }}
            >
              {message}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
